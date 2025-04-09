"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { englishCourseStages } from '../data';
import { Button } from '@/components/ui/general/Button';
import { TextToSpeech } from '@/components/ui/utils/text-to-speech';
import AnimalLearningModal from './components/AnimalLearningModal';
import ColorNumberLearningModal from './components/ColorNumberLearningModal';

export default function KindergartenEnglish() {
  // 获取启蒙阶段数据
  const kindergartenData = englishCourseStages.find(stage => stage.id === '启蒙阶段');
  // 添加状态控制学习内容区域的显示
  const [showLearningContent, setShowLearningContent] = useState(false);
  // 添加状态控制当前显示的学习内容类型
  const [currentContentType, setCurrentContentType] = useState<string | null>(null);
  // 添加全局语音控制状态
  const [voiceSettings, setVoiceSettings] = useState({
    isMale: true,
    rate: 0.8
  });
  // 添加动物学习弹窗状态
  const [showAnimalModal, setShowAnimalModal] = useState(false);
  // 添加颜色和数字学习弹窗状态
  const [showColorNumberModal, setShowColorNumberModal] = useState(false);

  if (!kindergartenData) {
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

  // 处理打开动物学习弹窗
  const handleOpenAnimalModal = () => {
    setShowAnimalModal(true);
  };

  // 处理打开颜色和数字学习弹窗
  const handleOpenColorNumberModal = () => {
    setShowColorNumberModal(true);
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
          <h1 className="text-4xl md:text-5xl md:leading-[60px] font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
            {kindergartenData.title}
          </h1>
          <p className="text-lg text-amber-800/80 dark:text-amber-200/80 max-w-3xl mx-auto">
            {kindergartenData.description}
          </p>
        </motion.div>
      </div>

      {/* 学习模块区域 */}
      {!showLearningContent && (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {kindergartenData.sections.map((section, index) => (
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
                        <span>{typeof item === 'string' ? item : item.name}</span>
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
              返回启蒙模块
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
              通过互动游戏、歌曲和图片，让孩子轻松愉快地开始英语学习之旅
            </p>
          </motion.div>

          {/* 根据当前内容类型显示不同的学习内容 */}
          {currentContentType === '听力与口语' && (
            <>
              {/* 字母学习区域 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50 mb-12">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                  英文字母学习
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map((letter, index) => (
                    <TextToSpeech 
                      key={index} 
                      text={letter} 
                      rate={voiceSettings.rate}
                      voice={voiceSettings.isMale ? 'male' : 'female'}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md flex flex-col items-center cursor-pointer"
                      >
                        <span className="text-4xl font-bold text-amber-500">{letter}</span>
                        <span className="text-xl font-medium text-amber-800/80 dark:text-amber-200/80 mt-2">{letter.toLowerCase()}</span>
                        <span className="text-sm text-amber-600/80 dark:text-amber-400/80 mt-1">
                          {letter === 'A' ? '[eɪ]' : 
                           letter === 'B' ? '[biː]' : 
                           letter === 'C' ? '[siː]' : '🔊'}
                        </span>
                      </motion.div>
                    </TextToSpeech>
                  ))}
                </div>
              </div>

              {/* 常见词汇学习区域 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* 常见动物词汇 */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                    常见动物
                  </h3>
                  
                  {/* 嵌入YouTube视频 */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="315" 
                      src="https://www.youtube.com/embed/hewioIU4a64" 
                      title="常见动物学习视频" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="rounded-xl"
                    ></iframe>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {['Cat', 'Dog', 'Elephant', 'Lion', 'Monkey', 'Rabbit'].map((animal, index) => (
                      <TextToSpeech 
                        key={index} 
                        text={animal} 
                        rate={voiceSettings.rate}
                        voice={voiceSettings.isMale ? 'male' : 'female'}
                      >
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md flex items-center cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mr-4">
                            <span className="text-xl">
                              {animal === 'Cat' ? '🐱' : 
                               animal === 'Dog' ? '🐕' : 
                               animal === 'Elephant' ? '🐘' : 
                               animal === 'Lion' ? '🦁' : 
                               animal === 'Monkey' ? '🐒' : 
                               animal === 'Rabbit' ? '🐰' : '🔊'}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-amber-800 dark:text-amber-200">{animal}</p>
                            <p className="text-sm text-amber-500 dark:text-amber-400">🔊</p>
                          </div>
                        </motion.div>
                      </TextToSpeech>
                    ))}
                  </div>
                  
                  {/* 学习更多按钮 */}
                  <div className="text-center mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleOpenAnimalModal}
                      className="relative group px-8 py-3 rounded-xl overflow-hidden"
                    >
                      {/* 渐变背景 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* 闪光效果 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      {/* 按钮内容 */}
                      <div className="relative flex items-center justify-center gap-2 cursor-pointer">
                        <span className="text-white font-medium">学习更多动物</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-white"
                        >
                          →
                        </motion.span>
                      </div>
                    </motion.button>
                  </div>
                </div>

                {/* 颜色和数字 */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                    颜色和数字
                  </h3>
                  
                  {/* 嵌入YouTube视频 */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="315" 
                      src="https://www.youtube.com/embed/_MCvo1crWJ0" 
                      title="颜色和数字学习视频" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="rounded-xl"
                    ></iframe>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Red', color: 'bg-red-500', emoji: '🔴' },
                      { name: 'Blue', color: 'bg-blue-500', emoji: '🔵' },
                      { name: 'Green', color: 'bg-green-500', emoji: '🟢' },
                      { name: 'Yellow', color: 'bg-yellow-500', emoji: '🟡' },
                      { name: 'Purple', color: 'bg-purple-500', emoji: '🟣' },
                      { name: 'Orange', color: 'bg-orange-500', emoji: '🟠' }
                    ].map((color, index) => (
                      <TextToSpeech 
                        key={index} 
                        text={color.name} 
                        rate={voiceSettings.rate}
                        voice={voiceSettings.isMale ? 'male' : 'female'}
                      >
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md flex items-center cursor-pointer"
                        >
                          <div className={`w-12 h-12 ${color.color} rounded-full flex items-center justify-center mr-4`}>
                            <span className="text-xl">{color.emoji}</span>
                          </div>
                          <div>
                            <p className="font-medium text-amber-800 dark:text-amber-200">{color.name}</p>
                            <p className="text-sm text-amber-500 dark:text-amber-400">🔊</p>
                          </div>
                        </motion.div>
                      </TextToSpeech>
                    ))}
                  </div>
                  
                  {/* 学习更多按钮 */}
                  <div className="text-center mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleOpenColorNumberModal}
                      className="relative group px-8 py-3 rounded-xl overflow-hidden"
                    >
                      {/* 渐变背景 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* 闪光效果 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      
                      {/* 按钮内容 */}
                      <div className="relative flex items-center justify-center gap-2 cursor-pointer">
                        <span className="text-white font-medium">学习更多颜色和数字</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-white"
                        >
                          →
                        </motion.span>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* 童谣儿歌区域 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                  童谣儿歌
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9 h-80">
                      <iframe 
                        src="https://www.youtube.com/embed/ccEpTTZW34g" 
                        title="ABC Song" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-amber-800 dark:text-amber-200">ABC Song</h4>
                      <p className="text-amber-600 dark:text-amber-400 mb-4">学习英文字母的经典儿歌，帮助记忆26个字母</p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md">
                    <div className="aspect-w-16 aspect-h-9 h-80">
                      <iframe 
                        src="https://www.youtube.com/embed/yCjJyiqpAuU" 
                        title="Twinkle Twinkle Little Star" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-amber-800 dark:text-amber-200">Twinkle Twinkle Little Star</h4>
                      <p className="text-amber-600 dark:text-amber-400 mb-4">经典英文童谣，简单易学且朗朗上口</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* 词汇学习内容 */}
          {currentContentType === '词汇' && (
            <>
              {/* 主题词汇学习区域 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                    水果词汇
                  </h3>
                  
                  {/* 插入水果词汇视频 */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="300" 
                      src="https://www.youtube.com/embed/mbPNkDEN3Ps" 
                      title="水果词汇学习视频" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="rounded-xl"
                    ></iframe>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Apple', icon: '🍎' },
                      { name: 'Banana', icon: '🍌' },
                      { name: 'Orange', icon: '🍊' },
                      { name: 'Grape', icon: '🍇' },
                      { name: 'Strawberry', icon: '🍓' },
                      { name: 'Watermelon', icon: '🍉' }
                    ].map((fruit, index) => (
                      <TextToSpeech 
                        key={index} 
                        text={fruit.name} 
                        rate={voiceSettings.rate}
                        voice={voiceSettings.isMale ? 'male' : 'female'}
                      >
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md flex items-center cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mr-4">
                            <span className="text-xl">{fruit.icon}</span>
                          </div>
                          <div>
                            <p className="font-medium text-amber-800 dark:text-amber-200">{fruit.name}</p>
                            <p className="text-sm text-amber-500 dark:text-amber-400">🔊</p>
                          </div>
                        </motion.div>
                      </TextToSpeech>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                    家庭成员
                  </h3>
                  
                  {/* 插入家庭成员视频 */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="300" 
                      src="https://www.youtube.com/embed/FHaObkHEkHQ" 
                      title="家庭成员学习视频" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="rounded-xl"
                    ></iframe>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Mother', icon: '👩' },
                      { name: 'Father', icon: '👨' },
                      { name: 'Sister', icon: '👧' },
                      { name: 'Brother', icon: '👦' },
                      { name: 'Grandma', icon: '👵' },
                      { name: 'Grandpa', icon: '👴' }
                    ].map((family, index) => (
                      <TextToSpeech 
                        key={index} 
                        text={family.name} 
                        rate={voiceSettings.rate}
                        voice={voiceSettings.isMale ? 'male' : 'female'}
                      >
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md flex items-center cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mr-4">
                            <span className="text-xl">{family.icon}</span>
                          </div>
                          <div>
                            <p className="font-medium text-amber-800 dark:text-amber-200">{family.name}</p>
                            <p className="text-sm text-amber-500 dark:text-amber-400">🔊</p>
                          </div>
                        </motion.div>
                      </TextToSpeech>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                    身体部位
                  </h3>
                  
                  {/* 插入身体部位视频 */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="300" 
                      src="https://www.youtube.com/embed/SUt8q0EKbms" 
                      title="身体部位学习视频" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="rounded-xl"
                    ></iframe>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Head', icon: '👤' },
                      { name: 'Eyes', icon: '👁️' },
                      { name: 'Nose', icon: '👃' },
                      { name: 'Mouth', icon: '👄' },
                      { name: 'Hands', icon: '👐' },
                      { name: 'Feet', icon: '🦶' }
                    ].map((body, index) => (
                      <TextToSpeech 
                        key={index} 
                        text={body.name} 
                        rate={voiceSettings.rate}
                        voice={voiceSettings.isMale ? 'male' : 'female'}
                      >
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md flex items-center cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-pink-100 dark:bg-pink-400 rounded-full flex items-center justify-center mr-4">
                            <span className="text-xl">{body.icon}</span>
                          </div>
                          <div>
                            <p className="font-medium text-amber-800 dark:text-amber-200">{body.name}</p>
                            <p className="text-sm text-amber-500 dark:text-amber-400">🔊</p>
                          </div>
                        </motion.div>
                      </TextToSpeech>
                    ))}
                  </div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                  <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                    玩具词汇
                  </h3>
                  
                  {/* 插入玩具词汇视频 */}
                  <div className="mb-6 rounded-xl overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="300" 
                      src="https://www.youtube.com/embed/8-SWzpdcl6E" 
                      title="玩具词汇学习视频" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="rounded-xl"
                    ></iframe>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Ball', icon: '⚽' },
                      { name: 'Doll', icon: '🧸' },
                      { name: 'Car', icon: '🚗' },
                      { name: 'Robot', icon: '🤖' },
                      { name: 'Blocks', icon: '🧱' },
                      { name: 'Teddy Bear', icon: '🧸' }
                    ].map((toy, index) => (
                      <TextToSpeech 
                        key={index} 
                        text={toy.name} 
                        rate={voiceSettings.rate}
                        voice={voiceSettings.isMale ? 'male' : 'female'}
                      >
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md flex items-center cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mr-4">
                            <span className="text-xl">{toy.icon}</span>
                          </div>
                          <div>
                            <p className="font-medium text-amber-800 dark:text-amber-200">{toy.name}</p>
                            <p className="text-sm text-amber-500 dark:text-amber-400">🔊</p>
                          </div>
                        </motion.div>
                      </TextToSpeech>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* 阅读与写作学习内容 */}
          {currentContentType === '阅读与写作' && (
            <>
              {/* 识字卡片区域 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50 mb-12">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                  识字卡片
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { word: 'Cat', image: '🐱' },
                    { word: 'Dog', image: '🐕' },
                    { word: 'Bird', image: '🐦' },
                    { word: 'Fish', image: '🐠' },
                    { word: 'Tree', image: '🌳' },
                    { word: 'Flower', image: '🌸' },
                    { word: 'Sun', image: '☀️' },
                    { word: 'Moon', image: '🌙' },
                    { word: 'Apple', image: '🍎' },
                    { word: 'Banana', image: '🍌' },
                    { word: 'House', image: '🏠' },
                    { word: 'Car', image: '🚗' },
                    { word: 'Book', image: '📚' },
                    { word: 'Pen', image: '🖊️' },
                    { word: 'Star', image: '⭐' },
                    { word: 'Heart', image: '❤️' },
                    { word: 'Elephant', image: '🐘' },
                    { word: 'Lion', image: '🦁' },
                    { word: 'Monkey', image: '🐒' },
                    { word: 'Rabbit', image: '🐇' },
                    { word: 'Frog', image: '🐸' },
                    { word: 'Duck', image: '🦆' },
                    { word: 'Cow', image: '🐄' },
                    { word: 'Pig', image: '🐖' },
                    { word: 'Bear', image: '🐻' },
                    { word: 'Sheep', image: '🐑' },
                    { word: 'Ball', image: '⚽' },
                    { word: 'Boat', image: '⛵' },
                    { word: 'Rain', image: '🌧️' },
                    { word: 'Snow', image: '❄️' },
                    { word: 'Water', image: '💧' },
                    { word: 'Fire', image: '🔥' }
                  ].map((card, index) => (
                    <TextToSpeech 
                      key={index} 
                      text={card.word} 
                      rate={voiceSettings.rate}
                      voice={voiceSettings.isMale ? 'male' : 'female'}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md flex flex-col items-center cursor-pointer"
                      >
                        <div className="text-5xl mb-4">{card.image}</div>
                        <p className="text-xl font-bold text-amber-800 dark:text-amber-200">{card.word}</p>
                        <p className="text-sm text-amber-500 dark:text-amber-400 mt-2">🔊</p>
                      </motion.div>
                    </TextToSpeech>
                  ))}
                </div>
              </div>

              {/* 简单句型学习 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                  简单句型学习
                </h3>
                <div className="space-y-6">
                  {[
                    { sentence: 'This is a cat.', image: '🐱' },
                    { sentence: 'I like apples.', image: '🍎' },
                    { sentence: 'The sun is bright.', image: '☀️' },
                    { sentence: 'My name is Tom.', image: '👦' },
                    { sentence: 'I am happy.', image: '😊' },
                    { sentence: 'I can jump.', image: '🏃' },
                    { sentence: 'She has a dog.', image: '🐶' },
                    { sentence: 'The bird can fly.', image: '🐦' },
                    { sentence: 'I see a monkey.', image: '🐒' },
                    { sentence: 'The ball is red.', image: '⚽' },
                    { sentence: 'I love my family.', image: '👨‍👩‍👧‍👦' },
                    { sentence: 'Look at the stars.', image: '⭐' },
                    { sentence: 'The fish swims.', image: '🐠' },
                    { sentence: 'I eat bananas.', image: '🍌' },
                    { sentence: 'The car is blue.', image: '🚗' },
                    { sentence: 'I have a book.', image: '📚' },
                    { sentence: 'The elephant is big.', image: '🐘' },
                    { sentence: 'I drink water.', image: '💧' },
                    { sentence: 'The moon is bright.', image: '🌙' },
                    { sentence: 'I play with toys.', image: '🧸' }
                  ].map((item, index) => (
                    <TextToSpeech 
                      key={index} 
                      text={item.sentence} 
                      rate={voiceSettings.rate}
                      voice={voiceSettings.isMale ? 'male' : 'female'}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md flex items-center cursor-pointer"
                      >
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mr-6">
                          <span className="text-3xl">{item.image}</span>
                        </div>
                        <div className="flex-grow">
                          <p className="text-xl font-medium text-amber-800 dark:text-amber-200">{item.sentence}</p>
                          <p className="text-sm text-amber-500 dark:text-amber-400 mt-1">🔊</p>
                        </div>
                      </motion.div>
                    </TextToSpeech>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* 语音学习内容 */}
          {currentContentType === '语音' && (
            <>
              {/* Phonics基础学习 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50 mb-12">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                  Phonics基础学习
                </h3>
                
                {/* 嵌入YouTube视频 */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="500" 
                    src="https://www.youtube.com/embed/EtYCEyDvqCI" 
                    title="Phonics基础学习视频" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    { letter: 'A', sound: '[æ]', example: 'apple' },
                    { letter: 'B', sound: '[b]', example: 'ball' },
                    { letter: 'C', sound: '[k]', example: 'cat' },
                    { letter: 'D', sound: '[d]', example: 'dog' },
                    { letter: 'E', sound: '[e]', example: 'egg' },
                    { letter: 'F', sound: '[f]', example: 'fish' },
                    { letter: 'G', sound: '[g]', example: 'girl' },
                    { letter: 'H', sound: '[h]', example: 'hat' }
                  ].map((phonic, index) => (
                    <TextToSpeech 
                      key={index} 
                      text={`${phonic.letter} ${phonic.sound} ${phonic.example}`} 
                      rate={voiceSettings.rate}
                      voice={voiceSettings.isMale ? 'male' : 'female'}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md flex flex-col items-center cursor-pointer"
                      >
                        <span className="text-4xl font-bold text-amber-500">{phonic.letter}</span>
                        <span className="text-xl font-medium text-amber-800/80 dark:text-amber-200/80 mt-2">{phonic.sound}</span>
                        <span className="text-lg text-amber-600/80 dark:text-amber-400/80 mt-1">{phonic.example}</span>
                        <p className="text-sm text-amber-500 dark:text-amber-400 mt-2">🔊</p>
                      </motion.div>
                    </TextToSpeech>
                  ))}
                </div>
              </div>

              {/* 韵律节奏练习 */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
                  韵律节奏练习
                </h3>
                
                {/* 嵌入YouTube视频 */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="500" 
                    src="https://www.youtube.com/embed/e_04ZrNroTo" 
                    title="韵律节奏练习视频" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-xl"
                  ></iframe>
                </div>
                
                <div className="space-y-6">
                  {[
                    { words: 'cat, hat, bat, rat', rhyme: 'at' },
                    { words: 'dog, log, frog, fog', rhyme: 'og' },
                    { words: 'fish, dish, wish, swish', rhyme: 'ish' },
                    { words: 'tree, bee, see, me', rhyme: 'ee' },
                    { words: 'book, look, took, cook', rhyme: 'ook' }
                  ].map((item, index) => (
                    <TextToSpeech 
                      key={index} 
                      text={item.words} 
                      rate={voiceSettings.rate}
                      voice={voiceSettings.isMale ? 'male' : 'female'}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md flex items-center cursor-pointer"
                      >
                        <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mr-6">
                          <span className="text-2xl font-bold text-orange-500">{item.rhyme}</span>
                        </div>
                        <div className="flex-grow">
                          <p className="text-xl font-medium text-amber-800 dark:text-amber-200">{item.words}</p>
                          <p className="text-sm text-amber-500 dark:text-amber-400 mt-1">押韵音: {item.rhyme}</p>
                          <p className="text-sm text-amber-500 dark:text-amber-400 mt-1">🔊</p>
                        </div>
                      </motion.div>
                    </TextToSpeech>
                  ))}
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}

      {/* 动物学习弹窗 */}
      {showAnimalModal && (
        <AnimalLearningModal 
          isOpen={showAnimalModal} 
          onClose={() => setShowAnimalModal(false)}
          voiceSettings={voiceSettings}
        />
      )}

      {/* 颜色和数字学习弹窗 */}
      {showColorNumberModal && (
        <ColorNumberLearningModal 
          isOpen={showColorNumberModal} 
          onClose={() => setShowColorNumberModal(false)}
          voiceSettings={voiceSettings}
        />
      )}
    </div>
  );
}
