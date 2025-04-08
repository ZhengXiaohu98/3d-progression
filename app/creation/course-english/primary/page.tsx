"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { englishCourseStages } from '../data';
import { Button } from '@/components/ui/general/Button';
import { TextToSpeech } from '@/components/ui/utils/text-to-speech';

export default function PrimaryEnglish() {
  // 获取小学阶段数据
  const primaryData = englishCourseStages.find(stage => stage.id === '小学阶段');
  // 添加状态控制学习内容区域的显示
  const [showLearningContent, setShowLearningContent] = useState(false);
  // 添加状态控制当前显示的学习内容类型
  const [currentContentType, setCurrentContentType] = useState<string | null>(null);
  // 添加全局语音控制状态
  const [voiceSettings, setVoiceSettings] = useState({
    isMale: true,
    rate: 0.8
  });

  if (!primaryData) {
    return <div className="min-h-screen flex items-center justify-center">数据加载中...</div>;
  }

  // 处理开始学习按钮点击
  const handleStartLearning = (contentType: string) => {
    setCurrentContentType(contentType);
    setShowLearningContent(true);
  };

  // 返回学习模块区域
  const handleBackToModules = () => {
    setShowLearningContent(false);
    setCurrentContentType(null);
  };

  // 处理语音设置变化
  const handleVoiceChange = (setting: 'isMale' | 'rate', value: boolean | number) => {
    setVoiceSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <div className="min-h-screen pt-32 relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      {/* 动态背景图案 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] bg-repeat opacity-20"></div>
      </div>

      {/* 返回按钮 */}
      <div className="container mx-auto px-4 mb-8">
        <Link href="/creation/course-english">
          <Button 
            buttonStyle={7} 
            className="flex items-center bg-amber-500/80 hover:bg-amber-600 text-white backdrop-blur-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </Link>
      </div>

      {/* 全局语音控制面板 */}
      <div className="fixed bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-amber-200/50 dark:border-amber-900/50 z-50">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-amber-800 dark:text-amber-200">语音性别:</span>
            <Button
              buttonStyle={7}
              className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white"
              onClick={() => handleVoiceChange('isMale', !voiceSettings.isMale)}
            >
              {voiceSettings.isMale ? '男声' : '女声'}
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-amber-800 dark:text-amber-200">语速:</span>
            <input
              type="range"
              min="0.5"
              max="1.5"
              step="0.01"
              value={voiceSettings.rate}
              onChange={(e) => handleVoiceChange('rate', parseFloat(e.target.value))}
              className="w-24 accent-amber-500"
            />
            <span className="text-sm text-amber-800 dark:text-amber-200">{Math.round(voiceSettings.rate * 100)}%</span>
          </div>
        </div>
      </div>

      {/* 标题区域 */}
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
            {primaryData.title}
          </h1>
          <p className="text-lg text-amber-800/80 dark:text-amber-200/80 max-w-3xl mx-auto">
            {primaryData.description}
          </p>
        </motion.div>
      </div>

      {/* 学习模块区域 */}
      {!showLearningContent && (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryData.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50 dark:border-amber-900/50 h-full flex flex-col transform hover:-translate-y-1">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl text-amber-600 dark:text-amber-400">📚</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="mb-6 flex-grow space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-amber-800/80 dark:text-amber-200/80 flex items-start">
                        <span className="text-amber-500 mr-2">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    buttonStyle={7} 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                    onClick={() => handleStartLearning(section.title)}
                  >
                    开始学习
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 学习内容展示区域 */}
      {showLearningContent && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-12"
        >
          {/* 返回按钮 */}
          <div className="mb-8">
            <Button 
              buttonStyle={7} 
              className="flex items-center bg-amber-500 hover:bg-amber-600 text-white"
              onClick={handleBackToModules}
            >
              返回小学模块
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
              {currentContentType} - 学习内容
            </h2>
            <p className="text-lg text-amber-800/80 dark:text-amber-200/80 max-w-3xl mx-auto">
              通过互动练习和趣味活动，帮助小学生建立扎实的英语基础
            </p>
          </motion.div>

          {/* 这里将根据不同的内容类型显示相应的学习内容 */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
            <div className="text-center text-amber-800/80 dark:text-amber-200/80">
              学习内容正在开发中...
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
