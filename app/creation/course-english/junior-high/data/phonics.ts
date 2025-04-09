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
    title: "Short Vowels",
    description: "Short vowels are the basic vowel sounds in English. They are pronounced quickly and clearly.",
    examples: [
      {
        word: "cat",
        pronunciation: "/kæt/",
        translation: "猫"
      },
      {
        word: "bed",
        pronunciation: "/bed/",
        translation: "床"
      },
      {
        word: "big",
        pronunciation: "/bɪɡ/",
        translation: "大的"
      },
      {
        word: "hot",
        pronunciation: "/hɒt/",
        translation: "热的"
      },
      {
        word: "cup",
        pronunciation: "/kʌp/",
        translation: "杯子"
      }
    ],
    rules: [
      "Short vowels are pronounced quickly and clearly",
      "They are often found in closed syllables (syllables ending in a consonant)",
      "The vowel sound is not held as long as long vowels",
      "Common patterns include: a (cat), e (bed), i (big), o (hot), u (cup)"
    ],
    practice: [
      {
        question: "Which word has a short 'a' sound?",
        options: ["cake", "cat", "care", "car"],
        answer: 1
      },
      {
        question: "Which word has a short 'e' sound?",
        options: ["meet", "meat", "bed", "bead"],
        answer: 2
      },
      {
        question: "Which word has a short 'i' sound?",
        options: ["bite", "bit", "bike", "bind"],
        answer: 1
      }
    ],
    difficulty: "easy",
    category: "vowels"
  },
  {
    id: 2,
    title: "Long Vowels",
    description: "Long vowels are pronounced for a longer duration than short vowels. They often have a different sound quality.",
    examples: [
      {
        word: "cake",
        pronunciation: "/keɪk/",
        translation: "蛋糕"
      },
      {
        word: "meet",
        pronunciation: "/miːt/",
        translation: "遇见"
      },
      {
        word: "like",
        pronunciation: "/laɪk/",
        translation: "喜欢"
      },
      {
        word: "home",
        pronunciation: "/həʊm/",
        translation: "家"
      },
      {
        word: "moon",
        pronunciation: "/muːn/",
        translation: "月亮"
      }
    ],
    rules: [
      "Long vowels are pronounced for a longer duration than short vowels",
      "They often have a different sound quality from short vowels",
      "Common patterns include: a-e (cake), ee (meet), i-e (like), o-e (home), u-e (moon)",
      "Long vowels can also be represented by single letters in some words (go, he, hi)"
    ],
    practice: [
      {
        question: "Which word has a long 'a' sound?",
        options: ["cat", "cake", "cap", "can"],
        answer: 1
      },
      {
        question: "Which word has a long 'e' sound?",
        options: ["bed", "bead", "bet", "beg"],
        answer: 1
      },
      {
        question: "Which word has a long 'i' sound?",
        options: ["bit", "bite", "bin", "bid"],
        answer: 1
      }
    ],
    difficulty: "easy",
    category: "vowels"
  },
  {
    id: 3,
    title: "Consonant Blends",
    description: "Consonant blends are groups of two or three consonants that appear together in a word, with each consonant retaining its sound.",
    examples: [
      {
        word: "stop",
        pronunciation: "/stɒp/",
        translation: "停止"
      },
      {
        word: "play",
        pronunciation: "/pleɪ/",
        translation: "玩"
      },
      {
        word: "tree",
        pronunciation: "/triː/",
        translation: "树"
      },
      {
        word: "spring",
        pronunciation: "/sprɪŋ/",
        translation: "春天"
      },
      {
        word: "street",
        pronunciation: "/striːt/",
        translation: "街道"
      }
    ],
    rules: [
      "Consonant blends are groups of two or three consonants that appear together",
      "Each consonant in the blend retains its sound",
      "Common blends include: st (stop), pl (play), tr (tree), spr (spring), str (street)",
      "Blends can appear at the beginning, middle, or end of words"
    ],
    practice: [
      {
        question: "Which word contains the 'st' blend?",
        options: ["step", "seep", "sleep", "deep"],
        answer: 0
      },
      {
        question: "Which word contains the 'pl' blend?",
        options: ["play", "pay", "lay", "say"],
        answer: 0
      },
      {
        question: "Which word contains the 'tr' blend?",
        options: ["tree", "tee", "see", "bee"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "consonants"
  },
  {
    id: 4,
    title: "Digraphs",
    description: "Digraphs are pairs of letters that represent a single sound, different from the sounds of the individual letters.",
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
      },
      {
        word: "book",
        pronunciation: "/bʊk/",
        translation: "书"
      }
    ],
    rules: [
      "Digraphs are pairs of letters that represent a single sound",
      "The sound is different from the sounds of the individual letters",
      "Common digraphs include: sh (ship), ch (chair), th (think), ph (phone), oo (book)",
      "Some digraphs can represent different sounds in different words (oo in book vs. moon)"
    ],
    practice: [
      {
        question: "Which word contains the 'sh' digraph?",
        options: ["ship", "sip", "hip", "tip"],
        answer: 0
      },
      {
        question: "Which word contains the 'ch' digraph?",
        options: ["chair", "hair", "fair", "pair"],
        answer: 0
      },
      {
        question: "Which word contains the 'th' digraph?",
        options: ["think", "sink", "link", "rink"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "consonants"
  },
  {
    id: 5,
    title: "Diphthongs",
    description: "Diphthongs are complex vowel sounds that begin with one vowel sound and glide into another within the same syllable.",
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
      },
      {
        word: "day",
        pronunciation: "/deɪ/",
        translation: "天"
      },
      {
        word: "goat",
        pronunciation: "/ɡəʊt/",
        translation: "山羊"
      },
      {
        word: "near",
        pronunciation: "/nɪə/",
        translation: "近的"
      }
    ],
    rules: [
      "Diphthongs are combinations of two vowel sounds",
      "The first vowel sound is stronger than the second",
      "Common diphthongs include: /ɔɪ/ (boy), /aʊ/ (house), /eɪ/ (day), /əʊ/ (goat), /ɪə/ (near)",
      "Diphthongs are often represented by specific letter combinations"
    ],
    practice: [
      {
        question: "Which word contains the /ɔɪ/ diphthong?",
        options: ["boy", "bay", "buy", "bee"],
        answer: 0
      },
      {
        question: "Which word contains the /aʊ/ diphthong?",
        options: ["house", "horse", "hose", "hose"],
        answer: 0
      },
      {
        question: "Which word contains the /eɪ/ diphthong?",
        options: ["day", "die", "dee", "doe"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "vowels"
  },
  {
    id: 6,
    title: "Vowel Length",
    description: "Vowel length refers to how long a vowel sound is held. In English, vowel length can distinguish between words.",
    examples: [
      {
        word: "ship vs. sheep",
        pronunciation: "/ʃɪp/ vs. /ʃiːp/",
        translation: "船 vs. 羊"
      },
      {
        word: "bit vs. beat",
        pronunciation: "/bɪt/ vs. /biːt/",
        translation: "一点 vs. 打"
      },
      {
        word: "full vs. fool",
        pronunciation: "/fʊl/ vs. /fuːl/",
        translation: "满的 vs. 傻瓜"
      },
      {
        word: "pull vs. pool",
        pronunciation: "/pʊl/ vs. /puːl/",
        translation: "拉 vs. 池"
      },
      {
        word: "rid vs. read",
        pronunciation: "/rɪd/ vs. /riːd/",
        translation: "摆脱 vs. 读"
      }
    ],
    rules: [
      "English distinguishes between short and long vowels",
      "Short vowels are pronounced quickly: /ɪ/, /e/, /æ/, /ɒ/, /ʌ/, /ʊ/",
      "Long vowels are held longer: /iː/, /ɜː/, /ɑː/, /ɔː/, /uː/",
      "Vowel length can change the meaning of words (ship vs. sheep)",
      "Long vowels are often represented by double letters or specific letter combinations"
    ],
    practice: [
      {
        question: "Which word has a short vowel?",
        options: ["ship", "sheep", "shape", "sharp"],
        answer: 0
      },
      {
        question: "Which word has a long vowel?",
        options: ["bit", "beat", "bet", "bat"],
        answer: 1
      },
      {
        question: "Which word has a short vowel?",
        options: ["full", "fool", "food", "foot"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "vowels"
  },
  {
    id: 7,
    title: "Silent Letters",
    description: "Silent letters are letters that are written but not pronounced in certain words. They often indicate the word's origin or help distinguish between similar words.",
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
      },
      {
        word: "lamb",
        pronunciation: "/læm/",
        translation: "羔羊"
      },
      {
        word: "hour",
        pronunciation: "/aʊə/",
        translation: "小时"
      },
      {
        word: "castle",
        pronunciation: "/kɑːsl/",
        translation: "城堡"
      }
    ],
    rules: [
      "Silent 'k' often appears at the beginning of words before 'n'",
      "Silent 'w' often appears before 'r'",
      "Silent 'b' often appears after 'm'",
      "Silent 'h' often appears after 'w'",
      "Silent letters can help indicate word origin or meaning"
    ],
    practice: [
      {
        question: "Which word has a silent 'k'?",
        options: ["knife", "kite", "keep", "kind"],
        answer: 0
      },
      {
        question: "Which word has a silent 'w'?",
        options: ["write", "wait", "walk", "work"],
        answer: 0
      },
      {
        question: "Which word has a silent 'b'?",
        options: ["lamb", "lamp", "lump", "limp"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "spelling"
  },
  {
    id: 8,
    title: "Word Stress",
    description: "Word stress refers to the emphasis placed on certain syllables in words. It is important for correct pronunciation and understanding.",
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
      },
      {
        word: "photographic",
        pronunciation: "/ˌfəʊtəˈɡræfɪk/",
        translation: "摄影的"
      },
      {
        word: "computer",
        pronunciation: "/kəmˈpjuːtə/",
        translation: "电脑"
      },
      {
        word: "technology",
        pronunciation: "/tekˈnɒlədʒi/",
        translation: "技术"
      }
    ],
    rules: [
      "In two-syllable words, stress is usually on the first syllable for nouns and adjectives",
      "In two-syllable words, stress is usually on the second syllable for verbs",
      "Compound words usually stress the first part",
      "Words ending in -tion, -sion, -ic, -ical usually stress the syllable before the ending",
      "Stress can change the meaning or part of speech of a word"
    ],
    practice: [
      {
        question: "Which syllable is stressed in 'photograph'?",
        options: ["pho", "to", "graph"],
        answer: 0
      },
      {
        question: "Which syllable is stressed in 'photography'?",
        options: ["pho", "tog", "ra", "phy"],
        answer: 1
      },
      {
        question: "Which syllable is stressed in 'computer'?",
        options: ["com", "pu", "ter"],
        answer: 1
      }
    ],
    difficulty: "hard",
    category: "stress"
  },
  {
    id: 9,
    title: "Intonation",
    description: "Intonation refers to the rise and fall of pitch in speech. It helps convey meaning, emotion, and sentence type.",
    examples: [
      {
        word: "Are you going to the party?",
        pronunciation: "↗Are you going to the party?",
        translation: "你要去派对吗？"
      },
      {
        word: "I'm going to the party.",
        pronunciation: "↘I'm going to the party.",
        translation: "我要去派对。"
      },
      {
        word: "What a beautiful day!",
        pronunciation: "↘What a beautiful day!",
        translation: "多美好的一天啊！"
      },
      {
        word: "If you study hard, you'll pass the exam.",
        pronunciation: "↗If you study hard, ↘you'll pass the exam.",
        translation: "如果你努力学习，你就会通过考试。"
      }
    ],
    rules: [
      "Rising intonation (↗) is used for yes/no questions",
      "Falling intonation (↘) is used for statements and commands",
      "Rise-fall intonation (↗↘) is used for wh-questions",
      "Fall-rise intonation (↘↗) is used for uncertainty or politeness",
      "Intonation can change the meaning of a sentence"
    ],
    practice: [
      {
        question: "Which intonation pattern is used for yes/no questions?",
        options: ["Rising (↗)", "Falling (↘)", "Rise-fall (↗↘)", "Fall-rise (↘↗)"],
        answer: 0
      },
      {
        question: "Which intonation pattern is used for statements?",
        options: ["Rising (↗)", "Falling (↘)", "Rise-fall (↗↘)", "Fall-rise (↘↗)"],
        answer: 1
      },
      {
        question: "Which intonation pattern is used for wh-questions?",
        options: ["Rising (↗)", "Falling (↘)", "Rise-fall (↗↘)", "Fall-rise (↘↗)"],
        answer: 2
      }
    ],
    difficulty: "hard",
    category: "intonation"
  },
  {
    id: 10,
    title: "Rhythm",
    description: "Rhythm in English is based on the alternation of stressed and unstressed syllables. It helps make speech more natural and fluent.",
    examples: [
      {
        word: "I want to go to the store.",
        pronunciation: "I WANT to GO to the STORE.",
        translation: "我想去商店。"
      },
      {
        word: "She's reading a book in the library.",
        pronunciation: "She's READing a BOOK in the LIBrary.",
        translation: "她在图书馆看书。"
      },
      {
        word: "The cat is sleeping on the sofa.",
        pronunciation: "The CAT is SLEEPing on the SOfa.",
        translation: "猫在沙发上睡觉。"
      }
    ],
    rules: [
      "English has a stress-timed rhythm",
      "Content words (nouns, verbs, adjectives, adverbs) are usually stressed",
      "Function words (articles, prepositions, conjunctions) are usually unstressed",
      "Stressed syllables occur at regular intervals",
      "Unstressed syllables are shortened and weakened"
    ],
    practice: [
      {
        question: "Which words are typically stressed in English?",
        options: ["Content words", "Function words", "All words", "No words"],
        answer: 0
      },
      {
        question: "Which type of rhythm does English have?",
        options: ["Stress-timed", "Syllable-timed", "Mixed", "No rhythm"],
        answer: 0
      },
      {
        question: "Which words are typically unstressed in English?",
        options: ["Content words", "Function words", "All words", "No words"],
        answer: 1
      }
    ],
    difficulty: "hard",
    category: "rhythm"
  },
  {
    id: 11,
    title: "Linking",
    description: "Linking is the way words connect in natural speech. Understanding linking helps improve fluency and comprehension.",
    examples: [
      {
        word: "I am going to eat.",
        pronunciation: "I-am going-to eat.",
        translation: "我要去吃饭。"
      },
      {
        word: "She is at the store.",
        pronunciation: "She-is at-the store.",
        translation: "她在商店。"
      },
      {
        word: "Let's eat out.",
        pronunciation: "Let's eat-out.",
        translation: "我们出去吃吧。"
      },
      {
        word: "I need a book.",
        pronunciation: "I need-a book.",
        translation: "我需要一本书。"
      }
    ],
    rules: [
      "Consonant + vowel linking: The final consonant of one word connects to the initial vowel of the next word",
      "Vowel + vowel linking: A /w/ or /j/ sound is inserted between vowels",
      "Consonant + consonant linking: The final consonant of one word connects to the initial consonant of the next word",
      "Linking helps speech flow more naturally and is essential for fluent English"
    ],
    practice: [
      {
        question: "How should 'I am' be pronounced in natural speech?",
        options: ["I am", "I-am", "Iyam", "I'm"],
        answer: 1
      },
      {
        question: "How should 'going to' be pronounced in natural speech?",
        options: ["going to", "going-to", "gonna", "goingta"],
        answer: 1
      },
      {
        question: "How should 'at the' be pronounced in natural speech?",
        options: ["at the", "at-the", "athe", "ateth"],
        answer: 1
      }
    ],
    difficulty: "medium",
    category: "linking"
  },
  {
    id: 12,
    title: "Weak Forms",
    description: "Weak forms are unstressed pronunciations of common words. They are essential for natural English speech.",
    examples: [
      {
        word: "I am going to the store.",
        pronunciation: "I'm going tə the store.",
        translation: "我要去商店。"
      },
      {
        word: "She has been to Paris.",
        pronunciation: "She's bin tə Paris.",
        translation: "她去过去黎。"
      },
      {
        word: "I would like some coffee.",
        pronunciation: "I'd like səm coffee.",
        translation: "我想要一些咖啡。"
      },
      {
        word: "The book is on the table.",
        pronunciation: "The book's on the table.",
        translation: "书在桌子上。"
      }
    ],
    rules: [
      "Common weak forms include: the → /ðə/, to → /tə/, and → /ən/, of → /əv/, for → /fə/",
      "Auxiliary verbs often have weak forms: am → /əm/, is → /ɪz/, are → /ə/, have → /əv/, has → /əz/",
      "Weak forms are used in connected speech but not in isolated words",
      "Understanding weak forms is crucial for listening comprehension"
    ],
    practice: [
      {
        question: "What is the weak form of 'the'?",
        options: ["/ðiː/", "/ðə/", "/ðeɪ/", "/ðæt/"],
        answer: 1
      },
      {
        question: "What is the weak form of 'to'?",
        options: ["/tuː/", "/tə/", "/tʊ/", "/tæ/"],
        answer: 1
      },
      {
        question: "What is the weak form of 'and'?",
        options: ["/ænd/", "/ən/", "/æn/", "/ənd/"],
        answer: 1
      }
    ],
    difficulty: "medium",
    category: "weak-forms"
  },
  {
    id: 13,
    title: "Stress Shift",
    description: "Stress shift occurs when the primary stress in a word changes based on its position in a sentence or phrase.",
    examples: [
      {
        word: "record (noun) vs. record (verb)",
        pronunciation: "/ˈrekɔːd/ vs. /rɪˈkɔːd/",
        translation: "记录（名词）vs. 记录（动词）"
      },
      {
        word: "present (noun) vs. present (verb)",
        pronunciation: "/ˈpreznt/ vs. /prɪˈzent/",
        translation: "礼物（名词）vs. 呈现（动词）"
      },
      {
        word: "object (noun) vs. object (verb)",
        pronunciation: "/ˈɒbdʒekt/ vs. /əbˈdʒekt/",
        translation: "物体（名词）vs. 反对（动词）"
      },
      {
        word: "perfect (adjective) vs. perfect (verb)",
        pronunciation: "/ˈpɜːfɪkt/ vs. /pəˈfekt/",
        translation: "完美的（形容词）vs. 使完美（动词）"
      }
    ],
    rules: [
      "In English, many words have different stress patterns when used as different parts of speech",
      "Nouns and adjectives often have stress on the first syllable",
      "Verbs often have stress on the second syllable",
      "Understanding stress shift helps with pronunciation and comprehension"
    ],
    practice: [
      {
        question: "Which pronunciation is correct for the noun 'record'?",
        options: ["/rɪˈkɔːd/", "/ˈrekɔːd/", "/rekɔːd/", "/rəˈkɔːd/"],
        answer: 1
      },
      {
        question: "Which pronunciation is correct for the verb 'present'?",
        options: ["/ˈpreznt/", "/prɪˈzent/", "/preznt/", "/prəˈzent/"],
        answer: 1
      },
      {
        question: "Which pronunciation is correct for the noun 'object'?",
        options: ["/əbˈdʒekt/", "/ˈɒbdʒekt/", "/ɒbdʒekt/", "/ɒbˈdʒekt/"],
        answer: 1
      }
    ],
    difficulty: "hard",
    category: "stress-shift"
  },
  {
    id: 14,
    title: "Phoneme Contrasts",
    description: "Phoneme contrasts are differences between sounds that can change the meaning of words in English.",
    examples: [
      {
        word: "ship vs. sheep",
        pronunciation: "/ʃɪp/ vs. /ʃiːp/",
        translation: "船 vs. 羊"
      },
      {
        word: "bit vs. beat",
        pronunciation: "/bɪt/ vs. /biːt/",
        translation: "一点 vs. 打"
      },
      {
        word: "cat vs. cut",
        pronunciation: "/kæt/ vs. /kʌt/",
        translation: "猫 vs. 切"
      },
      {
        word: "bad vs. bed",
        pronunciation: "/bæd/ vs. /bed/",
        translation: "坏的 vs. 床"
      }
    ],
    rules: [
      "English has many phoneme pairs that differ only in one sound",
      "Common contrasts include: /ɪ/ vs. /iː/, /æ/ vs. /e/, /æ/ vs. /ʌ/",
      "These contrasts are essential for clear communication",
      "Mispronouncing these sounds can lead to misunderstandings"
    ],
    practice: [
      {
        question: "Which word has the /ɪ/ sound?",
        options: ["ship", "sheep", "shape", "sharp"],
        answer: 0
      },
      {
        question: "Which word has the /iː/ sound?",
        options: ["bit", "beat", "bet", "bat"],
        answer: 1
      },
      {
        question: "Which word has the /æ/ sound?",
        options: ["cat", "cut", "cot", "coat"],
        answer: 0
      }
    ],
    difficulty: "medium",
    category: "phoneme-contrasts"
  },
  {
    id: 15,
    title: "Consonant Clusters",
    description: "Consonant clusters are groups of consonants that appear together without vowels between them.",
    examples: [
      {
        word: "spring",
        pronunciation: "/sprɪŋ/",
        translation: "春天"
      },
      {
        word: "street",
        pronunciation: "/striːt/",
        translation: "街道"
      },
      {
        word: "split",
        pronunciation: "/splɪt/",
        translation: "分裂"
      },
      {
        word: "strong",
        pronunciation: "/strɒŋ/",
        translation: "强壮的"
      }
    ],
    rules: [
      "English allows up to three consonants at the beginning of a syllable",
      "Common initial clusters include: /spr/, /str/, /spl/, /skr/",
      "Final clusters can include up to four consonants, as in 'texts' /teksts/",
      "Some clusters may be difficult for non-native speakers to pronounce"
    ],
    practice: [
      {
        question: "Which word contains the /spr/ cluster?",
        options: ["spring", "string", "sting", "sing"],
        answer: 0
      },
      {
        question: "Which word contains the /str/ cluster?",
        options: ["street", "sweet", "seat", "heat"],
        answer: 0
      },
      {
        question: "Which word contains the /spl/ cluster?",
        options: ["split", "spit", "sit", "hit"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "consonant-clusters"
  }
];

export const pronunciationItems: PronunciationItem[] = [
  {
    id: 1,
    title: "Word Stress",
    description: "Word stress refers to the emphasis placed on certain syllables within words. In English, stress can change the meaning of words and is essential for clear communication.",
    examples: [
      {
        word: "record (noun) vs. record (verb)",
        pronunciation: "/ˈrekɔːd/ vs. /rɪˈkɔːd/",
        translation: "记录（名词）vs. 记录（动词）"
      },
      {
        word: "present (noun) vs. present (verb)",
        pronunciation: "/ˈpreznt/ vs. /prɪˈzent/",
        translation: "礼物（名词）vs. 呈现（动词）"
      },
      {
        word: "object (noun) vs. object (verb)",
        pronunciation: "/ˈɒbdʒekt/ vs. /əbˈdʒekt/",
        translation: "物体（名词）vs. 反对（动词）"
      }
    ],
    rules: [
      "In English, stress is placed on one syllable in each word",
      "Stress can change the meaning of words (record vs. record)",
      "Nouns often have stress on the first syllable, while verbs often have stress on the second syllable",
      "Stress is indicated by a higher pitch, longer duration, and greater volume"
    ],
    practice: [
      {
        question: "Which pronunciation is correct for the noun 'record'?",
        options: ["/rɪˈkɔːd/", "/ˈrekɔːd/", "/rekɔːd/", "/rəˈkɔːd/"],
        answer: 1
      },
      {
        question: "Which pronunciation is correct for the verb 'present'?",
        options: ["/ˈpreznt/", "/prɪˈzent/", "/preznt/", "/prəˈzent/"],
        answer: 1
      },
      {
        question: "Which pronunciation is correct for the noun 'object'?",
        options: ["/əbˈdʒekt/", "/ˈɒbdʒekt/", "/ɒbdʒekt/", "/ɒbˈdʒekt/"],
        answer: 1
      }
    ],
    difficulty: "medium",
    category: "stress"
  },
  {
    id: 2,
    title: "Sentence Stress",
    description: "Sentence stress refers to the emphasis placed on certain words within sentences. It helps convey meaning and emotion, and is essential for natural speech.",
    examples: [
      {
        word: "I want to go to the store.",
        pronunciation: "I WANT to go to the STORE.",
        translation: "我想去商店。"
      },
      {
        word: "She didn't say she was coming.",
        pronunciation: "She DIDN'T say she was COMING.",
        translation: "她没有说她要来。"
      },
      {
        word: "The book is on the table.",
        pronunciation: "The BOOK is on the TABLE.",
        translation: "书在桌子上。"
      }
    ],
    rules: [
      "In English, content words (nouns, verbs, adjectives, adverbs) are typically stressed",
      "Function words (articles, prepositions, conjunctions, pronouns) are typically unstressed",
      "Stress can change to emphasize different parts of a sentence",
      "Stressed words are pronounced with higher pitch, longer duration, and greater volume"
    ],
    practice: [
      {
        question: "Which words should be stressed in 'I want to go to the store'?",
        options: ["I, to, to, the", "want, go, store", "I, want, go, store", "to, to, the"],
        answer: 1
      },
      {
        question: "Which words should be stressed in 'She didn't say she was coming'?",
        options: ["She, say, she, was", "didn't, coming", "She, didn't, coming", "say, she, was"],
        answer: 1
      },
      {
        question: "Which words should be stressed in 'The book is on the table'?",
        options: ["The, is, on, the", "book, table", "The, book, table", "is, on, the"],
        answer: 1
      }
    ],
    difficulty: "medium",
    category: "stress"
  },
  {
    id: 3,
    title: "Intonation",
    description: "Intonation refers to the rise and fall of pitch in speech. It conveys meaning, emotion, and sentence type (statement, question, command).",
    examples: [
      {
        word: "It's a beautiful day. (statement)",
        pronunciation: "Falling intonation",
        translation: "今天天气很好。（陈述句）"
      },
      {
        word: "Is it a beautiful day? (question)",
        pronunciation: "Rising intonation",
        translation: "今天天气很好吗？（疑问句）"
      },
      {
        word: "What a beautiful day! (exclamation)",
        pronunciation: "Falling intonation with emphasis",
        translation: "多美好的一天啊！（感叹句）"
      }
    ],
    rules: [
      "Statements typically have falling intonation",
      "Yes/no questions typically have rising intonation",
      "Wh-questions (what, where, when, why, how) typically have falling intonation",
      "Exclamations typically have falling intonation with emphasis",
      "Intonation can convey emotion (surprise, doubt, sarcasm)"
    ],
    practice: [
      {
        question: "Which intonation pattern is used for statements?",
        options: ["Rising", "Falling", "Rising-falling", "Falling-rising"],
        answer: 1
      },
      {
        question: "Which intonation pattern is used for yes/no questions?",
        options: ["Rising", "Falling", "Rising-falling", "Falling-rising"],
        answer: 0
      },
      {
        question: "Which intonation pattern is used for exclamations?",
        options: ["Rising", "Falling", "Rising-falling", "Falling-rising"],
        answer: 1
      }
    ],
    difficulty: "hard",
    category: "intonation"
  },
  {
    id: 4,
    title: "Linking",
    description: "Linking refers to the way words are connected in speech. In English, words often flow together, with the end of one word connecting to the beginning of the next.",
    examples: [
      {
        word: "I am going to eat.",
        pronunciation: "I-am going-to eat.",
        translation: "我要去吃饭。"
      },
      {
        word: "She is at the store.",
        pronunciation: "She-is at-the store.",
        translation: "她在商店。"
      },
      {
        word: "Let's eat out.",
        pronunciation: "Let's eat-out.",
        translation: "我们出去吃吧。"
      }
    ],
    rules: [
      "Consonant + vowel linking: The final consonant of one word connects to the initial vowel of the next word",
      "Vowel + vowel linking: A /w/ or /j/ sound is inserted between vowels",
      "Consonant + consonant linking: The final consonant of one word connects to the initial consonant of the next word",
      "Linking helps speech flow more naturally and is essential for fluent English"
    ],
    practice: [
      {
        question: "How should 'I am' be pronounced in natural speech?",
        options: ["I am", "I-am", "Iyam", "I'm"],
        answer: 1
      },
      {
        question: "How should 'going to' be pronounced in natural speech?",
        options: ["going to", "going-to", "gonna", "goingta"],
        answer: 1
      },
      {
        question: "How should 'at the' be pronounced in natural speech?",
        options: ["at the", "at-the", "athe", "ateth"],
        answer: 1
      }
    ],
    difficulty: "medium",
    category: "linking"
  },
  {
    id: 5,
    title: "Reduction",
    description: "Reduction refers to the way certain words are shortened or weakened in connected speech. This is common in English and helps speech flow more naturally.",
    examples: [
      {
        word: "I am going to the store.",
        pronunciation: "I'm gonna the store.",
        translation: "我要去商店。"
      },
      {
        word: "What are you doing?",
        pronunciation: "Whatcha doing?",
        translation: "你在做什么？"
      },
      {
        word: "I have got to go.",
        pronunciation: "I gotta go.",
        translation: "我得走了。"
      }
    ],
    rules: [
      "Common reductions include: going to → gonna, want to → wanna, got to → gotta",
      "Auxiliary verbs are often reduced: I am → I'm, you are → you're, they are → they're",
      "Articles and prepositions are often reduced: the → th', to → t'",
      "Reductions are common in informal speech but should be used appropriately"
    ],
    practice: [
      {
        question: "What is the reduced form of 'going to'?",
        options: ["gonna", "goingta", "gointa", "gona"],
        answer: 0
      },
      {
        question: "What is the reduced form of 'want to'?",
        options: ["wanta", "wanna", "wanta", "wanta"],
        answer: 1
      },
      {
        question: "What is the reduced form of 'got to'?",
        options: ["gotta", "gota", "gotta", "gota"],
        answer: 0
      }
    ],
    difficulty: "hard",
    category: "reduction"
  }
]; 