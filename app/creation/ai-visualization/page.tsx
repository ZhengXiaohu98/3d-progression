"use client";
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Loading } from '@/components/general';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowIcon } from '@/components/icon';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';

interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string;
  borderWidth?: number;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

interface Visualization {
  type: string;
  title: string;
  description: string;
  data: {
    xAxis: string;
    yAxis: string;
    series: string[];
    processedData: ChartData;
    followUpQuestions?: string[];
    aggregation?: 'sum' | 'average' | 'count';
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    groupBy?: string[];
  };
}

interface AIResponse {
  visualizations: Visualization[];
}

const App = () => {
  const [excelData, setExcelData] = useState<any[]>([]);
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAllCharts, setShowAllCharts] = useState(false);
  const [selectedChart, setSelectedChart] = useState<Visualization | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  async function fetchAIResponse() {
    setIsLoading(true);
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    // 处理Excel数据，将其转换为更易读的格式
    const processedData = excelData.map(row => {
      return Object.entries(row)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');
    }).join('\n');

    const prompt = `Analyze the following data and suggest visualizations. Return ONLY a pure JSON object in the following format, without any markdown formatting or additional text.

IMPORTANT: Your response MUST follow this exact structure:
{
  "visualizations": [
    {
      "type": "chart_type",
      "title": "chart_title",
      "description": "brief_description",
      "data": {
        "xAxis": "column_name",
        "yAxis": "column_name",
        "series": ["column_name1", "column_name2"],
        "aggregation": "sum|average|count",
        "sortBy": "column_name",
        "sortOrder": "asc|desc",
        "groupBy": ["column_name1", "column_name2"],
        "followUpQuestions": [
          "What's the sales trend for product X?",
          "How does this compare to last month?"
        ]
      }
    }
  ]
}

Rules:
1. The "type" must be one of: bar, line, pie, scatter, area, radar, bubble, heatmap
2. The "xAxis" must be a column name from the Excel data
3. The "series" array must contain valid column names from the Excel data
4. Each visualization must have all required fields: type, title, description, and data
5. The data object must have xAxis, yAxis, and series fields
6. For time series data, use "sum" aggregation and sort by date
7. For categorical data, use "count" or "sum" aggregation as appropriate
8. Include relevant followUpQuestions for each visualization

Available columns in the data:
${Object.keys(excelData[0] || {}).join(', ')}

Data to analyze:
${processedData}

Return ONLY the JSON object, without any markdown formatting or additional text.`;

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ]
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // 解析AI返回的文本为JSON
      const responseText = data.candidates[0].content.parts[0].text;
      // 清理Markdown格式
      const cleanJson = responseText
        .replace(/```json\n?/g, '')  // 移除开头的 ```json
        .replace(/```\n?/g, '')      // 移除结尾的 ```
        .trim();                     // 移除多余空白

      try {
        const parsedResponse = JSON.parse(cleanJson);
        // 处理每个可视化建议的数据
        const processedVisualizations = parsedResponse.visualizations.map((viz: any) => {
          // 数据聚合和排序处理
          let processedData = [...excelData];

          // 处理时间序列数据
          if (viz.data.xAxis.toLowerCase().includes('date') || viz.data.xAxis.toLowerCase().includes('month') || viz.data.xAxis.toLowerCase().includes('year')) {
            // 将日期字符串转换为Date对象
            processedData = processedData.map(row => ({
              ...row,
              [viz.data.xAxis]: new Date(row[viz.data.xAxis])
            }));

            // 按时间分组
            const groupedByTime: Record<string, Record<string, any>> = {};
            processedData.forEach(row => {
              const date = row[viz.data.xAxis];
              let timeKey: string;

              // 根据标题判断分组级别
              if (viz.title.toLowerCase().includes('yearly')) {
                timeKey = date.getFullYear().toString();
              } else if (viz.title.toLowerCase().includes('monthly')) {
                timeKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
              } else {
                timeKey = date.toISOString().split('T')[0];
              }

              if (!groupedByTime[timeKey]) {
                groupedByTime[timeKey] = {
                  [viz.data.xAxis]: timeKey,
                  ...Object.fromEntries(viz.data.series.map((series: string) => [series, 0]))
                };
              }

              // 聚合所有系列的值
              viz.data.series.forEach((series: string) => {
                groupedByTime[timeKey][series] += Number(row[series]) || 0;
              });
            });

            processedData = Object.values(groupedByTime);

            // 按时间排序
            processedData.sort((a, b) => {
              const aDate = new Date(a[viz.data.xAxis]);
              const bDate = new Date(b[viz.data.xAxis]);
              return aDate.getTime() - bDate.getTime();
            });

            // 格式化时间显示
            processedData = processedData.map(row => ({
              ...row,
              [viz.data.xAxis]: viz.title.toLowerCase().includes('yearly')
                ? row[viz.data.xAxis]
                : viz.title.toLowerCase().includes('monthly')
                  ? new Date(row[viz.data.xAxis]).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
                  : new Date(row[viz.data.xAxis]).toLocaleDateString()
            }));
          } else {
            // 非时间序列数据的处理
            const groupedByXAxis: Record<string, Record<string, any>> = {};
            processedData.forEach(row => {
              const xAxisValue = row[viz.data.xAxis];
              if (!groupedByXAxis[xAxisValue]) {
                groupedByXAxis[xAxisValue] = {
                  [viz.data.xAxis]: xAxisValue,
                  ...Object.fromEntries(viz.data.series.map((series: string) => [series, 0]))
                };
              }
              viz.data.series.forEach((series: string) => {
                groupedByXAxis[xAxisValue][series] += Number(row[series]) || 0;
              });
            });
            processedData = Object.values(groupedByXAxis);
          }

          // 如果有额外的分组要求，继续分组
          if (viz.data.groupBy && viz.data.groupBy.length > 0) {
            const finalGroupedData: Record<string, Record<string, any>> = {};
            processedData.forEach(row => {
              const groupKey = viz.data.groupBy!.map((col: string) => row[col]).join('|');
              if (!finalGroupedData[groupKey]) {
                finalGroupedData[groupKey] = {
                  ...row,
                  ...Object.fromEntries(viz.data.series.map((series: string) => [series, 0]))
                };
              }
              viz.data.series.forEach((series: string) => {
                finalGroupedData[groupKey][series] += Number(row[series]) || 0;
              });
            });
            processedData = Object.values(finalGroupedData);
          }

          // 提取图表数据
          const xAxisData = processedData.map(row => row[viz.data.xAxis]);
          const yAxisData = viz.data.series.map((series: string) =>
            processedData.map(row => row[series])
          );

          // 构建图表所需的数据格式
          const chartData = {
            labels: xAxisData,
            datasets: viz.data.series.map((series: string, index: number) => ({
              label: series,
              data: yAxisData[index],
              ...(viz.type === 'bar' && {
                backgroundColor: index === 0
                  ? 'rgba(79, 70, 229, 0.7)'  // 深靛蓝
                  : index === 1
                    ? 'rgba(255, 127, 80, 0.7)'  // 珊瑚红
                    : index === 2
                      ? 'rgba(152, 251, 152, 0.7)'  // 薄荷绿
                      : 'rgba(255, 191, 0, 0.7)',  // 琥珀金
                borderColor: index === 0
                  ? 'rgba(79, 70, 229, 0.9)'  // 深靛蓝
                  : index === 1
                    ? 'rgba(255, 127, 80, 0.9)'  // 珊瑚红
                    : index === 2
                      ? 'rgba(152, 251, 152, 0.9)'  // 薄荷绿
                      : 'rgba(255, 191, 0, 0.9)',  // 琥珀金
                borderWidth: 1
              }),
              ...(viz.type === 'line' && {
                borderColor: index === 0
                  ? 'rgb(79, 70, 229)'  // 深靛蓝
                  : index === 1
                    ? 'rgb(255, 127, 80)'  // 珊瑚红
                    : index === 2
                      ? 'rgb(152, 251, 152)'  // 薄荷绿
                      : 'rgb(255, 191, 0)',  // 琥珀金
                tension: 0.4,
                fill: false
              }),
              ...(viz.type === 'pie' && {
                backgroundColor: [
                  'rgba(79, 70, 229, 0.8)',   // 深靛蓝
                  'rgba(255, 127, 80, 0.8)',  // 珊瑚红
                  'rgba(152, 251, 152, 0.8)', // 薄荷绿
                  'rgba(255, 191, 0, 0.8)',   // 琥珀金
                  'rgba(147, 112, 219, 0.8)'  // 紫色
                ]
              })
            }))
          };

          return {
            ...viz,
            data: {
              ...viz.data,
              processedData: chartData
            }
          };
        });

        console.log(processedVisualizations);

        setAiResponse({
          visualizations: processedVisualizations
        });
      } catch (parseError) {
        console.error("JSON Parse error:", parseError);
        console.log("Cleaned JSON text:", cleanJson);
      }
    } catch (error) {
      console.log("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const renderChart = (viz: Visualization) => {
    const { type, data } = viz;
    const chartData = data.processedData;

    switch (type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData.labels.map((label: string, index: number) => ({
              name: label,
              ...chartData.datasets.reduce((acc: Record<string, number>, dataset: ChartDataset) => ({
                ...acc,
                [dataset.label]: dataset.data[index]
              }), {})
            }))}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(17, 24, 39, 0.9)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#F3F4F6'
                }}
              />
              <Legend />
              {chartData.datasets.map((dataset: ChartDataset, index: number) => (
                <Bar
                  key={dataset.label}
                  dataKey={dataset.label}
                  fill={index === 0
                    ? 'rgba(79, 70, 229, 0.7)'  // 深靛蓝
                    : index === 1
                      ? 'rgba(255, 127, 80, 0.7)'  // 珊瑚红
                      : index === 2
                        ? 'rgba(152, 251, 152, 0.7)'  // 薄荷绿
                        : 'rgba(255, 191, 0, 0.7)'  // 琥珀金
                  }
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData.labels.map((label: string, index: number) => ({
              name: label,
              ...chartData.datasets.reduce((acc: Record<string, number>, dataset: ChartDataset) => ({
                ...acc,
                [dataset.label]: dataset.data[index]
              }), {})
            }))}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(17, 24, 39, 0.9)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#F3F4F6'
                }}
              />
              <Legend />
              {chartData.datasets.map((dataset: ChartDataset, index: number) => (
                <Line
                  key={dataset.label}
                  type="monotone"
                  dataKey={dataset.label}
                  stroke={index === 0
                    ? 'rgb(79, 70, 229)'  // 深靛蓝
                    : index === 1
                      ? 'rgb(255, 127, 80)'  // 珊瑚红
                      : index === 2
                        ? 'rgb(152, 251, 152)'  // 薄荷绿
                        : 'rgb(255, 191, 0)'  // 琥珀金
                  }
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartData.labels.map((label, index) => ({
                  name: label,
                  value: chartData.datasets[0]?.data[index]
                }))}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.labels.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={chartData.datasets[0]?.backgroundColor?.[index] || '#8884d8'}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  const handleStartVisualization = () => {
    if (excelData.length === 0) return;
    setSelectedChart(null);
    setShowAllCharts(false);
    fetchAIResponse();
  };

  return (
    <div className="container flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 min-h-screen py-20 lg:py-40">
      {/* 左侧边栏 */}
      <div className="w-full lg:w-[350px] lg:shrink-0">
        <div className="lg:sticky lg:top-40 space-y-6">
          {/* 文件上传区域 */}
          <div className="bg-white dark:bg-accent-300 p-6 rounded-lg shadow-lg">
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
              className="text-sm cursor-pointer file:cursor-pointer file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border file:dark:border-accent-300 file:border-accent-ccc w-full lg:w-fit"
            />

            {excelData.length > 0 && (
              <button
                className="w-full mt-6 px-4 py-3 rounded-lg bg-accent-primary text-accent-white cursor-pointer bg-orange-base dark:bg-purple-base disabled:opacity-50 disabled:cursor-not-allowed text-base font-medium"
                onClick={handleStartVisualization}
                disabled={isLoading || excelData.length === 0}
              >
                {isLoading ? <Loading className='fill-white h-6 w-6' /> : 'Start Visualization'}
              </button>
            )}
          </div>

          <p className='text-center lg:text-left underline underline-offset-4 font-bold text-pink-base/75 text-sm lg:text-base'>
            {aiResponse ? "Not satisfied with the results? Click the button above to try again." : "Upload your excel file to get started!"}
          </p>

          {/* 推荐可视化列表 */}
          {aiResponse && (
            <div className="bg-white dark:bg-accent-300 p-6 rounded-lg shadow-lg">
              <h2 className="text-lg lg:text-xl font-bold mb-4">Recommended Visualizations:</h2>
              <div className="space-y-3">
                {aiResponse.visualizations.map((viz, index) => (
                  <motion.div
                    key={index}
                    className="p-3 lg:p-4 border dark:border-accent-500 border-accent-ccc rounded-lg cursor-pointer hover:bg-accent-white dark:hover:bg-accent-300 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                    onClick={() => { setShowAllCharts(false); setSelectedChart(viz) }}
                  >
                    <h3 className="font-semibold text-sm lg:text-base">{viz.title}</h3>
                    <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mt-1">{viz.description}</p>
                  </motion.div>
                ))}
                <div
                  className="mx-auto text-sm lg:text-base py-2 px-6 rounded-md w-fit dark:bg-accent-white bg-none dark:text-accent-dark text-accent-300 font-bold cursor-pointer dark:border-none border border-accent-ccc hover:bg-accent-ccc dark:hover:bg-accent-500 transition-colors"
                  onClick={() => setShowAllCharts(true)}
                >
                  View all
                </div>
              </div>
            </div>
          )}

          {/* 示例数据 */}
          <div className="bg-white dark:bg-accent-300 p-6 rounded-lg shadow-lg">
            <p className='text-accent-300 dark:text-accent-white text-sm lg:text-base'>No files? Try our example data:</p>
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={async () => {
                  try {
                    const response = await fetch('/files/excel/weather_data.xlsx');
                    const blob = await response.blob();
                    const file = new File([blob], 'weather_data.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
                    if (input) {
                      input.files = dataTransfer.files;
                      handleFileUpload({ target: { files: dataTransfer.files } } as React.ChangeEvent<HTMLInputElement>);
                    }
                  } catch (error) {
                    console.error('Error loading example file:', error);
                  }
                }}
                className="w-full lg:w-fit flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent-white dark:bg-accent-300 text-accent-300 dark:text-accent-ccc hover:bg-accent-ccc dark:hover:bg-accent-500 transition-colors cursor-pointer text-sm lg:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Weather Data
              </button>
              <button
                onClick={async () => {
                  try {
                    const response = await fetch('/files/excel/ethnic_distribution.xlsx');
                    const blob = await response.blob();
                    const file = new File([blob], 'ethnic_distribution.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                    const dataTransfer = new DataTransfer();
                    dataTransfer.items.add(file);
                    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
                    if (input) {
                      input.files = dataTransfer.files;
                      handleFileUpload({ target: { files: dataTransfer.files } } as React.ChangeEvent<HTMLInputElement>);
                    }
                  } catch (error) {
                    console.error('Error loading example file:', error);
                  }
                }}
                className="w-full lg:w-fit flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent-white dark:bg-accent-300 text-accent-300 dark:text-accent-ccc hover:bg-accent-ccc dark:hover:bg-accent-500 transition-colors cursor-pointer text-sm lg:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Ethnic Distribution Data
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 右侧内容区 */}
      <div className="w-full lg:max-w-4xl pb-16">
        {showAllCharts ? (
          <div>
            <button
              onClick={() => {
                setShowAllCharts(false);
                setSelectedChart(null);
              }}
              className="mb-6 px-4 py-2 rounded-lg dark:text-accent-ccc text-accent-300 cursor-pointer rotate-180"
            >
              <ArrowIcon className='w-8 h-8 lg:w-10 lg:h-10 stroke-1' />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {aiResponse?.visualizations.map((viz, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-accent-300 p-4 lg:p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-lg lg:text-xl font-bold mb-2">{viz.title}</h3>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-4">{viz.description}</p>
                  <div className="h-[300px] lg:h-[400px]">
                    {renderChart(viz)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : selectedChart ? (
          <div>
            <button
              onClick={() => setSelectedChart(null)}
              className="mb-6 px-4 py-2 rounded-lg dark:text-accent-ccc text-accent-300 cursor-pointer rotate-180"
            >
              <ArrowIcon className='w-8 h-8 lg:w-10 lg:h-10 stroke-1' />
            </button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-accent-300 p-4 lg:p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg lg:text-xl font-bold mb-2">{selectedChart.title}</h3>
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-4">{selectedChart.description}</p>
              <div className="h-[300px] lg:h-[400px]">
                {renderChart(selectedChart)}
              </div>
            </motion.div>
          </div>
        ) : (
          excelData.length > 0 && (
            <div className="overflow-x-auto bg-white dark:bg-accent-300 p-4 lg:p-6 rounded-lg shadow-lg">
              <h2 className="text-lg lg:text-xl font-bold mb-4">Raw Data</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      {Object.keys(excelData[0]).map((header) => (
                        <th key={header} className="px-4 lg:px-6 py-3 text-left text-xs lg:text-sm font-medium uppercase tracking-wider">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-accent-ccc dark:divide-accent-900">
                    {excelData.map((row, index) => (
                      <tr key={index}>
                        {Object.values(row).map((value: any, i) => (
                          <td key={i} className="px-4 lg:px-6 py-3 lg:py-4 whitespace-nowrap text-xs lg:text-sm">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        )}
        {
          !excelData.length &&
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6'>
            <h2 className='col-span-1 md:col-span-2 text-center text-lg lg:text-xl font-bold mb-4'>
              Rich data visualization examples
            </h2>
            <Image src="/images/project/ai-visualization/chart1.png" width={713} height={500} alt="ai chart" className='w-full rounded-lg shadow-lg hover:scale-105 transition-all duration-300' />
            <Image src="/images/project/ai-visualization/chart2.png" width={713} height={500} alt="ai chart" className='w-full rounded-lg shadow-lg hover:scale-105 transition-all duration-300' />
            <Image src="/images/project/ai-visualization/chart3.png" width={713} height={500} alt="ai chart" className='w-full rounded-lg shadow-lg hover:scale-105 transition-all duration-300' />
            <Image src="/images/project/ai-visualization/chart4.png" width={713} height={500} alt="ai chart" className='w-full rounded-lg shadow-lg hover:scale-105 transition-all duration-300' />
            <ul className='col-span-1 md:col-span-2 grid grid-cols-1 gap-4 lg:gap-6 mt-6 lg:mt-8'>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-accent-300 shadow-sm"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-orange-base dark:bg-purple-base flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-sm lg:text-base text-accent-300 dark:text-accent-ccc font-medium">Support for multiple chart types</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-accent-300 shadow-sm"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-orange-base dark:bg-purple-base flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm lg:text-base text-accent-300 dark:text-accent-ccc font-medium">Fast and accurate data visualization</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-accent-300 shadow-sm"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-orange-base dark:bg-purple-base flex items-center justify-center">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <span className="text-sm lg:text-base text-accent-300 dark:text-accent-ccc font-medium">Support excel file upload and processing</span>
              </motion.li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default App;
