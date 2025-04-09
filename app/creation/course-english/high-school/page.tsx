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
import { grammarRules as grammarItems} from './data/grammar';
import { phonicsItems} from './data/phonics';

export default function HighSchoolEnglish() {
  // 获取高中阶段数据
  const highSchoolData = englishCourseStages.find(stage => stage.id === '高中阶段');
  
  // 添加状态控制学习内容区域的显示
  const [showLearningContent, setShowLearningContent] = useState(false);
  const [currentContentType, setCurrentContentType] = useState<string | null>(null);
  
  // 添加分页状态
  const [dialoguePage, setDialoguePage] = useState(1);
  const [vocabularyPage, setVocabularyPage] = useState(1);
  const dialoguesPerPage = 10;
  const totalDialoguePages = Math.ceil(dialogues.length / dialoguesPerPage);
  const vocabularyPerPage = 12;
  const totalVocabularyPages = Math.ceil(vocabulary.length / vocabularyPerPage);
  
  // 添加阅读和写作状态
  const [currentReadingItem, setCurrentReadingItem] = useState<number>(0);
  const [currentWritingItem, setCurrentWritingItem] = useState<number>(0);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<{ [key: number]: boolean }>({});
  
  // 添加语法学习状态
  const [currentGrammarItem, setCurrentGrammarItem] = useState<number>(0);
  const [selectedGrammarAnswers, setSelectedGrammarAnswers] = useState<number[]>([]);
  const [isGrammarAnswerCorrect, setIsGrammarAnswerCorrect] = useState<boolean[]>([]);
  
  // 添加语音学习状态
  const [currentPhonicsItem, setCurrentPhonicsItem] = useState<number>(0);
  const [currentPronunciationItem, setCurrentPronunciationItem] = useState<number>(0);
  const [selectedPhonicsAnswers, setSelectedPhonicsAnswers] = useState<{ [key: number]: number }>({});
  const [isPhonicsAnswerCorrect, setIsPhonicsAnswerCorrect] = useState<{ [key: number]: boolean }>({});
  const [selectedPronunciationAnswers, setSelectedPronunciationAnswers] = useState<{ [key: number]: number }>({});
  const [isPronunciationAnswerCorrect, setIsPronunciationAnswerCorrect] = useState<{ [key: number]: boolean }>({});
  
  // 添加角色扮演和讲座状态
  const [currentRolePlayItem, setCurrentRolePlayItem] = useState<number>(0);
  const [currentLectureItem, setCurrentLectureItem] = useState<number>(0);
  
  // 模拟角色扮演数据
  const rolePlayScenarios = [
    {
      id: 1,
      title: "学术讨论",
      description: "在学术环境中进行讨论和辩论",
      scenarios: [
        {
          title: "研究项目讨论",
          description: "与同学讨论研究项目的方法和结果",
          roles: [
            { name: "你", lines: ["我认为我们应该使用定量研究方法，这样可以获得更客观的数据。", "我们的样本量可能不够大，这会影响结果的可靠性。", "我们可以考虑使用混合研究方法，结合定性和定量分析。"] },
            { name: "同学", lines: ["定量研究确实有其优势，但定性研究能提供更深入的理解。", "我们可以扩大样本量，或者使用更有效的抽样方法。", "混合研究方法是个好主意，这样我们可以从多个角度分析问题。"] }
          ]
        },
        {
          title: "学术会议提问",
          description: "在学术会议上向演讲者提问",
          roles: [
            { name: "你", lines: ["您的研究中如何处理了样本偏差问题？", "您认为您的研究结果可以推广到其他文化背景吗？", "您的研究与最近发表的Smith等人的研究有何不同？"] },
            { name: "演讲者", lines: ["我们使用了分层抽样方法来减少样本偏差。", "我们的研究主要针对西方文化背景，跨文化应用需要进一步验证。", "Smith等人的研究关注短期效果，而我们的研究追踪了长期影响。"] }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "职场沟通",
      description: "在职场环境中进行有效沟通",
      scenarios: [
        {
          title: "项目汇报",
          description: "向团队汇报项目进展",
          roles: [
            { name: "你", lines: ["我们已完成项目第一阶段，进度符合预期。", "我们遇到了一些技术挑战，但已找到解决方案。", "下一阶段我们将重点关注用户反馈的整合。"] },
            { name: "经理", lines: ["很好，第一阶段的结果令人满意。", "技术挑战是难免的，很高兴你们能主动解决。", "用户反馈非常重要，请确保在下一阶段报告中详细说明。"] }
          ]
        },
        {
          title: "客户会议",
          description: "与客户讨论项目需求和进展",
          roles: [
            { name: "你", lines: ["根据您的需求，我们设计了三种方案，各有特点。", "我们可以在两周内完成初步设计，请您提供反馈。", "考虑到您的预算限制，我们调整了实施计划。"] },
            { name: "客户", lines: ["这三种方案都很吸引人，我们倾向于第二种。", "两周时间可以接受，我们会尽快提供反馈。", "感谢你们考虑我们的预算限制，这很重要。"] }
          ]
        }
      ]
    }
  ];
  
  // 模拟讲座数据
  const lectureTopics = [
    {
      id: 1,
      title: "气候变化与可持续发展",
      description: "探讨气候变化的原因、影响及可持续发展解决方案",
      sections: [
        {
          title: "气候变化科学基础",
          content: "Climate change refers to long-term shifts in global weather patterns and average temperatures. The primary driver of recent climate change is the increase in greenhouse gases, particularly carbon dioxide, in the Earth's atmosphere. These gases trap heat, leading to global warming and its various impacts.",
          keyPoints: ["温室气体增加是气候变化的主要原因", "全球变暖导致极端天气事件增加", "气候变化影响全球生态系统"],
          vocabulary: ["greenhouse gases", "carbon dioxide", "global warming", "extreme weather", "ecosystem"]
        },
        {
          title: "气候变化的影响",
          content: "The impacts of climate change are far-reaching and include rising sea levels, more frequent and intense extreme weather events, disruptions to agriculture, and threats to biodiversity. These changes affect human societies, economies, and natural ecosystems around the world.",
          keyPoints: ["海平面上升威胁沿海地区", "极端天气事件频率和强度增加", "农业系统受到干扰", "生物多样性面临威胁"],
          vocabulary: ["sea level rise", "extreme weather events", "agriculture", "biodiversity", "ecosystems"]
        },
        {
          title: "可持续发展解决方案",
          content: "Sustainable development offers pathways to address climate change while meeting human needs. This includes transitioning to renewable energy sources, improving energy efficiency, protecting forests, and developing sustainable agricultural practices. Individual actions, policy changes, and technological innovations all play crucial roles.",
          keyPoints: ["向可再生能源转型", "提高能源效率", "保护森林资源", "发展可持续农业", "个人行动与政策变革相结合"],
          vocabulary: ["renewable energy", "energy efficiency", "forest conservation", "sustainable agriculture", "policy changes"]
        }
      ]
    },
    {
      id: 2,
      title: "人工智能与未来工作",
      description: "探讨人工智能发展对就业市场的影响及未来工作形态",
      sections: [
        {
          title: "人工智能发展现状",
          content: "Artificial Intelligence (AI) has made significant advances in recent years, with applications in machine learning, natural language processing, computer vision, and robotics. These technologies are transforming industries and creating new possibilities for automation and decision-making.",
          keyPoints: ["机器学习技术快速发展", "自然语言处理能力提升", "计算机视觉应用广泛", "机器人技术不断进步"],
          vocabulary: ["artificial intelligence", "machine learning", "natural language processing", "computer vision", "robotics"]
        },
        {
          title: "AI对就业市场的影响",
          content: "While AI creates new job opportunities in technology and AI development, it also automates certain tasks and potentially displaces workers in some sectors. The impact varies across industries, with some jobs being transformed rather than eliminated entirely.",
          keyPoints: ["AI创造新的就业机会", "某些工作岗位被自动化取代", "不同行业受影响程度不同", "工作性质而非工作机会发生变化"],
          vocabulary: ["job opportunities", "automation", "workforce displacement", "industry transformation", "job nature"]
        },
        {
          title: "未来工作技能需求",
          content: "As AI continues to evolve, the skills required in the workforce are changing. Adaptability, critical thinking, creativity, emotional intelligence, and technical literacy are becoming increasingly important. Continuous learning and reskilling will be essential for career longevity.",
          keyPoints: ["适应能力成为关键技能", "批判性思维和创造力更加重要", "情商和技术素养同样重要", "持续学习和再培训成为常态"],
          vocabulary: ["adaptability", "critical thinking", "creativity", "emotional intelligence", "technical literacy"]
        }
      ]
    }
  ];
  
  // 获取当前页的对话
  const getCurrentPageDialogues = () => {
    const startIndex = (dialoguePage - 1) * dialoguesPerPage;
    return dialogues.slice(startIndex, startIndex + dialoguesPerPage);
  };

  // 获取当前页的词汇
  const getCurrentPageVocabulary = () => {
    const startIndex = (vocabularyPage - 1) * vocabularyPerPage;
    return vocabulary.slice(startIndex, startIndex + vocabularyPerPage);
  };

  // 生成随机语速
  const getRandomRate = () => {
    return 0.8 + Math.random() * 0.4; // 0.8 到 1.2 之间的随机值
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

  // 处理开始学习按钮点击
  const handleStartLearning = (contentType: string) => {
    setCurrentContentType(contentType);
    setShowLearningContent(true);
    // 根据内容类型设置相应的分页
    if (contentType === '对话练习') {
      setDialoguePage(1);
    } else if (contentType === '词汇学习') {
      setVocabularyPage(1);
    }
  };

  // 返回学习模块区域
  const handleBackToModules = () => {
    setShowLearningContent(false);
    setCurrentContentType(null);
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
    const newSelectedAnswers = [...selectedGrammarAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    setSelectedGrammarAnswers(newSelectedAnswers);

    const newIsCorrect = [...isGrammarAnswerCorrect];
    const currentExercise = grammarItems[currentGrammarItem].exercises[questionIndex];
    newIsCorrect[questionIndex] = currentExercise.options[answerIndex] === currentExercise.answer;
    setIsGrammarAnswerCorrect(newIsCorrect);
  };

  // 处理语法内容切换
  const handleNextGrammar = () => {
    if (currentGrammarItem < grammarItems.length - 1) {
      setCurrentGrammarItem(currentGrammarItem + 1);
      // 重置答案状态
      setSelectedGrammarAnswers([]);
      setIsGrammarAnswerCorrect([]);
    }
  };

  const handlePrevGrammar = () => {
    if (currentGrammarItem > 0) {
      setCurrentGrammarItem(currentGrammarItem - 1);
      // 重置答案状态
      setSelectedGrammarAnswers([]);
      setIsGrammarAnswerCorrect([]);
    }
  };

  // 处理角色扮演内容切换
  const handleNextRolePlay = () => {
    setCurrentRolePlayItem((prev) => (prev + 1) % rolePlayScenarios.length);
  };

  const handlePrevRolePlay = () => {
    setCurrentRolePlayItem((prev) => (prev - 1 + rolePlayScenarios.length) % rolePlayScenarios.length);
  };
  
  // 处理讲座内容切换
  const handleNextLecture = () => {
    setCurrentLectureItem((prev) => (prev + 1) % lectureTopics.length);
  };

  const handlePrevLecture = () => {
    setCurrentLectureItem((prev) => (prev - 1 + lectureTopics.length) % lectureTopics.length);
  };

  // 处理语音练习答案选择
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

  // 处理语音练习内容切换
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

  if (!highSchoolData) {
    return <div className="min-h-screen flex items-center justify-center">数据加载中...</div>;
  }

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
            {highSchoolData.title}
          </h1>
          <p className="text-lg text-amber-800/80 dark:text-amber-200/80 max-w-3xl mx-auto">
            {highSchoolData.description}
          </p>
        </motion.div>
      </div>

      {/* 学习模块区域 */}
      {!showLearningContent && (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highSchoolData.sections.map((section, index) => (
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
                  onClick={() => setDialoguePage(prev => Math.max(1, prev - 1))}
                  disabled={dialoguePage === 1}
                >
                  上一页
                </Button>
                <span className="text-amber-800 dark:text-amber-200">
                  第 {dialoguePage} 页，共 {totalDialoguePages} 页
                </span>
                <Button
                  buttonStyle={7}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                  onClick={() => setDialoguePage(prev => Math.min(totalDialoguePages, prev + 1))}
                  disabled={dialoguePage === totalDialoguePages}
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
                        <p className="text-amber-700 dark:text-amber-300">{item.definition}</p>
                        <p className="text-sm text-amber-600 dark:text-amber-400 mt-1 bg-white/50 dark:bg-amber-900/30 px-2 py-1 rounded-full inline-block">{item.partOfSpeech}</p>
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

                    <div className="mt-4 space-y-2">
                      {item.synonyms.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-amber-600 dark:text-amber-400">同义词：</span>
                          <span className="text-sm text-amber-700 dark:text-amber-300">{item.synonyms.join(', ')}</span>
                        </div>
                      )}
                      {item.antonyms.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-amber-600 dark:text-amber-400">反义词：</span>
                          <span className="text-sm text-amber-700 dark:text-amber-300">{item.antonyms.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 词汇分页控制 */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button
                  buttonStyle={7}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                  onClick={() => setVocabularyPage(prev => Math.max(1, prev - 1))}
                  disabled={vocabularyPage === 1}
                >
                  上一页
                </Button>
                <span className="text-amber-800 dark:text-amber-200">
                  第 {vocabularyPage} 页，共 {totalVocabularyPages} 页
                </span>
                <Button
                  buttonStyle={7}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                  onClick={() => setVocabularyPage(prev => Math.min(totalVocabularyPages, prev + 1))}
                  disabled={vocabularyPage === totalVocabularyPages}
                >
                  下一页
                </Button>
              </div>
            </div>
          )}

          {/* 阅读与写作内容 */}
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
                      className="bg-amber-500 hover:bg-amber-600 text-white whitespace-nowrap"
                      onClick={() => setShowTranslation(!showTranslation)}
                    >
                      {showTranslation ? '隐藏翻译' : '显示翻译'}
                    </Button>
                    {readingMaterials[currentReadingItem].writingPrompt && (
                      <div className="text-lg text-amber-800 dark:text-amber-200 ml-4">
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
                      规则
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-amber-800 dark:text-amber-200">
                      {grammarItems[currentGrammarItem].rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      例子
                    </h4>
                    {grammarItems[currentGrammarItem].examples.map((example, index) => (
                      <div key={index} className="mb-4">
                        <p className="text-lg text-amber-800 dark:text-amber-200">{example.sentence}</p>
                        <p className="text-amber-600 dark:text-amber-400">{example.translation}</p>
                        <p className="text-sm text-amber-500 dark:text-amber-400 mt-1">{example.explanation}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      常见错误
                    </h4>
                    {grammarItems[currentGrammarItem].commonMistakes.map((mistake, index) => (
                      <div key={index} className="mb-4 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl">
                        <p className="text-red-600 dark:text-red-400 line-through mb-2">{mistake.mistake}</p>
                        <p className="text-green-600 dark:text-green-400 mb-2">{mistake.correction}</p>
                        <p className="text-sm text-amber-600 dark:text-amber-400">{mistake.explanation}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      语法练习
                    </h4>
                    {grammarItems[currentGrammarItem].exercises.map((exercise, index) => (
                      <div key={index} className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">{exercise.question}</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {exercise.options.map((option, optionIndex) => (
                            <button
                              key={optionIndex}
                              onClick={() => handleGrammarAnswerSelect(index, optionIndex)}
                              className={`p-2 rounded font-medium transition-all duration-200 ${
                                selectedGrammarAnswers[index] === optionIndex
                                  ? isGrammarAnswerCorrect[index]
                                    ? 'bg-green-600 text-white shadow-md'
                                    : 'bg-red-600 text-white shadow-md'
                                  : 'bg-amber-100 hover:bg-amber-300 text-amber-800 border border-amber-300'
                              }`}
                              disabled={selectedGrammarAnswers[index] !== undefined}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                        {selectedGrammarAnswers[index] !== undefined && (
                          <p className={`mt-2 ${isGrammarAnswerCorrect[index] ? 'text-green-600' : 'text-red-600'}`}>
                            {exercise.explanation}
                          </p>
                        )}
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
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
