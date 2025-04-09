export interface VocabularyItem {
  id: number;
  word: string;
  translation: string;
  type: 'verb' | 'adjective' | 'preposition' | 'phrase' | 'verb phrase';
  example?: string;
  exampleTranslation?: string;
  color: string;
  darkColor: string;
}

export const vocabulary: VocabularyItem[] = [
  // 动词
  {
    id: 1,
    word: 'run',
    translation: '跑',
    type: 'verb',
    example: 'I run in the park every morning.',
    exampleTranslation: '我每天早上在公园跑步。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 2,
    word: 'jump',
    translation: '跳',
    type: 'verb',
    example: 'The rabbit jumps over the fence.',
    exampleTranslation: '兔子跳过栅栏。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 3,
    word: 'eat',
    translation: '吃',
    type: 'verb',
    example: 'We eat breakfast at 8 o\'clock.',
    exampleTranslation: '我们在8点吃早餐。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 4,
    word: 'sleep',
    translation: '睡觉',
    type: 'verb',
    example: 'The baby sleeps for 12 hours.',
    exampleTranslation: '婴儿睡12个小时。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 5,
    word: 'read',
    translation: '读',
    type: 'verb',
    example: 'I like to read books.',
    exampleTranslation: '我喜欢读书。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 6,
    word: 'write',
    translation: '写',
    type: 'verb',
    example: 'I write in my diary every evening.',
    exampleTranslation: '我每天晚上写日记。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 7,
    word: 'play',
    translation: '玩',
    type: 'verb',
    example: 'Children play in the playground.',
    exampleTranslation: '孩子们在操场上玩。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 8,
    word: 'sing',
    translation: '唱歌',
    type: 'verb',
    example: 'Birds sing in the morning.',
    exampleTranslation: '鸟儿在早上唱歌。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 9,
    word: 'dance',
    translation: '跳舞',
    type: 'verb',
    example: 'She dances beautifully.',
    exampleTranslation: '她跳舞跳得很美。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 10,
    word: 'swim',
    translation: '游泳',
    type: 'verb',
    example: 'Fish swim in the ocean.',
    exampleTranslation: '鱼在海洋里游泳。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },

  // 形容词
  {
    id: 11,
    word: 'happy',
    translation: '快乐的',
    type: 'adjective',
    example: 'The children are happy at the party.',
    exampleTranslation: '孩子们在派对上很开心。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 12,
    word: 'sad',
    translation: '伤心的',
    type: 'adjective',
    example: 'She feels sad when it rains.',
    exampleTranslation: '下雨时她感到伤心。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 13,
    word: 'big',
    translation: '大的',
    type: 'adjective',
    example: 'This is a big house.',
    exampleTranslation: '这是一座大房子。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 14,
    word: 'small',
    translation: '小的',
    type: 'adjective',
    example: 'The small cat sits on the mat.',
    exampleTranslation: '小猫坐在垫子上。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 15,
    word: 'hot',
    translation: '热的',
    type: 'adjective',
    example: 'The soup is too hot to eat.',
    exampleTranslation: '汤太热了，不能吃。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 16,
    word: 'cold',
    translation: '冷的',
    type: 'adjective',
    example: 'The ice cream is cold.',
    exampleTranslation: '冰淇淋是冷的。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 17,
    word: 'fast',
    translation: '快的',
    type: 'adjective',
    example: 'The train is very fast.',
    exampleTranslation: '火车很快。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 18,
    word: 'slow',
    translation: '慢的',
    type: 'adjective',
    example: 'The turtle moves slowly.',
    exampleTranslation: '乌龟移动得很慢。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 19,
    word: 'beautiful',
    translation: '美丽的',
    type: 'adjective',
    example: 'The flowers are beautiful.',
    exampleTranslation: '花儿很美丽。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 20,
    word: 'ugly',
    translation: '丑的',
    type: 'adjective',
    example: 'The old house looks ugly.',
    exampleTranslation: '那座老房子看起来很丑。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },

  // 介词
  {
    id: 21,
    word: 'on',
    translation: '在...上面',
    type: 'preposition',
    example: 'The book is on the table.',
    exampleTranslation: '书在桌子上。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 22,
    word: 'under',
    translation: '在...下面',
    type: 'preposition',
    example: 'The cat is under the bed.',
    exampleTranslation: '猫在床下面。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 23,
    word: 'in',
    translation: '在...里面',
    type: 'preposition',
    example: 'The toys are in the box.',
    exampleTranslation: '玩具在盒子里。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 24,
    word: 'at',
    translation: '在...',
    type: 'preposition',
    example: 'We meet at the school gate.',
    exampleTranslation: '我们在学校门口见面。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 25,
    word: 'by',
    translation: '在...旁边',
    type: 'preposition',
    example: 'The tree is by the river.',
    exampleTranslation: '树在河边。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 26,
    word: 'between',
    translation: '在...之间',
    type: 'preposition',
    example: 'The ball is between the two chairs.',
    exampleTranslation: '球在两把椅子之间。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 27,
    word: 'behind',
    translation: '在...后面',
    type: 'preposition',
    example: 'The car is behind the bus.',
    exampleTranslation: '汽车在公共汽车后面。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 28,
    word: 'in front of',
    translation: '在...前面',
    type: 'preposition',
    example: 'The dog is in front of the house.',
    exampleTranslation: '狗在房子前面。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 29,
    word: 'next to',
    translation: '紧挨着',
    type: 'preposition',
    example: 'The book is next to the pencil.',
    exampleTranslation: '书紧挨着铅笔。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 30,
    word: 'near',
    translation: '靠近',
    type: 'preposition',
    example: 'The park is near my house.',
    exampleTranslation: '公园靠近我的房子。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },

  // 常用短语
  {
    id: 31,
    word: 'in the morning',
    translation: '在早上',
    type: 'phrase',
    example: 'I brush my teeth in the morning.',
    exampleTranslation: '我早上刷牙。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 32,
    word: 'go to school',
    translation: '去学校',
    type: 'phrase',
    example: 'I go to school by bus.',
    exampleTranslation: '我坐公交车去学校。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 33,
    word: 'have breakfast',
    translation: '吃早餐',
    type: 'phrase',
    example: 'We have breakfast at 7:30.',
    exampleTranslation: '我们在7:30吃早餐。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 34,
    word: 'good night',
    translation: '晚安',
    type: 'phrase',
    example: 'Good night, sleep well!',
    exampleTranslation: '晚安，睡个好觉！',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 35,
    word: 'thank you',
    translation: '谢谢',
    type: 'phrase',
    example: 'Thank you for your help.',
    exampleTranslation: '谢谢你的帮助。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 36,
    word: "you're welcome",
    translation: "不客气",
    type: "phrase",
    example: "You're welcome!",
    exampleTranslation: "不客气！",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 37,
    word: 'how are you',
    translation: '你好吗',
    type: 'phrase',
    example: 'How are you today?',
    exampleTranslation: '你今天好吗？',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 38,
    word: "I'm fine",
    translation: "我很好",
    type: "phrase",
    example: "I'm fine, thank you.",
    exampleTranslation: "我很好，谢谢。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 39,
    word: 'see you later',
    translation: '待会儿见',
    type: 'phrase',
    example: 'See you later!',
    exampleTranslation: '待会儿见！',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 40,
    word: 'happy birthday',
    translation: '生日快乐',
    type: 'phrase',
    example: 'Happy birthday to you!',
    exampleTranslation: '祝你生日快乐！',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 41,
    word: 'good morning',
    translation: '早上好',
    type: 'phrase',
    example: 'Good morning, everyone!',
    exampleTranslation: '大家早上好！',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 42,
    word: 'good afternoon',
    translation: '下午好',
    type: 'phrase',
    example: 'Good afternoon, class!',
    exampleTranslation: '同学们下午好！',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 43,
    word: 'good evening',
    translation: '晚上好',
    type: 'phrase',
    example: 'Good evening, how are you?',
    exampleTranslation: '晚上好，你好吗？',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 44,
    word: 'excuse me',
    translation: '打扰一下',
    type: 'phrase',
    example: 'Excuse me, where is the library?',
    exampleTranslation: '打扰一下，图书馆在哪里？',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 45,
    word: "I'm sorry",
    translation: "对不起",
    type: "phrase",
    example: "I'm sorry for being late.",
    exampleTranslation: "对不起，我迟到了。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 46,
    word: "it's okay",
    translation: "没关系",
    type: "phrase",
    example: "It's okay, don't worry.",
    exampleTranslation: "没关系，别担心。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 47,
    word: "I don't know",
    translation: "我不知道",
    type: "phrase",
    example: "I don't know the answer.",
    exampleTranslation: "我不知道答案。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 48,
    word: 'I understand',
    translation: '我明白了',
    type: 'phrase',
    example: 'I understand the question now.',
    exampleTranslation: '我现在明白这个问题了。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 49,
    word: 'I like it',
    translation: '我喜欢',
    type: 'phrase',
    example: 'I like it very much.',
    exampleTranslation: '我非常喜欢。',
    color: 'bg-amber-100',
    darkColor: 'dark:bg-amber-900/30'
  },
  {
    id: 50,
    word: "I don't like it",
    translation: "我不喜欢",
    type: "phrase",
    example: "I don't like spicy food.",
    exampleTranslation: "我不喜欢辣的食物。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 51,
    word: "I'm hungry",
    translation: "我饿了",
    type: "phrase",
    example: "I'm hungry, let's get some food.",
    exampleTranslation: "我饿了，我们去吃点东西吧。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 52,
    word: "I'm thirsty",
    translation: "我渴了",
    type: "phrase",
    example: "I'm thirsty, can I have some water?",
    exampleTranslation: "我渴了，能给我一些水吗？",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 53,
    word: "I'm tired",
    translation: "我累了",
    type: "phrase",
    example: "I'm tired, I need to rest.",
    exampleTranslation: "我累了，我需要休息。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 54,
    word: "I'm happy",
    translation: "我很开心",
    type: "phrase",
    example: "I'm happy to see you again.",
    exampleTranslation: "我很高兴再次见到你。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 55,
    word: "I'm sad",
    translation: "我很伤心",
    type: "phrase",
    example: "I'm sad because I lost my toy.",
    exampleTranslation: "我很伤心因为我弄丢了玩具。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 56,
    word: "I'm scared",
    translation: "我很害怕",
    type: "phrase",
    example: "I'm scared of the dark.",
    exampleTranslation: "我很害怕黑暗。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 57,
    word: "I'm excited",
    translation: "我很兴奋",
    type: "phrase",
    example: "I'm excited about the party.",
    exampleTranslation: "我对派对感到很兴奋。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 58,
    word: "I'm bored",
    translation: "我很无聊",
    type: "phrase",
    example: "I'm bored, let's play a game.",
    exampleTranslation: "我很无聊，我们来玩游戏吧。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 59,
    word: "I'm busy",
    translation: "我很忙",
    type: "phrase",
    example: "I'm busy with my homework.",
    exampleTranslation: "我正在忙着做作业。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 60,
    word: "I'm ready",
    translation: "我准备好了",
    type: "phrase",
    example: "I'm ready to start the game.",
    exampleTranslation: "我准备好开始游戏了。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 61,
    word: "I'm sorry",
    translation: "对不起",
    type: "phrase",
    example: "I'm sorry for being late.",
    exampleTranslation: "对不起，我迟到了。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 62,
    word: "I'm fine",
    translation: "我很好",
    type: "phrase",
    example: "I'm fine, thank you for asking.",
    exampleTranslation: "我很好，谢谢关心。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 63,
    word: "I'm sick",
    translation: "我生病了",
    type: "phrase",
    example: "I'm sick and need to stay in bed.",
    exampleTranslation: "我生病了，需要卧床休息。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 64,
    word: "I'm cold",
    translation: "我很冷",
    type: "phrase",
    example: "I'm cold, can I have a blanket?",
    exampleTranslation: "我很冷，能给我一条毯子吗？",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 65,
    word: "I'm hot",
    translation: "我很热",
    type: "phrase",
    example: "I'm hot, can I have some ice water?",
    exampleTranslation: "我很热，能给我一些冰水吗？",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 66,
    word: "I'm sleepy",
    translation: "我很困",
    type: "phrase",
    example: "I'm sleepy, I want to go to bed.",
    exampleTranslation: "我很困，我想去睡觉。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 67,
    word: "I'm angry",
    translation: "我很生气",
    type: "phrase",
    example: "I'm angry because you broke my toy.",
    exampleTranslation: "我很生气因为你弄坏了我的玩具。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 68,
    word: "I'm worried",
    translation: "我很担心",
    type: "phrase",
    example: "I'm worried about my test tomorrow.",
    exampleTranslation: "我很担心明天的考试。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 69,
    word: "I'm proud",
    translation: "我很自豪",
    type: "phrase",
    example: "I'm proud of my good grades.",
    exampleTranslation: "我为我的好成绩感到自豪。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 70,
    word: "I'm nervous",
    translation: "我很紧张",
    type: "phrase",
    example: "I'm nervous about the performance.",
    exampleTranslation: "我对表演感到很紧张。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 71,
    word: "I'm confused",
    translation: "我很困惑",
    type: "phrase",
    example: "I'm confused about this math problem.",
    exampleTranslation: "我对这道数学题感到很困惑。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 72,
    word: "I'm surprised",
    translation: "我很惊讶",
    type: "phrase",
    example: "I'm surprised to see you here.",
    exampleTranslation: "我很惊讶在这里见到你。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 73,
    word: "I'm disappointed",
    translation: "我很失望",
    type: "phrase",
    example: "I'm disappointed with my test results.",
    exampleTranslation: "我对我的考试成绩感到很失望。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 74,
    word: "I'm grateful",
    translation: "我很感激",
    type: "phrase",
    example: "I'm grateful for your help.",
    exampleTranslation: "我很感激你的帮助。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 75,
    word: "I'm lucky",
    translation: "我很幸运",
    type: "phrase",
    example: "I'm lucky to have such good friends.",
    exampleTranslation: "我很幸运有这么好的朋友。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 76,
    word: "play with",
    translation: "和...一起玩",
    type: "verb phrase",
    example: "I like to play with my friends.",
    exampleTranslation: "我喜欢和朋友们一起玩。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 77,
    word: "listen to",
    translation: "听",
    type: "verb phrase",
    example: "I listen to music every day.",
    exampleTranslation: "我每天都听音乐。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 78,
    word: "look at",
    translation: "看",
    type: "verb phrase",
    example: "Look at the beautiful butterfly!",
    exampleTranslation: "看那只漂亮的蝴蝶！",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 79,
    word: "think about",
    translation: "思考",
    type: "verb phrase",
    example: "I need to think about this question.",
    exampleTranslation: "我需要思考这个问题。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 80,
    word: "talk to",
    translation: "和...说话",
    type: "verb phrase",
    example: "I want to talk to my teacher.",
    exampleTranslation: "我想和老师说话。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 81,
    word: "write in",
    translation: "写在...里",
    type: "verb phrase",
    example: "Write your name in the book.",
    exampleTranslation: "把你的名字写在书里。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 82,
    word: "draw on",
    translation: "在...上画画",
    type: "verb phrase",
    example: "Draw a picture on the paper.",
    exampleTranslation: "在纸上画一幅画。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 83,
    word: "jump over",
    translation: "跳过",
    type: "verb phrase",
    example: "The rabbit jumps over the fence.",
    exampleTranslation: "兔子跳过栅栏。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 84,
    word: "run through",
    translation: "跑过",
    type: "verb phrase",
    example: "The children run through the park.",
    exampleTranslation: "孩子们跑过公园。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 85,
    word: "walk along",
    translation: "沿着...走",
    type: "verb phrase",
    example: "We walk along the beach.",
    exampleTranslation: "我们沿着海滩走。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 86,
    word: "look at",
    translation: "看",
    type: "verb phrase",
    example: "Look at the beautiful sunset.",
    exampleTranslation: "看那美丽的日落。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 87,
    word: "listen to",
    translation: "听",
    type: "verb phrase",
    example: "Listen to the music.",
    exampleTranslation: "听音乐。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 88,
    word: "talk to",
    translation: "和...说话",
    type: "verb phrase",
    example: "Talk to your friend.",
    exampleTranslation: "和你的朋友说话。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 89,
    word: "play with",
    translation: "和...玩",
    type: "verb phrase",
    example: "Play with your toys.",
    exampleTranslation: "和你的玩具玩。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 90,
    word: "help with",
    translation: "帮助...做",
    type: "verb phrase",
    example: "Help with the homework.",
    exampleTranslation: "帮助做作业。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 91,
    word: "build a sandcastle",
    translation: "建造沙堡",
    type: "verb phrase",
    example: "Let's build a sandcastle on the beach!",
    exampleTranslation: "让我们在沙滩上建造沙堡吧！",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 92,
    word: "fly a kite",
    translation: "放风筝",
    type: "verb phrase",
    example: "The wind is perfect to fly a kite today.",
    exampleTranslation: "今天风很适合放风筝。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 93,
    word: "make a wish",
    translation: "许愿",
    type: "verb phrase",
    example: "Make a wish when you see a shooting star.",
    exampleTranslation: "看到流星时，许个愿吧。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 94,
    word: "climb a tree",
    translation: "爬树",
    type: "verb phrase",
    example: "Be careful when you climb a tree.",
    exampleTranslation: "爬树时要小心。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 95,
    word: "catch butterflies",
    translation: "捉蝴蝶",
    type: "verb phrase",
    example: "The children love to catch butterflies in the garden.",
    exampleTranslation: "孩子们喜欢在花园里捉蝴蝶。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 96,
    word: "plant flowers",
    translation: "种花",
    type: "verb phrase",
    example: "We plant flowers in our garden every spring.",
    exampleTranslation: "我们每年春天都在花园里种花。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 97,
    word: "feed the birds",
    translation: "喂鸟",
    type: "verb phrase",
    example: "I like to feed the birds in the park.",
    exampleTranslation: "我喜欢在公园里喂鸟。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 98,
    word: "watch the sunset",
    translation: "看日落",
    type: "verb phrase",
    example: "Let's watch the sunset from the hill.",
    exampleTranslation: "让我们从山上看日落。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 99,
    word: "count the stars",
    translation: "数星星",
    type: "verb phrase",
    example: "It's fun to count the stars on a clear night.",
    exampleTranslation: "在晴朗的夜晚数星星很有趣。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 100,
    word: "make a snowman",
    translation: "堆雪人",
    type: "verb phrase",
    example: "Let's make a snowman in the backyard!",
    exampleTranslation: "让我们在后院堆个雪人吧！",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 101,
    word: "raise your hand",
    translation: "举手",
    type: "verb phrase",
    example: "Please raise your hand if you know the answer.",
    exampleTranslation: "如果你知道答案，请举手。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 102,
    word: "line up",
    translation: "排队",
    type: "verb phrase",
    example: "Students, please line up for lunch.",
    exampleTranslation: "同学们，请排队准备吃午饭。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 103,
    word: "clean up",
    translation: "打扫",
    type: "verb phrase",
    example: "Let's clean up the classroom before we leave.",
    exampleTranslation: "让我们离开前打扫教室。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 104,
    word: "take turns",
    translation: "轮流",
    type: "verb phrase",
    example: "We should take turns reading the story.",
    exampleTranslation: "我们应该轮流读故事。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 105,
    word: "share with",
    translation: "与...分享",
    type: "verb phrase",
    example: "Please share your crayons with your friend.",
    exampleTranslation: "请和你的朋友分享蜡笔。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 106,
    word: "work together",
    translation: "一起工作",
    type: "verb phrase",
    example: "Let's work together to solve this puzzle.",
    exampleTranslation: "让我们一起解决这个拼图。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 107,
    word: "follow the rules",
    translation: "遵守规则",
    type: "verb phrase",
    example: "We must follow the rules in the library.",
    exampleTranslation: "我们必须在图书馆遵守规则。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 108,
    word: "be quiet",
    translation: "保持安静",
    type: "verb phrase",
    example: "Please be quiet during the test.",
    exampleTranslation: "考试时请保持安静。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 109,
    word: "pay attention",
    translation: "注意听",
    type: "verb phrase",
    example: "Pay attention to what the teacher is saying.",
    exampleTranslation: "注意听老师在说什么。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 110,
    word: "help each other",
    translation: "互相帮助",
    type: "verb phrase",
    example: "Good friends help each other with homework.",
    exampleTranslation: "好朋友互相帮助做作业。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 111,
    word: "set the table",
    translation: "摆餐具",
    type: "verb phrase",
    example: "Can you help me set the table for dinner?",
    exampleTranslation: "你能帮我摆好晚餐的餐具吗？",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 112,
    word: "make the bed",
    translation: "整理床铺",
    type: "verb phrase",
    example: "I make my bed every morning.",
    exampleTranslation: "我每天早上都整理床铺。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 113,
    word: "do the dishes",
    translation: "洗碗",
    type: "verb phrase",
    example: "It's your turn to do the dishes today.",
    exampleTranslation: "今天轮到你洗碗了。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 114,
    word: "fold clothes",
    translation: "叠衣服",
    type: "verb phrase",
    example: "I like to fold clothes while watching TV.",
    exampleTranslation: "我喜欢一边看电视一边叠衣服。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 115,
    word: "water plants",
    translation: "给植物浇水",
    type: "verb phrase",
    example: "Remember to water plants every day.",
    exampleTranslation: "记得每天给植物浇水。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 116,
    word: "feed pets",
    translation: "喂宠物",
    type: "verb phrase",
    example: "I feed pets before I go to school.",
    exampleTranslation: "我上学前会喂宠物。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 117,
    word: "take out trash",
    translation: "倒垃圾",
    type: "verb phrase",
    example: "Please take out trash before you leave.",
    exampleTranslation: "离开前请把垃圾倒掉。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 118,
    word: "sweep floor",
    translation: "扫地",
    type: "verb phrase",
    example: "I sweep floor after breakfast.",
    exampleTranslation: "我吃完早餐后扫地。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 119,
    word: "dust furniture",
    translation: "擦家具",
    type: "verb phrase",
    example: "Mom dusts furniture every weekend.",
    exampleTranslation: "妈妈每周末都擦家具。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 120,
    word: "organize room",
    translation: "整理房间",
    type: "verb phrase",
    example: "I need to organize room before guests come.",
    exampleTranslation: "客人来之前我需要整理房间。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 121,
    word: "play soccer",
    translation: "踢足球",
    type: "verb phrase",
    example: "We play soccer after school every day.",
    exampleTranslation: "我们每天放学后踢足球。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 122,
    word: "play basketball",
    translation: "打篮球",
    type: "verb phrase",
    example: "Let's play basketball in the gym.",
    exampleTranslation: "让我们在体育馆打篮球。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 123,
    word: "play hide and seek",
    translation: "玩捉迷藏",
    type: "verb phrase",
    example: "Children love to play hide and seek in the park.",
    exampleTranslation: "孩子们喜欢在公园玩捉迷藏。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 124,
    word: "play tag",
    translation: "玩捉人游戏",
    type: "verb phrase",
    example: "We play tag during recess.",
    exampleTranslation: "我们在课间休息时玩捉人游戏。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 125,
    word: "play chess",
    translation: "下棋",
    type: "verb phrase",
    example: "I like to play chess with my dad.",
    exampleTranslation: "我喜欢和爸爸下棋。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 126,
    word: "play cards",
    translation: "玩纸牌",
    type: "verb phrase",
    example: "We play cards on rainy days.",
    exampleTranslation: "下雨天我们玩纸牌。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 127,
    word: "play video games",
    translation: "玩电子游戏",
    type: "verb phrase",
    example: "I play video games for one hour after homework.",
    exampleTranslation: "我做完作业后玩一小时电子游戏。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 128,
    word: "play hopscotch",
    translation: "玩跳房子",
    type: "verb phrase",
    example: "Girls like to play hopscotch on the playground.",
    exampleTranslation: "女孩们喜欢在操场上玩跳房子。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 129,
    word: "play jump rope",
    translation: "跳绳",
    type: "verb phrase",
    example: "We play jump rope during PE class.",
    exampleTranslation: "我们在体育课上跳绳。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 130,
    word: "play marbles",
    translation: "玩弹珠",
    type: "verb phrase",
    example: "Boys like to play marbles after school.",
    exampleTranslation: "男孩们喜欢放学后玩弹珠。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 131,
    word: "celebrate birthday",
    translation: "庆祝生日",
    type: "verb phrase",
    example: "We celebrate birthday with cake and presents.",
    exampleTranslation: "我们用蛋糕和礼物庆祝生日。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 132,
    word: "celebrate Christmas",
    translation: "庆祝圣诞节",
    type: "verb phrase",
    example: "We celebrate Christmas by decorating the tree.",
    exampleTranslation: "我们通过装饰圣诞树来庆祝圣诞节。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 133,
    word: "celebrate New Year",
    translation: "庆祝新年",
    type: "verb phrase",
    example: "We celebrate New Year with fireworks.",
    exampleTranslation: "我们用烟花庆祝新年。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 134,
    word: "celebrate Halloween",
    translation: "庆祝万圣节",
    type: "verb phrase",
    example: "Children celebrate Halloween by trick-or-treating.",
    exampleTranslation: "孩子们通过不给糖就捣蛋来庆祝万圣节。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 135,
    word: "celebrate Easter",
    translation: "庆祝复活节",
    type: "verb phrase",
    example: "We celebrate Easter by hunting for eggs.",
    exampleTranslation: "我们通过寻找彩蛋来庆祝复活节。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 136,
    word: "make a wish",
    translation: "许愿",
    type: "verb phrase",
    example: "I make a wish when I blow out the candles.",
    exampleTranslation: "我吹灭蜡烛时许愿。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 137,
    word: "open presents",
    translation: "拆礼物",
    type: "verb phrase",
    example: "Children love to open presents on Christmas morning.",
    exampleTranslation: "孩子们喜欢在圣诞节早上拆礼物。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 138,
    word: "sing carols",
    translation: "唱颂歌",
    type: "verb phrase",
    example: "We sing carols around the Christmas tree.",
    exampleTranslation: "我们在圣诞树周围唱颂歌。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 139,
    word: "dress up",
    translation: "打扮",
    type: "verb phrase",
    example: "Children dress up for Halloween.",
    exampleTranslation: "孩子们为万圣节打扮。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 140,
    word: "decorate house",
    translation: "装饰房子",
    type: "verb phrase",
    example: "We decorate house with lights for Christmas.",
    exampleTranslation: "我们用灯装饰房子过圣诞节。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 141,
    word: "rain heavily",
    translation: "下大雨",
    type: "verb phrase",
    example: "It rains heavily in summer.",
    exampleTranslation: "夏天经常下大雨。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 142,
    word: "snow heavily",
    translation: "下大雪",
    type: "verb phrase",
    example: "It snows heavily in winter.",
    exampleTranslation: "冬天经常下大雪。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 143,
    word: "blow strongly",
    translation: "刮大风",
    type: "verb phrase",
    example: "The wind blows strongly in autumn.",
    exampleTranslation: "秋天经常刮大风。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 144,
    word: "shine brightly",
    translation: "照耀明亮",
    type: "verb phrase",
    example: "The sun shines brightly in summer.",
    exampleTranslation: "夏天太阳照耀明亮。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 145,
    word: "get warm",
    translation: "变暖",
    type: "verb phrase",
    example: "The weather gets warm in spring.",
    exampleTranslation: "春天天气变暖。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 146,
    word: "get cold",
    translation: "变冷",
    type: "verb phrase",
    example: "The weather gets cold in winter.",
    exampleTranslation: "冬天天气变冷。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 147,
    word: "get dark",
    translation: "变暗",
    type: "verb phrase",
    example: "It gets dark early in winter.",
    exampleTranslation: "冬天天黑得早。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 148,
    word: "get light",
    translation: "变亮",
    type: "verb phrase",
    example: "It gets light early in summer.",
    exampleTranslation: "夏天天亮得早。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 149,
    word: "change season",
    translation: "季节变化",
    type: "verb phrase",
    example: "The season changes from spring to summer.",
    exampleTranslation: "季节从春天变为夏天。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 150,
    word: "forecast weather",
    translation: "预报天气",
    type: "verb phrase",
    example: "The weatherman forecasts weather on TV.",
    exampleTranslation: "气象员在电视上预报天气。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 151,
    word: "go shopping",
    translation: "去购物",
    type: "verb phrase",
    example: "I go shopping with my mom every weekend.",
    exampleTranslation: "我每周末都和妈妈去购物。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 152,
    word: "buy clothes",
    translation: "买衣服",
    type: "verb phrase",
    example: "We buy clothes for the new school year.",
    exampleTranslation: "我们为新学年买衣服。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 153,
    word: "pay money",
    translation: "付钱",
    type: "verb phrase",
    example: "I pay money for my new shoes.",
    exampleTranslation: "我为新鞋子付钱。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 154,
    word: "save money",
    translation: "存钱",
    type: "verb phrase",
    example: "I save money in my piggy bank.",
    exampleTranslation: "我把钱存在存钱罐里。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 155,
    word: "count change",
    translation: "数零钱",
    type: "verb phrase",
    example: "I count change to make sure it's correct.",
    exampleTranslation: "我数零钱以确保它是正确的。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 156,
    word: "take bus",
    translation: "坐公交车",
    type: "verb phrase",
    example: "I take bus to school every day.",
    exampleTranslation: "我每天坐公交车上学。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 157,
    word: "ride bike",
    translation: "骑自行车",
    type: "verb phrase",
    example: "I ride bike to the park.",
    exampleTranslation: "我骑自行车去公园。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 158,
    word: "walk home",
    translation: "步行回家",
    type: "verb phrase",
    example: "I walk home after school.",
    exampleTranslation: "我放学后步行回家。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 159,
    word: "drive car",
    translation: "开车",
    type: "verb phrase",
    example: "Dad drives car to work.",
    exampleTranslation: "爸爸开车去上班。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 160,
    word: "take train",
    translation: "坐火车",
    type: "verb phrase",
    example: "We take train to visit grandma.",
    exampleTranslation: "我们坐火车去看望奶奶。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 161,
    word: "eat breakfast",
    translation: "吃早餐",
    type: "verb phrase",
    example: "I eat breakfast at 7 o'clock.",
    exampleTranslation: "我7点吃早餐。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 162,
    word: "eat lunch",
    translation: "吃午餐",
    type: "verb phrase",
    example: "We eat lunch at school.",
    exampleTranslation: "我们在学校吃午餐。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 163,
    word: "eat dinner",
    translation: "吃晚餐",
    type: "verb phrase",
    example: "Family eats dinner together.",
    exampleTranslation: "家人一起吃晚餐。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 164,
    word: "drink water",
    translation: "喝水",
    type: "verb phrase",
    example: "I drink water when I'm thirsty.",
    exampleTranslation: "我口渴时喝水。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 165,
    word: "drink milk",
    translation: "喝牛奶",
    type: "verb phrase",
    example: "Children drink milk for strong bones.",
    exampleTranslation: "孩子们喝牛奶以强健骨骼。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 166,
    word: "cook food",
    translation: "做饭",
    type: "verb phrase",
    example: "Mom cooks food for the family.",
    exampleTranslation: "妈妈为家人做饭。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 167,
    word: "wash dishes",
    translation: "洗碗",
    type: "verb phrase",
    example: "I wash dishes after dinner.",
    exampleTranslation: "我吃完晚餐后洗碗。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 168,
    word: "set table",
    translation: "摆餐具",
    type: "verb phrase",
    example: "I set table before dinner.",
    exampleTranslation: "我在晚餐前摆餐具。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 169,
    word: "clear table",
    translation: "收拾餐桌",
    type: "verb phrase",
    example: "We clear table after eating.",
    exampleTranslation: "我们吃完后收拾餐桌。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 170,
    word: "make sandwich",
    translation: "做三明治",
    type: "verb phrase",
    example: "I make sandwich for lunch.",
    exampleTranslation: "我做三明治当午餐。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 171,
    word: "bake cookies",
    translation: "烤饼干",
    type: "verb phrase",
    example: "We bake cookies for Christmas.",
    exampleTranslation: "我们为圣诞节烤饼干。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 172,
    word: "make pizza",
    translation: "做披萨",
    type: "verb phrase",
    example: "Family makes pizza together.",
    exampleTranslation: "家人一起做披萨。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 173,
    word: "boil water",
    translation: "烧水",
    type: "verb phrase",
    example: "I boil water for tea.",
    exampleTranslation: "我烧水泡茶。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 174,
    word: "pour juice",
    translation: "倒果汁",
    type: "verb phrase",
    example: "Mom pours juice for everyone.",
    exampleTranslation: "妈妈为每个人倒果汁。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 175,
    word: "serve food",
    translation: "上菜",
    type: "verb phrase",
    example: "We serve food to our guests.",
    exampleTranslation: "我们为客人上菜。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 176,
    word: "order food",
    translation: "点餐",
    type: "verb phrase",
    example: "We order food at the restaurant.",
    exampleTranslation: "我们在餐厅点餐。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 177,
    word: "pack lunch",
    translation: "打包午餐",
    type: "verb phrase",
    example: "Mom packs lunch for school.",
    exampleTranslation: "妈妈为学校打包午餐。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 178,
    word: "heat food",
    translation: "加热食物",
    type: "verb phrase",
    example: "I heat food in the microwave.",
    exampleTranslation: "我用微波炉加热食物。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 179,
    word: "chop vegetables",
    translation: "切蔬菜",
    type: "verb phrase",
    example: "I chop vegetables for salad.",
    exampleTranslation: "我切蔬菜做沙拉。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 180,
    word: "mix ingredients",
    translation: "混合配料",
    type: "verb phrase",
    example: "We mix ingredients for cake.",
    exampleTranslation: "我们混合配料做蛋糕。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 181,
    word: "feed dog",
    translation: "喂狗",
    type: "verb phrase",
    example: "I feed dog every morning.",
    exampleTranslation: "我每天早上喂狗。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 182,
    word: "walk cat",
    translation: "遛猫",
    type: "verb phrase",
    example: "I walk cat in the garden.",
    exampleTranslation: "我在花园里遛猫。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 183,
    word: "catch fish",
    translation: "钓鱼",
    type: "verb phrase",
    example: "Dad catches fish in the lake.",
    exampleTranslation: "爸爸在湖里钓鱼。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 184,
    word: "watch birds",
    translation: "观察鸟",
    type: "verb phrase",
    example: "We watch birds in the park.",
    exampleTranslation: "我们在公园观察鸟。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 185,
    word: "pet rabbit",
    translation: "抚摸兔子",
    type: "verb phrase",
    example: "I pet rabbit gently.",
    exampleTranslation: "我轻轻地抚摸兔子。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 186,
    word: "plant tree",
    translation: "种树",
    type: "verb phrase",
    example: "We plant tree in spring.",
    exampleTranslation: "我们在春天种树。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 187,
    word: "water flower",
    translation: "浇花",
    type: "verb phrase",
    example: "I water flower every day.",
    exampleTranslation: "我每天浇花。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 188,
    word: "pick fruit",
    translation: "摘水果",
    type: "verb phrase",
    example: "We pick fruit from the tree.",
    exampleTranslation: "我们从树上摘水果。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 189,
    word: "grow vegetables",
    translation: "种蔬菜",
    type: "verb phrase",
    example: "Mom grows vegetables in the garden.",
    exampleTranslation: "妈妈在花园里种蔬菜。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 190,
    word: "cut grass",
    translation: "割草",
    type: "verb phrase",
    example: "Dad cuts grass on weekends.",
    exampleTranslation: "爸爸在周末割草。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 191,
    word: "paint red",
    translation: "画红色",
    type: "verb phrase",
    example: "I paint red flowers.",
    exampleTranslation: "我画红色的花。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 192,
    word: "color blue",
    translation: "涂蓝色",
    type: "verb phrase",
    example: "I color blue sky.",
    exampleTranslation: "我涂蓝色的天空。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 193,
    word: "draw yellow",
    translation: "画黄色",
    type: "verb phrase",
    example: "I draw yellow sun.",
    exampleTranslation: "我画黄色的太阳。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 194,
    word: "make green",
    translation: "制作绿色",
    type: "verb phrase",
    example: "I make green leaves.",
    exampleTranslation: "我制作绿色的叶子。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 195,
    word: "mix colors",
    translation: "混合颜色",
    type: "verb phrase",
    example: "I mix colors to make purple.",
    exampleTranslation: "我混合颜色制作紫色。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 196,
    word: "count numbers",
    translation: "数数字",
    type: "verb phrase",
    example: "I count numbers from one to ten.",
    exampleTranslation: "我从一数到十。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 197,
    word: "add numbers",
    translation: "加法",
    type: "verb phrase",
    example: "I add numbers in math class.",
    exampleTranslation: "我在数学课上做加法。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 198,
    word: "subtract numbers",
    translation: "减法",
    type: "verb phrase",
    example: "I subtract numbers on the board.",
    exampleTranslation: "我在黑板上做减法。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 199,
    word: "write time",
    translation: "写时间",
    type: "verb phrase",
    example: "I write time in my diary.",
    exampleTranslation: "我在日记里写时间。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  },
  {
    id: 200,
    word: "read date",
    translation: "读日期",
    type: "verb phrase",
    example: "I read date on the calendar.",
    exampleTranslation: "我读日历上的日期。",
    color: "bg-amber-100",
    darkColor: "dark:bg-amber-900/30"
  }
]; 