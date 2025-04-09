export interface PhonicsItem {
  id: number;
  title: string;
  description: string;
  examples: {
    word: string;
    pronunciation: string;
    translation: string;
  }[];
  rules: string[];
  practice: {
    question: string;
    options: string[];
    answer: number;
  }[];
}

export interface PronunciationItem {
  id: number;
  title: string;
  description: string;
  examples: {
    phrase: string;
    pronunciation: string;
    translation: string;
    audioExample?: string;
  }[];
  rules: string[];
  practice: {
    question: string;
    options: string[];
    answer: number;
  }[];
}

export const phonicsItems: PhonicsItem[] = [
  {
    id: 1,
    title: "CVC词（辅音-元音-辅音）",
    description: "CVC词是由一个辅音、一个元音和一个辅音组成的单词，是最基本的单词结构。",
    examples: [
      {
        word: "cat",
        pronunciation: "/kæt/",
        translation: "猫"
      },
      {
        word: "dog",
        pronunciation: "/dɒɡ/",
        translation: "狗"
      },
      {
        word: "pig",
        pronunciation: "/pɪɡ/",
        translation: "猪"
      },
      {
        word: "hat",
        pronunciation: "/hæt/",
        translation: "帽子"
      }
    ],
    rules: [
      "CVC词中的元音通常发短音",
      "第一个辅音发清音",
      "最后一个辅音发浊音",
      "常见的CVC词元音有：a, e, i, o, u",
      "CVC词是最基础的单词结构，掌握它有助于拼读更复杂的单词"
    ],
    practice: [
      {
        question: "选择正确的发音：cat",
        options: ["/kæt/", "/kɑːt/", "/keɪt/"],
        answer: 0
      },
      {
        question: "选择正确的发音：dog",
        options: ["/dɒɡ/", "/dəʊɡ/", "/duːɡ/"],
        answer: 0
      },
      {
        question: "选择正确的发音：pig",
        options: ["/pɪɡ/", "/paɪɡ/", "/piːɡ/"],
        answer: 0
      }
    ]
  },
  {
    id: 2,
    title: "Magic E（魔法E）",
    description: "当单词以e结尾时，前面的元音通常发长音，e本身不发音。",
    examples: [
      {
        word: "cake",
        pronunciation: "/keɪk/",
        translation: "蛋糕"
      },
      {
        word: "bike",
        pronunciation: "/baɪk/",
        translation: "自行车"
      },
      {
        word: "home",
        pronunciation: "/həʊm/",
        translation: "家"
      },
      {
        word: "tube",
        pronunciation: "/tjuːb/",
        translation: "管子"
      }
    ],
    rules: [
      "Magic E使前面的元音发长音",
      "Magic E本身不发音",
      "常见的Magic E单词有：make, like, hope, cute",
      "Magic E规则适用于大多数以e结尾的单词",
      "掌握Magic E规则有助于区分长音和短音"
    ],
    practice: [
      {
        question: "选择正确的发音：cake",
        options: ["/kæk/", "/keɪk/", "/kɑːk/"],
        answer: 1
      },
      {
        question: "选择正确的发音：bike",
        options: ["/bɪk/", "/baɪk/", "/biːk/"],
        answer: 1
      },
      {
        question: "选择正确的发音：home",
        options: ["/hɒm/", "/həʊm/", "/huːm/"],
        answer: 1
      }
    ]
  },
  {
    id: 3,
    title: "双辅音（Digraphs）",
    description: "双辅音是由两个字母组合成一个音素的辅音组合。",
    examples: [
      {
        word: "ship",
        pronunciation: "/ʃɪp/",
        translation: "船"
      },
      {
        word: "chair",
        pronunciation: "/tʃeə/",
        translation: "椅子"
      },
      {
        word: "think",
        pronunciation: "/θɪŋk/",
        translation: "思考"
      },
      {
        word: "phone",
        pronunciation: "/fəʊn/",
        translation: "电话"
      }
    ],
    rules: [
      "sh发/ʃ/音，如ship, fish",
      "ch发/tʃ/音，如chair, lunch",
      "th发/θ/音，如think, thank",
      "ph发/f/音，如phone, photo",
      "双辅音组合通常只发一个音"
    ],
    practice: [
      {
        question: "选择正确的发音：ship",
        options: ["/sɪp/", "/ʃɪp/", "/spɪp/"],
        answer: 1
      },
      {
        question: "选择正确的发音：chair",
        options: ["/tʃeə/", "/keə/", "/tʃɑː/"],
        answer: 0
      },
      {
        question: "选择正确的发音：think",
        options: ["/tɪŋk/", "/θɪŋk/", "/sɪŋk/"],
        answer: 1
      }
    ]
  },
  {
    id: 4,
    title: "元音组合（Vowel Teams）",
    description: "元音组合是由两个或更多元音字母组合在一起发一个音。",
    examples: [
      {
        word: "boat",
        pronunciation: "/bəʊt/",
        translation: "船"
      },
      {
        word: "rain",
        pronunciation: "/reɪn/",
        translation: "雨"
      },
      {
        word: "feet",
        pronunciation: "/fiːt/",
        translation: "脚"
      },
      {
        word: "book",
        pronunciation: "/bʊk/",
        translation: "书"
      }
    ],
    rules: [
      "oa发/əʊ/音，如boat, coat",
      "ai发/eɪ/音，如rain, train",
      "ee发/iː/音，如feet, meet",
      "oo发/uː/或/ʊ/音，如book, food",
      "元音组合通常发长音"
    ],
    practice: [
      {
        question: "选择正确的发音：boat",
        options: ["/bɒt/", "/bəʊt/", "/bɑːt/"],
        answer: 1
      },
      {
        question: "选择正确的发音：rain",
        options: ["/reɪn/", "/rɪn/", "/riːn/"],
        answer: 0
      },
      {
        question: "选择正确的发音：feet",
        options: ["/fɪt/", "/feɪt/", "/fiːt/"],
        answer: 2
      }
    ]
  },
  {
    id: 5,
    title: "重音（Stress）",
    description: "英语单词中通常有一个音节发重音，重音影响单词的发音和意义。",
    examples: [
      {
        word: "record",
        pronunciation: "/ˈrekɔːd/ (n.) 或 /rɪˈkɔːd/ (v.)",
        translation: "记录（名词）或记录（动词）"
      },
      {
        word: "present",
        pronunciation: "/ˈpreznt/ (n.) 或 /prɪˈzent/ (v.)",
        translation: "礼物（名词）或呈现（动词）"
      },
      {
        word: "object",
        pronunciation: "/ˈɒbdʒɪkt/ (n.) 或 /əbˈdʒekt/ (v.)",
        translation: "物体（名词）或反对（动词）"
      }
    ],
    rules: [
      "重音通常用'符号标记",
      "重音影响元音的发音",
      "同一个单词，重音位置不同可能有不同的含义",
      "双音节词通常重音在第一个音节",
      "多音节词的重音位置需要记忆"
    ],
    practice: [
      {
        question: "选择正确的重音位置：record (n.)",
        options: ["re'cord", "'record", "rec'ord"],
        answer: 1
      },
      {
        question: "选择正确的重音位置：present (v.)",
        options: ["'present", "pre'sent", "pres'ent"],
        answer: 1
      },
      {
        question: "选择正确的重音位置：object (n.)",
        options: ["'object", "ob'ject", "obj'ect"],
        answer: 0
      }
    ]
  },
  {
    id: 6,
    title: "连读（Linking）",
    description: "在英语口语中，单词之间的音素会自然连接，形成连读。",
    examples: [
      {
        word: "get up",
        pronunciation: "/ɡetʌp/",
        translation: "起床"
      },
      {
        word: "look at",
        pronunciation: "/lʊkæt/",
        translation: "看"
      },
      {
        word: "come in",
        pronunciation: "/kʌmɪn/",
        translation: "进来"
      },
      {
        word: "not at all",
        pronunciation: "/nɒtætɔːl/",
        translation: "一点也不"
      }
    ],
    rules: [
      "辅音+元音连读：前一个单词以辅音结尾，后一个单词以元音开头",
      "相同辅音连读：两个相同的辅音只发一次音",
      "元音+元音连读：在两个元音之间加入/w/或/j/音",
      "连读使英语口语更流畅自然",
      "掌握连读规则有助于提高听力理解"
    ],
    practice: [
      {
        question: "选择正确的连读：get up",
        options: ["/ɡet ʌp/", "/ɡetʌp/", "/ɡe tʌp/"],
        answer: 1
      },
      {
        question: "选择正确的连读：look at",
        options: ["/lʊk æt/", "/lʊkæt/", "/lu kæt/"],
        answer: 1
      },
      {
        question: "选择正确的连读：come in",
        options: ["/kʌm ɪn/", "/kʌmɪn/", "/kʌ mɪn/"],
        answer: 1
      }
    ]
  },
  {
    id: 7,
    title: "音变规则（Sound Changes）",
    description: "某些音素在特定环境下会发生变化，这些变化遵循一定的规则。",
    examples: [
      {
        word: "cats",
        pronunciation: "/kæts/",
        translation: "猫（复数）"
      },
      {
        word: "dogs",
        pronunciation: "/dɒɡz/",
        translation: "狗（复数）"
      },
      {
        word: "watched",
        pronunciation: "/wɒtʃt/",
        translation: "观看（过去式）"
      },
      {
        word: "played",
        pronunciation: "/pleɪd/",
        translation: "玩（过去式）"
      }
    ],
    rules: [
      "清辅音后加s发/s/音",
      "浊辅音和元音后加s发/z/音",
      "清辅音后加ed发/t/音",
      "浊辅音和元音后加ed发/d/音",
      "以t或d结尾的动词加ed发/ɪd/音"
    ],
    practice: [
      {
        question: "选择正确的发音：cats",
        options: ["/kæts/", "/kætz/", "/kætɪz/"],
        answer: 0
      },
      {
        question: "选择正确的发音：dogs",
        options: ["/dɒɡs/", "/dɒɡz/", "/dɒɡɪz/"],
        answer: 1
      },
      {
        question: "选择正确的发音：watched",
        options: ["/wɒtʃt/", "/wɒtʃd/", "/wɒtʃɪd/"],
        answer: 0
      }
    ]
  },
  {
    id: 8,
    title: "弱读（Weak Forms）",
    description: "某些常用词在句子中会弱读，发音变得较轻较短。",
    examples: [
      {
        word: "I am",
        pronunciation: "/aɪəm/",
        translation: "我是"
      },
      {
        word: "you are",
        pronunciation: "/jʊə/",
        translation: "你是"
      },
      {
        word: "he is",
        pronunciation: "/hiːz/",
        translation: "他是"
      },
      {
        word: "they are",
        pronunciation: "/ðeə/",
        translation: "他们是"
      }
    ],
    rules: [
      "be动词在句子中通常弱读",
      "助动词在句子中通常弱读",
      "冠词a/an/the通常弱读",
      "介词通常弱读",
      "弱读使英语口语更自然流畅"
    ],
    practice: [
      {
        question: "选择正确的弱读：I am",
        options: ["/aɪ æm/", "/aɪəm/", "/aɪm/"],
        answer: 1
      },
      {
        question: "选择正确的弱读：you are",
        options: ["/juː ɑː/", "/jʊə/", "/juːr/"],
        answer: 1
      },
      {
        question: "选择正确的弱读：he is",
        options: ["/hiː ɪz/", "/hiːz/", "/hɪz/"],
        answer: 1
      }
    ]
  },
  {
    id: 9,
    title: "音素组合（Phoneme Combinations）",
    description: "英语中的音素可以组合成不同的发音模式，掌握这些组合有助于正确发音。",
    examples: [
      {
        word: "splash",
        pronunciation: "/splæʃ/",
        translation: "溅起水花"
      },
      {
        word: "street",
        pronunciation: "/striːt/",
        translation: "街道"
      },
      {
        word: "spring",
        pronunciation: "/sprɪŋ/",
        translation: "春天"
      },
      {
        word: "strong",
        pronunciation: "/strɒŋ/",
        translation: "强壮的"
      }
    ],
    rules: [
      "spl组合发/spl/音，如splash, split",
      "str组合发/str/音，如street, strong",
      "spr组合发/spr/音，如spring, spray",
      "scr组合发/skr/音，如scream, scratch",
      "掌握音素组合有助于拼读复杂单词"
    ],
    practice: [
      {
        question: "选择正确的发音：splash",
        options: ["/splæʃ/", "/spæʃ/", "/slæʃ/"],
        answer: 0
      },
      {
        question: "选择正确的发音：street",
        options: ["/striːt/", "/sriːt/", "/triːt/"],
        answer: 0
      },
      {
        question: "选择正确的发音：spring",
        options: ["/sprɪŋ/", "/spɪŋ/", "/prɪŋ/"],
        answer: 0
      }
    ]
  },
  {
    id: 10,
    title: "元音变音（Vowel Shifts）",
    description: "英语中的元音在不同环境下会发生变化，这些变化遵循一定的规则。",
    examples: [
      {
        word: "man",
        pronunciation: "/mæn/",
        translation: "男人"
      },
      {
        word: "men",
        pronunciation: "/men/",
        translation: "男人（复数）"
      },
      {
        word: "foot",
        pronunciation: "/fʊt/",
        translation: "脚"
      },
      {
        word: "feet",
        pronunciation: "/fiːt/",
        translation: "脚（复数）"
      }
    ],
    rules: [
      "a变e：单数变复数，如man-men",
      "oo变ee：单数变复数，如foot-feet",
      "i变a：过去式变化，如sing-sang",
      "e变o：过去式变化，如get-got",
      "掌握元音变音规则有助于记忆不规则变化"
    ],
    practice: [
      {
        question: "选择正确的发音：men",
        options: ["/mæn/", "/men/", "/mɪn/"],
        answer: 1
      },
      {
        question: "选择正确的发音：feet",
        options: ["/fʊt/", "/fiːt/", "/fet/"],
        answer: 1
      },
      {
        question: "选择正确的发音：sang",
        options: ["/sɪŋ/", "/sæŋ/", "/seŋ/"],
        answer: 1
      }
    ]
  },
  {
    id: 11,
    title: "音素省略（Elision）",
    description: "在英语口语中，某些音素会被省略，使发音更流畅。",
    examples: [
      {
        word: "chocolate",
        pronunciation: "/ˈtʃɒklət/",
        translation: "巧克力"
      },
      {
        word: "vegetable",
        pronunciation: "/ˈvedʒtəbl/",
        translation: "蔬菜"
      },
      {
        word: "library",
        pronunciation: "/ˈlaɪbrəri/",
        translation: "图书馆"
      },
      {
        word: "temperature",
        pronunciation: "/ˈtemprətʃə/",
        translation: "温度"
      }
    ],
    rules: [
      "多音节词中非重读音节中的元音常被省略",
      "连续辅音中常省略一个辅音",
      "词尾的辅音在快速口语中常被省略",
      "音素省略使英语口语更自然流畅",
      "掌握音素省略规则有助于提高听力理解"
    ],
    practice: [
      {
        question: "选择正确的发音：chocolate",
        options: ["/ˈtʃɒkələt/", "/ˈtʃɒklət/", "/ˈtʃɒkəleɪt/"],
        answer: 1
      },
      {
        question: "选择正确的发音：vegetable",
        options: ["/ˈvedʒɪtəbl/", "/ˈvedʒtəbl/", "/ˈvedʒɪteɪbl/"],
        answer: 1
      },
      {
        question: "选择正确的发音：library",
        options: ["/ˈlaɪbrəri/", "/ˈlaɪbri/", "/ˈlaɪbrɪri/"],
        answer: 0
      }
    ]
  },
  {
    id: 12,
    title: "音素同化（Assimilation）",
    description: "在英语口语中，相邻音素会相互影响，使发音更自然。",
    examples: [
      {
        word: "handbag",
        pronunciation: "/ˈhæmbæɡ/",
        translation: "手提包"
      },
      {
        word: "sandwich",
        pronunciation: "/ˈsænwɪtʃ/",
        translation: "三明治"
      },
      {
        word: "input",
        pronunciation: "/ˈɪmpʊt/",
        translation: "输入"
      },
      {
        word: "ten boys",
        pronunciation: "/tem bɔɪz/",
        translation: "十个男孩"
      }
    ],
    rules: [
      "nd在b前常变为m，如handbag",
      "n在p前常变为m，如input",
      "n在k/g前常变为ŋ，如think",
      "t在p/b前常变为p，如ten boys",
      "音素同化使英语口语更自然流畅"
    ],
    practice: [
      {
        question: "选择正确的发音：handbag",
        options: ["/ˈhændbæɡ/", "/ˈhæmbæɡ/", "/ˈhænbæɡ/"],
        answer: 1
      },
      {
        question: "选择正确的发音：input",
        options: ["/ˈɪnput/", "/ˈɪmput/", "/ˈɪŋput/"],
        answer: 1
      },
      {
        question: "选择正确的发音：ten boys",
        options: ["/ten bɔɪz/", "/tem bɔɪz/", "/tep bɔɪz/"],
        answer: 1
      }
    ]
  }
];

export const pronunciationItems: PronunciationItem[] = [
  {
    id: 1,
    title: "重音（Stress）",
    description: "英语中的重音是指单词或短语中发音较重、较长的音节。",
    examples: [
      {
        phrase: "computer",
        pronunciation: "com-PU-ter",
        translation: "电脑"
      },
      {
        phrase: "beautiful",
        pronunciation: "BEAU-ti-ful",
        translation: "美丽的"
      },
      {
        phrase: "international",
        pronunciation: "in-ter-NA-tion-al",
        translation: "国际的"
      }
    ],
    rules: [
      "双音节名词通常重音在第一个音节",
      "双音节动词通常重音在第二个音节",
      "三音节及以上的单词通常有一个主重音和一个次重音",
      "重音会影响单词的发音，特别是元音的发音"
    ],
    practice: [
      {
        question: "选择正确的重音位置：computer",
        options: ["COM-pu-ter", "com-PU-ter", "com-pu-TER"],
        answer: 1
      },
      {
        question: "选择正确的重音位置：beautiful",
        options: ["BEAU-ti-ful", "beau-TI-ful", "beau-ti-FUL"],
        answer: 0
      },
      {
        question: "选择正确的重音位置：international",
        options: ["IN-ter-na-tion-al", "in-TER-na-tion-al", "in-ter-NA-tion-al"],
        answer: 2
      }
    ]
  },
  {
    id: 2,
    title: "连读（Linking）",
    description: "连读是指英语口语中，单词之间的音素连接在一起发音的现象。",
    examples: [
      {
        phrase: "get up",
        pronunciation: "ge-tup",
        translation: "起床"
      },
      {
        phrase: "look at",
        pronunciation: "loo-kat",
        translation: "看"
      },
      {
        phrase: "I am",
        pronunciation: "I-yam",
        translation: "我是"
      },
      {
        phrase: "in the",
        pronunciation: "in-the",
        translation: "在...里"
      }
    ],
    rules: [
      "辅音+元音连读：前一个单词以辅音结尾，后一个单词以元音开头时，将辅音和元音连读",
      "元音+元音连读：前一个单词以元音结尾，后一个单词以元音开头时，通常加入/j/或/w/音连接",
      "辅音+辅音连读：前一个单词以辅音结尾，后一个单词以相同的辅音开头时，只发一次音",
      "连读使英语口语更流畅自然"
    ],
    practice: [
      {
        question: "选择正确的连读：get up",
        options: ["ge-t up", "ge-tup", "get up"],
        answer: 1
      },
      {
        question: "选择正确的连读：look at",
        options: ["loo-k at", "loo-kat", "look at"],
        answer: 1
      },
      {
        question: "选择正确的连读：I am",
        options: ["I am", "I-yam", "I-am"],
        answer: 1
      }
    ]
  },
  {
    id: 3,
    title: "语调（Intonation）",
    description: "语调是指英语口语中音高的变化，用于表达不同的语气和情感。",
    examples: [
      {
        phrase: "It's a beautiful day.",
        pronunciation: "↗It's a beautiful day↘.",
        translation: "今天是个美丽的日子。"
      },
      {
        phrase: "Are you going to the party?",
        pronunciation: "↗Are you going to the party↗?",
        translation: "你要去参加派对吗？"
      },
      {
        phrase: "What a beautiful day!",
        pronunciation: "↗What a beautiful day↘!",
        translation: "多美好的一天啊！"
      },
      {
        phrase: "I don't like it.",
        pronunciation: "↘I don't like it↘.",
        translation: "我不喜欢它。"
      }
    ],
    rules: [
      "陈述句通常用降调↘",
      "一般疑问句通常用升调↗",
      "特殊疑问句通常用降调↘",
      "感叹句通常用降调↘",
      "语调变化能表达不同的情感和语气"
    ],
    practice: [
      {
        question: "选择正确的语调：It's a beautiful day.",
        options: ["↗It's a beautiful day↘.", "↘It's a beautiful day↗.", "↗It's a beautiful day↗."],
        answer: 0
      },
      {
        question: "选择正确的语调：Are you going to the party?",
        options: ["↘Are you going to the party↘?", "↗Are you going to the party↗?", "↘Are you going to the party↗?"],
        answer: 1
      },
      {
        question: "选择正确的语调：What a beautiful day!",
        options: ["↗What a beautiful day↘!", "↘What a beautiful day↗!", "↗What a beautiful day↗!"],
        answer: 0
      }
    ]
  },
  {
    id: 4,
    title: "弱读与强读（Weak and Strong Forms）",
    description: "英语中的某些常用词在句子中有弱读和强读两种形式。",
    examples: [
      {
        phrase: "I am a student.",
        pronunciation: "I'm a student.",
        translation: "我是一个学生。"
      },
      {
        phrase: "Where are you going?",
        pronunciation: "Where're you going?",
        translation: "你要去哪里？"
      },
      {
        phrase: "I have been there.",
        pronunciation: "I've been there.",
        translation: "我去过那里。"
      },
      {
        phrase: "She is not at home.",
        pronunciation: "She's not at home.",
        translation: "她不在家。"
      }
    ],
    rules: [
      "be动词在句子中通常弱读，如am→'m, is→'s, are→'re",
      "have在句子中通常弱读，如have→'ve, has→'s",
      "助动词在句子中通常弱读，如will→'ll, would→'d",
      "弱读使英语口语更自然流畅",
      "在强调时常用强读形式"
    ],
    practice: [
      {
        question: "选择正确的弱读：I am a student.",
        options: ["I am a student.", "I'm a student.", "I a student."],
        answer: 1
      },
      {
        question: "选择正确的弱读：Where are you going?",
        options: ["Where are you going?", "Where're you going?", "Where you going?"],
        answer: 1
      },
      {
        question: "选择正确的弱读：I have been there.",
        options: ["I have been there.", "I've been there.", "I been there."],
        answer: 1
      }
    ]
  },
  {
    id: 5,
    title: "音素替换（Phoneme Substitution）",
    description: "在英语口语中，某些音素会被替换，使发音更自然。",
    examples: [
      {
        phrase: "going to",
        pronunciation: "gonna",
        translation: "将要"
      },
      {
        phrase: "want to",
        pronunciation: "wanna",
        translation: "想要"
      },
      {
        phrase: "got to",
        pronunciation: "gotta",
        translation: "必须"
      },
      {
        phrase: "kind of",
        pronunciation: "kinda",
        translation: "有点儿"
      }
    ],
    rules: [
      "going to常被替换为gonna",
      "want to常被替换为wanna",
      "got to常被替换为gotta",
      "kind of常被替换为kinda",
      "音素替换使英语口语更自然流畅"
    ],
    practice: [
      {
        question: "选择正确的替换：I'm going to school.",
        options: ["I'm going to school.", "I'm gonna school.", "I'm going school."],
        answer: 1
      },
      {
        question: "选择正确的替换：I want to eat.",
        options: ["I want to eat.", "I wanna eat.", "I want eat."],
        answer: 1
      },
      {
        question: "选择正确的替换：I got to go.",
        options: ["I got to go.", "I gotta go.", "I got go."],
        answer: 1
      }
    ]
  }
];