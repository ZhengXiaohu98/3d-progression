"use client";
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const App = () => {
  const [excelData, setExcelData] = useState<any[]>([]);

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

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white">
      <div className="mb-8">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="block w-full text-sm cursor-pointer file:cursor-pointer file:mr-2" />
      </div>

      {excelData.length > 0 && (
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead>
              <tr>
                {Object.keys(excelData[0]).map((header) => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {excelData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value: any, i) => (
                    <td key={i} className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
