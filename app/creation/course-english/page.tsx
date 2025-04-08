"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/general/Button';
import { backgroundWords, englishCourseStages } from './data';
import Link from 'next/link';


export default function EnglishCourse() {
  const [expandedStage, setExpandedStage] = useState<string | null>('启蒙阶段');

  const toggleExpand = (stageId: string) => {
    if (expandedStage === stageId) {
      setExpandedStage(null);
    } else {
      setExpandedStage(stageId);
    }
  };

  return (
    <div className="min-h-screen pt-32 relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">

      {/* 动态背景图案 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] bg-repeat opacity-20"></div>
      </div>

      {/* 网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>

      {/* 背景单词 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {backgroundWords.map((word, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl md:text-3xl font-bold opacity-10 select-none"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 180 - 90,
              scale: 0.5 + Math.random() * 1.5,
              opacity: 0.05 + Math.random() * 0.1
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              rotate: [
                Math.random() * 180 - 90,
                Math.random() * 180 - 90,
                Math.random() * 180 - 90
              ],
              opacity: [
                0.05 + Math.random() * 0.1,
                0.1 + Math.random() * 0.15,
                0.05 + Math.random() * 0.1
              ]
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`,
              fontSize: `${1 + Math.random() * 2}rem`
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* 标题区域 */}
      <div className="relative pb-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-5xl md:leading-[60px] font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
              English GO
            </h1>
            <p className="text-lg text-amber-800/80 dark:text-amber-200/80 text-center max-w-2xl mx-auto">
              为不同年龄段学习者设计的全面英语学习课程体系
            </p>
          </motion.div>
        </div>
      </div>

      {/* 为什么选择我们 */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
        >
          <h2 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
            为什么选择我们的英语学习平台
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 特点1：完全免费 */}
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/70 dark:bg-gray-700/70 shadow-md"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-20 h-20 mb-4 relative">
                <motion.div
                  className="w-full h-full relative"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-amber-500"
                  >
                    <circle 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeOpacity="0.3" 
                    />
                    <motion.circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0, rotate: 0 }}
                      animate={{ pathLength: 1, rotate: 360 }}
                      transition={{ 
                        pathLength: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                      }}
                    />
                    <motion.path 
                      d="M8 12L11 15L16 9" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.5,
                        ease: "easeOut"
                      }}
                    />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">完全免费</h3>
              <p className="text-gray-600 dark:text-gray-400">
                所有课程内容均免费提供，无隐藏费用，让每个人都能平等获取优质英语教育资源
              </p>
            </motion.div>
            
            {/* 特点2：一站式学习 */}
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/70 dark:bg-gray-700/70 shadow-md"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-20 h-20 mb-4 relative">
                <motion.svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-amber-500"
                >
                  <motion.rect 
                    x="3" y="3" width="18" height="18" rx="2" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    initial={{ strokeDasharray: 100, strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.path 
                    d="M9 12H15M12 9V15" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1.2 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  />
                </motion.svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">一站式学习</h3>
              <p className="text-gray-600 dark:text-gray-400">
                从启蒙到高级，提供完整的英语学习路径，涵盖听说读写全方位能力培养
              </p>
            </motion.div>
            
            {/* 特点3：AI增强 */}
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/70 dark:bg-gray-700/70 shadow-md"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-20 h-20 mb-4 relative">
                <motion.svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-amber-500"
                >
                  <motion.path 
                    d="M4 6H20M4 12H20M4 18H12" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round"
                    initial={{ x: -5 }}
                    animate={{ x: 5 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.circle 
                    cx="17" 
                    cy="18" 
                    r="3" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  />
                </motion.svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">AI增强</h3>
              <p className="text-gray-600 dark:text-gray-400">
                采用最新AI模型辅助学习，智能选择题库，提供准确的问题分析
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              我们致力于打造最友好、最高效的英语学习环境，帮助每位学习者轻松掌握英语，开启全球视野。
              无论您是初学者还是进阶学习者，这里都有适合您的内容！
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 课程卡片区域 */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-12">
          {englishCourseStages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative"
            >
              <div className={`relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden`}>
                {/* 卡片头部 */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                      {stage.title}
                    </h3>
                    <p className="text-amber-800/80 dark:text-amber-200/80">
                      {stage.description}
                    </p>
                  </div>
                  <Button
                    buttonStyle={7}
                    className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white"
                    onClick={() => toggleExpand(stage.id)}
                  >
                    {expandedStage === stage.id ? '收起详情' : '查看详情'}
                  </Button>
                </div>

                {/* 展开的详细内容 */}
                {expandedStage === stage.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {stage.sections.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="bg-white/30 dark:bg-gray-700/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <h4 className="text-lg font-semibold mb-3 text-amber-800 dark:text-amber-200">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.content.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="text-amber-800/80 dark:text-amber-200/80 flex items-start"
                              >
                                <span className="text-amber-500 mr-2">✦</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* 开始学习按钮 - 只在展开时显示 */}
                    <Link href={stage.link}>
                      <div className="mt-8 flex justify-center">
                        <div className="relative group/btn">
                          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 rounded-lg blur opacity-50 group-hover/btn:opacity-70 transition duration-1000 group-hover/btn:duration-200 animate-tilt"></div>
                          <Button
                            buttonStyle={7}
                            className="relative px-7 py-4 bg-white dark:bg-gray-900 rounded-lg leading-none flex items-center divide-x divide-gray-600 dark:divide-gray-700"
                          >
                            <span className="flex items-center space-x-2">
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 font-bold">开始学习</span>
                            </span>
                          </Button>
                        </div>
                      </div>
                    </Link>

                  </motion.div>
                )}

                {/* 背景效果 */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stage.color} opacity-5 rounded-2xl`}></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 dark:bg-amber-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
