"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { englishCourseStages } from '../data';
import { vocabulary, VocabularyItem } from './data/vocabulary';
import { Button } from '@/components/ui/general/Button';
import { TextToSpeech } from '@/components/ui/utils/text-to-speech';
import { dialogues } from './data/dialogues';
import { readingMaterials, writingMaterials } from './data/reading-writing';
import { grammarItems, GrammarItem } from './data/grammar';
import { phonicsItems, pronunciationItems, PhonicsItem, PronunciationItem } from './data/phonics';

export default function PrimaryEnglish() {
  // 获取小学阶段数据
  const primaryData = englishCourseStages.find(stage => stage.id === '小学阶段');
  // 添加状态控制学习内容区域的显示
  const [showLearningContent, setShowLearningContent] = useState(false);
  // 添加状态控制当前显示的学习内容类型
  const [currentContentType, setCurrentContentType] = useState<string | null>(null);
  // 添加分页状态
  const [currentPage, setCurrentPage] = useState(1);
  const dialoguesPerPage = 10;
  const totalPages = Math.ceil(dialogues.length / dialoguesPerPage);
  const vocabularyPerPage = 12;
  const totalVocabularyPages = Math.ceil(vocabulary.length / vocabularyPerPage);
  const [currentReadingItem, setCurrentReadingItem] = useState<number>(0);
  const [currentWritingItem, setCurrentWritingItem] = useState<number>(0);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<{ [key: number]: boolean }>({});
  
  // 添加语法学习状态
  const [currentGrammarItem, setCurrentGrammarItem] = useState<number>(0);
  const [selectedGrammarAnswers, setSelectedGrammarAnswers] = useState<{ [key: number]: number }>({});
  const [isGrammarAnswerCorrect, setIsGrammarAnswerCorrect] = useState<{ [key: number]: boolean }>({});
  
  // 添加语音学习状态
  const [currentPhonicsItem, setCurrentPhonicsItem] = useState<number>(0);
  const [currentPronunciationItem, setCurrentPronunciationItem] = useState<number>(0);
  const [selectedPhonicsAnswers, setSelectedPhonicsAnswers] = useState<{ [key: number]: number }>({});
  const [isPhonicsAnswerCorrect, setIsPhonicsAnswerCorrect] = useState<{ [key: number]: boolean }>({});
  const [selectedPronunciationAnswers, setSelectedPronunciationAnswers] = useState<{ [key: number]: number }>({});
  const [isPronunciationAnswerCorrect, setIsPronunciationAnswerCorrect] = useState<{ [key: number]: boolean }>({});

  // 获取当前页的对话
  const getCurrentPageDialogues = () => {
    const startIndex = (currentPage - 1) * dialoguesPerPage;
    return dialogues.slice(startIndex, startIndex + dialoguesPerPage);
  };

  // 获取当前页的词汇
  const getCurrentPageVocabulary = () => {
    const startIndex = (currentPage - 1) * vocabularyPerPage;
    return vocabulary.slice(startIndex, startIndex + vocabularyPerPage);
  };

  // 生成随机语速
  const getRandomRate = () => {
    return 0.8 + Math.random() * 0.4; // 0.8 到 1.2 之间的随机值
  };

  if (!primaryData) {
    return <div className="min-h-screen flex items-center justify-center">数据加载中...</div>;
  }

  // 处理开始学习按钮点击
  const handleStartLearning = (contentType: string) => {
    setCurrentContentType(contentType);
    setShowLearningContent(true);
    setCurrentPage(1);
  };

  // 返回学习模块区域
  const handleBackToModules = () => {
    setShowLearningContent(false);
    setCurrentContentType(null);
  };

  // 根据性别选择语音
  const getVoiceByGender = (gender: string) => {
    switch (gender) {
      case 'male':
        return 'male';
      case 'female':
        return 'female';
      case 'child':
        return 'child';
      default:
        return 'female';
    }
  };

  // 处理阅读内容切换
  const handleNextReading = () => {
    setCurrentReadingItem((prev) => (prev + 1) % readingMaterials.length);
    setShowTranslation(false);
    setSelectedAnswers({});
    setIsAnswerCorrect({});
  };

  const handlePrevReading = () => {
    setCurrentReadingItem((prev) => (prev - 1 + readingMaterials.length) % readingMaterials.length);
    setShowTranslation(false);
    setSelectedAnswers({});
    setIsAnswerCorrect({});
  };

  // 处理写作内容切换
  const handleNextWriting = () => {
    setCurrentWritingItem((prev) => (prev + 1) % writingMaterials.length);
  };

  const handlePrevWriting = () => {
    setCurrentWritingItem((prev) => (prev - 1 + writingMaterials.length) % writingMaterials.length);
  };

  // 处理答案选择
  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
    const currentItem = readingMaterials[currentReadingItem];
    setIsAnswerCorrect(prev => ({
      ...prev,
      [questionIndex]: answerIndex === currentItem.questions[questionIndex].answer
    }));
  };

  // 处理语法答案选择
  const handleGrammarAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedGrammarAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
    const currentItem = grammarItems[currentGrammarItem];
    setIsGrammarAnswerCorrect(prev => ({
      ...prev,
      [questionIndex]: answerIndex === currentItem.practice[questionIndex].answer
    }));
  };

  // 处理语音答案选择
  const handlePhonicsAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedPhonicsAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
    const currentItem = phonicsItems[currentPhonicsItem];
    setIsPhonicsAnswerCorrect(prev => ({
      ...prev,
      [questionIndex]: answerIndex === currentItem.practice[questionIndex].answer
    }));
  };

  // 处理发音答案选择
  const handlePronunciationAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedPronunciationAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
    const currentItem = pronunciationItems[currentPronunciationItem];
    setIsPronunciationAnswerCorrect(prev => ({
      ...prev,
      [questionIndex]: answerIndex === currentItem.practice[questionIndex].answer
    }));
  };

  // 处理语法内容切换
  const handleNextGrammar = () => {
    setCurrentGrammarItem((prev) => (prev + 1) % grammarItems.length);
    setSelectedGrammarAnswers({});
    setIsGrammarAnswerCorrect({});
  };

  const handlePrevGrammar = () => {
    setCurrentGrammarItem((prev) => (prev - 1 + grammarItems.length) % grammarItems.length);
    setSelectedGrammarAnswers({});
    setIsGrammarAnswerCorrect({});
  };

  // 处理语音内容切换
  const handleNextPhonics = () => {
    setCurrentPhonicsItem((prev) => (prev + 1) % phonicsItems.length);
    setSelectedPhonicsAnswers({});
    setIsPhonicsAnswerCorrect({});
  };

  const handlePrevPhonics = () => {
    setCurrentPhonicsItem((prev) => (prev - 1 + phonicsItems.length) % phonicsItems.length);
    setSelectedPhonicsAnswers({});
    setIsPhonicsAnswerCorrect({});
  };

  // 处理发音内容切换
  const handleNextPronunciation = () => {
    setCurrentPronunciationItem((prev) => (prev + 1) % pronunciationItems.length);
    setSelectedPronunciationAnswers({});
    setIsPronunciationAnswerCorrect({});
  };

  const handlePrevPronunciation = () => {
    setCurrentPronunciationItem((prev) => (prev - 1 + pronunciationItems.length) % pronunciationItems.length);
    setSelectedPronunciationAnswers({});
    setIsPronunciationAnswerCorrect({});
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
              返回
            </Button>
          </div>

          {/* 内容类型选择 */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              buttonStyle={7}
              className={`${
                currentContentType === '对话练习'
                  ? 'bg-amber-500 text-white'
                  : 'bg-white/50 text-amber-800 dark:text-amber-200'
              }`}
              onClick={() => setCurrentContentType('对话练习')}
            >
              对话练习
            </Button>
            <Button
              buttonStyle={7}
              className={`${
                currentContentType === '词汇学习'
                  ? 'bg-amber-500 text-white'
                  : 'bg-white/50 text-amber-800 dark:text-amber-200'
              }`}
              onClick={() => setCurrentContentType('词汇学习')}
            >
              词汇学习
            </Button>
            <Button
              buttonStyle={7}
              className={`${
                currentContentType === '阅读与写作'
                  ? 'bg-amber-500 text-white'
                  : 'bg-white/50 text-amber-800 dark:text-amber-200'
              }`}
              onClick={() => setCurrentContentType('阅读与写作')}
            >
              阅读与写作
            </Button>
            <Button
              buttonStyle={7}
              className={`${
                currentContentType === '语法学习'
                  ? 'bg-amber-500 text-white'
                  : 'bg-white/50 text-amber-800 dark:text-amber-200'
              }`}
              onClick={() => setCurrentContentType('语法学习')}
            >
              语法学习
            </Button>
            <Button
              buttonStyle={7}
              className={`${
                currentContentType === '语音学习'
                  ? 'bg-amber-500 text-white'
                  : 'bg-white/50 text-amber-800 dark:text-amber-200'
              }`}
              onClick={() => setCurrentContentType('语音学习')}
            >
              语音学习
            </Button>
          </div>

          {/* 对话内容 */}
          {currentContentType === '对话练习' && (
            <div className="space-y-8">
              {/* 场景对话卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getCurrentPageDialogues().map((dialogue) => (
                  <motion.div
                    key={dialogue.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-amber-200/50 dark:border-amber-900/50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">{dialogue.emoji}</span>
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200">
                        {dialogue.scenario}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {dialogue.conversations.map((conversation, index) => (
                        <div
                          key={index}
                          className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="w-24 flex-shrink-0">
                              <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                                {conversation.speaker}:
                              </span>
                            </div>
                            <TextToSpeech
                              text={conversation.text}
                              rate={getRandomRate()}
                              voice={getVoiceByGender(conversation.gender)}
                            >
                              <div className="flex-grow cursor-pointer">
                                <p className="text-amber-800 dark:text-amber-200">{conversation.text}</p>
                                <p className="text-sm text-amber-600/80 dark:text-amber-400/80 mt-1">{conversation.translation}</p>
                                <span className="text-xs text-amber-500 mt-1">🔊 点击播放</span>
                              </div>
                            </TextToSpeech>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 分页控制 */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button
                  buttonStyle={7}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  上一页
                </Button>
                <span className="text-amber-800 dark:text-amber-200">
                  第 {currentPage} 页，共 {totalPages} 页
                </span>
                <Button
                  buttonStyle={7}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  下一页
                </Button>
              </div>
            </div>
          )}

          {/* 词汇内容 */}
          {currentContentType === '词汇学习' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCurrentPageVocabulary().map((item: VocabularyItem) => (
          <motion.div
                    key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-amber-200 dark:border-amber-800/50 cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-orange-200 dark:from-amber-700/50 dark:to-orange-700/50 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-2xl">📚</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200">{item.word}</h3>
                          <TextToSpeech 
                            text={item.word} 
                            rate={getRandomRate()}
                            voice={getVoiceByGender("child")}
                          >
                            <button className="bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-800/50 dark:to-orange-800/50 p-2 rounded-full hover:from-amber-300 hover:to-orange-300 dark:hover:from-amber-700/50 dark:hover:to-orange-700/50 transition-colors shadow-md cursor-pointer relative z-10">
                              <span className="text-lg">🔊</span>
                            </button>
                          </TextToSpeech>
                        </div>
                        <p className="text-amber-700 dark:text-amber-300">{item.translation}</p>
                        <p className="text-sm text-amber-600 dark:text-amber-400 mt-1 bg-white/50 dark:bg-amber-900/30 px-2 py-1 rounded-full inline-block">{item.type}</p>
                      </div>
                    </div>

                    {item.example && (
                      <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800/50 relative z-10">
                        <p className="text-amber-800 dark:text-amber-200 mb-2">
                          {item.example}
                        </p>
                        <p className="text-amber-600 dark:text-amber-400 text-sm">
                          {item.exampleTranslation}
                        </p>
                        <div className="mt-2">
                          <TextToSpeech 
                            text={item.example} 
                            rate={getRandomRate()}
                            voice={getVoiceByGender("child")}
                          >
                            <button className="flex items-center space-x-1 bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-800/50 dark:to-orange-800/50 px-3 py-1 rounded-full hover:from-amber-300 hover:to-orange-300 dark:hover:from-amber-700/50 dark:hover:to-orange-700/50 transition-colors shadow-md cursor-pointer">
                              <span className="text-lg">🔊</span>
                              <span className="text-sm font-medium text-amber-700 dark:text-amber-300">播放例句</span>
                            </button>
                          </TextToSpeech>
                        </div>
                      </div>
                    )}
          </motion.div>
                ))}
              </div>

              {/* 词汇分页控制 */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button
                  buttonStyle={7}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  上一页
                </Button>
                <span className="text-amber-800 dark:text-amber-200">
                  第 {currentPage} 页，共 {totalVocabularyPages} 页
                </span>
                <Button
                  buttonStyle={7}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                  onClick={() => setCurrentPage(prev => Math.min(totalVocabularyPages, prev + 1))}
                  disabled={currentPage === totalVocabularyPages}
                >
                  下一页
                </Button>
              </div>
            </div>
          )}

          {/* 阅读内容 */}
          {currentContentType === '阅读与写作' && (
            <div className="space-y-8">
              {/* 阅读部分 */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
                    {readingMaterials[currentReadingItem].title}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <Button
                      buttonStyle={7}
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={handlePrevReading}
                    >
                      上一篇
                    </Button>
                    <Button
                      buttonStyle={7}
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={handleNextReading}
                    >
                      下一篇
                    </Button>
                  </div>
                </div>

                <div className="prose prose-amber dark:prose-invert max-w-none">
                  <div className="mb-8">
                    <p className="text-lg text-amber-800 dark:text-amber-200 whitespace-pre-line">
                      {readingMaterials[currentReadingItem].content}
                    </p>
                    {showTranslation && (
                      <p className="mt-4 text-lg text-amber-600 dark:text-amber-400 whitespace-pre-line">
                        {readingMaterials[currentReadingItem].translation}
                      </p>
                    )}
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      词汇表
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {readingMaterials[currentReadingItem].vocabulary.map((word, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-800 dark:text-amber-200"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      阅读理解
                    </h4>
                    {readingMaterials[currentReadingItem].questions.map((question, index) => (
                      <div key={index} className="mb-6">
                        <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
                          {question.question}
                        </p>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                selectedAnswers[index] === optionIndex
                                  ? isAnswerCorrect[index]
                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                                  : 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800/30'
                              }`}
                              onClick={() => handleAnswerSelect(index, optionIndex)}
                              disabled={selectedAnswers[index] !== undefined}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <Button
                      buttonStyle={7}
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={() => setShowTranslation(!showTranslation)}
                    >
                      {showTranslation ? '隐藏翻译' : '显示翻译'}
                    </Button>
                    {readingMaterials[currentReadingItem].writingPrompt && (
                      <div className="text-lg text-amber-800 dark:text-amber-200">
                        <p className="font-semibold mb-2">写作提示：</p>
                        <p>{readingMaterials[currentReadingItem].writingPrompt}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* 写作部分 */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
                    {writingMaterials[currentWritingItem].title}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <Button
                      buttonStyle={7}
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={handlePrevWriting}
                    >
                      上一篇
                    </Button>
                    <Button
                      buttonStyle={7}
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={handleNextWriting}
                    >
                      下一篇
                    </Button>
                  </div>
                </div>

                <div className="prose prose-amber dark:prose-invert max-w-none">
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      写作任务
                    </h4>
                    <p className="text-lg text-amber-800 dark:text-amber-200">
                      {writingMaterials[currentWritingItem].prompt}
                    </p>
                    <p className="mt-2 text-lg text-amber-600 dark:text-amber-400">
                      {writingMaterials[currentWritingItem].promptTranslation}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      示例
                    </h4>
                    {writingMaterials[currentWritingItem].examples.map((example, index) => (
                      <div key={index} className="mb-4">
                        <p className="text-lg text-amber-800 dark:text-amber-200">
                          {example}
                        </p>
                        <p className="mt-2 text-lg text-amber-600 dark:text-amber-400">
                          {writingMaterials[currentWritingItem].examplesTranslation[index]}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      关键词
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {writingMaterials[currentWritingItem].keywords.map((word, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-800 dark:text-amber-200"
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      语法要点
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {writingMaterials[currentWritingItem].grammarPoints.map((point, index) => (
                        <li
                          key={index}
                          className="text-lg text-amber-800 dark:text-amber-200"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 语法学习内容 */}
          {currentContentType === '语法学习' && (
            <div className="space-y-8">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
                    {grammarItems[currentGrammarItem].title}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <Button
                      buttonStyle={7}
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={handlePrevGrammar}
                    >
                      上一个
                    </Button>
                    <Button
                      buttonStyle={7}
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={handleNextGrammar}
                    >
                      下一个
                    </Button>
                  </div>
                </div>

                <div className="prose prose-amber dark:prose-invert max-w-none">
                  <div className="mb-8">
                    <p className="text-lg text-amber-800 dark:text-amber-200">
                      {grammarItems[currentGrammarItem].description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      例句
                    </h4>
                    <div className="space-y-4">
                      {grammarItems[currentGrammarItem].examples.map((example, index) => (
                        <div key={index} className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                          <p className="text-lg text-amber-800 dark:text-amber-200">
                            {example.english}
                          </p>
                          <p className="text-amber-600 dark:text-amber-400">
                            {example.translation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      语法规则
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {grammarItems[currentGrammarItem].rules.map((rule, index) => (
                        <li
                          key={index}
                          className="text-lg text-amber-800 dark:text-amber-200"
                        >
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      练习
                    </h4>
                    {grammarItems[currentGrammarItem].practice.map((question, index) => (
                      <div key={index} className="mb-6">
                        <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
                          {question.question}
                        </p>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                selectedGrammarAnswers[index] === optionIndex
                                  ? isGrammarAnswerCorrect[index]
                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                                  : 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800/30'
                              }`}
                              onClick={() => handleGrammarAnswerSelect(index, optionIndex)}
                              disabled={selectedGrammarAnswers[index] !== undefined}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 语音学习内容 */}
          {currentContentType === '语音学习' && (
            <div className="space-y-8">
              {/* Phonics学习部分 */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
                    {phonicsItems[currentPhonicsItem].title}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <Button
                      buttonStyle={7}
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={handlePrevPhonics}
                    >
                      上一个
                    </Button>
                    <Button
                      buttonStyle={7}
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={handleNextPhonics}
                    >
                      下一个
                    </Button>
                  </div>
                </div>

                <div className="prose prose-amber dark:prose-invert max-w-none">
                  <div className="mb-8">
                    <p className="text-lg text-amber-800 dark:text-amber-200">
                      {phonicsItems[currentPhonicsItem].description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      示例单词
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {phonicsItems[currentPhonicsItem].examples.map((example, index) => (
                        <div key={index} className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-lg font-medium text-amber-800 dark:text-amber-200">
                              {example.word}
                            </h5>
                            <TextToSpeech 
                              text={example.word} 
                              rate={getRandomRate()}
                              voice={getVoiceByGender("child")}
                            >
                              <button className="bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-800/50 dark:to-orange-800/50 p-2 rounded-full hover:from-amber-300 hover:to-orange-300 dark:hover:from-amber-700/50 dark:hover:to-orange-700/50 transition-colors shadow-md cursor-pointer">
                                <span className="text-lg">🔊</span>
                              </button>
                            </TextToSpeech>
                          </div>
                          <p className="text-amber-600 dark:text-amber-400">
                            {example.pronunciation}
                          </p>
                          <p className="text-amber-600 dark:text-amber-400">
                            {example.translation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      发音规则
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {phonicsItems[currentPhonicsItem].rules.map((rule, index) => (
                        <li
                          key={index}
                          className="text-lg text-amber-800 dark:text-amber-200"
                        >
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      练习
                    </h4>
                    {phonicsItems[currentPhonicsItem].practice.map((question, index) => (
                      <div key={index} className="mb-6">
                        <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
                          {question.question}
                        </p>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                selectedPhonicsAnswers[index] === optionIndex
                                  ? isPhonicsAnswerCorrect[index]
                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                                  : 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800/30'
                              }`}
                              onClick={() => handlePhonicsAnswerSelect(index, optionIndex)}
                              disabled={selectedPhonicsAnswers[index] !== undefined}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 重音与连读部分 */}
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-amber-200/50 dark:border-amber-900/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200">
                    {pronunciationItems[currentPronunciationItem].title}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <Button
                      buttonStyle={7}
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={handlePrevPronunciation}
                    >
                      上一个
                    </Button>
                    <Button
                      buttonStyle={7}
                      className="bg-amber-500 hover:bg-amber-600 text-white"
                      onClick={handleNextPronunciation}
                    >
                      下一个
                    </Button>
                  </div>
                </div>

                <div className="prose prose-amber dark:prose-invert max-w-none">
                  <div className="mb-8">
                    <p className="text-lg text-amber-800 dark:text-amber-200">
                      {pronunciationItems[currentPronunciationItem].description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      示例
                    </h4>
                    <div className="space-y-4">
                      {pronunciationItems[currentPronunciationItem].examples.map((example, index) => (
                        <div key={index} className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-lg text-amber-800 dark:text-amber-200">
                              {example.phrase}
                            </p>
                            <TextToSpeech 
                              text={example.phrase} 
                              rate={getRandomRate()}
                              voice={getVoiceByGender("child")}
                            >
                              <button className="bg-gradient-to-r from-amber-200 to-orange-200 dark:from-amber-800/50 dark:to-orange-800/50 p-2 rounded-full hover:from-amber-300 hover:to-orange-300 dark:hover:from-amber-700/50 dark:hover:to-orange-700/50 transition-colors shadow-md cursor-pointer">
                                <span className="text-lg">🔊</span>
                              </button>
                            </TextToSpeech>
                          </div>
                          <p className="text-amber-600 dark:text-amber-400">
                            {example.pronunciation}
                          </p>
                          <p className="text-amber-600 dark:text-amber-400">
                            {example.translation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      发音规则
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {pronunciationItems[currentPronunciationItem].rules.map((rule, index) => (
                        <li
                          key={index}
                          className="text-lg text-amber-800 dark:text-amber-200"
                        >
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      练习
                    </h4>
                    {pronunciationItems[currentPronunciationItem].practice.map((question, index) => (
                      <div key={index} className="mb-6">
                        <p className="text-lg text-amber-800 dark:text-amber-200 mb-4">
                          {question.question}
                        </p>
                        <div className="space-y-2">
                          {question.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                                selectedPronunciationAnswers[index] === optionIndex
                                  ? isPronunciationAnswerCorrect[index]
                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                                  : 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800/30'
                              }`}
                              onClick={() => handlePronunciationAnswerSelect(index, optionIndex)}
                              disabled={selectedPronunciationAnswers[index] !== undefined}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
