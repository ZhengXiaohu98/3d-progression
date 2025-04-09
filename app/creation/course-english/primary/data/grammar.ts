export interface GrammarItem {
  id: number;
  title: string;
  description: string;
  examples: {
    english: string;
    translation: string;
  }[];
  rules: string[];
  practice: {
    question: string;
    options: string[];
    answer: number;
  }[];
}

export const grammarItems: GrammarItem[] = [
  {
    id: 1,
    title: "Be动词 am/is/are",
    description: "Be动词是英语中最基本的动词，用于表示状态、身份、特征等。",
    examples: [
      {
        english: "I am a student.",
        translation: "我是一个学生。"
      },
      {
        english: "She is beautiful.",
        translation: "她很漂亮。"
      },
      {
        english: "They are happy.",
        translation: "他们很开心。"
      }
    ],
    rules: [
      "I 后面用 am",
      "he/she/it 后面用 is",
      "we/you/they 后面用 are",
      "Be动词的否定形式是在后面加 not",
      "Be动词的疑问形式是将Be动词放在句首"
    ],
    practice: [
      {
        question: "选择正确的Be动词：I ___ a teacher.",
        options: ["am", "is", "are"],
        answer: 0
      },
      {
        question: "选择正确的Be动词：She ___ my sister.",
        options: ["am", "is", "are"],
        answer: 1
      },
      {
        question: "选择正确的Be动词：They ___ my friends.",
        options: ["am", "is", "are"],
        answer: 2
      }
    ]
  },
  {
    id: 2,
    title: "一般现在时，一般过去时（不规则动词基础）",
    description: "一般现在时表示经常发生的动作或状态，一般过去时表示过去发生的动作或状态。",
    examples: [
      {
        english: "I play football every day.",
        translation: "我每天踢足球。"
      },
      {
        english: "She played football yesterday.",
        translation: "她昨天踢了足球。"
      },
      {
        english: "They go to school by bus.",
        translation: "他们坐公交车去学校。"
      },
      {
        english: "They went to school by bus last week.",
        translation: "他们上周坐公交车去学校。"
      }
    ],
    rules: [
      "一般现在时：主语 + 动词原形/动词第三人称单数形式",
      "一般过去时：主语 + 动词过去式",
      "不规则动词的过去式需要单独记忆",
      "常见不规则动词：go-went, see-saw, eat-ate, drink-drank"
    ],
    practice: [
      {
        question: "选择正确的动词形式：He ___ to school every day.",
        options: ["go", "goes", "went"],
        answer: 1
      },
      {
        question: "选择正确的动词形式：They ___ to the park yesterday.",
        options: ["go", "goes", "went"],
        answer: 2
      },
      {
        question: "选择正确的动词形式：I ___ a movie last night.",
        options: ["see", "sees", "saw"],
        answer: 2
      }
    ]
  },
  {
    id: 3,
    title: "单复数变化，冠词 a/an/the",
    description: "英语中名词有单数和复数形式，冠词用于限定名词。",
    examples: [
      {
        english: "This is a book.",
        translation: "这是一本书。"
      },
      {
        english: "These are books.",
        translation: "这些是书。"
      },
      {
        english: "I have an apple.",
        translation: "我有一个苹果。"
      },
      {
        english: "The sun is bright.",
        translation: "太阳很明亮。"
      }
    ],
    rules: [
      "大多数名词变复数在词尾加s",
      "以s, sh, ch, x, o结尾的名词变复数加es",
      "以辅音字母+y结尾的名词变复数，将y变为i再加es",
      "a用于辅音音素开头的单词前",
      "an用于元音音素开头的单词前",
      "the用于特指的人或物前"
    ],
    practice: [
      {
        question: "选择正确的冠词：I have ___ apple.",
        options: ["a", "an", "the"],
        answer: 1
      },
      {
        question: "选择正确的冠词：___ sun is bright today.",
        options: ["a", "an", "the"],
        answer: 2
      },
      {
        question: "选择正确的复数形式：I have two ___.",
        options: ["book", "books", "bookes"],
        answer: 1
      }
    ]
  },
  {
    id: 4,
    title: "疑问句：What is this? Can you…?",
    description: "疑问句用于提问，英语中有多种疑问句形式。",
    examples: [
      {
        english: "What is this?",
        translation: "这是什么？"
      },
      {
        english: "Can you help me?",
        translation: "你能帮助我吗？"
      },
      {
        english: "Where is my book?",
        translation: "我的书在哪里？"
      },
      {
        english: "Do you like ice cream?",
        translation: "你喜欢冰淇淋吗？"
      }
    ],
    rules: [
      "What is this? 用于询问物品是什么",
      "Can you...? 用于询问某人是否能做某事",
      "Where is...? 用于询问位置",
      "Do you...? 用于询问某人是否做某事",
      "一般疑问句的语序是：助动词/情态动词 + 主语 + 动词原形"
    ],
    practice: [
      {
        question: "选择正确的疑问句：___ is your name?",
        options: ["What", "Where", "How"],
        answer: 0
      },
      {
        question: "选择正确的疑问句：___ you speak English?",
        options: ["What", "Can", "Where"],
        answer: 1
      },
      {
        question: "选择正确的疑问句：___ is my pencil?",
        options: ["What", "Can", "Where"],
        answer: 2
      }
    ]
  },
  {
    id: 5,
    title: "情态动词：can, must, should",
    description: "情态动词用于表达能力、可能性、必要性、建议等。",
    examples: [
      {
        english: "I can swim.",
        translation: "我会游泳。"
      },
      {
        english: "You must finish your homework.",
        translation: "你必须完成作业。"
      },
      {
        english: "We should eat more vegetables.",
        translation: "我们应该多吃蔬菜。"
      },
      {
        english: "She can't speak Chinese.",
        translation: "她不会说中文。"
      }
    ],
    rules: [
      "can表示能力或可能性",
      "must表示必要性或强烈的建议",
      "should表示建议或道德义务",
      "情态动词后面接动词原形",
      "情态动词的否定形式是在情态动词后加not"
    ],
    practice: [
      {
        question: "选择正确的情态动词：I ___ speak English.",
        options: ["can", "must", "should"],
        answer: 0
      },
      {
        question: "选择正确的情态动词：You ___ wear a seatbelt in the car.",
        options: ["can", "must", "should"],
        answer: 1
      },
      {
        question: "选择正确的情态动词：We ___ help others.",
        options: ["can", "must", "should"],
        answer: 2
      }
    ]
  },
  {
    id: 6,
    title: "现在进行时：be + 动词ing",
    description: "现在进行时表示正在进行的动作或当前的状态。",
    examples: [
      {
        english: "I am reading a book.",
        translation: "我正在读一本书。"
      },
      {
        english: "She is playing the piano.",
        translation: "她正在弹钢琴。"
      },
      {
        english: "They are watching TV.",
        translation: "他们正在看电视。"
      },
      {
        english: "It is raining outside.",
        translation: "外面正在下雨。"
      }
    ],
    rules: [
      "现在进行时的结构：主语 + be动词 + 动词ing形式",
      "动词ing形式的规则：一般在词尾加ing",
      "以e结尾的动词，去掉e再加ing",
      "以重读闭音节结尾的动词，双写最后一个辅音字母再加ing",
      "现在进行时表示正在进行的动作或当前的状态"
    ],
    practice: [
      {
        question: "选择正确的现在进行时：I ___ a book now.",
        options: ["read", "am reading", "reading"],
        answer: 1
      },
      {
        question: "选择正确的现在进行时：She ___ TV.",
        options: ["watch", "is watching", "watching"],
        answer: 1
      },
      {
        question: "选择正确的现在进行时：They ___ football.",
        options: ["play", "are playing", "playing"],
        answer: 1
      }
    ]
  },
  {
    id: 7,
    title: "形容词和副词比较级",
    description: "形容词和副词用于描述人或事物的特征，比较级用于比较两个事物。",
    examples: [
      {
        english: "This book is bigger than that one.",
        translation: "这本书比那本大。"
      },
      {
        english: "She runs faster than me.",
        translation: "她跑得比我快。"
      },
      {
        english: "This is the most beautiful flower.",
        translation: "这是最漂亮的花。"
      },
      {
        english: "He works the hardest in our class.",
        translation: "他在我们班工作最努力。"
      }
    ],
    rules: [
      "单音节形容词和副词变比较级加er，变最高级加est",
      "以e结尾的形容词和副词，变比较级加r，变最高级加st",
      "以辅音字母+y结尾的形容词和副词，变y为i再加er或est",
      "多音节形容词和副词变比较级加more，变最高级加most",
      "不规则形容词和副词需要单独记忆，如good-better-best, bad-worse-worst"
    ],
    practice: [
      {
        question: "选择正确的比较级：This house is ___ than that one.",
        options: ["big", "bigger", "biggest"],
        answer: 1
      },
      {
        question: "选择正确的比较级：She sings ___ than me.",
        options: ["good", "better", "best"],
        answer: 1
      },
      {
        question: "选择正确的最高级：This is the ___ book I have ever read.",
        options: ["interesting", "more interesting", "most interesting"],
        answer: 2
      }
    ]
  },
  {
    id: 8,
    title: "介词：in, on, at, under, behind",
    description: "介词用于表示名词与其他词之间的关系，如位置、时间、方向等。",
    examples: [
      {
        english: "The book is on the table.",
        translation: "书在桌子上。"
      },
      {
        english: "I live in Beijing.",
        translation: "我住在北京。"
      },
      {
        english: "The cat is under the chair.",
        translation: "猫在椅子下面。"
      },
      {
        english: "We go to school at 8 o'clock.",
        translation: "我们8点去学校。"
      }
    ],
    rules: [
      "in表示在...里面，用于较大的空间",
      "on表示在...上面，用于接触表面",
      "at表示在...点，用于具体的时间点或地点",
      "under表示在...下面",
      "behind表示在...后面",
      "介词的选择取决于要表达的空间或时间关系"
    ],
    practice: [
      {
        question: "选择正确的介词：The book is ___ the table.",
        options: ["in", "on", "at"],
        answer: 1
      },
      {
        question: "选择正确的介词：I live ___ Beijing.",
        options: ["in", "on", "at"],
        answer: 0
      },
      {
        question: "选择正确的介词：We go to school ___ 8 o'clock.",
        options: ["in", "on", "at"],
        answer: 2
      }
    ]
  },
  {
    id: 9,
    title: "一般过去时（Simple Past Tense）",
    description: "一般过去时用于表示过去某个时间发生的动作或状态。",
    examples: [
      {
        english: "I played football yesterday.",
        translation: "我昨天踢了足球。"
      },
      {
        english: "She went to school last week.",
        translation: "她上周去了学校。"
      },
      {
        english: "They watched TV last night.",
        translation: "他们昨晚看了电视。"
      },
      {
        english: "The weather was nice last Sunday.",
        translation: "上周日天气很好。"
      }
    ],
    rules: [
      "一般过去时用动词的过去式表示",
      "规则动词加-ed，如play→played, watch→watched",
      "不规则动词需要记忆，如go→went, see→saw",
      "be动词的过去式是was/were",
      "一般过去时常与表示过去时间的词连用，如yesterday, last week, ago"
    ],
    practice: [
      {
        question: "选择正确的过去式：I ___ to school yesterday.",
        options: ["go", "went", "gone"],
        answer: 1
      },
      {
        question: "选择正确的过去式：She ___ TV last night.",
        options: ["watch", "watched", "watching"],
        answer: 1
      },
      {
        question: "选择正确的过去式：They ___ at home last Sunday.",
        options: ["is", "are", "were"],
        answer: 2
      }
    ]
  },
  {
    id: 10,
    title: "现在进行时（Present Continuous Tense）",
    description: "现在进行时用于表示说话时正在进行的动作。",
    examples: [
      {
        english: "I am reading a book now.",
        translation: "我现在正在读一本书。"
      },
      {
        english: "She is playing with her toys.",
        translation: "她正在玩她的玩具。"
      },
      {
        english: "They are watching TV.",
        translation: "他们正在看电视。"
      },
      {
        english: "The sun is shining today.",
        translation: "今天太阳正在照耀。"
      }
    ],
    rules: [
      "现在进行时由be动词(am/is/are) + 动词的现在分词(动词+ing)构成",
      "现在分词的变化规则：一般加-ing，如read→reading",
      "以e结尾的动词去e加-ing，如write→writing",
      "重读闭音节双写末尾辅音加-ing，如run→running",
      "现在进行时常与now, at the moment等表示现在的词连用"
    ],
    practice: [
      {
        question: "选择正确的现在进行时：I ___ a book now.",
        options: ["read", "am reading", "reading"],
        answer: 1
      },
      {
        question: "选择正确的现在进行时：She ___ with her toys.",
        options: ["play", "is playing", "playing"],
        answer: 1
      },
      {
        question: "选择正确的现在进行时：They ___ TV.",
        options: ["watch", "are watching", "watching"],
        answer: 1
      }
    ]
  },
  {
    id: 11,
    title: "一般将来时（Simple Future Tense）",
    description: "一般将来时用于表示将来要发生的动作或状态。",
    examples: [
      {
        english: "I will go to school tomorrow.",
        translation: "我明天将去学校。"
      },
      {
        english: "She will play football next week.",
        translation: "她下周将踢足球。"
      },
      {
        english: "They will watch TV tonight.",
        translation: "他们今晚将看电视。"
      },
      {
        english: "It will rain tomorrow.",
        translation: "明天将会下雨。"
      }
    ],
    rules: [
      "一般将来时由will + 动词原形构成",
      "will可用于所有人称",
      "一般将来时常与表示将来时间的词连用，如tomorrow, next week, in the future",
      "be going to + 动词原形也可表示将来，表示计划或打算",
      "shall + 动词原形用于第一人称，表示建议或征求意见"
    ],
    practice: [
      {
        question: "选择正确的一般将来时：I ___ to school tomorrow.",
        options: ["go", "will go", "going"],
        answer: 1
      },
      {
        question: "选择正确的一般将来时：She ___ football next week.",
        options: ["play", "will play", "playing"],
        answer: 1
      },
      {
        question: "选择正确的一般将来时：They ___ TV tonight.",
        options: ["watch", "will watch", "watching"],
        answer: 1
      }
    ]
  },
  {
    id: 12,
    title: "条件句（Conditional Sentences）",
    description: "条件句用于表示假设的情况及其可能的结果。",
    examples: [
      {
        english: "If it rains, I will stay at home.",
        translation: "如果下雨，我将待在家里。"
      },
      {
        english: "If I were you, I would study harder.",
        translation: "如果我是你，我会更努力学习。"
      },
      {
        english: "If it had rained yesterday, I would have stayed at home.",
        translation: "如果昨天下了雨，我就会待在家里。"
      },
      {
        english: "Unless you study hard, you will fail the exam.",
        translation: "除非你努力学习，否则你会考试失败。"
      }
    ],
    rules: [
      "第一类条件句：If + 一般现在时，主句用will + 动词原形，表示可能发生的情况",
      "第二类条件句：If + 一般过去时，主句用would + 动词原形，表示不太可能发生的情况",
      "第三类条件句：If + 过去完成时，主句用would have + 过去分词，表示与过去事实相反的情况",
      "unless = if not，表示除非...否则...",
      "条件句中，如果表示与现在事实相反，be动词用were而不是was"
    ],
    practice: [
      {
        question: "选择正确的条件句：If it ___, I will stay at home.",
        options: ["rain", "rains", "will rain"],
        answer: 1
      },
      {
        question: "选择正确的条件句：If I ___ you, I would study harder.",
        options: ["am", "were", "was"],
        answer: 1
      },
      {
        question: "选择正确的条件句：If it had rained yesterday, I ___ at home.",
        options: ["would stay", "would have stayed", "will stay"],
        answer: 1
      }
    ]
  },
  {
    id: 13,
    title: "被动语态（Passive Voice）",
    description: "被动语态用于强调动作的承受者而不是执行者。",
    examples: [
      {
        english: "The book is written by him.",
        translation: "这本书是他写的。"
      },
      {
        english: "The house was built last year.",
        translation: "这座房子是去年建的。"
      },
      {
        english: "The letter has been sent.",
        translation: "这封信已经被寄出了。"
      },
      {
        english: "The cake will be made tomorrow.",
        translation: "这个蛋糕明天将被制作。"
      }
    ],
    rules: [
      "被动语态由be动词 + 过去分词构成",
      "被动语态可以强调动作的承受者",
      "当动作的执行者不重要或不知道时，常用被动语态",
      "被动语态的时态由be动词的时态决定",
      "被动语态中，动作的执行者用by引导"
    ],
    practice: [
      {
        question: "选择正确的被动语态：The book ___ by him.",
        options: ["write", "is written", "writes"],
        answer: 1
      },
      {
        question: "选择正确的被动语态：The house ___ last year.",
        options: ["build", "was built", "built"],
        answer: 1
      },
      {
        question: "选择正确的被动语态：The letter ___ already.",
        options: ["send", "has been sent", "sends"],
        answer: 1
      }
    ]
  },
  {
    id: 14,
    title: "情态动词（Modal Verbs）",
    description: "情态动词用于表示能力、可能性、必要性等。",
    examples: [
      {
        english: "I can swim.",
        translation: "我会游泳。"
      },
      {
        english: "You must finish your homework.",
        translation: "你必须完成你的作业。"
      },
      {
        english: "She should study harder.",
        translation: "她应该更努力学习。"
      },
      {
        english: "They may come to the party.",
        translation: "他们可能会来参加派对。"
      }
    ],
    rules: [
      "情态动词后接动词原形",
      "can表示能力或可能性",
      "must表示必要性或强烈的建议",
      "should表示建议或道德上的义务",
      "may表示可能性或许可",
      "情态动词没有时态变化，也没有第三人称单数形式"
    ],
    practice: [
      {
        question: "选择正确的情态动词：I ___ swim.",
        options: ["can", "could", "will"],
        answer: 0
      },
      {
        question: "选择正确的情态动词：You ___ finish your homework.",
        options: ["can", "must", "may"],
        answer: 1
      },
      {
        question: "选择正确的情态动词：She ___ study harder.",
        options: ["can", "must", "should"],
        answer: 2
      }
    ]
  },
  {
    id: 15,
    title: "现在完成时（Present Perfect Tense）",
    description: "现在完成时用于表示过去发生的动作对现在的影响或结果。",
    examples: [
      {
        english: "I have finished my homework.",
        translation: "我已经完成了我的作业。"
      },
      {
        english: "She has lived here for ten years.",
        translation: "她在这里住了十年了。"
      },
      {
        english: "They have never been to Paris.",
        translation: "他们从未去过巴黎。"
      },
      {
        english: "Have you ever eaten sushi?",
        translation: "你吃过寿司吗？"
      }
    ],
    rules: [
      "现在完成时由have/has + 过去分词构成",
      "现在完成时强调过去动作对现在的影响",
      "现在完成时常与already, yet, just, ever, never等词连用",
      "现在完成时也用于表示持续到现在的动作，常与for, since连用",
      "现在完成时不能与表示过去具体时间的词连用"
    ],
    practice: [
      {
        question: "选择正确的现在完成时：I ___ my homework.",
        options: ["finish", "have finished", "finished"],
        answer: 1
      },
      {
        question: "选择正确的现在完成时：She ___ here for ten years.",
        options: ["live", "has lived", "lived"],
        answer: 1
      },
      {
        question: "选择正确的现在完成时：___ you ever been to Paris?",
        options: ["Do", "Have", "Has"],
        answer: 1
      }
    ]
  },
  {
    id: 16,
    title: "过去进行时（Past Continuous Tense）",
    description: "过去进行时用于表示过去某个时间正在进行的动作。",
    examples: [
      {
        english: "I was reading when you called.",
        translation: "当你打电话时，我正在读书。"
      },
      {
        english: "She was playing with her toys at 3 o'clock.",
        translation: "三点钟时，她正在玩她的玩具。"
      },
      {
        english: "They were watching TV when I came home.",
        translation: "当我回家时，他们正在看电视。"
      },
      {
        english: "What were you doing yesterday at this time?",
        translation: "昨天这个时候你在做什么？"
      }
    ],
    rules: [
      "过去进行时由was/were + 动词的现在分词(动词+ing)构成",
      "过去进行时表示过去某个时间正在进行的动作",
      "过去进行时常与表示过去时间的词连用，如yesterday, last week, at 3 o'clock",
      "过去进行时也用于表示过去某个动作发生时，另一个动作正在进行",
      "过去进行时强调动作的持续性和进行性"
    ],
    practice: [
      {
        question: "选择正确的过去进行时：I ___ when you called.",
        options: ["read", "was reading", "reading"],
        answer: 1
      },
      {
        question: "选择正确的过去进行时：She ___ with her toys at 3 o'clock.",
        options: ["play", "was playing", "playing"],
        answer: 1
      },
      {
        question: "选择正确的过去进行时：They ___ TV when I came home.",
        options: ["watch", "were watching", "watching"],
        answer: 1
      }
    ]
  }
]; 