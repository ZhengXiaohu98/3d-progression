export interface GrammarRule {
  id: number;
  title: string;
  description: string;
  examples: {
    english: string;
    chinese: string;
  }[];
  rules: string[];
  commonMistakes: string[];
  exercises: {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const grammarRules: GrammarRule[] = [
  {
    id: 1,
    title: "Present Simple Tense",
    description: "Used to express habits, general truths, and regular actions",
    examples: [
      {
        english: "I play basketball every weekend.",
        chinese: "我每个周末都打篮球。"
      },
      {
        english: "The sun rises in the east.",
        chinese: "太阳从东方升起。"
      }
    ],
    rules: [
      "Use the base form of the verb for I, you, we, they",
      "Add -s or -es for he, she, it",
      "Use do/does for questions and negatives"
    ],
    commonMistakes: [
      "Adding -s to verbs with I, you, we, they",
      "Forgetting to add -s with he, she, it",
      "Using incorrect auxiliary verbs in questions"
    ],
    exercises: [
      {
        question: "She _____ to school every day.",
        options: ["go", "goes", "going", "went"],
        correctAnswer: "goes",
        explanation: "We add -s to the verb when the subject is he, she, or it."
      },
      {
        question: "They _____ English very well.",
        options: ["speaks", "speak", "speaking", "spoke"],
        correctAnswer: "speak",
        explanation: "We use the base form of the verb with they."
      }
    ],
    difficulty: "easy",
    category: "tenses"
  },
  {
    id: 2,
    title: "Present Continuous Tense",
    description: "Used to express actions happening now or temporary situations",
    examples: [
      {
        english: "I am studying for my exam.",
        chinese: "我正在为考试学习。"
      },
      {
        english: "They are playing football in the park.",
        chinese: "他们正在公园里踢足球。"
      }
    ],
    rules: [
      "Use am/is/are + present participle (-ing form)",
      "Use for actions in progress now",
      "Use for temporary situations"
    ],
    commonMistakes: [
      "Forgetting the auxiliary verb (am/is/are)",
      "Using wrong form of the main verb",
      "Confusing with present simple"
    ],
    exercises: [
      {
        question: "Look! The baby _____.",
        options: ["cry", "cries", "is crying", "cried"],
        correctAnswer: "is crying",
        explanation: "We use present continuous for actions happening now."
      },
      {
        question: "We _____ to the cinema tonight.",
        options: ["go", "going", "are going", "goes"],
        correctAnswer: "are going",
        explanation: "We use present continuous for planned future events."
      }
    ],
    difficulty: "medium",
    category: "tenses"
  },
  {
    id: 3,
    title: "Past Simple Tense",
    description: "Used to express completed actions in the past",
    examples: [
      {
        english: "I visited Paris last summer.",
        chinese: "我去年夏天参观了巴黎。"
      },
      {
        english: "They finished their homework yesterday.",
        chinese: "他们昨天完成了作业。"
      }
    ],
    rules: [
      "Use the past form of regular verbs (-ed)",
      "Use irregular verb forms for irregular verbs",
      "Use did for questions and negatives"
    ],
    commonMistakes: [
      "Using present tense instead of past",
      "Forgetting to use did in questions",
      "Using wrong irregular verb forms"
    ],
    exercises: [
      {
        question: "She _____ to school yesterday.",
        options: ["go", "goes", "went", "going"],
        correctAnswer: "went",
        explanation: "We use the past form of irregular verbs."
      },
      {
        question: "They _____ their homework last night.",
        options: ["finish", "finishes", "finished", "finishing"],
        correctAnswer: "finished",
        explanation: "We add -ed to regular verbs in the past simple."
      }
    ],
    difficulty: "medium",
    category: "tenses"
  },
  {
    id: 4,
    title: "Future Simple Tense",
    description: "Used to express predictions and spontaneous decisions",
    examples: [
      {
        english: "I will help you with your homework.",
        chinese: "我会帮你做作业。"
      },
      {
        english: "It will rain tomorrow.",
        chinese: "明天会下雨。"
      }
    ],
    rules: [
      "Use will + base form of the verb",
      "Use for predictions about the future",
      "Use for spontaneous decisions"
    ],
    commonMistakes: [
      "Using will with if-clauses",
      "Confusing will with going to",
      "Using wrong verb form after will"
    ],
    exercises: [
      {
        question: "I _____ you tomorrow.",
        options: ["see", "will see", "seeing", "saw"],
        correctAnswer: "will see",
        explanation: "We use will + base form for future predictions."
      },
      {
        question: "They _____ to the party next week.",
        options: ["come", "will come", "coming", "came"],
        correctAnswer: "will come",
        explanation: "We use will + base form for future plans."
      }
    ],
    difficulty: "easy",
    category: "tenses"
  },
  {
    id: 5,
    title: "Present Perfect Tense",
    description: "Used to express past experiences and recent events",
    examples: [
      {
        english: "I have finished my homework.",
        chinese: "我已经完成了作业。"
      },
      {
        english: "They have lived here for ten years.",
        chinese: "他们在这里住了十年了。"
      }
    ],
    rules: [
      "Use have/has + past participle",
      "Use for past experiences",
      "Use for recent events",
      "Use with for and since"
    ],
    commonMistakes: [
      "Using wrong auxiliary verb",
      "Using wrong past participle form",
      "Confusing with past simple"
    ],
    exercises: [
      {
        question: "I _____ my homework.",
        options: ["finish", "finished", "have finished", "finishing"],
        correctAnswer: "have finished",
        explanation: "We use have/has + past participle for completed actions."
      },
      {
        question: "They _____ here for five years.",
        options: ["live", "lived", "have lived", "living"],
        correctAnswer: "have lived",
        explanation: "We use present perfect with for to express duration."
      }
    ],
    difficulty: "hard",
    category: "tenses"
  },
  {
    id: 6,
    title: "Modal Verbs",
    description: "Used to express ability, permission, obligation, and possibility",
    examples: [
      {
        english: "I can speak English.",
        chinese: "我会说英语。"
      },
      {
        english: "You must finish your homework.",
        chinese: "你必须完成作业。"
      }
    ],
    rules: [
      "Use can for ability and permission",
      "Use must for strong obligation",
      "Use should for advice",
      "Use may/might for possibility"
    ],
    commonMistakes: [
      "Using to after modal verbs",
      "Using wrong modal verb",
      "Adding -s to modal verbs"
    ],
    exercises: [
      {
        question: "You _____ finish your homework.",
        options: ["can to", "must", "should to", "may to"],
        correctAnswer: "must",
        explanation: "We use must for strong obligation, and don't use to after modal verbs."
      },
      {
        question: "I _____ speak Chinese.",
        options: ["can", "cans", "can to", "could to"],
        correctAnswer: "can",
        explanation: "We use can for ability, and don't use to or -s with modal verbs."
      }
    ],
    difficulty: "medium",
    category: "modals"
  },
  {
    id: 7,
    title: "Comparatives and Superlatives",
    description: "Used to compare things and express the highest degree",
    examples: [
      {
        english: "This book is more interesting than that one.",
        chinese: "这本书比那本更有趣。"
      },
      {
        english: "She is the tallest girl in the class.",
        chinese: "她是班里最高的女孩。"
      }
    ],
    rules: [
      "Add -er for short adjectives",
      "Use more for long adjectives",
      "Use the + -est for superlatives",
      "Use the + most for long adjective superlatives"
    ],
    commonMistakes: [
      "Using more with -er",
      "Forgetting the with superlatives",
      "Using wrong form for irregular adjectives"
    ],
    exercises: [
      {
        question: "This is _____ than that.",
        options: ["more good", "gooder", "better", "more better"],
        correctAnswer: "better",
        explanation: "Good is an irregular adjective, its comparative form is better."
      },
      {
        question: "She is _____ student in the class.",
        options: ["the more intelligent", "the most intelligent", "more intelligent", "most intelligent"],
        correctAnswer: "the most intelligent",
        explanation: "We use the + most for superlatives of long adjectives."
      }
    ],
    difficulty: "medium",
    category: "adjectives"
  },
  {
    id: 8,
    title: "Conditional Sentences",
    description: "Used to express hypothetical situations and their results",
    examples: [
      {
        english: "If it rains, I will stay at home.",
        chinese: "如果下雨，我就待在家里。"
      },
      {
        english: "If I had money, I would buy a car.",
        chinese: "如果我有钱，我就买辆车。"
      }
    ],
    rules: [
      "Use present simple in if-clause, will + base form in main clause for first conditional",
      "Use past simple in if-clause, would + base form in main clause for second conditional",
      "Use past perfect in if-clause, would have + past participle in main clause for third conditional"
    ],
    commonMistakes: [
      "Using will in if-clauses",
      "Using wrong tense combinations",
      "Forgetting would in second conditional"
    ],
    exercises: [
      {
        question: "If it _____ tomorrow, I will stay at home.",
        options: ["will rain", "rains", "would rain", "rained"],
        correctAnswer: "rains",
        explanation: "We use present simple in if-clauses of first conditional."
      },
      {
        question: "If I _____ rich, I would travel the world.",
        options: ["am", "will be", "were", "would be"],
        correctAnswer: "were",
        explanation: "We use past simple in if-clauses of second conditional."
      }
    ],
    difficulty: "hard",
    category: "conditionals"
  },
  {
    id: 9,
    title: "Passive Voice",
    description: "Used to emphasize the action rather than the doer",
    examples: [
      {
        english: "The book was written by Shakespeare.",
        chinese: "这本书是莎士比亚写的。"
      },
      {
        english: "The house is being built.",
        chinese: "房子正在建造中。"
      }
    ],
    rules: [
      "Use be + past participle",
      "Use by + agent when needed",
      "Use appropriate tense of be",
      "Use being + past participle for continuous forms"
    ],
    commonMistakes: [
      "Using wrong form of be",
      "Forgetting past participle",
      "Using active voice when passive is needed"
    ],
    exercises: [
      {
        question: "The letter _____ yesterday.",
        options: ["is sent", "was sent", "sent", "sends"],
        correctAnswer: "was sent",
        explanation: "We use was/were + past participle for past passive."
      },
      {
        question: "The house _____ now.",
        options: ["is building", "is being built", "builds", "built"],
        correctAnswer: "is being built",
        explanation: "We use is/are being + past participle for present continuous passive."
      }
    ],
    difficulty: "hard",
    category: "voice"
  },
  {
    id: 10,
    title: "Relative Clauses",
    description: "Used to provide additional information about nouns",
    examples: [
      {
        english: "The book which I bought yesterday is interesting.",
        chinese: "我昨天买的那本书很有趣。"
      },
      {
        english: "The man who lives next door is a doctor.",
        chinese: "住在隔壁的那个人是个医生。"
      }
    ],
    rules: [
      "Use who for people",
      "Use which for things",
      "Use that for both people and things",
      "Use whose for possession"
    ],
    commonMistakes: [
      "Using wrong relative pronoun",
      "Forgetting the relative pronoun",
      "Using wrong punctuation"
    ],
    exercises: [
      {
        question: "The man _____ lives next door is a doctor.",
        options: ["which", "who", "whose", "whom"],
        correctAnswer: "who",
        explanation: "We use who for people in relative clauses."
      },
      {
        question: "The book _____ I bought yesterday is interesting.",
        options: ["who", "whose", "which", "whom"],
        correctAnswer: "which",
        explanation: "We use which for things in relative clauses."
      }
    ],
    difficulty: "medium",
    category: "clauses"
  },
  {
    id: 11,
    title: "Past Continuous Tense",
    description: "Used to express actions in progress at a specific time in the past",
    examples: [
      {
        english: "I was studying when you called.",
        chinese: "当你打电话时，我正在学习。"
      },
      {
        english: "They were playing football at 3 PM yesterday.",
        chinese: "昨天下午3点，他们正在踢足球。"
      }
    ],
    rules: [
      "Use was/were + present participle (-ing form)",
      "Use for actions in progress at a specific time in the past",
      "Often used with when or while to show interrupted actions"
    ],
    commonMistakes: [
      "Using wrong form of be (was/were)",
      "Forgetting the -ing form",
      "Confusing with past simple"
    ],
    exercises: [
      {
        question: "I _____ TV when the power went out.",
        options: ["watch", "watched", "was watching", "were watching"],
        correctAnswer: "was watching",
        explanation: "We use was/were + -ing form for actions in progress in the past."
      },
      {
        question: "They _____ dinner when I arrived.",
        options: ["have", "had", "were having", "was having"],
        correctAnswer: "were having",
        explanation: "We use were + -ing form with they/we/you."
      }
    ],
    difficulty: "medium",
    category: "tenses"
  },
  {
    id: 12,
    title: "Present Perfect Continuous",
    description: "Used to express ongoing actions that started in the past and continue to the present",
    examples: [
      {
        english: "I have been studying English for five years.",
        chinese: "我已经学习英语五年了。"
      },
      {
        english: "She has been working here since 2020.",
        chinese: "她从2020年开始就在这里工作。"
      }
    ],
    rules: [
      "Use have/has been + present participle",
      "Use for actions that started in the past and continue now",
      "Use with for (duration) or since (starting point)"
    ],
    commonMistakes: [
      "Using wrong auxiliary verb",
      "Forgetting the -ing form",
      "Confusing with present perfect"
    ],
    exercises: [
      {
        question: "I _____ English for three hours.",
        options: ["study", "have studied", "have been studying", "am studying"],
        correctAnswer: "have been studying",
        explanation: "We use have/has been + -ing for ongoing actions up to now."
      },
      {
        question: "She _____ here since Monday.",
        options: ["work", "has worked", "has been working", "is working"],
        correctAnswer: "has been working",
        explanation: "We use has been + -ing with since to show duration from a point in time."
      }
    ],
    difficulty: "hard",
    category: "tenses"
  },
  {
    id: 13,
    title: "Future Perfect Tense",
    description: "Used to express actions that will be completed before a specific time in the future",
    examples: [
      {
        english: "By next week, I will have finished this project.",
        chinese: "到下星期，我将完成这个项目。"
      },
      {
        english: "They will have arrived by the time we get there.",
        chinese: "等我们到达时，他们就已经到了。"
      }
    ],
    rules: [
      "Use will have + past participle",
      "Use for actions completed before a future time",
      "Often used with by + time expression"
    ],
    commonMistakes: [
      "Using wrong auxiliary verb",
      "Using wrong past participle form",
      "Confusing with future simple"
    ],
    exercises: [
      {
        question: "By next month, I _____ this book.",
        options: ["finish", "will finish", "will have finished", "have finished"],
        correctAnswer: "will have finished",
        explanation: "We use will have + past participle for actions completed before a future time."
      },
      {
        question: "They _____ by the time we arrive.",
        options: ["leave", "will leave", "will have left", "have left"],
        correctAnswer: "will have left",
        explanation: "We use will have + past participle when the action will be completed before another future action."
      }
    ],
    difficulty: "hard",
    category: "tenses"
  },
  {
    id: 14,
    title: "Past Perfect Tense",
    description: "Used to express actions completed before another action in the past",
    examples: [
      {
        english: "I had finished my homework before you called.",
        chinese: "在你打电话之前，我已经完成了作业。"
      },
      {
        english: "They had left when we arrived.",
        chinese: "当我们到达时，他们已经离开了。"
      }
    ],
    rules: [
      "Use had + past participle",
      "Use for actions completed before another past action",
      "Often used with before, after, or when"
    ],
    commonMistakes: [
      "Using wrong auxiliary verb",
      "Using wrong past participle form",
      "Confusing with past simple"
    ],
    exercises: [
      {
        question: "I _____ my homework before you called.",
        options: ["finish", "finished", "had finished", "have finished"],
        correctAnswer: "had finished",
        explanation: "We use had + past participle for actions completed before another past action."
      },
      {
        question: "They _____ when we arrived.",
        options: ["leave", "left", "had left", "have left"],
        correctAnswer: "had left",
        explanation: "We use had + past participle when the action was completed before another past action."
      }
    ],
    difficulty: "hard",
    category: "tenses"
  },
  {
    id: 15,
    title: "Future Continuous Tense",
    description: "Used to express actions that will be in progress at a specific time in the future",
    examples: [
      {
        english: "I will be studying at this time tomorrow.",
        chinese: "明天这个时候，我将在学习。"
      },
      {
        english: "They will be having dinner when we arrive.",
        chinese: "当我们到达时，他们将在吃晚饭。"
      }
    ],
    rules: [
      "Use will be + present participle",
      "Use for actions in progress at a specific future time",
      "Often used with time expressions or when clauses"
    ],
    commonMistakes: [
      "Using wrong auxiliary verb",
      "Forgetting the -ing form",
      "Confusing with future simple"
    ],
    exercises: [
      {
        question: "I _____ at this time tomorrow.",
        options: ["study", "will study", "will be studying", "am studying"],
        correctAnswer: "will be studying",
        explanation: "We use will be + -ing for actions in progress at a specific future time."
      },
      {
        question: "They _____ when we arrive.",
        options: ["have", "will have", "will be having", "are having"],
        correctAnswer: "will be having",
        explanation: "We use will be + -ing when the action will be in progress at another future action."
      }
    ],
    difficulty: "medium",
    category: "tenses"
  },
  {
    id: 16,
    title: "Present Perfect vs Past Simple",
    description: "Understanding the difference between completed actions with present relevance and past actions",
    examples: [
      {
        english: "I have lost my keys. (They are still lost now)",
        chinese: "我丢了钥匙。（现在仍然找不到）"
      },
      {
        english: "I lost my keys yesterday. (The action is finished)",
        chinese: "我昨天丢了钥匙。（动作已经结束）"
      }
    ],
    rules: [
      "Use present perfect for actions with present relevance",
      "Use past simple for finished actions with no present relevance",
      "Present perfect often used with just, already, yet, never, ever"
    ],
    commonMistakes: [
      "Using present perfect for finished actions with specific time",
      "Using past simple for actions with present relevance",
      "Confusing time expressions used with each tense"
    ],
    exercises: [
      {
        question: "I _____ my homework. (It's finished now)",
        options: ["finish", "finished", "have finished", "am finishing"],
        correctAnswer: "have finished",
        explanation: "We use present perfect for recently completed actions with present relevance."
      },
      {
        question: "I _____ my homework yesterday.",
        options: ["finish", "finished", "have finished", "am finishing"],
        correctAnswer: "finished",
        explanation: "We use past simple for finished actions with specific past time."
      }
    ],
    difficulty: "medium",
    category: "tenses"
  },
  {
    id: 17,
    title: "Used to vs Would",
    description: "Understanding the difference between past habits and repeated actions",
    examples: [
      {
        english: "I used to play football when I was young.",
        chinese: "我年轻时经常踢足球。"
      },
      {
        english: "We would go to the beach every summer.",
        chinese: "我们以前每年夏天都去海滩。"
      }
    ],
    rules: [
      "Use used to for past habits and states that no longer exist",
      "Use would for repeated actions in the past",
      "Used to can be used with both action and state verbs"
    ],
    commonMistakes: [
      "Using would with state verbs",
      "Using used to for single past actions",
      "Confusing the negative forms"
    ],
    exercises: [
      {
        question: "I _____ live in London. (I don't live there now)",
        options: ["would", "used to", "use to", "would to"],
        correctAnswer: "used to",
        explanation: "We use used to for past states that no longer exist."
      },
      {
        question: "We _____ play tennis every weekend.",
        options: ["used to", "would", "use to", "would to"],
        correctAnswer: "would",
        explanation: "We use would for repeated actions in the past."
      }
    ],
    difficulty: "medium",
    category: "past habits"
  },
  {
    id: 18,
    title: "Gerunds and Infinitives",
    description: "Understanding when to use verb-ing and to + verb forms",
    examples: [
      {
        english: "I enjoy reading books.",
        chinese: "我喜欢读书。"
      },
      {
        english: "I want to learn English.",
        chinese: "我想学习英语。"
      }
    ],
    rules: [
      "Use gerunds after certain verbs (enjoy, mind, suggest)",
      "Use infinitives after certain verbs (want, plan, decide)",
      "Some verbs can take both forms with different meanings"
    ],
    commonMistakes: [
      "Using wrong form after specific verbs",
      "Confusing verbs that take both forms",
      "Using wrong form in fixed expressions"
    ],
    exercises: [
      {
        question: "I enjoy _____ books.",
        options: ["read", "to read", "reading", "reads"],
        correctAnswer: "reading",
        explanation: "We use gerunds after enjoy."
      },
      {
        question: "I want _____ English.",
        options: ["learn", "to learn", "learning", "learns"],
        correctAnswer: "to learn",
        explanation: "We use infinitives after want."
      }
    ],
    difficulty: "medium",
    category: "verb forms"
  },
  {
    id: 19,
    title: "Articles (a, an, the)",
    description: "Understanding when to use different types of articles",
    examples: [
      {
        english: "I saw a cat in the garden.",
        chinese: "我在花园里看到一只猫。"
      },
      {
        english: "The sun rises in the east.",
        chinese: "太阳从东方升起。"
      }
    ],
    rules: [
      "Use a/an for first mention of countable nouns",
      "Use the for specific or previously mentioned nouns",
      "Use no article for general statements and uncountable nouns"
    ],
    commonMistakes: [
      "Using the with first mention",
      "Forgetting articles with countable nouns",
      "Using articles with uncountable nouns"
    ],
    exercises: [
      {
        question: "I saw _____ cat in _____ garden.",
        options: ["the, the", "a, the", "a, a", "the, a"],
        correctAnswer: "a, the",
        explanation: "We use a for first mention and the for specific place."
      },
      {
        question: "_____ sun rises in _____ east.",
        options: ["The, the", "A, the", "The, a", "A, a"],
        correctAnswer: "The, the",
        explanation: "We use the with unique objects and directions."
      }
    ],
    difficulty: "easy",
    category: "articles"
  },
  {
    id: 20,
    title: "Prepositions of Time",
    description: "Understanding when to use different prepositions with time expressions",
    examples: [
      {
        english: "I have a meeting at 3 PM.",
        chinese: "我下午3点有个会议。"
      },
      {
        english: "We go on vacation in summer.",
        chinese: "我们在夏天去度假。"
      }
    ],
    rules: [
      "Use at for specific times",
      "Use in for months, seasons, years",
      "Use on for days and dates"
    ],
    commonMistakes: [
      "Using wrong preposition with time expressions",
      "Confusing in and on with days",
      "Using at with longer time periods"
    ],
    exercises: [
      {
        question: "I have a meeting _____ 3 PM.",
        options: ["in", "on", "at", "by"],
        correctAnswer: "at",
        explanation: "We use at for specific times."
      },
      {
        question: "We go on vacation _____ summer.",
        options: ["in", "on", "at", "by"],
        correctAnswer: "in",
        explanation: "We use in for seasons."
      }
    ],
    difficulty: "easy",
    category: "prepositions"
  },
  {
    id: 21,
    title: "Prepositions of Place",
    description: "Understanding when to use different prepositions for location",
    examples: [
      {
        english: "The book is on the table.",
        chinese: "书在桌子上。"
      },
      {
        english: "The cat is in the garden.",
        chinese: "猫在花园里。"
      }
    ],
    rules: [
      "Use on for surfaces",
      "Use in for enclosed spaces",
      "Use at for specific points"
    ],
    commonMistakes: [
      "Using wrong preposition for location",
      "Confusing in and on",
      "Using at instead of in for enclosed spaces"
    ],
    exercises: [
      {
        question: "The book is _____ the table.",
        options: ["in", "on", "at", "by"],
        correctAnswer: "on",
        explanation: "We use on for surfaces."
      },
      {
        question: "The cat is _____ the garden.",
        options: ["in", "on", "at", "by"],
        correctAnswer: "in",
        explanation: "We use in for enclosed spaces."
      }
    ],
    difficulty: "easy",
    category: "prepositions"
  },
  {
    id: 22,
    title: "Countable and Uncountable Nouns",
    description: "Understanding the difference between countable and uncountable nouns",
    examples: [
      {
        english: "I have three books.",
        chinese: "我有三本书。"
      },
      {
        english: "I need some water.",
        chinese: "我需要一些水。"
      }
    ],
    rules: [
      "Countable nouns can be singular or plural",
      "Uncountable nouns are always singular",
      "Use some/any with uncountable nouns"
    ],
    commonMistakes: [
      "Making uncountable nouns plural",
      "Using a/an with uncountable nouns",
      "Using wrong quantifiers"
    ],
    exercises: [
      {
        question: "I have _____ books.",
        options: ["some", "any", "a", "three"],
        correctAnswer: "three",
        explanation: "We use numbers with countable nouns."
      },
      {
        question: "I need _____ water.",
        options: ["a", "an", "some", "three"],
        correctAnswer: "some",
        explanation: "We use some with uncountable nouns."
      }
    ],
    difficulty: "easy",
    category: "nouns"
  },
  {
    id: 23,
    title: "Quantifiers",
    description: "Understanding how to use different quantifiers with nouns",
    examples: [
      {
        english: "I have many friends.",
        chinese: "我有很多朋友。"
      },
      {
        english: "There is much traffic today.",
        chinese: "今天交通很拥堵。"
      }
    ],
    rules: [
      "Use many with countable nouns",
      "Use much with uncountable nouns",
      "Use a lot of/lots of with both types"
    ],
    commonMistakes: [
      "Using many with uncountable nouns",
      "Using much with countable nouns",
      "Using wrong quantifier in questions"
    ],
    exercises: [
      {
        question: "I have _____ friends.",
        options: ["much", "many", "a lot", "lots"],
        correctAnswer: "many",
        explanation: "We use many with countable nouns."
      },
      {
        question: "There is _____ traffic today.",
        options: ["many", "much", "a lot", "lots"],
        correctAnswer: "much",
        explanation: "We use much with uncountable nouns."
      }
    ],
    difficulty: "medium",
    category: "quantifiers"
  },
  {
    id: 24,
    title: "Relative Pronouns",
    description: "Understanding when to use different relative pronouns",
    examples: [
      {
        english: "The man who lives next door is a doctor.",
        chinese: "住在隔壁的那个人是个医生。"
      },
      {
        english: "The book which I bought yesterday is interesting.",
        chinese: "我昨天买的那本书很有趣。"
      }
    ],
    rules: [
      "Use who for people",
      "Use which for things",
      "Use that for both people and things",
      "Use whose for possession"
    ],
    commonMistakes: [
      "Using wrong relative pronoun",
      "Using which for people",
      "Using who for things"
    ],
    exercises: [
      {
        question: "The man _____ lives next door is a doctor.",
        options: ["which", "who", "whose", "whom"],
        correctAnswer: "who",
        explanation: "We use who for people."
      },
      {
        question: "The book _____ I bought yesterday is interesting.",
        options: ["who", "whose", "which", "whom"],
        correctAnswer: "which",
        explanation: "We use which for things."
      }
    ],
    difficulty: "medium",
    category: "pronouns"
  },
  {
    id: 25,
    title: "Indirect Questions",
    description: "Understanding how to form indirect questions",
    examples: [
      {
        english: "I wonder where he lives.",
        chinese: "我想知道他住在哪里。"
      },
      {
        english: "Can you tell me what time it is?",
        chinese: "你能告诉我现在几点吗？"
      }
    ],
    rules: [
      "Use statement word order in indirect questions",
      "Use question words (what, where, when, etc.)",
      "Use if/whether for yes/no questions"
    ],
    commonMistakes: [
      "Using question word order in indirect questions",
      "Forgetting to use if/whether for yes/no questions",
      "Using wrong question word"
    ],
    exercises: [
      {
        question: "I wonder _____ he lives.",
        options: ["where does", "where", "does where", "where is"],
        correctAnswer: "where",
        explanation: "We use statement word order in indirect questions."
      },
      {
        question: "Can you tell me _____ it is?",
        options: ["what time is", "what time", "is what time", "time what"],
        correctAnswer: "what time",
        explanation: "We use question words with statement word order in indirect questions."
      }
    ],
    difficulty: "medium",
    category: "questions"
  },
  {
    id: 26,
    title: "Reported Speech",
    description: "Understanding how to change direct speech to reported speech",
    examples: [
      {
        english: "He said he was tired.",
        chinese: "他说他累了。"
      },
      {
        english: "She told me she would come.",
        chinese: "她告诉我她会来。"
      }
    ],
    rules: [
      "Change tenses back one step",
      "Change pronouns and time expressions",
      "Use that after say and tell"
    ],
    commonMistakes: [
      "Not changing tenses",
      "Not changing pronouns",
      "Using wrong reporting verb"
    ],
    exercises: [
      {
        question: "He said he _____ tired.",
        options: ["is", "was", "will be", "would be"],
        correctAnswer: "was",
        explanation: "We change present simple to past simple in reported speech."
      },
      {
        question: "She told me she _____ come.",
        options: ["will", "would", "can", "could"],
        correctAnswer: "would",
        explanation: "We change will to would in reported speech."
      }
    ],
    difficulty: "hard",
    category: "speech"
  },
  {
    id: 27,
    title: "Causative Have/Get",
    description: "Understanding how to use have/get something done",
    examples: [
      {
        english: "I had my hair cut yesterday.",
        chinese: "我昨天理了发。"
      },
      {
        english: "We got our house painted last week.",
        chinese: "我们上周粉刷了房子。"
      }
    ],
    rules: [
      "Use have/get + object + past participle",
      "Use for services done by others",
      "Have is more formal than get"
    ],
    commonMistakes: [
      "Using wrong verb form",
      "Using active instead of passive",
      "Confusing have and get"
    ],
    exercises: [
      {
        question: "I _____ my hair cut yesterday.",
        options: ["had", "have", "has", "having"],
        correctAnswer: "had",
        explanation: "We use have + object + past participle for services."
      },
      {
        question: "We _____ our house painted last week.",
        options: ["had", "have", "has", "having"],
        correctAnswer: "had",
        explanation: "We use have + object + past participle for services done by others."
      }
    ],
    difficulty: "hard",
    category: "causative"
  },
  {
    id: 28,
    title: "Wish Clauses",
    description: "Understanding how to express wishes about present, past, and future",
    examples: [
      {
        english: "I wish I had more time.",
        chinese: "我希望我有更多时间。"
      },
      {
        english: "I wish I had studied harder.",
        chinese: "我希望我学习更努力。"
      }
    ],
    rules: [
      "Use past simple for present wishes",
      "Use past perfect for past wishes",
      "Use would for future wishes"
    ],
    commonMistakes: [
      "Using wrong tense in wish clauses",
      "Using present tense instead of past",
      "Using wrong form for future wishes"
    ],
    exercises: [
      {
        question: "I wish I _____ more time.",
        options: ["have", "had", "will have", "would have"],
        correctAnswer: "had",
        explanation: "We use past simple for present wishes."
      },
      {
        question: "I wish I _____ harder.",
        options: ["study", "studied", "had studied", "would study"],
        correctAnswer: "had studied",
        explanation: "We use past perfect for past wishes."
      }
    ],
    difficulty: "hard",
    category: "wishes"
  },
  {
    id: 29,
    title: "Inversion",
    description: "Understanding when to use inversion in English",
    examples: [
      {
        english: "Never have I seen such beauty.",
        chinese: "我从未见过如此美丽的事物。"
      },
      {
        english: "Not only did he arrive late, but he also forgot the documents.",
        chinese: "他不仅迟到了，还忘了带文件。"
      }
    ],
    rules: [
      "Use inversion after negative expressions",
      "Use inversion after not only",
      "Use inversion in conditional sentences without if"
    ],
    commonMistakes: [
      "Using normal word order after negative expressions",
      "Forgetting auxiliary verbs in inversion",
      "Using wrong word order in conditional sentences"
    ],
    exercises: [
      {
        question: "_____ have I seen such beauty.",
        options: ["Never", "Ever", "Always", "Sometimes"],
        correctAnswer: "Never",
        explanation: "We use inversion after never."
      },
      {
        question: "_____ did he arrive late, but he also forgot the documents.",
        options: ["Not only", "Only", "Not just", "Just"],
        correctAnswer: "Not only",
        explanation: "We use inversion after not only."
      }
    ],
    difficulty: "hard",
    category: "inversion"
  },
  {
    id: 30,
    title: "Ellipsis",
    description: "Understanding when to omit words in English",
    examples: [
      {
        english: "I like coffee and she tea.",
        chinese: "我喜欢咖啡，她喜欢茶。"
      },
      {
        english: "He can swim and I can too.",
        chinese: "他会游泳，我也会。"
      }
    ],
    rules: [
      "Omit repeated words in parallel structures",
      "Use auxiliary verbs to avoid repetition",
      "Omit subject and verb in short responses"
    ],
    commonMistakes: [
      "Repeating unnecessary words",
      "Using wrong auxiliary verb",
      "Omitting necessary words"
    ],
    exercises: [
      {
        question: "I like coffee and she _____ tea.",
        options: ["likes", "like", "liking", "liked"],
        correctAnswer: "likes",
        explanation: "We omit the verb in parallel structures but keep the necessary form."
      },
      {
        question: "He can swim and I _____ too.",
        options: ["can", "can swim", "swim", "swimming"],
        correctAnswer: "can",
        explanation: "We use auxiliary verbs to avoid repeating the main verb."
      }
    ],
    difficulty: "medium",
    category: "ellipsis"
  },
  {
    id: 31,
    title: "Cleft Sentences",
    description: "Understanding how to emphasize different parts of a sentence",
    examples: [
      {
        english: "It was John who helped me.",
        chinese: "是约翰帮助了我。"
      },
      {
        english: "What I need is more time.",
        chinese: "我需要的是更多时间。"
      }
    ],
    rules: [
      "Use it + be + emphasized element + who/that",
      "Use what + subject + verb + be + emphasized element",
      "Use all + subject + verb + be + emphasized element"
    ],
    commonMistakes: [
      "Using wrong structure for emphasis",
      "Using wrong relative pronoun",
      "Forgetting the verb be"
    ],
    exercises: [
      {
        question: "_____ was John who helped me.",
        options: ["It", "What", "All", "That"],
        correctAnswer: "It",
        explanation: "We use it + be for emphasizing the subject."
      },
      {
        question: "_____ I need is more time.",
        options: ["It", "What", "All", "That"],
        correctAnswer: "What",
        explanation: "We use what + subject + verb + be for emphasizing the object."
      }
    ],
    difficulty: "hard",
    category: "emphasis"
  },
  {
    id: 32,
    title: "Fronting",
    description: "Understanding how to move elements to the front of a sentence for emphasis",
    examples: [
      {
        english: "Never have I seen such beauty.",
        chinese: "我从未见过如此美丽的事物。"
      },
      {
        english: "Here comes the bus.",
        chinese: "公交车来了。"
      }
    ],
    rules: [
      "Move negative expressions to the front",
      "Move place expressions to the front",
      "Use inversion after fronted elements"
    ],
    commonMistakes: [
      "Not using inversion after fronted elements",
      "Using wrong word order",
      "Fronting wrong elements"
    ],
    exercises: [
      {
        question: "_____ have I seen such beauty.",
        options: ["Never", "Ever", "Always", "Sometimes"],
        correctAnswer: "Never",
        explanation: "We use inversion after fronted negative expressions."
      },
      {
        question: "_____ comes the bus.",
        options: ["Here", "There", "Now", "Then"],
        correctAnswer: "Here",
        explanation: "We use inversion after fronted place expressions."
      }
    ],
    difficulty: "hard",
    category: "emphasis"
  },
  {
    id: 33,
    title: "Parallel Structure",
    description: "Understanding how to maintain parallel structure in sentences",
    examples: [
      {
        english: "I like reading, writing, and speaking English.",
        chinese: "我喜欢读、写和说英语。"
      },
      {
        english: "She is intelligent, kind, and helpful.",
        chinese: "她聪明、善良且乐于助人。"
      }
    ],
    rules: [
      "Use the same grammatical form for similar elements",
      "Keep consistent verb forms",
      "Maintain parallel structure in lists"
    ],
    commonMistakes: [
      "Mixing different grammatical forms",
      "Using inconsistent verb forms",
      "Breaking parallel structure in lists"
    ],
    exercises: [
      {
        question: "I like reading, writing, and _____ English.",
        options: ["speak", "speaking", "to speak", "speaks"],
        correctAnswer: "speaking",
        explanation: "We use the same -ing form for all items in the list."
      },
      {
        question: "She is intelligent, kind, and _____.",
        options: ["help", "helping", "helps", "helpful"],
        correctAnswer: "helpful",
        explanation: "We use the same adjective form for all items in the list."
      }
    ],
    difficulty: "medium",
    category: "structure"
  },
  {
    id: 34,
    title: "Subjunctive Mood",
    description: "Understanding how to use the subjunctive mood in English",
    examples: [
      {
        english: "I suggest that he study harder.",
        chinese: "我建议他学习更努力。"
      },
      {
        english: "It is important that she be on time.",
        chinese: "重要的是她要准时。"
      }
    ],
    rules: [
      "Use base form of verb after certain verbs",
      "Use base form after certain adjectives",
      "Use were instead of was in hypothetical situations"
    ],
    commonMistakes: [
      "Using wrong verb form after suggest",
      "Using indicative instead of subjunctive",
      "Using was instead of were in hypothetical situations"
    ],
    exercises: [
      {
        question: "I suggest that he _____ harder.",
        options: ["studies", "study", "studied", "studying"],
        correctAnswer: "study",
        explanation: "We use the base form after suggest that."
      },
      {
        question: "It is important that she _____ on time.",
        options: ["is", "be", "was", "being"],
        correctAnswer: "be",
        explanation: "We use the base form after important that."
      }
    ],
    difficulty: "hard",
    category: "mood"
  },
  {
    id: 35,
    title: "Infinitive of Purpose",
    description: "Understanding how to express purpose using infinitives",
    examples: [
      {
        english: "I went to the store to buy milk.",
        chinese: "我去商店买牛奶。"
      },
      {
        english: "She studies hard to pass the exam.",
        chinese: "她努力学习以通过考试。"
      }
    ],
    rules: [
      "Use to + base form to express purpose",
      "Use in order to + base form for emphasis",
      "Use so as to + base form in formal contexts"
    ],
    commonMistakes: [
      "Using for instead of to",
      "Using wrong verb form",
      "Using wrong structure for purpose"
    ],
    exercises: [
      {
        question: "I went to the store _____ milk.",
        options: ["for buy", "to buy", "buying", "bought"],
        correctAnswer: "to buy",
        explanation: "We use to + base form to express purpose."
      },
      {
        question: "She studies hard _____ the exam.",
        options: ["for pass", "to pass", "passing", "passed"],
        correctAnswer: "to pass",
        explanation: "We use to + base form to express purpose."
      }
    ],
    difficulty: "medium",
    category: "purpose"
  },
  {
    id: 36,
    title: "Participle Clauses",
    description: "Understanding how to use participle clauses to connect ideas",
    examples: [
      {
        english: "Walking to school, I saw my friend.",
        chinese: "走路去学校时，我看到了我的朋友。"
      },
      {
        english: "Having finished my homework, I went to bed.",
        chinese: "完成作业后，我去睡觉了。"
      }
    ],
    rules: [
      "Use -ing form for simultaneous actions",
      "Use having + past participle for previous actions",
      "Use past participle for passive meaning"
    ],
    commonMistakes: [
      "Using wrong participle form",
      "Using wrong tense in participle clause",
      "Using wrong subject in main clause"
    ],
    exercises: [
      {
        question: "_____ to school, I saw my friend.",
        options: ["Walk", "Walking", "Walked", "To walk"],
        correctAnswer: "Walking",
        explanation: "We use -ing form for simultaneous actions."
      },
      {
        question: "_____ my homework, I went to bed.",
        options: ["Finish", "Finishing", "Finished", "Having finished"],
        correctAnswer: "Having finished",
        explanation: "We use having + past participle for previous actions."
      }
    ],
    difficulty: "hard",
    category: "clauses"
  },
  {
    id: 37,
    title: "Nominal Clauses",
    description: "Understanding how to use clauses as nouns",
    examples: [
      {
        english: "I know that he is coming.",
        chinese: "我知道他要来。"
      },
      {
        english: "What she said is true.",
        chinese: "她说的是真的。"
      }
    ],
    rules: [
      "Use that-clauses after certain verbs",
      "Use wh-clauses as subjects or objects",
      "Use whether/if for yes/no questions"
    ],
    commonMistakes: [
      "Using wrong conjunction",
      "Using wrong word order in nominal clauses",
      "Forgetting that after certain verbs"
    ],
    exercises: [
      {
        question: "I know _____ he is coming.",
        options: ["what", "that", "which", "who"],
        correctAnswer: "that",
        explanation: "We use that after know."
      },
      {
        question: "_____ she said is true.",
        options: ["That", "What", "Which", "Who"],
        correctAnswer: "What",
        explanation: "We use what-clauses as subjects."
      }
    ],
    difficulty: "medium",
    category: "clauses"
  },
  {
    id: 38,
    title: "Adverbial Clauses",
    description: "Understanding how to use clauses to modify verbs",
    examples: [
      {
        english: "When it rains, I stay at home.",
        chinese: "下雨时，我待在家里。"
      },
      {
        english: "Because I was tired, I went to bed early.",
        chinese: "因为我累了，所以我早早就去睡觉了。"
      }
    ],
    rules: [
      "Use when for time",
      "Use because for reason",
      "Use if for condition",
      "Use although for concession"
    ],
    commonMistakes: [
      "Using wrong conjunction",
      "Using wrong tense in adverbial clause",
      "Using wrong word order"
    ],
    exercises: [
      {
        question: "_____ it rains, I stay at home.",
        options: ["If", "When", "Because", "Although"],
        correctAnswer: "When",
        explanation: "We use when for time."
      },
      {
        question: "_____ I was tired, I went to bed early.",
        options: ["If", "When", "Because", "Although"],
        correctAnswer: "Because",
        explanation: "We use because for reason."
      }
    ],
    difficulty: "medium",
    category: "clauses"
  },
  {
    id: 39,
    title: "Relative Clauses with Prepositions",
    description: "Understanding how to use prepositions in relative clauses",
    examples: [
      {
        english: "The house in which I grew up is still there.",
        chinese: "我长大的那座房子还在那里。"
      },
      {
        english: "The person to whom I wrote is my friend.",
        chinese: "我写信给的那个人是我的朋友。"
      }
    ],
    rules: [
      "Use preposition + which for things",
      "Use preposition + whom for people",
      "Use preposition + whose for possession"
    ],
    commonMistakes: [
      "Using wrong preposition",
      "Using wrong relative pronoun",
      "Using wrong word order"
    ],
    exercises: [
      {
        question: "The house _____ I grew up is still there.",
        options: ["which", "in which", "where", "that"],
        correctAnswer: "in which",
        explanation: "We use preposition + which for things."
      },
      {
        question: "The person _____ I wrote is my friend.",
        options: ["who", "whom", "to whom", "that"],
        correctAnswer: "to whom",
        explanation: "We use preposition + whom for people."
      }
    ],
    difficulty: "hard",
    category: "clauses"
  },
  {
    id: 40,
    title: "Reduced Relative Clauses",
    description: "Understanding how to shorten relative clauses",
    examples: [
      {
        english: "The man standing there is my teacher.",
        chinese: "站在那里的那个人是我的老师。"
      },
      {
        english: "The book written by Shakespeare is famous.",
        chinese: "莎士比亚写的那本书很有名。"
      }
    ],
    rules: [
      "Use -ing form for active meaning",
      "Use past participle for passive meaning",
      "Omit relative pronoun and be verb"
    ],
    commonMistakes: [
      "Using wrong participle form",
      "Keeping unnecessary words",
      "Using wrong tense in reduced clause"
    ],
    exercises: [
      {
        question: "The man _____ there is my teacher.",
        options: ["who stands", "standing", "stands", "stood"],
        correctAnswer: "standing",
        explanation: "We use -ing form for active meaning in reduced clauses."
      },
      {
        question: "The book _____ by Shakespeare is famous.",
        options: ["which written", "writing", "written", "writes"],
        correctAnswer: "written",
        explanation: "We use past participle for passive meaning in reduced clauses."
      }
    ],
    difficulty: "hard",
    category: "clauses"
  },
  {
    id: 41,
    title: "虚拟语气",
    description: "用于表达与事实相反的假设、愿望或建议",
    examples: [
      {
        english: "If I were you, I would study harder.",
        chinese: "如果我是你，我会更努力学习。"
      },
      {
        english: "I wish I had more time to help you.",
        chinese: "我希望我有更多时间帮助你。"
      }
    ],
    rules: [
      "在if从句中使用过去时表示现在或未来的假设",
      "在if从句中使用过去完成时表示过去的假设",
      "在主句中使用would/could/might + 动词原形",
      "在wish后使用过去时表示现在或未来的愿望",
      "在wish后使用过去完成时表示过去的愿望"
    ],
    commonMistakes: [
      "在if从句中使用will而不是过去时",
      "在wish后使用现在时而不是过去时",
      "混淆if和wish的用法",
      "在虚拟语气中使用错误的时态"
    ],
    exercises: [
      {
        question: "If I _____ rich, I would travel the world.",
        options: ["am", "were", "was", "will be"],
        correctAnswer: "were",
        explanation: "在虚拟语气中，if从句使用过去时表示现在或未来的假设。"
      },
      {
        question: "I wish I _____ more time to help you yesterday.",
        options: ["have", "had", "would have", "had had"],
        correctAnswer: "had had",
        explanation: "在wish后使用过去完成时表示过去的愿望。"
      }
    ],
    difficulty: "hard",
    category: "虚拟语气"
  },
  {
    id: 42,
    title: "情态动词",
    description: "用于表达能力、可能性、必要性、建议等",
    examples: [
      {
        english: "I can speak English.",
        chinese: "我会说英语。"
      },
      {
        english: "You must finish your homework.",
        chinese: "你必须完成作业。"
      }
    ],
    rules: [
      "can/could表示能力或可能性",
      "may/might表示可能性或许可",
      "must表示必要性或强烈的建议",
      "should/ought to表示建议或道德义务",
      "will/would表示意愿或习惯"
    ],
    commonMistakes: [
      "混淆can和may的用法",
      "在情态动词后加to",
      "在情态动词后使用过去时",
      "混淆must和should的用法"
    ],
    exercises: [
      {
        question: "You _____ finish your homework before watching TV.",
        options: ["can", "may", "must", "might"],
        correctAnswer: "must",
        explanation: "must表示必要性或强烈的建议。"
      },
      {
        question: "I _____ speak French when I was younger.",
        options: ["can", "could", "may", "might"],
        correctAnswer: "could",
        explanation: "could表示过去的能力。"
      }
    ],
    difficulty: "medium",
    category: "情态动词"
  },
  {
    id: 43,
    title: "被动语态",
    description: "用于强调动作的承受者而非执行者",
    examples: [
      {
        english: "The book was written by Shakespeare.",
        chinese: "这本书是莎士比亚写的。"
      },
      {
        english: "The house is being built.",
        chinese: "房子正在建造中。"
      }
    ],
    rules: [
      "使用be动词 + 过去分词构成被动语态",
      "使用by + 执行者表示动作的执行者",
      "被动语态可用于各种时态",
      "当执行者不重要或未知时，通常省略by短语"
    ],
    commonMistakes: [
      "混淆主动语态和被动语态",
      "在被动语态中使用错误的be动词形式",
      "在被动语态中使用错误的过去分词",
      "不必要地使用被动语态"
    ],
    exercises: [
      {
        question: "The letter _____ yesterday.",
        options: ["is sent", "was sent", "sent", "sends"],
        correctAnswer: "was sent",
        explanation: "使用was + 过去分词表示过去的被动语态。"
      },
      {
        question: "The house _____ now.",
        options: ["is building", "is being built", "builds", "built"],
        correctAnswer: "is being built",
        explanation: "使用is/are being + 过去分词表示现在进行时的被动语态。"
      }
    ],
    difficulty: "medium",
    category: "被动语态"
  },
  {
    id: 44,
    title: "条件句",
    description: "用于表达假设和结果之间的关系",
    examples: [
      {
        english: "If it rains, I will stay at home.",
        chinese: "如果下雨，我就待在家里。"
      },
      {
        english: "If I had studied harder, I would have passed the exam.",
        chinese: "如果我学习更努力，我就会通过考试。"
      }
    ],
    rules: [
      "第一类条件句：if + 现在时，主句 + will + 动词原形",
      "第二类条件句：if + 过去时，主句 + would + 动词原形",
      "第三类条件句：if + 过去完成时，主句 + would have + 过去分词",
      "混合条件句：if + 过去完成时，主句 + would + 动词原形"
    ],
    commonMistakes: [
      "在if从句中使用will",
      "混淆不同类型的条件句",
      "在条件句中使用错误的时态",
      "在虚拟条件句中使用错误的时态"
    ],
    exercises: [
      {
        question: "If it _____ tomorrow, I will stay at home.",
        options: ["will rain", "rains", "would rain", "rained"],
        correctAnswer: "rains",
        explanation: "在第一类条件句中，if从句使用现在时。"
      },
      {
        question: "If I _____ rich, I would travel the world.",
        options: ["am", "will be", "were", "would be"],
        correctAnswer: "were",
        explanation: "在第二类条件句中，if从句使用过去时表示现在或未来的假设。"
      }
    ],
    difficulty: "hard",
    category: "条件句"
  },
  {
    id: 45,
    title: "间接引语",
    description: "用于转述他人的话或思想",
    examples: [
      {
        english: "He said that he was tired.",
        chinese: "他说他累了。"
      },
      {
        english: "She told me she would come.",
        chinese: "她告诉我她会来。"
      }
    ],
    rules: [
      "时态通常向后移动一步",
      "代词和时间表达通常需要调整",
      "在say和tell后使用that",
      "疑问句变为陈述句语序",
      "命令句变为不定式"
    ],
    commonMistakes: [
      "不改变时态",
      "不改变代词",
      "不改变时间表达",
      "在间接引语中使用疑问句语序"
    ],
    exercises: [
      {
        question: "He said he _____ tired.",
        options: ["is", "was", "will be", "would be"],
        correctAnswer: "was",
        explanation: "在间接引语中，现在时变为过去时。"
      },
      {
        question: "She told me she _____ come.",
        options: ["will", "would", "can", "could"],
        correctAnswer: "would",
        explanation: "在间接引语中，will变为would。"
      }
    ],
    difficulty: "hard",
    category: "间接引语"
  },
  {
    id: 46,
    title: "使役结构",
    description: "用于表达让别人做某事",
    examples: [
      {
        english: "I had my hair cut yesterday.",
        chinese: "我昨天理了发。"
      },
      {
        english: "We got our house painted last week.",
        chinese: "我们上周粉刷了房子。"
      }
    ],
    rules: [
      "使用have/get + 宾语 + 过去分词",
      "使用have/get + 宾语 + 动词原形",
      "have比get更正式",
      "使役结构可用于各种时态"
    ],
    commonMistakes: [
      "使用错误的动词形式",
      "混淆have和get的用法",
      "在使役结构中使用错误的时态",
      "不必要地使用使役结构"
    ],
    exercises: [
      {
        question: "I _____ my hair cut yesterday.",
        options: ["had", "have", "has", "having"],
        correctAnswer: "had",
        explanation: "使用had + 宾语 + 过去分词表示让别人做某事。"
      },
      {
        question: "We _____ our house painted last week.",
        options: ["had", "have", "has", "having"],
        correctAnswer: "had",
        explanation: "使用had + 宾语 + 过去分词表示让别人做某事。"
      }
    ],
    difficulty: "hard",
    category: "使役结构"
  },
  {
    id: 47,
    title: "愿望从句",
    description: "用于表达对现在、过去和未来的愿望",
    examples: [
      {
        english: "I wish I had more time.",
        chinese: "我希望我有更多时间。"
      },
      {
        english: "I wish I had studied harder.",
        chinese: "我希望我学习更努力。"
      }
    ],
    rules: [
      "对现在的愿望：wish + 过去时",
      "对过去的愿望：wish + 过去完成时",
      "对未来的愿望：wish + would + 动词原形",
      "wish后不使用will"
    ],
    commonMistakes: [
      "在wish从句中使用错误的时态",
      "在wish后使用will",
      "混淆wish和hope的用法",
      "在wish从句中使用错误的动词形式"
    ],
    exercises: [
      {
        question: "I wish I _____ more time.",
        options: ["have", "had", "will have", "would have"],
        correctAnswer: "had",
        explanation: "对现在的愿望使用wish + 过去时。"
      },
      {
        question: "I wish I _____ harder.",
        options: ["study", "studied", "had studied", "would study"],
        correctAnswer: "had studied",
        explanation: "对过去的愿望使用wish + 过去完成时。"
      }
    ],
    difficulty: "hard",
    category: "愿望从句"
  },
  {
    id: 48,
    title: "倒装",
    description: "用于强调或改变句子语序",
    examples: [
      {
        english: "Never have I seen such beauty.",
        chinese: "我从未见过如此美丽的事物。"
      },
      {
        english: "Not only did he arrive late, but he also forgot the documents.",
        chinese: "他不仅迟到了，还忘了带文件。"
      }
    ],
    rules: [
      "否定词放在句首时使用倒装",
      "not only放在句首时使用倒装",
      "在虚拟语气中省略if时使用倒装",
      "在so/such + 形容词/副词放在句首时使用倒装"
    ],
    commonMistakes: [
      "在否定词后不使用倒装",
      "在not only后不使用倒装",
      "在倒装句中忘记使用助动词",
      "在条件句中不使用倒装"
    ],
    exercises: [
      {
        question: "_____ have I seen such beauty.",
        options: ["Never", "Ever", "Always", "Sometimes"],
        correctAnswer: "Never",
        explanation: "否定词放在句首时使用倒装。"
      },
      {
        question: "_____ did he arrive late, but he also forgot the documents.",
        options: ["Not only", "Only", "Not just", "Just"],
        correctAnswer: "Not only",
        explanation: "not only放在句首时使用倒装。"
      }
    ],
    difficulty: "hard",
    category: "倒装"
  },
  {
    id: 49,
    title: "省略",
    description: "用于省略句子中不必要的词",
    examples: [
      {
        english: "I like coffee and she tea.",
        chinese: "我喜欢咖啡，她喜欢茶。"
      },
      {
        english: "He can swim and I can too.",
        chinese: "他会游泳，我也会。"
      }
    ],
    rules: [
      "在平行结构中省略重复的词",
      "使用助动词避免重复",
      "在简短回答中省略主语和动词",
      "在比较结构中省略重复的词"
    ],
    commonMistakes: [
      "重复不必要的词",
      "使用错误的助动词",
      "省略必要的词",
      "在省略结构中保持错误的语法形式"
    ],
    exercises: [
      {
        question: "I like coffee and she _____ tea.",
        options: ["likes", "like", "liking", "liked"],
        correctAnswer: "likes",
        explanation: "在平行结构中省略动词，但保留必要的语法形式。"
      },
      {
        question: "He can swim and I _____ too.",
        options: ["can", "can swim", "swim", "swimming"],
        correctAnswer: "can",
        explanation: "We use auxiliary verbs to avoid repeating the main verb."
      }
    ],
    difficulty: "medium",
    category: "省略"
  },
  {
    id: 50,
    title: "分裂句",
    description: "用于强调句子的不同部分",
    examples: [
      {
        english: "It was John who helped me.",
        chinese: "是约翰帮助了我。"
      },
      {
        english: "What I need is more time.",
        chinese: "我需要的是更多时间。"
      }
    ],
    rules: [
      "使用it + be + 强调部分 + who/that",
      "使用what + 主语 + 动词 + be + 强调部分",
      "使用all + 主语 + 动词 + be + 强调部分",
      "分裂句可用于强调主语、宾语、状语等"
    ],
    commonMistakes: [
      "使用错误的结构进行强调",
      "使用错误的关系代词",
      "Forgetting the verb be"
    ],
    exercises: [
      {
        question: "_____ was John who helped me.",
        options: ["It", "What", "All", "That"],
        correctAnswer: "It",
        explanation: "We use it + be for emphasizing the subject."
      },
      {
        question: "_____ I need is more time.",
        options: ["It", "What", "All", "That"],
        correctAnswer: "What",
        explanation: "We use what + subject + verb + be for emphasizing the object."
      }
    ],
    difficulty: "hard",
    category: "emphasis"
  },
  {
    id: 51,
    title: "前置",
    description: "用于将句子成分移到句首以强调",
    examples: [
      {
        english: "Never have I seen such beauty.",
        chinese: "我从未见过如此美丽的事物。"
      },
      {
        english: "Here comes the bus.",
        chinese: "公交车来了。"
      }
    ],
    rules: [
      "将否定词移到句首",
      "将地点表达移到句首",
      "将时间表达移到句首",
      "在前置成分后使用倒装"
    ],
    commonMistakes: [
      "在前置成分后不使用倒装",
      "使用错误的词序",
      "前置错误的成分",
      "不必要地使用前置"
    ],
    exercises: [
      {
        question: "_____ have I seen such beauty.",
        options: ["Never", "Ever", "Always", "Sometimes"],
        correctAnswer: "Never",
        explanation: "否定词放在句首时使用倒装。"
      },
      {
        question: "_____ comes the bus.",
        options: ["Here", "There", "Now", "Then"],
        correctAnswer: "Here",
        explanation: "地点表达放在句首时使用倒装。"
      }
    ],
    difficulty: "hard",
    category: "emphasis"
  },
  {
    id: 52,
    title: "平行结构",
    description: "用于保持句子中相似元素的语法形式一致",
    examples: [
      {
        english: "I like reading, writing, and speaking English.",
        chinese: "我喜欢读、写和说英语。"
      },
      {
        english: "She is intelligent, kind, and helpful.",
        chinese: "她聪明、善良且乐于助人。"
      }
    ],
    rules: [
      "使用相同的语法形式表示相似的元素",
      "保持动词形式一致",
      "保持形容词形式一致",
      "在列表中保持平行结构"
    ],
    commonMistakes: [
      "Mixing different grammatical forms",
      "Using inconsistent verb forms",
      "Breaking parallel structure in lists"
    ],
    exercises: [
      {
        question: "I like reading, writing, and _____ English.",
        options: ["speak", "speaking", "to speak", "speaks"],
        correctAnswer: "speaking",
        explanation: "We use the same -ing form for all items in the list."
      },
      {
        question: "She is intelligent, kind, and _____.",
        options: ["help", "helping", "helps", "helpful"],
        correctAnswer: "helpful",
        explanation: "We use the same adjective form for all items in the list."
      }
    ],
    difficulty: "medium",
    category: "structure"
  },
  {
    id: 53,
    title: "虚拟语气",
    description: "用于表达与事实相反的假设、愿望或建议",
    examples: [
      {
        english: "I suggest that he study harder.",
        chinese: "我建议他学习更努力。"
      },
      {
        english: "It is important that she be on time.",
        chinese: "重要的是她要准时。"
      }
    ],
    rules: [
      "在某些动词后使用动词原形",
      "在某些形容词后使用动词原形",
      "在假设情况下使用were而不是was",
      "虚拟语气通常用于正式或书面英语"
    ],
    commonMistakes: [
      "在关系从句中使用错误的虚拟语气",
      "在关系从句中不必要地使用虚拟语气",
      "在关系从句中混淆虚拟语气和陈述语气",
      "在关系从句中使用错误的虚拟语气形式"
    ],
    exercises: [
      {
        question: "I suggest that he _____ harder.",
        options: ["studies", "study", "studied", "studying"],
        correctAnswer: "study",
        explanation: "在suggest that后使用动词原形。"
      },
      {
        question: "It is important that she _____ on time.",
        options: ["is", "be", "was", "being"],
        correctAnswer: "be",
        explanation: "在important that后使用动词原形。"
      }
    ],
    difficulty: "hard",
    category: "mood"
  },
  {
    id: 54,
    title: "目的不定式",
    description: "用于表达目的",
    examples: [
      {
        english: "I went to the store to buy milk.",
        chinese: "我去商店买牛奶。"
      },
      {
        english: "She studies hard to pass the exam.",
        chinese: "她努力学习以通过考试。"
      }
    ],
    rules: [
      "使用to + 动词原形表达目的",
      "使用in order to + 动词原形强调目的",
      "使用so as to + 动词原形在正式语境中",
      "目的不定式通常放在主句之后"
    ],
    commonMistakes: [
      "使用for而不是to",
      "使用错误的动词形式",
      "使用错误的结构表达目的",
      "不必要地使用目的不定式"
    ],
    exercises: [
      {
        question: "I went to the store _____ milk.",
        options: ["for buy", "to buy", "buying", "bought"],
        correctAnswer: "to buy",
        explanation: "We use to + 动词原形表达目的。"
      },
      {
        question: "She studies hard _____ the exam.",
        options: ["for pass", "to pass", "passing", "passed"],
        correctAnswer: "to pass",
        explanation: "We use to + 动词原形表达目的。"
      }
    ],
    difficulty: "medium",
    category: "purpose"
  },
  {
    id: 55,
    title: "分词从句",
    description: "用于连接思想，简化句子结构",
    examples: [
      {
        english: "Walking to school, I saw my friend.",
        chinese: "走路去学校时，我看到了我的朋友。"
      },
      {
        english: "Having finished my homework, I went to bed.",
        chinese: "完成作业后，我去睡觉了。"
      }
    ],
    rules: [
      "使用-ing形式表示同时发生的动作",
      "使用having + 过去分词表示先发生的动作",
      "使用过去分词表示被动意义",
      "分词从句的主语通常与主句的主语相同"
    ],
    commonMistakes: [
      "使用错误的分词形式",
      "在分词从句中使用错误的时态",
      "在主句中使用错误的主语",
      "不必要地使用分词从句"
    ],
    exercises: [
      {
        question: "_____ to school, I saw my friend.",
        options: ["Walk", "Walking", "Walked", "To walk"],
        correctAnswer: "Walking",
        explanation: "We use -ing form for simultaneous actions."
      },
      {
        question: "_____ my homework, I went to bed.",
        options: ["Finish", "Finishing", "Finished", "Having finished"],
        correctAnswer: "Having finished",
        explanation: "We use having + past participle for previous actions."
      }
    ],
    difficulty: "hard",
    category: "clauses"
  },
  {
    id: 56,
    title: "名词性从句",
    description: "用于作为名词的从句",
    examples: [
      {
        english: "I know that he is coming.",
        chinese: "我知道他要来。"
      },
      {
        english: "What she said is true.",
        chinese: "她说的是真的。"
      }
    ],
    rules: [
      "使用that从句作为某些动词的宾语",
      "使用wh-从句作为主语或宾语",
      "使用whether/if表示是否",
      "名词性从句可以是主语、宾语或表语"
    ],
    commonMistakes: [
      "使用错误的关系词",
      "在名词性从句中使用错误的词序",
      "在某些动词后忘记使用that",
      "混淆不同类型的从句"
    ],
    exercises: [
      {
        question: "I know _____ he is coming.",
        options: ["what", "that", "which", "who"],
        correctAnswer: "that",
        explanation: "We use that after know."
      },
      {
        question: "_____ she said is true.",
        options: ["That", "What", "Which", "Who"],
        correctAnswer: "What",
        explanation: "We use what-clauses as subjects."
      }
    ],
    difficulty: "medium",
    category: "clauses"
  },
  {
    id: 57,
    title: "状语从句",
    description: "用于修饰动词的从句",
    examples: [
      {
        english: "When it rains, I stay at home.",
        chinese: "下雨时，我待在家里。"
      },
      {
        english: "Because I was tired, I went to bed early.",
        chinese: "因为我累了，所以我早早就去睡觉了。"
      }
    ],
    rules: [
      "Use when for time",
      "Use because for reason",
      "Use if for condition",
      "Use although for concession"
    ],
    commonMistakes: [
      "Using wrong conjunction",
      "Using wrong tense in adverbial clause",
      "Using wrong word order"
    ],
    exercises: [
      {
        question: "_____ it rains, I stay at home.",
        options: ["If", "When", "Because", "Although"],
        correctAnswer: "When",
        explanation: "We use when for time."
      },
      {
        question: "_____ I was tired, I went to bed early.",
        options: ["If", "When", "Because", "Although"],
        correctAnswer: "Because",
        explanation: "We use because for reason."
      }
    ],
    difficulty: "medium",
    category: "clauses"
  },
  {
    id: 58,
    title: "带介词的关系从句",
    description: "用于在关系从句中使用介词",
    examples: [
      {
        english: "The house in which I grew up is still there.",
        chinese: "我长大的那座房子还在那里。"
      },
      {
        english: "The person to whom I wrote is my friend.",
        chinese: "我写信给的那个人是我的朋友。"
      }
    ],
    rules: [
      "使用介词 + which表示事物",
      "使用介词 + whom表示人",
      "使用介词 + whose表示所有关系",
      "介词可以放在关系词前或从句末尾"
    ],
    commonMistakes: [
      "使用错误的介词",
      "使用错误的关系词",
      "使用错误的词序",
      "不必要地使用带介词的关系从句"
    ],
    exercises: [
      {
        question: "The house _____ I grew up is still there.",
        options: ["which", "in which", "where", "that"],
        correctAnswer: "in which",
        explanation: "We use preposition + which for things."
      },
      {
        question: "The person _____ I wrote is my friend.",
        options: ["who", "whom", "to whom", "that"],
        correctAnswer: "to whom",
        explanation: "We use preposition + whom for people."
      }
    ],
    difficulty: "hard",
    category: "clauses"
  },
  {
    id: 59,
    title: "简化关系从句",
    description: "用于简化关系从句",
    examples: [
      {
        english: "The man standing there is my teacher.",
        chinese: "站在那里的那个人是我的老师。"
      },
      {
        english: "The book written by Shakespeare is famous.",
        chinese: "莎士比亚写的那本书很有名。"
      }
    ],
    rules: [
      "使用-ing形式表示主动意义",
      "使用过去分词表示被动意义",
      "省略关系词和be动词",
      "简化关系从句通常用于正式或书面英语"
    ],
    commonMistakes: [
      "使用错误的分词形式",
      "保留不必要的词",
      "在简化从句中使用错误的时态",
      "不必要地使用简化关系从句"
    ],
    exercises: [
      {
        question: "The man _____ there is my teacher.",
        options: ["who stands", "standing", "stands", "stood"],
        correctAnswer: "standing",
        explanation: "We use -ing form for active meaning in reduced clauses."
      },
      {
        question: "The book _____ by Shakespeare is famous.",
        options: ["which written", "writing", "written", "writes"],
        correctAnswer: "written",
        explanation: "We use past participle for passive meaning in reduced clauses."
      }
    ],
    difficulty: "hard",
    category: "clauses"
  },
  {
    id: 60,
    title: "非限制性关系从句",
    description: "用于提供额外信息的关系从句",
    examples: [
      {
        english: "My brother, who lives in London, is a doctor.",
        chinese: "我哥哥，他住在伦敦，是一名医生。"
      },
      {
        english: "The movie, which won several awards, was very popular.",
        chinese: "这部电影，它获得了几个奖项，非常受欢迎。"
      }
    ],
    rules: [
      "使用逗号分隔非限制性关系从句",
      "使用who表示人",
      "使用which表示事物",
      "非限制性关系从句提供额外信息，可以省略而不影响主句意义"
    ],
    commonMistakes: [
      "忘记使用逗号",
      "使用错误的关系词",
      "使用that代替who/which",
      "不必要地使用非限制性关系从句"
    ],
    exercises: [
      {
        question: "My brother, _____ lives in London, is a doctor.",
        options: ["who", "which", "that", "whom"],
        correctAnswer: "who",
        explanation: "We use who for people in relative clauses."
      },
      {
        question: "The movie, _____ won several awards, was very popular.",
        options: ["who", "which", "that", "whom"],
        correctAnswer: "which",
        explanation: "We use which for things in relative clauses."
      }
    ],
    difficulty: "medium",
    category: "clauses"
  },
  {
    id: 61,
    title: "限制性关系从句",
    description: "用于限定或识别先行词的关系从句",
    examples: [
      {
        english: "The man who lives next door is a doctor.",
        chinese: "住在隔壁的那个人是个医生。"
      },
      {
        english: "The book which I bought yesterday is interesting.",
        chinese: "我昨天买的那本书很有趣。"
      }
    ],
    rules: [
      "不使用逗号分隔限制性关系从句",
      "使用who表示人",
      "使用which表示事物",
      "使用that表示人或事物",
      "限制性关系从句提供必要信息，不能省略"
    ],
    commonMistakes: [
      "错误地使用逗号",
      "使用错误的关系词",
      "在限制性关系从句中使用whom代替who",
      "不必要地使用限制性关系从句"
    ],
    exercises: [
      {
        question: "The man _____ lives next door is a doctor.",
        options: ["who", "which", "that", "whom"],
        correctAnswer: "who",
        explanation: "We use who for people in relative clauses."
      },
      {
        question: "The book _____ I bought yesterday is interesting.",
        options: ["who", "which", "that", "whom"],
        correctAnswer: "which",
        explanation: "We use which for things in relative clauses."
      }
    ],
    difficulty: "medium",
    category: "clauses"
  },
  {
    id: 62,
    title: "关系代词whose",
    description: "用于表示所有关系的关系代词",
    examples: [
      {
        english: "The man whose car was stolen called the police.",
        chinese: "车被偷的那个人报了警。"
      },
      {
        english: "The house whose roof was damaged needs repair.",
        chinese: "屋顶受损的房子需要修理。"
      }
    ],
    rules: [
      "使用whose表示所有关系",
      "whose可以用于人或事物",
      "whose后面直接跟名词",
      "whose可以用于限制性和非限制性关系从句"
    ],
    commonMistakes: [
      "使用who's代替whose",
      "使用错误的关系词",
      "在whose后使用错误的词序",
      "不必要地使用whose"
    ],
    exercises: [
      {
        question: "The man _____ car was stolen called the police.",
        options: ["who", "which", "whose", "whom"],
        correctAnswer: "whose",
        explanation: "We use whose for possession."
      },
      {
        question: "The house _____ roof was damaged needs repair.",
        options: ["who", "which", "whose", "whom"],
        correctAnswer: "whose",
        explanation: "We use whose for possession, can be used for things."
      }
    ],
    difficulty: "medium",
    category: "clauses"
  }
]; 