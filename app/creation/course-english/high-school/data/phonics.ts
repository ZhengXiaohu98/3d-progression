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
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface PronunciationItem {
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
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const phonicsItems: PhonicsItem[] = [
  {
    id: 1,
    title: "Advanced Vowel Sounds",
    description: "学习高级元音发音规则和技巧",
    examples: [
      {
        word: "through",
        pronunciation: "/θruː/",
        translation: "通过"
      },
      {
        word: "though",
        pronunciation: "/ðəʊ/",
        translation: "虽然"
      }
    ],
    rules: [
      "元音字母组合的发音规则",
      "重读音节中的元音发音",
      "非重读音节中的元音发音"
    ],
    practice: [
      {
        question: "选择正确的发音: through",
        options: ["/θruː/", "/ðruː/", "/θrəʊ/", "/ðrəʊ/"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "Phonics"
  },
  {
    id: 2,
    title: "Consonant Blends",
    description: "学习辅音连缀的发音规则",
    examples: [
      {
        word: "street",
        pronunciation: "/striːt/",
        translation: "街道"
      },
      {
        word: "spring",
        pronunciation: "/sprɪŋ/",
        translation: "春天"
      }
    ],
    rules: [
      "两个或更多辅音连在一起的发音规则",
      "常见辅音连缀组合",
      "连缀中的重音位置"
    ],
    practice: [
      {
        question: "选择正确的发音: street",
        options: ["/striːt/", "/sriːt/", "/strit/", "/srit/"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "Phonics"
  },
  {
    id: 3,
    title: "Silent Letters",
    description: "学习英语中不发音字母的规则",
    examples: [
      {
        word: "knife",
        pronunciation: "/naɪf/",
        translation: "刀"
      },
      {
        word: "write",
        pronunciation: "/raɪt/",
        translation: "写"
      }
    ],
    rules: [
      "k在n前不发音",
      "w在r前不发音",
      "h在某些词中不发音",
      "b在m后不发音"
    ],
    practice: [
      {
        question: "选择正确的发音: knife",
        options: ["/naɪf/", "/knaɪf/", "/nɪf/", "/knɪf/"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "Phonics"
  },
  {
    id: 4,
    title: "Word Stress",
    description: "学习英语单词重音规则",
    examples: [
      {
        word: "photograph",
        pronunciation: "/ˈfəʊtəɡrɑːf/",
        translation: "照片"
      },
      {
        word: "photographer",
        pronunciation: "/fəˈtɒɡrəfə/",
        translation: "摄影师"
      }
    ],
    rules: [
      "名词通常重音在第一个音节",
      "动词通常重音在第二个音节",
      "复合词的重音规则",
      "后缀对重音的影响"
    ],
    practice: [
      {
        question: "选择正确的重音位置: photograph",
        options: ["PHO-to-graph", "pho-TO-graph", "pho-to-GRAPH", "PHO-to-graph"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 5,
    title: "Intonation Patterns",
    description: "学习英语语调模式",
    examples: [
      {
        word: "Really?",
        pronunciation: "/ˈrɪəli/",
        translation: "真的吗？"
      },
      {
        word: "Really.",
        pronunciation: "/ˈrɪəli/",
        translation: "真的。"
      }
    ],
    rules: [
      "一般疑问句用升调",
      "陈述句用降调",
      "选择疑问句的语调",
      "感叹句的语调"
    ],
    practice: [
      {
        question: "选择正确的语调: Really?",
        options: ["升调", "降调", "平调", "先升后降"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 6,
    title: "Linking Sounds",
    description: "学习英语连音规则",
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
      }
    ],
    rules: [
      "辅音与元音相连",
      "相同辅音相连",
      "元音与元音相连",
      "连音对重音的影响"
    ],
    practice: [
      {
        question: "选择正确的连音: get up",
        options: ["/ɡetʌp/", "/ɡet ʌp/", "/ɡe tʌp/", "/ɡet up/"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "Phonics"
  },
  {
    id: 7,
    title: "Schwa Sound",
    description: "学习中性元音schwa的发音规则",
    examples: [
      {
        word: "about",
        pronunciation: "/əˈbaʊt/",
        translation: "关于"
      },
      {
        word: "teacher",
        pronunciation: "/ˈtiːtʃə/",
        translation: "老师"
      }
    ],
    rules: [
      "非重读音节中的schwa音",
      "常见schwa音的位置",
      "schwa音的变化规则",
      "schwa音对重音的影响"
    ],
    practice: [
      {
        question: "选择正确的发音: about",
        options: ["/əˈbaʊt/", "/æˈbaʊt/", "/əˈbəʊt/", "/æˈbəʊt/"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "Phonics"
  },
  {
    id: 8,
    title: "Vowel Length",
    description: "学习元音长短音规则",
    examples: [
      {
        word: "sheep",
        pronunciation: "/ʃiːp/",
        translation: "羊"
      },
      {
        word: "ship",
        pronunciation: "/ʃɪp/",
        translation: "船"
      }
    ],
    rules: [
      "长元音的发音规则",
      "短元音的发音规则",
      "元音长度对词义的影响",
      "元音长度与重音的关系"
    ],
    practice: [
      {
        question: "选择正确的发音: sheep",
        options: ["/ʃiːp/", "/ʃɪp/", "/ʃep/", "/ʃip/"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "Phonics"
  },
  {
    id: 9,
    title: "Consonant Clusters",
    description: "学习辅音群的发音规则",
    examples: [
      {
        word: "strength",
        pronunciation: "/streŋθ/",
        translation: "力量"
      },
      {
        word: "sixths",
        pronunciation: "/sɪksθs/",
        translation: "第六"
      }
    ],
    rules: [
      "三个或更多辅音连在一起的规则",
      "常见辅音群的组合",
      "辅音群的简化规则",
      "辅音群中的重音位置"
    ],
    practice: [
      {
        question: "选择正确的发音: strength",
        options: ["/streŋθ/", "/strenθ/", "/streŋ/", "/stren/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 10,
    title: "Rhythm Patterns",
    description: "学习英语节奏模式",
    examples: [
      {
        word: "beautiful",
        pronunciation: "/ˈbjuːtɪfəl/",
        translation: "美丽的"
      },
      {
        word: "difficult",
        pronunciation: "/ˈdɪfɪkəlt/",
        translation: "困难的"
      }
    ],
    rules: [
      "强音节和弱音节的交替",
      "节奏对语调的影响",
      "节奏与语速的关系",
      "节奏对重音的影响"
    ],
    practice: [
      {
        question: "选择正确的节奏: beautiful",
        options: ["强-弱-弱-弱", "弱-强-弱-弱", "强-弱-强-弱", "弱-强-强-弱"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 11,
    title: "Diphthongs",
    description: "学习双元音的发音规则",
    examples: [
      {
        word: "boy",
        pronunciation: "/bɔɪ/",
        translation: "男孩"
      },
      {
        word: "house",
        pronunciation: "/haʊs/",
        translation: "房子"
      }
    ],
    rules: [
      "常见双元音组合",
      "双元音的发音特点",
      "双元音与单元音的区别",
      "双元音在重音中的变化"
    ],
    practice: [
      {
        question: "选择正确的发音: boy",
        options: ["/bɔɪ/", "/boɪ/", "/bɔi/", "/boi/"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "Phonics"
  },
  {
    id: 12,
    title: "Advanced Vowel Patterns",
    description: "学习复杂元音组合的发音规则",
    examples: [
      {
        word: "through",
        pronunciation: "/θruː/",
        translation: "通过"
      },
      {
        word: "though",
        pronunciation: "/ðəʊ/",
        translation: "虽然"
      }
    ],
    rules: [
      "复杂元音组合的发音变化",
      "元音组合在不同语境中的发音",
      "元音组合与重音的关系"
    ],
    practice: [
      {
        question: "选择正确的发音: through",
        options: ["/θruː/", "/ðruː/", "/θrəʊ/", "/ðrəʊ/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 13,
    title: "Advanced Consonant Patterns",
    description: "学习复杂辅音组合的发音规则",
    examples: [
      {
        word: "strength",
        pronunciation: "/streŋθ/",
        translation: "力量"
      },
      {
        word: "strategy",
        pronunciation: "/ˈstrætɪdʒi/",
        translation: "策略"
      }
    ],
    rules: [
      "复杂辅音组合的发音规则",
      "辅音组合在不同位置的发音变化",
      "辅音组合与重音的关系"
    ],
    practice: [
      {
        question: "选择正确的发音: strength",
        options: ["/streŋθ/", "/strenθ/", "/streŋk/", "/strenk/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 14,
    title: "Word Families",
    description: "学习词族中的发音规律",
    examples: [
      {
        word: "nation",
        pronunciation: "/ˈneɪʃn/",
        translation: "国家"
      },
      {
        word: "national",
        pronunciation: "/ˈnæʃnəl/",
        translation: "国家的"
      }
    ],
    rules: [
      "词族中的发音变化规律",
      "词缀对发音的影响",
      "词族中的重音变化"
    ],
    practice: [
      {
        question: "选择正确的发音: national",
        options: ["/ˈnæʃnəl/", "/ˈneɪʃnəl/", "/ˈnæʃənl/", "/ˈneɪʃənl/"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "Phonics"
  },
  {
    id: 15,
    title: "Advanced Word Stress",
    description: "学习复杂单词的重音规则",
    examples: [
      {
        word: "international",
        pronunciation: "/ˌɪntəˈnæʃnəl/",
        translation: "国际的"
      },
      {
        word: "environmental",
        pronunciation: "/ɪnˌvaɪrənˈmentl/",
        translation: "环境的"
      }
    ],
    rules: [
      "多音节词的重音规则",
      "复合词的重音变化",
      "重音对发音的影响"
    ],
    practice: [
      {
        question: "选择正确的重音: international",
        options: ["/ˌɪntəˈnæʃnəl/", "/ˈɪntənæʃnəl/", "/ɪntəˈnæʃənl/", "/ˈɪntənæʃənl/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 16,
    title: "Advanced Diphthongs",
    description: "学习复杂双元音的发音规则",
    examples: [
      {
        word: "power",
        pronunciation: "/ˈpaʊə/",
        translation: "力量"
      },
      {
        word: "theory",
        pronunciation: "/ˈθɪəri/",
        translation: "理论"
      }
    ],
    rules: [
      "复杂双元音的发音特点",
      "双元音在不同语境中的变化",
      "双元音与重音的关系"
    ],
    practice: [
      {
        question: "选择正确的发音: power",
        options: ["/ˈpaʊə/", "/ˈpaʊr/", "/ˈpəʊə/", "/ˈpəʊr/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 17,
    title: "Advanced Consonant Clusters",
    description: "学习复杂辅音群的发音规则",
    examples: [
      {
        word: "strength",
        pronunciation: "/streŋθ/",
        translation: "力量"
      },
      {
        word: "splendid",
        pronunciation: "/ˈsplendɪd/",
        translation: "辉煌的"
      }
    ],
    rules: [
      "复杂辅音群的发音规则",
      "辅音群在不同位置的发音变化",
      "辅音群与重音的关系"
    ],
    practice: [
      {
        question: "选择正确的发音: splendid",
        options: ["/ˈsplendɪd/", "/ˈsplenɪd/", "/ˈsplendəd/", "/ˈsplenəd/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 18,
    title: "Advanced Vowel Alternations",
    description: "学习元音交替的发音规则",
    examples: [
      {
        word: "nation",
        pronunciation: "/ˈneɪʃn/",
        translation: "国家"
      },
      {
        word: "national",
        pronunciation: "/ˈnæʃnəl/",
        translation: "国家的"
      }
    ],
    rules: [
      "元音交替的规律",
      "词缀对元音发音的影响",
      "重音对元音交替的影响"
    ],
    practice: [
      {
        question: "选择正确的发音: national",
        options: ["/ˈnæʃnəl/", "/ˈneɪʃnəl/", "/ˈnæʃənl/", "/ˈneɪʃənl/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 19,
    title: "Advanced Word Formation",
    description: "学习构词法中的发音规则",
    examples: [
      {
        word: "photograph",
        pronunciation: "/ˈfəʊtəɡrɑːf/",
        translation: "照片"
      },
      {
        word: "photography",
        pronunciation: "/fəˈtɒɡrəfi/",
        translation: "摄影"
      }
    ],
    rules: [
      "构词法对发音的影响",
      "词缀对重音的影响",
      "复合词的发音规则"
    ],
    practice: [
      {
        question: "选择正确的发音: photography",
        options: ["/fəˈtɒɡrəfi/", "/ˈfəʊtəɡrɑːfi/", "/fəˈtɒɡrəfɪ/", "/ˈfəʊtəɡrɑːfɪ/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 20,
    title: "Advanced Pronunciation Patterns",
    description: "学习高级发音模式",
    examples: [
      {
        word: "environment",
        pronunciation: "/ɪnˈvaɪrənmənt/",
        translation: "环境"
      },
      {
        word: "development",
        pronunciation: "/dɪˈveləpmənt/",
        translation: "发展"
      }
    ],
    rules: [
      "复杂单词的发音模式",
      "重音对发音的影响",
      "音素组合的规律"
    ],
    practice: [
      {
        question: "选择正确的发音: environment",
        options: ["/ɪnˈvaɪrənmənt/", "/ˈenvɪrənmənt/", "/ɪnˈvaɪrənment/", "/ˈenvɪrənment/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 21,
    title: "Advanced Rhythm Patterns",
    description: "学习高级节奏模式",
    examples: [
      {
        word: "international",
        pronunciation: "/ˌɪntəˈnæʃnəl/",
        translation: "国际的"
      },
      {
        word: "environmental",
        pronunciation: "/ɪnˌvaɪrənˈmentl/",
        translation: "环境的"
      }
    ],
    rules: [
      "复杂单词的节奏模式",
      "重音对节奏的影响",
      "节奏与语速的关系"
    ],
    practice: [
      {
        question: "选择正确的节奏: international",
        options: ["强-弱-弱-强-弱-弱", "弱-强-弱-弱-强-弱", "强-弱-强-弱-弱-强", "弱-强-强-弱-强-弱"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 22,
    title: "Advanced Intonation Patterns",
    description: "学习高级语调模式",
    examples: [
      {
        word: "Nevertheless",
        pronunciation: "/ˌnevəðəˈles/",
        translation: "然而"
      },
      {
        word: "Furthermore",
        pronunciation: "/ˌfɜːðəˈmɔː/",
        translation: "此外"
      }
    ],
    rules: [
      "连接词的语调模式",
      "转折词的语调特点",
      "强调词的语调变化"
    ],
    practice: [
      {
        question: "选择正确的语调: Nevertheless",
        options: ["升-降-升", "降-升-降", "升-平-降", "降-平-升"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 23,
    title: "Advanced Word Stress",
    description: "学习高级单词重音规则",
    examples: [
      {
        word: "characteristic",
        pronunciation: "/ˌkærəktəˈrɪstɪk/",
        translation: "特征"
      },
      {
        word: "demonstration",
        pronunciation: "/ˌdemənˈstreɪʃn/",
        translation: "演示"
      }
    ],
    rules: [
      "多音节词的重音规律",
      "词性对重音的影响",
      "重音与词义的关系"
    ],
    practice: [
      {
        question: "选择正确的重音: characteristic",
        options: ["重-轻-重-轻-轻", "轻-重-轻-重-轻", "重-轻-轻-重-轻", "轻-重-重-轻-重"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 24,
    title: "Advanced Consonant Clusters",
    description: "学习高级辅音群",
    examples: [
      {
        word: "strengths",
        pronunciation: "/streŋθs/",
        translation: "力量"
      },
      {
        word: "twelfths",
        pronunciation: "/twelfθs/",
        translation: "十二分之一"
      }
    ],
    rules: [
      "复杂辅音群的发音规则",
      "辅音群在不同位置的发音变化",
      "辅音群的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: strengths",
        options: ["/streŋθs/", "/strenθs/", "/streŋs/", "/strens/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 25,
    title: "Advanced Vowel Combinations",
    description: "学习高级元音组合",
    examples: [
      {
        word: "beautiful",
        pronunciation: "/ˈbjuːtɪfl/",
        translation: "美丽的"
      },
      {
        word: "influence",
        pronunciation: "/ˈɪnfluəns/",
        translation: "影响"
      }
    ],
    rules: [
      "复杂元音组合的发音规则",
      "元音组合在不同语境中的变化",
      "元音组合与重音的关系"
    ],
    practice: [
      {
        question: "选择正确的发音: beautiful",
        options: ["/ˈbjuːtɪfl/", "/ˈbjuːtəfl/", "/ˈbjuːtɪfəl/", "/ˈbjuːtəfəl/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 26,
    title: "Advanced Syllable Division",
    description: "学习高级音节划分规则",
    examples: [
      {
        word: "international",
        pronunciation: "/ˌɪntəˈnæʃnəl/",
        translation: "国际的"
      },
      {
        word: "environmental",
        pronunciation: "/ɪnˌvaɪrənˈmentl/",
        translation: "环境的"
      }
    ],
    rules: [
      "复杂单词的音节划分",
      "前缀和后缀的音节划分",
      "复合词的音节划分"
    ],
    practice: [
      {
        question: "选择正确的音节划分: international",
        options: ["in-ter-na-tion-al", "in-ter-na-tio-nal", "in-ter-na-tion-al", "in-ter-na-tion-al"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 27,
    title: "Advanced Word Endings",
    description: "学习高级词尾发音规则",
    examples: [
      {
        word: "development",
        pronunciation: "/dɪˈveləpmənt/",
        translation: "发展"
      },
      {
        word: "management",
        pronunciation: "/ˈmænɪdʒmənt/",
        translation: "管理"
      }
    ],
    rules: [
      "常见词尾的发音规则",
      "词尾对重音的影响",
      "词尾的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: development",
        options: ["/dɪˈveləpmənt/", "/dɪˈveləpment/", "/dɪˈveləpmənt/", "/dɪˈveləpment/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 28,
    title: "Advanced Word Beginnings",
    description: "学习高级词首发音规则",
    examples: [
      {
        word: "international",
        pronunciation: "/ˌɪntəˈnæʃnəl/",
        translation: "国际的"
      },
      {
        word: "interpersonal",
        pronunciation: "/ˌɪntəˈpɜːsənl/",
        translation: "人际的"
      }
    ],
    rules: [
      "常见词首的发音规则",
      "词首对重音的影响",
      "词首的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: international",
        options: ["/ˌɪntəˈnæʃnəl/", "/ɪnˈtɜːnæʃnəl/", "/ˌɪntəˈnæʃənəl/", "/ɪnˈtɜːnæʃənəl/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 29,
    title: "Advanced Word Middle",
    description: "学习高级词中发音规则",
    examples: [
      {
        word: "environment",
        pronunciation: "/ɪnˈvaɪrənmənt/",
        translation: "环境"
      },
      {
        word: "development",
        pronunciation: "/dɪˈveləpmənt/",
        translation: "发展"
      }
    ],
    rules: [
      "词中音节的发音规则",
      "词中对重音的影响",
      "词中的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: environment",
        options: ["/ɪnˈvaɪrənmənt/", "/ɪnˈvaɪrənment/", "/ɪnˈvaɪrənmənt/", "/ɪnˈvaɪrənment/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 30,
    title: "Advanced Word Patterns",
    description: "学习高级单词模式",
    examples: [
      {
        word: "international",
        pronunciation: "/ˌɪntəˈnæʃnəl/",
        translation: "国际的"
      },
      {
        word: "environmental",
        pronunciation: "/ɪnˌvaɪrənˈmentl/",
        translation: "环境的"
      }
    ],
    rules: [
      "常见单词模式的发音规则",
      "模式对重音的影响",
      "模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: international",
        options: ["/ˌɪntəˈnæʃnəl/", "/ɪnˈtɜːnæʃnəl/", "/ˌɪntəˈnæʃənəl/", "/ɪnˈtɜːnæʃənəl/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 31,
    title: "Advanced Word Families",
    description: "学习高级词族发音规则",
    examples: [
      {
        word: "develop",
        pronunciation: "/dɪˈveləp/",
        translation: "发展"
      },
      {
        word: "development",
        pronunciation: "/dɪˈveləpmənt/",
        translation: "发展"
      }
    ],
    rules: [
      "词族中的发音变化规则",
      "词族中的重音变化",
      "词族中的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: develop",
        options: ["/dɪˈveləp/", "/dɪˈvelɒp/", "/dɪˈveləʊp/", "/dɪˈvelɒʊp/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 32,
    title: "Advanced Syllable Patterns",
    description: "学习高级音节模式",
    examples: [
      {
        word: "technology",
        pronunciation: "/tekˈnɒlədʒi/",
        translation: "技术"
      },
      {
        word: "scientific",
        pronunciation: "/ˌsaɪənˈtɪfɪk/",
        translation: "科学的"
      }
    ],
    rules: [
      "复杂音节模式的发音规则",
      "音节模式对重音的影响",
      "音节模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: technology",
        options: ["/tekˈnɒlədʒi/", "/tekˈnɒlədʒɪ/", "/tekˈnɒlədʒiː/", "/tekˈnɒlədʒɪː/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 33,
    title: "Advanced Stress Patterns",
    description: "学习高级重音模式",
    examples: [
      {
        word: "democracy",
        pronunciation: "/dɪˈmɒkrəsi/",
        translation: "民主"
      },
      {
        word: "philosophy",
        pronunciation: "/fɪˈlɒsəfi/",
        translation: "哲学"
      }
    ],
    rules: [
      "复杂重音模式的规则",
      "重音对发音的影响",
      "重音模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: democracy",
        options: ["/dɪˈmɒkrəsi/", "/dɪˈmɒkrəsɪ/", "/dɪˈmɒkrəsiː/", "/dɪˈmɒkrəsɪː/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 34,
    title: "Advanced Intonation Patterns",
    description: "学习高级语调模式",
    examples: [
      {
        word: "analysis",
        pronunciation: "/əˈnæləsɪs/",
        translation: "分析"
      },
      {
        word: "synthesis",
        pronunciation: "/ˈsɪnθəsɪs/",
        translation: "综合"
      }
    ],
    rules: [
      "复杂语调模式的规则",
      "语调对重音的影响",
      "语调模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: analysis",
        options: ["/əˈnæləsɪs/", "/əˈnæləsɪz/", "/əˈnæləsɪːs/", "/əˈnæləsɪːz/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 35,
    title: "Advanced Rhythm Patterns",
    description: "学习高级节奏模式",
    examples: [
      {
        word: "mathematics",
        pronunciation: "/ˌmæθəˈmætɪks/",
        translation: "数学"
      },
      {
        word: "statistics",
        pronunciation: "/stəˈtɪstɪks/",
        translation: "统计学"
      }
    ],
    rules: [
      "复杂节奏模式的规则",
      "节奏对语调的影响",
      "节奏模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: mathematics",
        options: ["/ˌmæθəˈmætɪks/", "/ˌmæθəˈmætɪk/", "/ˌmæθəˈmætɪks/", "/ˌmæθəˈmætɪk/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 36,
    title: "Advanced Linking Patterns",
    description: "学习高级连音模式",
    examples: [
      {
        word: "international",
        pronunciation: "/ˌɪntəˈnæʃnəl/",
        translation: "国际的"
      },
      {
        word: "environmental",
        pronunciation: "/ɪnˌvaɪrənˈmentl/",
        translation: "环境的"
      }
    ],
    rules: [
      "复杂连音模式的规则",
      "连音对重音的影响",
      "连音模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: international",
        options: ["/ˌɪntəˈnæʃnəl/", "/ˌɪntəˈnæʃənəl/", "/ˌɪntəˈnæʃnəl/", "/ˌɪntəˈnæʃənəl/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 37,
    title: "Advanced Assimilation Patterns",
    description: "学习高级同化模式",
    examples: [
      {
        word: "education",
        pronunciation: "/ˌedʒuˈkeɪʃn/",
        translation: "教育"
      },
      {
        word: "communication",
        pronunciation: "/kəˌmjuːnɪˈkeɪʃn/",
        translation: "交流"
      }
    ],
    rules: [
      "复杂同化模式的规则",
      "同化对重音的影响",
      "同化模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: education",
        options: ["/ˌedʒuˈkeɪʃn/", "/ˌedʒuˈkeɪʃən/", "/ˌedʒuˈkeɪʃn/", "/ˌedʒuˈkeɪʃən/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 38,
    title: "Advanced Elision Patterns",
    description: "学习高级省略模式",
    examples: [
      {
        word: "temperature",
        pronunciation: "/ˈtemprətʃə/",
        translation: "温度"
      },
      {
        word: "literature",
        pronunciation: "/ˈlɪtrətʃə/",
        translation: "文学"
      }
    ],
    rules: [
      "复杂省略模式的规则",
      "省略对重音的影响",
      "省略模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: temperature",
        options: ["/ˈtemprətʃə/", "/ˈtemprətʃər/", "/ˈtemprətʃə/", "/ˈtemprətʃər/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 39,
    title: "Advanced Reduction Patterns",
    description: "学习高级弱化模式",
    examples: [
      {
        word: "laboratory",
        pronunciation: "/ləˈbɒrətri/",
        translation: "实验室"
      },
      {
        word: "necessary",
        pronunciation: "/ˈnesəsəri/",
        translation: "必要的"
      }
    ],
    rules: [
      "复杂弱化模式的规则",
      "弱化对重音的影响",
      "弱化模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: laboratory",
        options: ["/ləˈbɒrətri/", "/ləˈbɒrətɔːri/", "/ləˈbɒrətri/", "/ləˈbɒrətɔːri/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 40,
    title: "Advanced Contraction Patterns",
    description: "学习高级缩略模式",
    examples: [
      {
        word: "government",
        pronunciation: "/ˈɡʌvənmənt/",
        translation: "政府"
      },
      {
        word: "management",
        pronunciation: "/ˈmænɪdʒmənt/",
        translation: "管理"
      }
    ],
    rules: [
      "复杂缩略模式的规则",
      "缩略对重音的影响",
      "缩略模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: government",
        options: ["/ˈɡʌvənmənt/", "/ˈɡʌvərnmənt/", "/ˈɡʌvənmənt/", "/ˈɡʌvərnmənt/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 41,
    title: "Advanced Stress Patterns",
    description: "学习高级重音模式",
    examples: [
      {
        word: "photography",
        pronunciation: "/fəˈtɒɡrəfi/",
        translation: "摄影"
      },
      {
        word: "technology",
        pronunciation: "/tekˈnɒlədʒi/",
        translation: "技术"
      }
    ],
    rules: [
      "复杂重音模式的规则",
      "重音对发音的影响",
      "重音模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: photography",
        options: ["/fəˈtɒɡrəfi/", "/ˈfəʊtəɡrəfi/", "/fəˈtɒɡrəfi/", "/ˈfəʊtəɡrəfi/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 42,
    title: "Advanced Intonation Patterns",
    description: "学习高级语调模式",
    examples: [
      {
        word: "question",
        pronunciation: "/ˈkwestʃən/",
        translation: "问题"
      },
      {
        word: "statement",
        pronunciation: "/ˈsteɪtmənt/",
        translation: "陈述"
      }
    ],
    rules: [
      "复杂语调模式的规则",
      "语调对意义的影响",
      "语调模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: question",
        options: ["/ˈkwestʃən/", "/ˈkwestʃn/", "/ˈkwestʃən/", "/ˈkwestʃn/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 43,
    title: "Advanced Rhythm Patterns",
    description: "学习高级节奏模式",
    examples: [
      {
        word: "beautiful",
        pronunciation: "/ˈbjuːtɪfəl/",
        translation: "美丽的"
      },
      {
        word: "wonderful",
        pronunciation: "/ˈwʌndəfəl/",
        translation: "精彩的"
      }
    ],
    rules: [
      "复杂节奏模式的规则",
      "节奏对语调的影响",
      "节奏模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: beautiful",
        options: ["/ˈbjuːtɪfəl/", "/ˈbjuːtɪfl/", "/ˈbjuːtɪfəl/", "/ˈbjuːtɪfl/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 44,
    title: "Advanced Linking Patterns",
    description: "学习高级连音模式",
    examples: [
      {
        word: "international",
        pronunciation: "/ˌɪntəˈnæʃnəl/",
        translation: "国际的"
      },
      {
        word: "communication",
        pronunciation: "/kəˌmjuːnɪˈkeɪʃn/",
        translation: "交流"
      }
    ],
    rules: [
      "复杂连音模式的规则",
      "连音对流畅度的影响",
      "连音模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: international",
        options: ["/ˌɪntəˈnæʃnəl/", "/ˌɪntəˈnæʃənəl/", "/ˌɪntəˈnæʃnəl/", "/ˌɪntəˈnæʃənəl/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 45,
    title: "Advanced Assimilation Patterns",
    description: "学习高级同化模式",
    examples: [
      {
        word: "education",
        pronunciation: "/ˌedʒuˈkeɪʃn/",
        translation: "教育"
      },
      {
        word: "graduation",
        pronunciation: "/ˌɡrædʒuˈeɪʃn/",
        translation: "毕业"
      }
    ],
    rules: [
      "复杂同化模式的规则",
      "同化对发音的影响",
      "同化模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: education",
        options: ["/ˌedʒuˈkeɪʃn/", "/ˌedjuˈkeɪʃn/", "/ˌedʒuˈkeɪʃn/", "/ˌedjuˈkeɪʃn/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 46,
    title: "Advanced Elision Patterns",
    description: "学习高级省略模式",
    examples: [
      {
        word: "temperature",
        pronunciation: "/ˈtemprətʃə/",
        translation: "温度"
      },
      {
        word: "vegetable",
        pronunciation: "/ˈvedʒtəbl/",
        translation: "蔬菜"
      }
    ],
    rules: [
      "复杂省略模式的规则",
      "省略对发音的影响",
      "省略模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: temperature",
        options: ["/ˈtemprətʃə/", "/ˈtempərətʃə/", "/ˈtemprətʃə/", "/ˈtempərətʃə/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 47,
    title: "Advanced Reduction Patterns",
    description: "学习高级弱化模式",
    examples: [
      {
        word: "interesting",
        pronunciation: "/ˈɪntrəstɪŋ/",
        translation: "有趣的"
      },
      {
        word: "different",
        pronunciation: "/ˈdɪfrənt/",
        translation: "不同的"
      }
    ],
    rules: [
      "复杂弱化模式的规则",
      "弱化对发音的影响",
      "弱化模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: interesting",
        options: ["/ˈɪntrəstɪŋ/", "/ˈɪntərəstɪŋ/", "/ˈɪntrəstɪŋ/", "/ˈɪntərəstɪŋ/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 48,
    title: "Advanced Contraction Patterns",
    description: "学习高级缩略模式",
    examples: [
      {
        word: "laboratory",
        pronunciation: "/ləˈbɒrətri/",
        translation: "实验室"
      },
      {
        word: "necessary",
        pronunciation: "/ˈnesəsəri/",
        translation: "必要的"
      }
    ],
    rules: [
      "复杂缩略模式的规则",
      "缩略对发音的影响",
      "缩略模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: laboratory",
        options: ["/ləˈbɒrətri/", "/ləˈbɒrətɔːri/", "/ləˈbɒrətri/", "/ləˈbɒrətɔːri/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  },
  {
    id: 49,
    title: "Advanced Stress Patterns",
    description: "学习高级重音模式",
    examples: [
      {
        word: "photography",
        pronunciation: "/fəˈtɒɡrəfi/",
        translation: "摄影"
      },
      {
        word: "technology",
        pronunciation: "/tekˈnɒlədʒi/",
        translation: "技术"
      }
    ],
    rules: [
      "复杂重音模式的规则",
      "重音对发音的影响",
      "重音模式的简化规则"
    ],
    practice: [
      {
        question: "选择正确的发音: photography",
        options: ["/fəˈtɒɡrəfi/", "/ˈfəʊtəɡrəfi/", "/fəˈtɒɡrəfi/", "/ˈfəʊtəɡrəfi/"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "Phonics"
  }
];
