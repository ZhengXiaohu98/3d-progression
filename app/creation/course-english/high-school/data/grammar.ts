export interface GrammarRule {
  id: number;
  title: string;
  description: string;
  examples: {
    sentence: string;
    translation: string;
    explanation: string;
  }[];
  rules: string[];
  commonMistakes: {
    mistake: string;
    correction: string;
    explanation: string;
  }[];
  exercises: {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
  }[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const grammarRules: GrammarRule[] = [
  {
    id: 1,
    title: "Advanced Conditionals",
    description: "Master complex conditional sentences including mixed conditionals and implied conditionals.",
    examples: [
      {
        sentence: "If I had studied harder, I would be at a better university now.",
        translation: "如果我当时学习更努力，我现在就会在一所更好的大学。",
        explanation: "This is a mixed conditional combining past perfect (had studied) with present continuous (would be), showing how a past action affects the present."
      },
      {
        sentence: "Had I known about the deadline earlier, I would have submitted the paper on time.",
        translation: "如果我早知道截止日期，我就能按时提交论文了。",
        explanation: "This is an inverted conditional, more formal than 'If I had known'."
      }
    ],
    rules: [
      "Mixed conditionals combine different time frames to show how past actions affect present situations",
      "Inverted conditionals omit 'if' and use auxiliary verb inversion for more formal style",
      "Implied conditionals use words like 'otherwise', 'or else', 'in that case' to suggest conditions"
    ],
    commonMistakes: [
      {
        mistake: "If I would have known, I would tell you.",
        correction: "If I had known, I would have told you.",
        explanation: "In third conditional, use past perfect (had known) not would have known."
      },
      {
        mistake: "If I was you, I would take the job.",
        correction: "If I were you, I would take the job.",
        explanation: "Use 'were' instead of 'was' in hypothetical situations."
      }
    ],
    exercises: [
      {
        question: "Choose the correct mixed conditional:",
        options: [
          "If I had taken that job, I would be earning more now",
          "If I would have taken that job, I would be earning more now",
          "If I took that job, I would have earned more now",
          "If I would take that job, I would have earned more now"
        ],
        answer: "If I had taken that job, I would be earning more now",
        explanation: "This correctly combines past perfect (had taken) with present continuous (would be earning) to show how a past decision affects present circumstances."
      }
    ],
    difficulty: "hard",
    category: "Conditionals"
  },
  {
    id: 2,
    title: "Advanced Modals",
    description: "Learn to use modal verbs with perfect infinitives and continuous forms for expressing past probability and criticism.",
    examples: [
      {
        sentence: "She must have been working here for years.",
        translation: "她一定已经在这里工作多年了。",
        explanation: "Using 'must have been' to express strong probability about a past continuous action."
      },
      {
        sentence: "You should have told me about the meeting earlier.",
        translation: "你本应该早点告诉我关于会议的事。",
        explanation: "Using 'should have' to express criticism about a past action that didn't happen."
      }
    ],
    rules: [
      "Modal + have + past participle expresses past probability or criticism",
      "Modal + have been + -ing expresses past continuous probability",
      "Modal + be + -ing expresses present continuous probability"
    ],
    commonMistakes: [
      {
        mistake: "He must has left early.",
        correction: "He must have left early.",
        explanation: "After modals in past tense, use 'have' not 'has'."
      },
      {
        mistake: "They should to have told us.",
        correction: "They should have told us.",
        explanation: "Don't use 'to' after modals."
      }
    ],
    exercises: [
      {
        question: "Choose the correct modal construction:",
        options: [
          "She must has been working late",
          "She must have been working late",
          "She must be working late",
          "She must to have been working late"
        ],
        answer: "She must have been working late",
        explanation: "This correctly uses 'must have been' + -ing to express strong probability about a past continuous action."
      }
    ],
    difficulty: "hard",
    category: "Modals"
  },
  {
    id: 3,
    title: "Conditional Sentences",
    description: "Master the four types of conditional sentences and their specific uses in English.",
    examples: [
      {
        sentence: "If it rains tomorrow, I will stay home.",
        translation: "如果明天下雨，我就待在家里。",
        explanation: "Zero conditional: Used for general truths and habits."
      },
      {
        sentence: "If I had studied harder, I would have passed the exam.",
        translation: "如果我学习更努力，我就能通过考试了。",
        explanation: "Third conditional: Used for past hypothetical situations."
      }
    ],
    rules: [
      "Zero conditional: if + present simple, present simple",
      "First conditional: if + present simple, will + infinitive",
      "Second conditional: if + past simple, would + infinitive",
      "Third conditional: if + past perfect, would have + past participle"
    ],
    commonMistakes: [
      {
        mistake: "If I will have time, I will help you.",
        correction: "If I have time, I will help you.",
        explanation: "In first conditional, use present simple in the if-clause."
      }
    ],
    exercises: [
      {
        question: "Complete the sentence: If I ___ rich, I ___ travel the world.",
        options: [
          "am, will",
          "were, would",
          "had been, would have",
          "will be, will"
        ],
        answer: "were, would",
        explanation: "This is a second conditional expressing an unreal present situation."
      }
    ],
    difficulty: "medium",
    category: "Conditionals"
  },
  {
    id: 4,
    title: "Passive Voice",
    description: "Learn to form and use passive voice constructions effectively in different tenses.",
    examples: [
      {
        sentence: "The book was written by Shakespeare.",
        translation: "这本书是莎士比亚写的。",
        explanation: "Simple past passive: was/were + past participle"
      },
      {
        sentence: "The house is being renovated.",
        translation: "这房子正在装修。",
        explanation: "Present continuous passive: is/are being + past participle"
      }
    ],
    rules: [
      "Basic structure: be + past participle",
      "Use 'by' to introduce the agent when necessary",
      "Passive voice emphasizes the action rather than who performs it"
    ],
    commonMistakes: [
      {
        mistake: "The letter has been send yesterday.",
        correction: "The letter was sent yesterday.",
        explanation: "Use correct past participle form and appropriate tense."
      }
    ],
    exercises: [
      {
        question: "Change to passive voice: 'They are building a new bridge.'",
        options: [
          "A new bridge is being built.",
          "A new bridge is built.",
          "A new bridge was being built.",
          "A new bridge has been built."
        ],
        answer: "A new bridge is being built.",
        explanation: "Present continuous passive is used for ongoing actions."
      }
    ],
    difficulty: "medium",
    category: "Voice"
  },
  {
    id: 5,
    title: "Relative Clauses",
    description: "Master the use of defining and non-defining relative clauses to add detail to sentences.",
    examples: [
      {
        sentence: "The book which I bought yesterday is very interesting.",
        translation: "我昨天买的那本书很有趣。",
        explanation: "Defining relative clause: Essential information about the noun."
      },
      {
        sentence: "My brother, who lives in London, is a doctor.",
        translation: "我住在伦敦的哥哥是个医生。",
        explanation: "Non-defining relative clause: Additional, non-essential information."
      }
    ],
    rules: [
      "Use 'who' for people, 'which' for things",
      "Use 'that' in defining clauses",
      "Non-defining clauses are separated by commas"
    ],
    commonMistakes: [
      {
        mistake: "The man which lives next door is friendly.",
        correction: "The man who lives next door is friendly.",
        explanation: "Use 'who' for people, not 'which'."
      }
    ],
    exercises: [
      {
        question: "Choose the correct relative pronoun: 'The car ___ I bought last week is red.'",
        options: [
          "who",
          "which",
          "whom",
          "whose"
        ],
        answer: "which",
        explanation: "Use 'which' for objects and things."
      }
    ],
    difficulty: "medium",
    category: "Clauses"
  },
  {
    id: 6,
    title: "Gerunds and Infinitives",
    description: "Learn when to use gerunds (-ing form) and infinitives (to + base form) in different contexts.",
    examples: [
      {
        sentence: "I enjoy reading books.",
        translation: "我喜欢读书。",
        explanation: "Use gerund after certain verbs like 'enjoy'."
      },
      {
        sentence: "I want to learn English.",
        translation: "我想学习英语。",
        explanation: "Use infinitive after certain verbs like 'want'."
      }
    ],
    rules: [
      "Some verbs are followed by gerunds",
      "Some verbs are followed by infinitives",
      "Some verbs can be followed by both with different meanings"
    ],
    commonMistakes: [
      {
        mistake: "I enjoy to read books.",
        correction: "I enjoy reading books.",
        explanation: "'Enjoy' is always followed by a gerund."
      }
    ],
    exercises: [
      {
        question: "Choose the correct form: 'I decided ___ (study) abroad.'",
        options: [
          "studying",
          "to study",
          "study",
          "studied"
        ],
        answer: "to study",
        explanation: "'Decide' is followed by an infinitive."
      }
    ],
    difficulty: "medium",
    category: "Verb Forms"
  },
  {
    id: 7,
    title: "Articles",
    description: "Master the use of definite and indefinite articles in English.",
    examples: [
      {
        sentence: "I saw a cat in the garden.",
        translation: "我在花园里看到一只猫。",
        explanation: "Use 'a' for first mention, 'the' for specific reference."
      },
      {
        sentence: "The sun rises in the east.",
        translation: "太阳从东方升起。",
        explanation: "Use 'the' for unique objects."
      }
    ],
    rules: [
      "Use 'a' before consonant sounds, 'an' before vowel sounds",
      "Use 'the' for specific or previously mentioned things",
      "No article needed for general concepts or plural nouns"
    ],
    commonMistakes: [
      {
        mistake: "I saw the cat in a garden.",
        correction: "I saw a cat in the garden.",
        explanation: "Use 'a' for first mention of a cat, 'the' for a specific garden."
      }
    ],
    exercises: [
      {
        question: "Choose the correct article: 'I saw ___ elephant at ___ zoo.'",
        options: [
          "a, the",
          "an, the",
          "the, a",
          "the, the"
        ],
        answer: "an, the",
        explanation: "Use 'an' before 'elephant' (vowel sound) and 'the' for specific zoo."
      }
    ],
    difficulty: "easy",
    category: "Articles"
  },
  {
    id: 8,
    title: "Prepositions",
    description: "Learn common preposition usage in different contexts and expressions.",
    examples: [
      {
        sentence: "I'm interested in learning English.",
        translation: "我对学习英语感兴趣。",
        explanation: "Use 'in' after 'interested'."
      },
      {
        sentence: "The book is on the table.",
        translation: "这本书在桌子上。",
        explanation: "Use 'on' for surfaces."
      }
    ],
    rules: [
      "Some verbs require specific prepositions",
      "Prepositions of place: in, on, at",
      "Prepositions of time: in, on, at"
    ],
    commonMistakes: [
      {
        mistake: "I'm interested for learning English.",
        correction: "I'm interested in learning English.",
        explanation: "The correct preposition after 'interested' is 'in'."
      }
    ],
    exercises: [
      {
        question: "Choose the correct preposition: 'I'm good ___ playing chess.'",
        options: [
          "in",
          "at",
          "on",
          "for"
        ],
        answer: "at",
        explanation: "Use 'at' after 'good' when referring to skills."
      }
    ],
    difficulty: "medium",
    category: "Prepositions"
  },
  {
    id: 9,
    title: "Reported Speech",
    description: "Learn to transform direct speech into reported speech with appropriate tense changes.",
    examples: [
      {
        sentence: "He said, 'I am happy.' → He said that he was happy.",
        translation: "他说：'我很高兴。' → 他说他很高兴。",
        explanation: "Present simple changes to past simple in reported speech."
      },
      {
        sentence: "She said, 'I will come.' → She said that she would come.",
        translation: "她说：'我会来。' → 她说她会来。",
        explanation: "Will changes to would in reported speech."
      },
      {
        sentence: "They said, 'We have finished.' → They said that they had finished.",
        translation: "他们说：'我们已经完成了。' → 他们说他们已经完成了。",
        explanation: "Present perfect changes to past perfect in reported speech."
      }
    ],
    rules: [
      "Present simple → Past simple",
      "Present continuous → Past continuous",
      "Present perfect → Past perfect",
      "Will → Would",
      "Can → Could",
      "May → Might"
    ],
    commonMistakes: [
      {
        mistake: "He said that he is happy.",
        correction: "He said that he was happy.",
        explanation: "In reported speech, present tense changes to past tense."
      }
    ],
    exercises: [
      {
        question: "Change to reported speech: 'I will help you,' he said.",
        options: [
          "He said that he will help me.",
          "He said that he would help me.",
          "He said that he helps me.",
          "He said that he helped me."
        ],
        answer: "He said that he would help me.",
        explanation: "Will changes to would in reported speech."
      }
    ],
    difficulty: "medium",
    category: "Reported Speech"
  },
  {
    id: 10,
    title: "Conditional Sentences",
    description: "Learn to use different types of conditional sentences to express various hypothetical situations.",
    examples: [
      {
        sentence: "If it rains, I will stay home.",
        translation: "如果下雨，我就待在家里。",
        explanation: "First conditional: possible future situation."
      },
      {
        sentence: "If I had money, I would buy a car.",
        translation: "如果我有钱，我就买辆车。",
        explanation: "Second conditional: unreal present situation."
      }
    ],
    rules: [
      "First conditional: if + present simple, will + infinitive",
      "Second conditional: if + past simple, would + infinitive",
      "Third conditional: if + past perfect, would have + past participle"
    ],
    commonMistakes: [
      {
        mistake: "If I will have money, I would buy a car.",
        correction: "If I had money, I would buy a car.",
        explanation: "In second conditional, use past simple after if."
      }
    ],
    exercises: [
      {
        question: "Choose the correct conditional: 'If I ___ rich, I would travel the world.'",
        options: [
          "am",
          "will be",
          "were",
          "have been"
        ],
        answer: "were",
        explanation: "Use past simple (were) in second conditional."
      }
    ],
    difficulty: "medium",
    category: "Conditionals"
  },
  {
    id: 11,
    title: "Relative Clauses",
    description: "Learn to use relative clauses to provide additional information about nouns.",
    examples: [
      {
        sentence: "The book which is on the table is mine.",
        translation: "在桌子上的那本书是我的。",
        explanation: "Use 'which' for things."
      },
      {
        sentence: "The man who lives next door is a doctor.",
        translation: "住在隔壁的那个人是医生。",
        explanation: "Use 'who' for people."
      }
    ],
    rules: [
      "Use 'who' for people",
      "Use 'which' for things",
      "Use 'whose' for possession",
      "Use 'where' for places",
      "Use 'when' for time"
    ],
    commonMistakes: [
      {
        mistake: "The book who is on the table is mine.",
        correction: "The book which is on the table is mine.",
        explanation: "Use 'which' for things, not 'who'."
      }
    ],
    exercises: [
      {
        question: "Choose the correct relative pronoun: 'The person ___ helped me was very kind.'",
        options: [
          "which",
          "who",
          "whose",
          "where"
        ],
        answer: "who",
        explanation: "Use 'who' for people."
      }
    ],
    difficulty: "medium",
    category: "Relative Clauses"
  },
  {
    id: 12,
    title: "Passive Voice",
    description: "Learn to form and use passive voice sentences.",
    examples: [
      {
        sentence: "The letter was written by John.",
        translation: "这封信是约翰写的。",
        explanation: "Basic passive voice structure."
      },
      {
        sentence: "The house is being built.",
        translation: "这座房子正在建造中。",
        explanation: "Present continuous passive."
      }
    ],
    rules: [
      "Be + past participle",
      "Use 'by' to introduce the agent",
      "Object of active becomes subject of passive",
      "Tense changes affect the 'be' verb"
    ],
    commonMistakes: [
      {
        mistake: "The letter is wrote by John.",
        correction: "The letter is written by John.",
        explanation: "Use past participle in passive voice."
      }
    ],
    exercises: [
      {
        question: "Change to passive: 'They build houses.'",
        options: [
          "Houses are built by them.",
          "Houses were built by them.",
          "Houses have been built by them.",
          "Houses are being built by them."
        ],
        answer: "Houses are built by them.",
        explanation: "Present simple passive uses 'are' + past participle."
      }
    ],
    difficulty: "medium",
    category: "Passive Voice"
  },
  {
    id: 13,
    title: "Gerunds and Infinitives",
    description: "Learn to use gerunds and infinitives correctly after different verbs.",
    examples: [
      {
        sentence: "I enjoy reading books.",
        translation: "我喜欢读书。",
        explanation: "Use gerund after 'enjoy'."
      },
      {
        sentence: "I want to learn English.",
        translation: "我想学习英语。",
        explanation: "Use infinitive after 'want'."
      }
    ],
    rules: [
      "Some verbs are followed by gerunds",
      "Some verbs are followed by infinitives",
      "Some verbs can be followed by both",
      "Gerunds can be subjects of sentences"
    ],
    commonMistakes: [
      {
        mistake: "I enjoy to read books.",
        correction: "I enjoy reading books.",
        explanation: "Use gerund after 'enjoy'."
      }
    ],
    exercises: [
      {
        question: "Choose the correct form: 'I want ___ English.'",
        options: [
          "learning",
          "to learn",
          "learn",
          "learned"
        ],
        answer: "to learn",
        explanation: "Use infinitive after 'want'."
      }
    ],
    difficulty: "medium",
    category: "Gerunds and Infinitives"
  },
  {
    id: 14,
    title: "Articles",
    description: "Learn to use articles (a, an, the) correctly.",
    examples: [
      {
        sentence: "I saw a cat in the garden.",
        translation: "我在花园里看见一只猫。",
        explanation: "Use 'a' for first mention, 'the' for specific reference."
      },
      {
        sentence: "An apple a day keeps the doctor away.",
        translation: "一天一苹果，医生远离我。",
        explanation: "Use 'an' before vowel sounds."
      }
    ],
    rules: [
      "Use 'a' before consonant sounds",
      "Use 'an' before vowel sounds",
      "Use 'the' for specific things",
      "No article for general concepts"
    ],
    commonMistakes: [
      {
        mistake: "I saw the cat in a garden.",
        correction: "I saw a cat in the garden.",
        explanation: "Use 'a' for first mention of cat."
      }
    ],
    exercises: [
      {
        question: "Choose the correct article: 'I saw ___ elephant at ___ zoo.'",
        options: [
          "a, the",
          "an, the",
          "the, a",
          "the, the"
        ],
        answer: "an, the",
        explanation: "Use 'an' before 'elephant' (vowel sound) and 'the' for specific zoo."
      }
    ],
    difficulty: "medium",
    category: "Articles"
  },
  {
    id: 15,
    title: "Modals",
    description: "Learn to use modal verbs to express ability, permission, obligation, and probability.",
    examples: [
      {
        sentence: "I can speak English.",
        translation: "我会说英语。",
        explanation: "Use 'can' for ability."
      },
      {
        sentence: "You must finish your homework.",
        translation: "你必须完成作业。",
        explanation: "Use 'must' for strong obligation."
      }
    ],
    rules: [
      "Can/Could for ability",
      "May/Might for permission",
      "Must for obligation",
      "Should for advice",
      "Would for hypothetical situations"
    ],
    commonMistakes: [
      {
        mistake: "I can to speak English.",
        correction: "I can speak English.",
        explanation: "Modal verbs are followed by base form of verb."
      }
    ],
    exercises: [
      {
        question: "Choose the correct modal verb: 'You ___ finish your homework before watching TV.'",
        options: [
          "can",
          "must",
          "may",
          "would"
        ],
        answer: "must",
        explanation: "Use 'must' to express strong obligation."
      },
      {
        question: "Select the appropriate modal: 'I ___ speak English when I was younger.'",
        options: [
          "can",
          "could",
          "must",
          "should"
        ],
        answer: "could",
        explanation: "Use 'could' for past ability."
      }
    ],
    difficulty: "medium",
    category: "Modals"
  },
  {
    id: 16,
    title: "Conditional Sentences",
    description: "Learn to use different types of conditional sentences to express hypothetical situations and their possible outcomes.",
    examples: [
      {
        sentence: "If it rains, I will stay home.",
        translation: "如果下雨，我就待在家里。",
        explanation: "First conditional for real possibilities."
      },
      {
        sentence: "If I had money, I would buy a car.",
        translation: "如果我有钱，我就买辆车。",
        explanation: "Second conditional for unreal present situations."
      }
    ],
    rules: [
      "First conditional: if + present simple, will + base form",
      "Second conditional: if + past simple, would + base form",
      "Third conditional: if + past perfect, would have + past participle",
      "Zero conditional: if + present simple, present simple"
    ],
    commonMistakes: [
      {
        mistake: "If I will have money, I would buy a car.",
        correction: "If I had money, I would buy a car.",
        explanation: "Use past simple in if-clause of second conditional."
      }
    ],
    exercises: [
      {
        question: "Choose the correct conditional: 'If it ___ tomorrow, I ___ stay home.'",
        options: [
          "rains, will",
          "will rain, stay",
          "rained, would",
          "would rain, will"
        ],
        answer: "rains, will",
        explanation: "First conditional for real possibility."
      }
    ],
    difficulty: "hard",
    category: "Conditionals"
  },
  {
    id: 17,
    title: "Passive Voice",
    description: "学习使用被动语态来描述动作的接受者而不是执行者。",
    examples: [
      {
        sentence: "The book was written by Shakespeare.",
        translation: "这本书是莎士比亚写的。",
        explanation: "使用被动语态强调动作的接受者。"
      },
      {
        sentence: "The house is being built by workers.",
        translation: "房子正在被工人们建造。",
        explanation: "现在进行时的被动语态。"
      }
    ],
    rules: [
      "基本结构：be + 过去分词",
      "现在时：am/is/are + 过去分词",
      "过去时：was/were + 过去分词",
      "现在进行时：am/is/are being + 过去分词"
    ],
    commonMistakes: [
      {
        mistake: "The letter is send yesterday.",
        correction: "The letter was sent yesterday.",
        explanation: "过去时态需要使用was/were。"
      }
    ],
    exercises: [
      {
        question: "选择正确的被动语态：'The movie ___ by Steven Spielberg.'",
        options: [
          "directed",
          "was directed",
          "is directing",
          "has directed"
        ],
        answer: "was directed",
        explanation: "过去时的被动语态。"
      }
    ],
    difficulty: "medium",
    category: "Voice"
  },
  {
    id: 18,
    title: "Relative Clauses",
    description: "学习使用关系从句来提供额外的信息。",
    examples: [
      {
        sentence: "The man who lives next door is a doctor.",
        translation: "住在隔壁的男人是个医生。",
        explanation: "使用who引导的关系从句。"
      },
      {
        sentence: "The book which I bought yesterday is interesting.",
        translation: "我昨天买的那本书很有趣。",
        explanation: "使用which引导的关系从句。"
      }
    ],
    rules: [
      "who用于指代人",
      "which用于指代物",
      "whose表示所属关系",
      "关系从句紧跟在被修饰的名词后面"
    ],
    commonMistakes: [
      {
        mistake: "The girl which lives here is my friend.",
        correction: "The girl who lives here is my friend.",
        explanation: "指代人时使用who而不是which。"
      }
    ],
    exercises: [
      {
        question: "选择正确的关系代词：'The car ___ I bought last week is red.'",
        options: [
          "who",
          "whose",
          "which",
          "whom"
        ],
        answer: "which",
        explanation: "指代物时使用which。"
      }
    ],
    difficulty: "medium",
    category: "Clauses"
  },
  {
    id: 19,
    title: "Gerunds and Infinitives",
    description: "学习使用动名词和不定式的正确用法。",
    examples: [
      {
        sentence: "I enjoy reading books.",
        translation: "我喜欢读书。",
        explanation: "enjoy后面接动名词。"
      },
      {
        sentence: "I want to learn English.",
        translation: "我想学习英语。",
        explanation: "want后面接不定式。"
      }
    ],
    rules: [
      "某些动词后接动名词",
      "某些动词后接不定式",
      "有些动词两者都可以接",
      "动名词作主语时用单数谓语"
    ],
    commonMistakes: [
      {
        mistake: "I enjoy to read books.",
        correction: "I enjoy reading books.",
        explanation: "enjoy后接动名词而不是不定式。"
      }
    ],
    exercises: [
      {
        question: "选择正确的形式：'I decided ___ English.'",
        options: [
          "learning",
          "to learn",
          "learn",
          "learned"
        ],
        answer: "to learn",
        explanation: "decide后接不定式。"
      }
    ],
    difficulty: "medium",
    category: "Verbs"
  },
  {
    id: 20,
    title: "Articles",
    description: "学习使用冠词(a, an, the)的正确用法。",
    examples: [
      {
        sentence: "I saw a cat in the garden.",
        translation: "我在花园里看到一只猫。",
        explanation: "首次提到用a，特定地点用the。"
      },
      {
        sentence: "The sun rises in the east.",
        translation: "太阳从东方升起。",
        explanation: "独一无二的事物用the。"
      }
    ],
    rules: [
      "a用于辅音音素开头",
      "an用于元音音素开头",
      "the用于特定或已知的事物",
      "独一无二的事物用the"
    ],
    commonMistakes: [
      {
        mistake: "I saw cat in garden.",
        correction: "I saw a cat in the garden.",
        explanation: "单数可数名词前需要冠词。"
      }
    ],
    exercises: [
      {
        question: "选择正确的冠词：'I saw ___ elephant at ___ zoo.'",
        options: [
          "a, a",
          "an, the",
          "the, a",
          "a, the"
        ],
        answer: "an, the",
        explanation: "elephant以元音开头用an，特定地点用the。"
      }
    ],
    difficulty: "medium",
    category: "Articles"
  },
  {
    id: 21,
    title: "Prepositions",
    description: "学习使用介词的正确用法。",
    examples: [
      {
        sentence: "The book is on the table.",
        translation: "书在桌子上。",
        explanation: "表示位置的介词。"
      },
      {
        sentence: "I will meet you at 3 o'clock.",
        translation: "我将在3点见你。",
        explanation: "表示时间的介词。"
      }
    ],
    rules: [
      "时间介词：at, in, on",
      "地点介词：in, on, at",
      "方向介词：to, from, into",
      "固定搭配需要记忆"
    ],
    commonMistakes: [
      {
        mistake: "I will meet you in 3 o'clock.",
        correction: "I will meet you at 3 o'clock.",
        explanation: "具体时间点用at。"
      }
    ],
    exercises: [
      {
        question: "选择正确的介词：'I will see you ___ Monday ___ 2 PM.'",
        options: [
          "in, at",
          "on, at",
          "at, in",
          "on, in"
        ],
        answer: "on, at",
        explanation: "星期用on，具体时间点用at。"
      }
    ],
    difficulty: "medium",
    category: "Prepositions"
  },
  {
    id: 22,
    title: "Phrasal Verbs",
    description: "学习常用动词短语的用法。",
    examples: [
      {
        sentence: "I need to look up this word.",
        translation: "我需要查找这个单词。",
        explanation: "look up表示查找。"
      },
      {
        sentence: "Please turn off the light.",
        translation: "请关灯。",
        explanation: "turn off表示关闭。"
      }
    ],
    rules: [
      "动词+副词构成动词短语",
      "有些可以分开使用",
      "有些必须连在一起",
      "意思可能与原动词不同"
    ],
    commonMistakes: [
      {
        mistake: "I need to look this word.",
        correction: "I need to look up this word.",
        explanation: "look up是完整的动词短语。"
      }
    ],
    exercises: [
      {
        question: "选择正确的动词短语：'Please ___ the TV before you leave.'",
        options: [
          "turn up",
          "turn off",
          "turn in",
          "turn out"
        ],
        answer: "turn off",
        explanation: "turn off表示关闭。"
      }
    ],
    difficulty: "medium",
    category: "Verbs"
  },
  {
    id: 23,
    title: "Reported Speech",
    description: "学习如何转述他人的话。",
    examples: [
      {
        sentence: "He said that he was tired.",
        translation: "他说他累了。",
        explanation: "转述过去时态。"
      },
      {
        sentence: "She told me that she would come.",
        translation: "她告诉我她会来。",
        explanation: "转述将来时态。"
      }
    ],
    rules: [
      "时态要相应变化",
      "人称要相应变化",
      "时间词要相应变化",
      "that可以省略"
    ],
    commonMistakes: [
      {
        mistake: "He said I am tired.",
        correction: "He said that he was tired.",
        explanation: "转述时人称和时态都要变化。"
      }
    ],
    exercises: [
      {
        question: "选择正确的转述：'I am happy' -> He said ___",
        options: [
          "I am happy",
          "he is happy",
          "he was happy",
          "he has been happy"
        ],
        answer: "he was happy",
        explanation: "转述时需要使用过去时态。"
      }
    ],
    difficulty: "medium",
    category: "Speech"
  },
  {
    id: 24,
    title: "Gerunds and Infinitives",
    description: "学习动名词和不定式的用法。",
    examples: [
      {
        sentence: "I enjoy reading books.",
        translation: "我喜欢读书。",
        explanation: "动名词作宾语。"
      },
      {
        sentence: "I want to learn English.",
        translation: "我想学习英语。",
        explanation: "不定式作宾语。"
      }
    ],
    rules: [
      "某些动词后接动名词",
      "某些动词后接不定式",
      "某些动词两者都可接",
      "注意时态变化"
    ],
    commonMistakes: [
      {
        mistake: "I enjoy to read books.",
        correction: "I enjoy reading books.",
        explanation: "enjoy后接动名词。"
      }
    ],
    exercises: [
      {
        question: "选择正确的形式：'I want ___ English.'",
        options: [
          "learning",
          "to learn",
          "learn",
          "learned"
        ],
        answer: "to learn",
        explanation: "want后接不定式。"
      }
    ],
    difficulty: "medium",
    category: "Verbs"
  },
  {
    id: 25,
    title: "Articles",
    description: "学习冠词的用法。",
    examples: [
      {
        sentence: "I saw a cat in the garden.",
        translation: "我在花园里看到一只猫。",
        explanation: "不定冠词和定冠词的用法。"
      },
      {
        sentence: "The sun rises in the east.",
        translation: "太阳从东方升起。",
        explanation: "定冠词表示特指。"
      }
    ],
    rules: [
      "a/an用于单数可数名词",
      "the用于特指",
      "零冠词用于不可数名词",
      "注意固定搭配"
    ],
    commonMistakes: [
      {
        mistake: "I saw cat in garden.",
        correction: "I saw a cat in the garden.",
        explanation: "单数可数名词前需要冠词。"
      }
    ],
    exercises: [
      {
        question: "选择正确的冠词：'I saw ___ elephant at ___ zoo.'",
        options: [
          "a, a",
          "an, the",
          "the, a",
          "a, the"
        ],
        answer: "an, the",
        explanation: "elephant前用an，zoo前用the表示特指。"
      }
    ],
    difficulty: "easy",
    category: "Articles"
  },
  {
    id: 26,
    title: "Prepositions of Time",
    description: "学习时间介词的用法。",
    examples: [
      {
        sentence: "I will meet you at 3 o'clock.",
        translation: "我将在3点见你。",
        explanation: "具体时间点用at。"
      },
      {
        sentence: "I work on Mondays.",
        translation: "我周一工作。",
        explanation: "星期几用on。"
      }
    ],
    rules: [
      "at用于具体时间点",
      "on用于具体日期",
      "in用于月份、年份",
      "注意固定搭配"
    ],
    commonMistakes: [
      {
        mistake: "I will meet you in 3 o'clock.",
        correction: "I will meet you at 3 o'clock.",
        explanation: "具体时间点用at。"
      }
    ],
    exercises: [
      {
        question: "选择正确的介词：'I was born ___ 1990 ___ Monday.'",
        options: [
          "in, in",
          "on, on",
          "in, on",
          "at, at"
        ],
        answer: "in, on",
        explanation: "年份用in，星期几用on。"
      }
    ],
    difficulty: "easy",
    category: "Prepositions"
  },
  {
    id: 27,
    title: "Prepositions of Place",
    description: "学习地点介词的用法。",
    examples: [
      {
        sentence: "The book is on the table.",
        translation: "书在桌子上。",
        explanation: "表示在...上面用on。"
      },
      {
        sentence: "The cat is under the bed.",
        translation: "猫在床下面。",
        explanation: "表示在...下面用under。"
      }
    ],
    rules: [
      "on表示接触表面",
      "in表示在...里面",
      "at表示具体地点",
      "注意固定搭配"
    ],
    commonMistakes: [
      {
        mistake: "The book is in the table.",
        correction: "The book is on the table.",
        explanation: "表示在...上面用on。"
      }
    ],
    exercises: [
      {
        question: "选择正确的介词：'The keys are ___ the drawer.'",
        options: [
          "on",
          "in",
          "at",
          "under"
        ],
        answer: "in",
        explanation: "表示在...里面用in。"
      }
    ],
    difficulty: "easy",
    category: "Prepositions"
  },
  {
    id: 28,
    title: "Comparatives and Superlatives",
    description: "学习比较级和最高级的用法。",
    examples: [
      {
        sentence: "This book is more interesting than that one.",
        translation: "这本书比那本更有趣。",
        explanation: "比较级用法。"
      },
      {
        sentence: "This is the most interesting book I've ever read.",
        translation: "这是我读过的最有趣的书。",
        explanation: "最高级用法。"
      }
    ],
    rules: [
      "单音节词加er/est",
      "多音节词加more/most",
      "不规则变化要记忆",
      "最高级前要加the"
    ],
    commonMistakes: [
      {
        mistake: "This book is more interestinger than that one.",
        correction: "This book is more interesting than that one.",
        explanation: "多音节词直接用more。"
      }
    ],
    exercises: [
      {
        question: "选择正确的形式：'This is ___ book I've ever read.'",
        options: [
          "more interesting",
          "the most interesting",
          "interestingest",
          "most interesting"
        ],
        answer: "the most interesting",
        explanation: "最高级前要加the。"
      }
    ],
    difficulty: "medium",
    category: "Adjectives"
  },
  {
    id: 29,
    title: "Countable and Uncountable Nouns",
    description: "学习可数名词和不可数名词的用法。",
    examples: [
      {
        sentence: "I have three books.",
        translation: "我有三本书。",
        explanation: "可数名词可以用数字修饰。"
      },
      {
        sentence: "I need some water.",
        translation: "我需要一些水。",
        explanation: "不可数名词用some修饰。"
      }
    ],
    rules: [
      "可数名词有单复数",
      "不可数名词没有复数",
      "可数名词前可用a/an",
      "不可数名词前可用some/any"
    ],
    commonMistakes: [
      {
        mistake: "I have three waters.",
        correction: "I have three glasses of water.",
        explanation: "不可数名词需要用容器词。"
      }
    ],
    exercises: [
      {
        question: "选择正确的形式：'I need ___ water.'",
        options: [
          "a",
          "some",
          "three",
          "waters"
        ],
        answer: "some",
        explanation: "不可数名词用some修饰。"
      }
    ],
    difficulty: "easy",
    category: "Nouns"
  },
  {
    id: 30,
    title: "Quantifiers",
    description: "学习数量词的用法。",
    examples: [
      {
        sentence: "I have many books.",
        translation: "我有许多书。",
        explanation: "many用于可数名词。"
      },
      {
        sentence: "I have much time.",
        translation: "我有许多时间。",
        explanation: "much用于不可数名词。"
      }
    ],
    rules: [
      "many用于可数名词",
      "much用于不可数名词",
      "a lot of两者都可用",
      "few/little表示否定"
    ],
    commonMistakes: [
      {
        mistake: "I have much books.",
        correction: "I have many books.",
        explanation: "可数名词用many。"
      }
    ],
    exercises: [
      {
        question: "选择正确的数量词：'I have ___ time.'",
        options: [
          "many",
          "much",
          "few",
          "a"
        ],
        answer: "much",
        explanation: "不可数名词用much。"
      }
    ],
    difficulty: "medium",
    category: "Nouns"
  },
  {
    id: 31,
    title: "Demonstratives",
    description: "学习指示词的用法。",
    examples: [
      {
        sentence: "This is my book.",
        translation: "这是我的书。",
        explanation: "this用于单数，指代近处。"
      },
      {
        sentence: "These are my books.",
        translation: "这些是我的书。",
        explanation: "these用于复数，指代近处。"
      },
      {
        sentence: "That is your car.",
        translation: "那是你的车。",
        explanation: "that用于单数，指代远处。"
      },
      {
        sentence: "Those are your cars.",
        translation: "那些是你的车。",
        explanation: "those用于复数，指代远处。"
      }
    ],
    rules: [
      "this/these用于近处",
      "that/those用于远处",
      "this/that用于单数",
      "these/those用于复数"
    ],
    commonMistakes: [
      {
        mistake: "This are my books.",
        correction: "These are my books.",
        explanation: "复数名词用these。"
      }
    ],
    exercises: [
      {
        question: "选择正确的指示词：'___ is my pen.'",
        options: [
          "This",
          "These",
          "That",
          "Those"
        ],
        answer: "This",
        explanation: "单数近处用this。"
      }
    ],
    difficulty: "easy",
    category: "Pronouns"
  },
  {
    id: 32,
    title: "Possessives",
    description: "学习所有格的用法。",
    examples: [
      {
        sentence: "This is my book.",
        translation: "这是我的书。",
        explanation: "my表示第一人称所有格。"
      },
      {
        sentence: "That is your car.",
        translation: "那是你的车。",
        explanation: "your表示第二人称所有格。"
      }
    ],
    rules: [
      "my/your/his/her/its/our/their用于名词前",
      "mine/yours/his/hers/ours/theirs可独立使用",
      "所有格形容词和名词之间不加冠词",
      "所有格代词可作主语或宾语"
    ],
    commonMistakes: [
      {
        mistake: "This is mine book.",
        correction: "This is my book.",
        explanation: "名词前用所有格形容词。"
      }
    ],
    exercises: [
      {
        question: "选择正确的所有格：'This is ___ book.'",
        options: [
          "I",
          "my",
          "mine",
          "me"
        ],
        answer: "my",
        explanation: "名词前用所有格形容词。"
      }
    ],
    difficulty: "easy",
    category: "Pronouns"
  },
  {
    id: 33,
    title: "Reflexive Pronouns",
    description: "学习反身代词的用法。",
    examples: [
      {
        sentence: "I hurt myself.",
        translation: "我伤到了自己。",
        explanation: "myself用于第一人称。"
      },
      {
        sentence: "She saw herself in the mirror.",
        translation: "她在镜子里看到自己。",
        explanation: "herself用于第三人称女性。"
      }
    ],
    rules: [
      "myself/yourself/himself/herself/itself/ourselves/yourselves/themselves",
      "用于表示动作的发出者和接受者是同一个人",
      "可作宾语或强调语",
      "不能作主语"
    ],
    commonMistakes: [
      {
        mistake: "I and myself went shopping.",
        correction: "I went shopping by myself.",
        explanation: "反身代词不能作主语。"
      }
    ],
    exercises: [
      {
        question: "选择正确的反身代词：'He hurt ___.'",
        options: [
          "him",
          "his",
          "himself",
          "he"
        ],
        answer: "himself",
        explanation: "第三人称男性用himself。"
      }
    ],
    difficulty: "medium",
    category: "Pronouns"
  },
  {
    id: 34,
    title: "Relative Pronouns",
    description: "学习关系代词的用法。",
    examples: [
      {
        sentence: "The book which I bought is interesting.",
        translation: "我买的那本书很有趣。",
        explanation: "which用于指代物。"
      },
      {
        sentence: "The man who lives here is my friend.",
        translation: "住在这里的那个人是我的朋友。",
        explanation: "who用于指代人。"
      }
    ],
    rules: [
      "who用于指代人",
      "which用于指代物",
      "that可用于人或物",
      "whose表示所属关系"
    ],
    commonMistakes: [
      {
        mistake: "The person which helped me is kind.",
        correction: "The person who helped me is kind.",
        explanation: "指代人用who。"
      }
    ],
    exercises: [
      {
        question: "选择正确的关系代词：'The book ___ I read was interesting.'",
        options: [
          "who",
          "which",
          "whose",
          "whom"
        ],
        answer: "which",
        explanation: "指代物用which。"
      }
    ],
    difficulty: "medium",
    category: "Pronouns"
  },
  {
    id: 35,
    title: "Interrogative Pronouns",
    description: "学习疑问代词的用法。",
    examples: [
      {
        sentence: "What is your name?",
        translation: "你叫什么名字？",
        explanation: "what用于询问事物。"
      },
      {
        sentence: "Who is that person?",
        translation: "那个人是谁？",
        explanation: "who用于询问人。"
      }
    ],
    rules: [
      "what用于询问事物",
      "who用于询问人",
      "which用于选择",
      "whose用于询问所属"
    ],
    commonMistakes: [
      {
        mistake: "Who is your favorite color?",
        correction: "What is your favorite color?",
        explanation: "询问事物用what。"
      }
    ],
    exercises: [
      {
        question: "选择正确的疑问代词：'___ is your favorite subject?'",
        options: [
          "Who",
          "What",
          "Which",
          "Whose"
        ],
        answer: "What",
        explanation: "询问事物用what。"
      }
    ],
    difficulty: "easy",
    category: "Pronouns"
  },
  {
    id: 36,
    title: "Indefinite Pronouns",
    description: "学习不定代词的用法。",
    examples: [
      {
        sentence: "Someone is at the door.",
        translation: "有人在门口。",
        explanation: "someone用于指代不确定的人。"
      },
      {
        sentence: "Something is wrong.",
        translation: "有什么不对劲。",
        explanation: "something用于指代不确定的事物。"
      }
    ],
    rules: [
      "someone/somebody用于人",
      "something用于物",
      "anyone/anybody用于否定句",
      "no one/nobody表示否定"
    ],
    commonMistakes: [
      {
        mistake: "Somebody are waiting for you.",
        correction: "Someone is waiting for you.",
        explanation: "someone是单数。"
      }
    ],
    exercises: [
      {
        question: "选择正确的不定代词：'___ is at the door.'",
        options: [
          "Someone",
          "Some people",
          "Some ones",
          "Somebody's"
        ],
        answer: "Someone",
        explanation: "指代不确定的人用someone。"
      }
    ],
    difficulty: "medium",
    category: "Pronouns"
  },
  {
    id: 37,
    title: "Reciprocal Pronouns",
    description: "学习相互代词的用法。",
    examples: [
      {
        sentence: "They love each other.",
        translation: "他们彼此相爱。",
        explanation: "each other用于两个人或物。"
      },
      {
        sentence: "The students help one another.",
        translation: "学生们互相帮助。",
        explanation: "one another用于两个以上的人或物。"
      }
    ],
    rules: [
      "each other用于两个人或物",
      "one another用于两个以上的人或物",
      "可作宾语",
      "不能作主语"
    ],
    commonMistakes: [
      {
        mistake: "Each other are friends.",
        correction: "They are friends with each other.",
        explanation: "相互代词不能作主语。"
      }
    ],
    exercises: [
      {
        question: "选择正确的相互代词：'The two friends help ___.'",
        options: [
          "each other",
          "one another",
          "themselves",
          "each others"
        ],
        answer: "each other",
        explanation: "两个人用each other。"
      }
    ],
    difficulty: "medium",
    category: "Pronouns"
  },
  {
    id: 38,
    title: "Demonstrative Adjectives",
    description: "学习指示形容词的用法。",
    examples: [
      {
        sentence: "This book is mine.",
        translation: "这本书是我的。",
        explanation: "this用于单数近处。"
      },
      {
        sentence: "Those cars are expensive.",
        translation: "那些车很贵。",
        explanation: "those用于复数远处。"
      }
    ],
    rules: [
      "this/these用于近处",
      "that/those用于远处",
      "this/that用于单数",
      "these/those用于复数"
    ],
    commonMistakes: [
      {
        mistake: "This cars are new.",
        correction: "These cars are new.",
        explanation: "复数名词前用these。"
      }
    ],
    exercises: [
      {
        question: "选择正确的指示形容词：'___ book on my desk is mine.'",
        options: [
          "This",
          "These",
          "That",
          "Those"
        ],
        answer: "This",
        explanation: "单数近处用this。"
      }
    ],
    difficulty: "easy",
    category: "Adjectives"
  },
  {
    id: 39,
    title: "Possessive Adjectives",
    description: "学习所有格形容词的用法。",
    examples: [
      {
        sentence: "My car is red.",
        translation: "我的车是红色的。",
        explanation: "my表示第一人称单数所有。"
      },
      {
        sentence: "Their house is big.",
        translation: "他们的房子很大。",
        explanation: "their表示第三人称复数所有。"
      }
    ],
    rules: [
      "my/your/his/her/its/our/their + 名词",
      "所有格形容词后必须跟名词",
      "不能单独使用",
      "表示所属关系"
    ],
    commonMistakes: [
      {
        mistake: "This is my.",
        correction: "This is mine.",
        explanation: "所有格形容词后必须跟名词。"
      }
    ],
    exercises: [
      {
        question: "选择正确的所有格形容词：'___ name is John.'",
        options: [
          "My",
          "Mine",
          "I",
          "Me"
        ],
        answer: "My",
        explanation: "所有格形容词后跟名词。"
      }
    ],
    difficulty: "easy",
    category: "Adjectives"
  },
  {
    id: 40,
    title: "Quantifiers",
    description: "学习数量词的用法。",
    examples: [
      {
        sentence: "I have some books.",
        translation: "我有一些书。",
        explanation: "some用于肯定句。"
      },
      {
        sentence: "There are many students.",
        translation: "有很多学生。",
        explanation: "many用于可数名词复数。"
      }
    ],
    rules: [
      "some/any用于可数和不可数名词",
      "many用于可数名词复数",
      "much用于不可数名词",
      "a few用于可数名词复数",
      "a little用于不可数名词"
    ],
    commonMistakes: [
      {
        mistake: "I have much books.",
        correction: "I have many books.",
        explanation: "可数名词复数用many。"
      }
    ],
    exercises: [
      {
        question: "选择正确的数量词：'There is ___ water in the glass.'",
        options: [
          "many",
          "much",
          "some",
          "few"
        ],
        answer: "some",
        explanation: "some可用于可数和不可数名词。"
      }
    ],
    difficulty: "medium",
    category: "Adjectives"
  },
  {
    id: 41,
    title: "Comparative Adjectives",
    description: "学习比较级形容词的用法。",
    examples: [
      {
        sentence: "This car is faster than that one.",
        translation: "这辆车比那辆快。",
        explanation: "单音节词加er。"
      },
      {
        sentence: "She is more beautiful than her sister.",
        translation: "她比她姐姐更漂亮。",
        explanation: "多音节词前加more。"
      }
    ],
    rules: [
      "单音节词加er",
      "多音节词前加more",
      "以e结尾加r",
      "以辅音字母+y结尾，变y为i加er",
      "重读闭音节双写末尾辅音字母加er"
    ],
    commonMistakes: [
      {
        mistake: "She is beautifuler than her sister.",
        correction: "She is more beautiful than her sister.",
        explanation: "多音节词前加more。"
      }
    ],
    exercises: [
      {
        question: "选择正确的比较级：'This book is ___ than that one.'",
        options: [
          "more good",
          "gooder",
          "better",
          "more better"
        ],
        answer: "better",
        explanation: "good是不规则变化。"
      }
    ],
    difficulty: "medium",
    category: "Adjectives"
  },
  {
    id: 42,
    title: "Superlative Adjectives",
    description: "学习最高级形容词的用法。",
    examples: [
      {
        sentence: "This is the tallest building.",
        translation: "这是最高的建筑。",
        explanation: "单音节词加est。"
      },
      {
        sentence: "She is the most intelligent student.",
        translation: "她是最聪明的学生。",
        explanation: "多音节词前加most。"
      }
    ],
    rules: [
      "单音节词加est",
      "多音节词前加most",
      "以e结尾加st",
      "以辅音字母+y结尾，变y为i加est",
      "重读闭音节双写末尾辅音字母加est",
      "最高级前要加the"
    ],
    commonMistakes: [
      {
        mistake: "She is the beautifulest girl.",
        correction: "She is the most beautiful girl.",
        explanation: "多音节词前加most。"
      }
    ],
    exercises: [
      {
        question: "选择正确的最高级：'This is ___ book I have ever read.'",
        options: [
          "the goodest",
          "the most good",
          "the best",
          "the better"
        ],
        answer: "the best",
        explanation: "good是不规则变化。"
      }
    ],
    difficulty: "medium",
    category: "Adjectives"
  },
  {
    id: 43,
    title: "Adverbs of Frequency",
    description: "学习频率副词的用法。",
    examples: [
      {
        sentence: "I always eat breakfast.",
        translation: "我总是吃早餐。",
        explanation: "always表示100%频率。"
      },
      {
        sentence: "She sometimes goes to the gym.",
        translation: "她有时去健身房。",
        explanation: "sometimes表示50%频率。"
      }
    ],
    rules: [
      "频率副词通常放在实义动词前",
      "be动词后",
      "助动词后",
      "频率从高到低：always > usually > often > sometimes > rarely > never"
    ],
    commonMistakes: [
      {
        mistake: "I go always to school.",
        correction: "I always go to school.",
        explanation: "频率副词放在实义动词前。"
      }
    ],
    exercises: [
      {
        question: "选择正确的频率副词位置：'She ___ goes to work by bus.'",
        options: [
          "always",
          "goes always",
          "go always",
          "always go"
        ],
        answer: "always",
        explanation: "频率副词放在实义动词前。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  },
  {
    id: 44,
    title: "Adverbs of Manner",
    description: "学习方式副词的用法。",
    examples: [
      {
        sentence: "He runs quickly.",
        translation: "他跑得很快。",
        explanation: "方式副词修饰动词。"
      },
      {
        sentence: "She sings beautifully.",
        translation: "她唱得很优美。",
        explanation: "形容词加ly构成方式副词。"
      }
    ],
    rules: [
      "方式副词通常放在动词后",
      "形容词加ly构成方式副词",
      "以y结尾的形容词变y为i加ly",
      "以le结尾的形容词去e加y",
      "以ll结尾的形容词加y"
    ],
    commonMistakes: [
      {
        mistake: "He quick runs.",
        correction: "He runs quickly.",
        explanation: "方式副词放在动词后。"
      }
    ],
    exercises: [
      {
        question: "选择正确的形式：'She speaks English ___.'",
        options: [
          "good",
          "well",
          "goodly",
          "goody"
        ],
        answer: "well",
        explanation: "well是good的副词形式。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  },
  {
    id: 45,
    title: "Adverbs of Time",
    description: "学习时间副词的用法。",
    examples: [
      {
        sentence: "I will see you tomorrow.",
        translation: "我明天见你。",
        explanation: "时间副词表示动作发生的时间。"
      },
      {
        sentence: "She finished her homework yesterday.",
        translation: "她昨天完成了作业。",
        explanation: "时间副词可以放在句首或句末。"
      }
    ],
    rules: [
      "时间副词通常放在句首或句末",
      "表示具体时间点的副词放在句末",
      "表示频率的副词通常放在动词前",
      "表示持续时间的副词放在句末",
      "多个时间副词同时使用时，具体时间在前，持续时间在后"
    ],
    commonMistakes: [
      {
        mistake: "I yesterday went to school.",
        correction: "I went to school yesterday.",
        explanation: "时间副词通常放在句末。"
      }
    ],
    exercises: [
      {
        question: "选择正确的位置：'I ___ went to the store.'",
        options: [
          "yesterday",
          "store yesterday",
          "the yesterday",
          "went yesterday"
        ],
        answer: "yesterday",
        explanation: "时间副词可以放在句首。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  },
  {
    id: 46,
    title: "Adverbs of Place",
    description: "学习地点副词的用法。",
    examples: [
      {
        sentence: "The cat is sleeping here.",
        translation: "猫在这里睡觉。",
        explanation: "地点副词表示动作发生的位置。"
      },
      {
        sentence: "They went there yesterday.",
        translation: "他们昨天去了那里。",
        explanation: "地点副词通常放在动词后。"
      }
    ],
    rules: [
      "地点副词通常放在动词后",
      "表示方向的地点副词放在动词后",
      "多个地点副词同时使用时，具体地点在前，方向在后",
      "地点副词可以放在句首表示强调",
      "地点副词和时间副词同时使用时，地点在前，时间在后"
    ],
    commonMistakes: [
      {
        mistake: "I here am.",
        correction: "I am here.",
        explanation: "地点副词放在动词后。"
      }
    ],
    exercises: [
      {
        question: "选择正确的位置：'The book is ___.'",
        options: [
          "here",
          "is here",
          "here is",
          "is"
        ],
        answer: "here",
        explanation: "地点副词放在动词后。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  },
  {
    id: 47,
    title: "Adverbs of Frequency",
    description: "学习频率副词的用法。",
    examples: [
      {
        sentence: "I always eat breakfast.",
        translation: "我总是吃早餐。",
        explanation: "频率副词表示动作发生的频率。"
      },
      {
        sentence: "She sometimes visits her grandmother.",
        translation: "她有时去看望她的祖母。",
        explanation: "频率副词通常放在动词前。"
      }
    ],
    rules: [
      "频率副词通常放在动词前",
      "be动词后直接跟频率副词",
      "助动词后跟频率副词",
      "频率副词可以放在句首表示强调",
      "多个频率副词同时使用时，频率高的在前"
    ],
    commonMistakes: [
      {
        mistake: "I eat always breakfast.",
        correction: "I always eat breakfast.",
        explanation: "频率副词放在动词前。"
      }
    ],
    exercises: [
      {
        question: "选择正确的位置：'She ___ goes to school.'",
        options: [
          "always",
          "goes always",
          "always goes",
          "go always"
        ],
        answer: "always",
        explanation: "频率副词放在动词前。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  },
  {
    id: 48,
    title: "Adverbs of Degree",
    description: "学习程度副词的用法。",
    examples: [
      {
        sentence: "The movie was very interesting.",
        translation: "这部电影很有趣。",
        explanation: "程度副词表示动作或状态的程度。"
      },
      {
        sentence: "She is quite tall.",
        translation: "她相当高。",
        explanation: "程度副词通常放在形容词或副词前。"
      }
    ],
    rules: [
      "程度副词通常放在形容词或副词前",
      "程度副词可以修饰动词",
      "程度副词可以放在句首表示强调",
      "多个程度副词同时使用时，程度高的在前",
      "程度副词不能修饰名词"
    ],
    commonMistakes: [
      {
        mistake: "The movie was interesting very.",
        correction: "The movie was very interesting.",
        explanation: "程度副词放在形容词前。"
      }
    ],
    exercises: [
      {
        question: "选择正确的位置：'The soup is ___ hot.'",
        options: [
          "very",
          "hot very",
          "very hot",
          "is very"
        ],
        answer: "very",
        explanation: "程度副词放在形容词前。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  },
  {
    id: 49,
    title: "Adverbs of Manner",
    description: "学习方式副词的用法。",
    examples: [
      {
        sentence: "He speaks English fluently.",
        translation: "他英语说得流利。",
        explanation: "方式副词表示动作进行的方式。"
      },
      {
        sentence: "She danced beautifully.",
        translation: "她跳舞跳得很优美。",
        explanation: "方式副词通常放在动词后。"
      }
    ],
    rules: [
      "方式副词通常放在动词后",
      "方式副词可以放在句首表示强调",
      "多个方式副词同时使用时，具体方式在前",
      "方式副词可以修饰整个句子",
      "方式副词不能修饰名词"
    ],
    commonMistakes: [
      {
        mistake: "He fluently speaks English.",
        correction: "He speaks English fluently.",
        explanation: "方式副词放在动词后。"
      }
    ],
    exercises: [
      {
        question: "选择正确的位置：'She sings ___.'",
        options: [
          "beautifully",
          "sings beautifully",
          "beautifully sings",
          "sing beautifully"
        ],
        answer: "beautifully",
        explanation: "方式副词放在动词后。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  },
  {
    id: 50,
    title: "Adverbs of Purpose",
    description: "学习目的副词的用法。",
    examples: [
      {
        sentence: "I study hard to pass the exam.",
        translation: "我努力学习以通过考试。",
        explanation: "目的副词表示动作的目的。"
      },
      {
        sentence: "She works hard in order to succeed.",
        translation: "她努力工作以取得成功。",
        explanation: "目的副词通常放在句末。"
      }
    ],
    rules: [
      "目的副词通常放在句末",
      "目的副词可以放在句首表示强调",
      "多个目的副词同时使用时，主要目的在前",
      "目的副词可以修饰整个句子",
      "目的副词不能修饰名词"
    ],
    commonMistakes: [
      {
        mistake: "I to pass the exam study hard.",
        correction: "I study hard to pass the exam.",
        explanation: "目的副词放在句末。"
      }
    ],
    exercises: [
      {
        question: "选择正确的位置：'I work hard ___.'",
        options: [
          "to succeed",
          "succeed to",
          "to work",
          "hard to"
        ],
        answer: "to succeed",
        explanation: "目的副词放在句末。"
      }
    ],
    difficulty: "medium",
    category: "Adverbs"
  },
  {
    id: 51,
    title: "Adverbs of Result",
    description: "学习结果副词的用法。",
    examples: [
      {
        sentence: "The movie was so good that I watched it twice.",
        translation: "这部电影太好了，我看了两遍。",
        explanation: "结果副词表示动作的结果。"
      },
      {
        sentence: "She worked so hard that she got promoted.",
        translation: "她工作如此努力，以至于得到了晋升。",
        explanation: "结果副词通常放在句末。"
      }
    ],
    rules: [
      "结果副词通常放在句末",
      "结果副词可以放在句首表示强调",
      "多个结果副词同时使用时，主要结果在前",
      "结果副词可以修饰整个句子",
      "结果副词不能修饰名词"
    ],
    commonMistakes: [
      {
        mistake: "The movie was good so that I watched it twice.",
        correction: "The movie was so good that I watched it twice.",
        explanation: "结果副词放在句末。"
      }
    ],
    exercises: [
      {
        question: "选择正确的位置：'The book was ___ interesting that I couldn't put it down.'",
        options: [
          "so",
          "that so",
          "so that",
          "interesting so"
        ],
        answer: "so",
        explanation: "结果副词放在句末。"
      }
    ],
    difficulty: "medium",
    category: "Adverbs"
  },
  {
    id: 52,
    title: "Adverbs of Condition",
    description: "学习条件副词的用法。",
    examples: [
      {
        sentence: "If it rains, I will stay home.",
        translation: "如果下雨，我就待在家里。",
        explanation: "条件副词表示条件。"
      },
      {
        sentence: "Unless you study hard, you won't pass the exam.",
        translation: "除非你努力学习，否则你不会通过考试。",
        explanation: "unless表示否定条件。"
      }
    ],
    rules: [
      "if引导条件从句",
      "unless表示否定条件",
      "条件副词通常放在句首",
      "条件从句用现在时表示将来",
      "主句用将来时"
    ],
    commonMistakes: [
      {
        mistake: "If it will rain, I will stay home.",
        correction: "If it rains, I will stay home.",
        explanation: "条件从句用现在时表示将来。"
      }
    ],
    exercises: [
      {
        question: "选择正确的条件副词：'___ you work hard, you will succeed.'",
        options: [
          "If",
          "Unless",
          "When",
          "While"
        ],
        answer: "If",
        explanation: "if引导条件从句。"
      }
    ],
    difficulty: "medium",
    category: "Adverbs"
  },
  {
    id: 53,
    title: "Adverbs of Purpose",
    description: "学习目的副词的用法。",
    examples: [
      {
        sentence: "I study hard so that I can pass the exam.",
        translation: "我努力学习以便能通过考试。",
        explanation: "目的副词表示目的。"
      },
      {
        sentence: "He saved money in order to buy a car.",
        translation: "他存钱是为了买车。",
        explanation: "in order to表示目的。"
      }
    ],
    rules: [
      "so that引导目的从句",
      "in order to表示目的",
      "目的副词通常放在句末",
      "目的从句用can/may",
      "目的副词可以放在句首"
    ],
    commonMistakes: [
      {
        mistake: "I study hard that I can pass the exam.",
        correction: "I study hard so that I can pass the exam.",
        explanation: "目的从句需要用so that引导。"
      }
    ],
    exercises: [
      {
        question: "选择正确的目的副词：'I work hard ___ I can support my family.'",
        options: [
          "so that",
          "in order",
          "because",
          "although"
        ],
        answer: "so that",
        explanation: "so that引导目的从句。"
      }
    ],
    difficulty: "medium",
    category: "Adverbs"
  },
  {
    id: 54,
    title: "Adverbs of Contrast",
    description: "学习对比副词的用法。",
    examples: [
      {
        sentence: "Although it was raining, we went for a walk.",
        translation: "虽然在下雨，我们还是去散步了。",
        explanation: "although表示让步。"
      },
      {
        sentence: "However, I still believe in him.",
        translation: "然而，我仍然相信他。",
        explanation: "however表示转折。"
      }
    ],
    rules: [
      "although引导让步从句",
      "however表示转折",
      "对比副词可以放在句首",
      "对比副词可以放在句中",
      "对比副词可以放在句末"
    ],
    commonMistakes: [
      {
        mistake: "Although it was raining, but we went for a walk.",
        correction: "Although it was raining, we went for a walk.",
        explanation: "although和but不能同时使用。"
      }
    ],
    exercises: [
      {
        question: "选择正确的对比副词：'___ it was difficult, I managed to finish it.'",
        options: [
          "Although",
          "Because",
          "If",
          "When"
        ],
        answer: "Although",
        explanation: "although引导让步从句。"
      }
    ],
    difficulty: "medium",
    category: "Adverbs"
  },
  {
    id: 55,
    title: "Adverbs of Time",
    description: "学习时间副词的用法。",
    examples: [
      {
        sentence: "I will see you tomorrow.",
        translation: "我明天见你。",
        explanation: "时间副词表示时间。"
      },
      {
        sentence: "She has already finished her homework.",
        translation: "她已经完成了作业。",
        explanation: "already表示已经完成。"
      }
    ],
    rules: [
      "时间副词通常放在句末",
      "already表示已经完成",
      "yet表示尚未完成",
      "时间副词可以放在句首",
      "时间副词可以放在句中"
    ],
    commonMistakes: [
      {
        mistake: "I will tomorrow see you.",
        correction: "I will see you tomorrow.",
        explanation: "时间副词通常放在句末。"
      }
    ],
    exercises: [
      {
        question: "选择正确的位置：'I have ___ finished my homework.'",
        options: [
          "already",
          "yet",
          "still",
          "never"
        ],
        answer: "already",
        explanation: "already表示已经完成。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  },
  {
    id: 56,
    title: "Adverbs of Frequency",
    description: "学习频率副词的用法。",
    examples: [
      {
        sentence: "I always eat breakfast.",
        translation: "我总是吃早餐。",
        explanation: "always表示总是。"
      },
      {
        sentence: "She sometimes goes to the gym.",
        translation: "她有时去健身房。",
        explanation: "sometimes表示有时。"
      }
    ],
    rules: [
      "频率副词通常放在句中",
      "always表示总是",
      "sometimes表示有时",
      "频率副词可以放在句首",
      "频率副词可以放在句末"
    ],
    commonMistakes: [
      {
        mistake: "I eat always breakfast.",
        correction: "I always eat breakfast.",
        explanation: "频率副词通常放在句中。"
      }
    ],
    exercises: [
      {
        question: "选择正确的位置：'I ___ go to the gym.'",
        options: [
          "always",
          "sometimes",
          "never",
          "often"
        ],
        answer: "always",
        explanation: "always表示总是。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  },
  {
    id: 57,
    title: "Adverbs of Manner",
    description: "学习方式副词的用法。",
    examples: [
      {
        sentence: "She sings beautifully.",
        translation: "她唱歌很美。",
        explanation: "方式副词表示方式。"
      },
      {
        sentence: "He runs quickly.",
        translation: "他跑得很快。",
        explanation: "方式副词通常以-ly结尾。"
      }
    ],
    rules: [
      "方式副词通常放在句末",
      "方式副词通常以-ly结尾",
      "方式副词可以放在句中",
      "方式副词可以放在句首",
      "方式副词可以修饰动词"
    ],
    commonMistakes: [
      {
        mistake: "She beautiful sings.",
        correction: "She sings beautifully.",
        explanation: "方式副词通常放在句末。"
      }
    ],
    exercises: [
      {
        question: "选择正确的方式副词：'She dances ___.'",
        options: [
          "beautifully",
          "beautiful",
          "beauty",
          "beautify"
        ],
        answer: "beautifully",
        explanation: "方式副词通常以-ly结尾。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  },
  {
    id: 58,
    title: "Adverbs of Degree",
    description: "学习程度副词的用法。",
    examples: [
      {
        sentence: "The movie was very interesting.",
        translation: "这部电影很有趣。",
        explanation: "very表示程度。"
      },
      {
        sentence: "She is quite tall.",
        translation: "她相当高。",
        explanation: "quite表示程度。"
      }
    ],
    rules: [
      "程度副词通常放在形容词前",
      "very表示程度",
      "quite表示程度",
      "程度副词可以修饰形容词",
      "程度副词可以修饰副词"
    ],
    commonMistakes: [
      {
        mistake: "The movie was interesting very.",
        correction: "The movie was very interesting.",
        explanation: "程度副词通常放在形容词前。"
      }
    ],
    exercises: [
      {
        question: "选择正确的位置：'The book was ___ interesting.'",
        options: [
          "very",
          "much",
          "many",
          "more"
        ],
        answer: "very",
        explanation: "very表示程度。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  },
  {
    id: 59,
    title: "Adverbs of Place",
    description: "学习地点副词的用法。",
    examples: [
      {
        sentence: "I will meet you here.",
        translation: "我在这里见你。",
        explanation: "here表示地点。"
      },
      {
        sentence: "She lives there.",
        translation: "她住在那里。",
        explanation: "there表示地点。"
      }
    ],
    rules: [
      "地点副词通常放在句末",
      "here和there是常用地点副词",
      "地点副词可以表示方向",
      "地点副词可以表示位置",
      "地点副词可以表示距离"
    ],
    commonMistakes: [
      {
        mistake: "I will meet you in here.",
        correction: "I will meet you here.",
        explanation: "here前不需要介词。"
      }
    ],
    exercises: [
      {
        question: "选择正确的地点副词：'Please wait ___ for me.'",
        options: [
          "here",
          "there",
          "where",
          "when"
        ],
        answer: "here",
        explanation: "here表示说话人所在的位置。"
      }
    ],
    difficulty: "easy",
    category: "Adverbs"
  }
]; 