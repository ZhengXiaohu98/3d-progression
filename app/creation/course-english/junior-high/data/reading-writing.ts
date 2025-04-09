export interface ReadingMaterial {
  id: number;
  title: string;
  content: string;
  translation: string;
  vocabulary: string[];
  questions: {
    question: string;
    options: string[];
    answer: number;
  }[];
  writingPrompt?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface WritingMaterial {
  id: number;
  title: string;
  prompt: string;
  promptTranslation: string;
  examples: string[];
  examplesTranslation: string[];
  keywords: string[];
  grammarPoints: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const readingMaterials: ReadingMaterial[] = [
  {
    id: 1,
    title: "The Importance of Environmental Protection",
    content: `Environmental protection is crucial for the survival of all living beings on Earth. Our planet is facing numerous environmental challenges, including climate change, deforestation, and pollution. These issues affect not only wildlife but also human health and well-being.

To protect our environment, we need to take action. Simple steps like recycling, reducing energy consumption, and using public transportation can make a significant difference. Governments and organizations worldwide are working together to develop sustainable solutions for environmental problems.

Education plays a vital role in environmental protection. By learning about environmental issues and their solutions, we can make informed decisions and inspire others to take action. Every small effort counts in preserving our planet for future generations.`,
    translation: `环境保护对所有地球生物的生存至关重要。我们的星球正面临许多环境挑战，包括气候变化、森林砍伐和污染。这些问题不仅影响野生动物，还影响人类健康和生活质量。

为了保护环境，我们需要采取行动。简单的措施如回收利用、减少能源消耗和使用公共交通工具都能产生重大影响。世界各国政府和组织正在共同努力，为环境问题开发可持续的解决方案。

教育在环境保护中起着重要作用。通过学习环境问题及其解决方案，我们可以做出明智的决定，并激励他人采取行动。每一个小小的努力都有助于为子孙后代保护我们的星球。`,
    vocabulary: [
      "environmental",
      "protection",
      "survival",
      "challenges",
      "climate change",
      "deforestation",
      "pollution",
      "wildlife",
      "well-being",
      "recycling",
      "consumption",
      "transportation",
      "sustainable",
      "education",
      "preserve"
    ],
    questions: [
      {
        question: "What are the main environmental challenges mentioned in the text?",
        options: [
          "Climate change, deforestation, and pollution",
          "Overpopulation and urbanization",
          "Economic development and industrialization",
          "Technology and innovation"
        ],
        answer: 0
      },
      {
        question: "How can individuals help protect the environment?",
        options: [
          "By waiting for government action",
          "By ignoring environmental issues",
          "By recycling, reducing energy use, and using public transport",
          "By focusing only on economic growth"
        ],
        answer: 2
      },
      {
        question: "What role does education play in environmental protection?",
        options: [
          "It has no role in environmental protection",
          "It helps people make informed decisions and inspire others",
          "It only benefits scientists and researchers",
          "It is less important than government action"
        ],
        answer: 1
      }
    ],
    writingPrompt: "Write an essay about what you can do to protect the environment in your daily life.",
    difficulty: "medium",
    category: "environment"
  },
  {
    id: 2,
    title: "The Impact of Technology on Modern Life",
    content: `Technology has revolutionized the way we live, work, and communicate. From smartphones to artificial intelligence, technological advancements have made our lives more convenient and efficient. However, this rapid development also brings challenges and concerns.

One significant impact of technology is on communication. Social media platforms allow us to connect with people worldwide instantly, but they can also lead to reduced face-to-face interactions and privacy concerns. Additionally, the rise of automation and artificial intelligence is changing the job market, creating new opportunities while making some traditional jobs obsolete.

Despite these challenges, technology continues to shape our future. It enables scientific discoveries, improves healthcare, and provides access to education and information. The key is to use technology responsibly and ensure its benefits are accessible to everyone.`,
    translation: `技术已经彻底改变了我们的生活、工作和沟通方式。从智能手机到人工智能，技术进步使我们的生活更加便利和高效。然而，这种快速发展也带来了挑战和担忧。

技术的一个重要影响是在沟通方面。社交媒体平台让我们能够即时与全球各地的人联系，但也可能导致面对面互动的减少和隐私问题。此外，自动化和人工智能的兴起正在改变就业市场，创造新的机会，同时使一些传统工作变得过时。

尽管存在这些挑战，技术仍在继续塑造我们的未来。它促进科学发现，改善医疗保健，并提供教育和信息获取途径。关键是要负责任地使用技术，并确保其好处能够惠及每个人。`,
    vocabulary: [
      "revolutionize",
      "advancement",
      "convenient",
      "efficient",
      "communication",
      "platform",
      "interaction",
      "privacy",
      "automation",
      "artificial intelligence",
      "obsolete",
      "discovery",
      "healthcare",
      "access",
      "responsible"
    ],
    questions: [
      {
        question: "How has technology changed communication?",
        options: [
          "It has eliminated all forms of communication",
          "It has made communication slower and more difficult",
          "It has enabled instant global connections but reduced face-to-face interactions",
          "It has had no impact on communication"
        ],
        answer: 2
      },
      {
        question: "What is one challenge mentioned regarding technology and jobs?",
        options: [
          "Technology creates too many new jobs",
          "Technology has no effect on employment",
          "Automation and AI are making some traditional jobs obsolete",
          "Technology only benefits high-skilled workers"
        ],
        answer: 2
      },
      {
        question: "According to the text, what is the key to using technology effectively?",
        options: [
          "Using it as much as possible",
          "Avoiding it completely",
          "Using it responsibly and ensuring its benefits are accessible to everyone",
          "Focusing only on entertainment applications"
        ],
        answer: 2
      }
    ],
    writingPrompt: "Discuss the positive and negative impacts of technology on your daily life.",
    difficulty: "medium",
    category: "technology"
  },
  {
    id: 3,
    title: "The Benefits of Reading",
    content: `Reading is one of the most valuable skills we can develop. It not only provides knowledge and information but also enhances our imagination, vocabulary, and critical thinking abilities. Through reading, we can explore different worlds, understand diverse perspectives, and develop empathy for others.

Regular reading has numerous benefits for our mental health and cognitive development. It reduces stress, improves memory, and enhances concentration. Reading fiction, in particular, helps us understand human emotions and relationships better, while non-fiction expands our knowledge of the world around us.

In today's digital age, while there are many alternative forms of entertainment and information, the importance of reading remains unchanged. Whether through traditional books or digital formats, reading continues to be a fundamental tool for learning and personal growth.`,
    translation: `阅读是我们能培养的最有价值的技能之一。它不仅提供知识和信息，还能增强我们的想象力、词汇量和批判性思维能力。通过阅读，我们可以探索不同的世界，理解多样化的观点，并培养对他人的同理心。

定期阅读对我们的心理健康和认知发展有许多好处。它能减轻压力，改善记忆，增强注意力。特别是阅读小说，帮助我们更好地理解人类情感和关系，而阅读非小说类作品则扩展我们对周围世界的了解。

在当今的数字时代，尽管有许多替代性的娱乐和信息形式，阅读的重要性仍然不变。无论是通过传统书籍还是数字格式，阅读仍然是学习和个人成长的基本工具。`,
    vocabulary: [
      "valuable",
      "enhance",
      "imagination",
      "critical thinking",
      "perspective",
      "empathy",
      "cognitive",
      "development",
      "concentration",
      "fiction",
      "non-fiction",
      "digital",
      "alternative",
      "fundamental",
      "growth"
    ],
    questions: [
      {
        question: "What are the main benefits of reading mentioned in the text?",
        options: [
          "Only entertainment and relaxation",
          "Physical exercise and health benefits",
          "Knowledge, imagination, vocabulary, and critical thinking",
          "Financial success and career advancement"
        ],
        answer: 2
      },
      {
        question: "How does reading fiction benefit readers?",
        options: [
          "It only provides entertainment",
          "It has no benefits compared to non-fiction",
          "It helps understand human emotions and relationships better",
          "It improves physical health"
        ],
        answer: 2
      },
      {
        question: "According to the text, what has changed about reading in the digital age?",
        options: [
          "Reading has become less important",
          "Reading is only possible through digital formats now",
          "The importance of reading remains unchanged despite new alternatives",
          "Reading is no longer a fundamental tool for learning"
        ],
        answer: 2
      }
    ],
    writingPrompt: "Write about your favorite book and how it has influenced you.",
    difficulty: "easy",
    category: "education"
  },
  {
    id: 4,
    title: "The Power of Dreams",
    content: `Dreams have the power to shape our future and drive us towards success. Whether they are about personal achievements, career goals, or making a difference in the world, dreams give us purpose and motivation. Many great inventions and discoveries began as someone's dream.

However, achieving our dreams requires more than just wishing. It takes dedication, hard work, and perseverance. We must be willing to face challenges, learn from failures, and adapt to changing circumstances. The journey towards our dreams often teaches us valuable lessons about ourselves and life.

Remember that dreams can evolve and change as we grow. What matters most is that we continue to dream big and work towards making those dreams a reality. Every small step forward brings us closer to our goals.`,
    translation: `梦想有能力塑造我们的未来并推动我们走向成功。无论是关于个人成就、职业目标，还是改变世界，梦想都给予我们目标和动力。许多伟大的发明和发现都始于某人的梦想。

然而，实现梦想需要的不仅仅是愿望。它需要奉献、努力和毅力。我们必须愿意面对挑战，从失败中学习，并适应不断变化的环境。追求梦想的旅程常常教会我们关于自己和生活的宝贵课程。

记住，梦想会随着我们的成长而发展和改变。最重要的是，我们要继续怀揣远大梦想，并努力使这些梦想成为现实。每一个前进的小步骤都让我们离目标更近一步。`,
    vocabulary: [
      "dream",
      "shape",
      "achievement",
      "purpose",
      "motivation",
      "invention",
      "discovery",
      "dedication",
      "perseverance",
      "challenge",
      "failure",
      "adapt",
      "circumstance",
      "journey",
      "reality"
    ],
    questions: [
      {
        question: "What role do dreams play in our lives according to the text?",
        options: [
          "They are only for entertainment",
          "They give us purpose and motivation",
          "They are unimportant in modern life",
          "They only matter for children"
        ],
        answer: 1
      },
      {
        question: "What does the text say about achieving dreams?",
        options: [
          "It's easy and requires no effort",
          "It only depends on luck",
          "It requires dedication, hard work, and perseverance",
          "It's impossible for most people"
        ],
        answer: 2
      },
      {
        question: "How does the text suggest we should view our dreams?",
        options: [
          "We should never change our dreams",
          "Dreams are unimportant and should be ignored",
          "Dreams can evolve and change as we grow",
          "We should only have small, achievable dreams"
        ],
        answer: 2
      }
    ],
    writingPrompt: "Write about your biggest dream and how you plan to achieve it.",
    difficulty: "easy",
    category: "personal development"
  },
  {
    id: 5,
    title: "The Art of Communication",
    content: `Effective communication is essential in both personal and professional life. It involves not only speaking clearly but also listening actively and understanding others' perspectives. Good communication skills can help build strong relationships, resolve conflicts, and achieve common goals.

Non-verbal communication plays a crucial role in how we express ourselves. Facial expressions, body language, and tone of voice can convey emotions and intentions more powerfully than words alone. Being aware of these aspects can help us communicate more effectively and avoid misunderstandings.

In today's digital world, we must also master various forms of written communication. Whether it's emails, text messages, or social media posts, clear and concise writing helps ensure our message is understood correctly. Remember that good communication is a skill that can be developed through practice and feedback.`,
    translation: `有效的沟通在个人和职业生活中都是必不可少的。它不仅包括清晰地表达，还包括积极倾听和理解他人的观点。良好的沟通技巧可以帮助建立牢固的关系，解决冲突，实现共同目标。

非语言沟通在我们表达自己的方式中起着关键作用。面部表情、肢体语言和语气可以比单纯的语言更有力地传达情感和意图。意识到这些方面可以帮助我们更有效地沟通，避免误解。

在当今的数字世界中，我们还必须掌握各种书面沟通形式。无论是电子邮件、短信还是社交媒体帖子，清晰简洁的写作都有助于确保我们的信息被正确理解。记住，良好的沟通是一项可以通过练习和反馈来培养的技能。`,
    vocabulary: [
      "communication",
      "effective",
      "perspective",
      "relationship",
      "conflict",
      "non-verbal",
      "expression",
      "body language",
      "tone",
      "intention",
      "misunderstanding",
      "digital",
      "concise",
      "feedback",
      "develop"
    ],
    questions: [
      {
        question: "What does effective communication involve according to the text?",
        options: [
          "Only speaking clearly",
          "Only listening actively",
          "Speaking clearly, listening actively, and understanding others",
          "Only writing well"
        ],
        answer: 2
      },
      {
        question: "How does non-verbal communication affect our message?",
        options: [
          "It has no effect on communication",
          "It can convey emotions and intentions more powerfully than words",
          "It only matters in formal situations",
          "It should be avoided in professional settings"
        ],
        answer: 1
      },
      {
        question: "What does the text say about developing communication skills?",
        options: [
          "They cannot be developed",
          "They are only important for certain people",
          "They can be developed through practice and feedback",
          "They are only important in digital communication"
        ],
        answer: 2
      }
    ],
    writingPrompt: "Describe a situation where good communication helped solve a problem.",
    difficulty: "medium",
    category: "communication"
  },
  {
    id: 6,
    title: "The Digital Revolution",
    content: `The digital revolution has transformed every aspect of our lives. From smartphones to artificial intelligence, technology has become an integral part of our daily routines. This transformation brings both opportunities and challenges that we must navigate carefully.

One of the most significant impacts is on how we communicate and access information. Social media platforms have created new ways to connect with others, while search engines provide instant access to vast amounts of knowledge. However, this digital landscape also raises concerns about privacy, information overload, and the quality of online interactions.

The future of the digital revolution remains uncertain but exciting. Emerging technologies like virtual reality, blockchain, and quantum computing promise to further reshape our world. As we embrace these innovations, we must also develop digital literacy skills and critical thinking abilities to use technology responsibly and effectively.`,
    translation: `数字革命已经改变了我们生活的方方面面。从智能手机到人工智能，技术已经成为我们日常生活中不可或缺的一部分。这种转变带来了机遇和挑战，我们必须谨慎应对。

最重要的影响之一是我们沟通和获取信息的方式。社交媒体平台创造了与他人联系的新方式，而搜索引擎提供了即时访问海量知识的途径。然而，这种数字环境也引发了关于隐私、信息过载和在线互动质量的担忧。

数字革命的未来仍然不确定但令人兴奋。虚拟现实、区块链和量子计算等新兴技术有望进一步重塑我们的世界。在我们拥抱这些创新的同时，我们还必须培养数字素养和批判性思维能力，以负责任和有效地使用技术。`,
    vocabulary: [
      "digital",
      "revolution",
      "transform",
      "integral",
      "routine",
      "opportunity",
      "challenge",
      "navigate",
      "significant",
      "impact",
      "platform",
      "privacy",
      "overload",
      "emerging",
      "literacy"
    ],
    questions: [
      {
        question: "What are the main impacts of the digital revolution mentioned in the text?",
        options: [
          "Only negative effects on society",
          "Only positive changes in communication",
          "Both opportunities and challenges in various aspects of life",
          "No significant changes in daily life"
        ],
        answer: 2
      },
      {
        question: "What concerns does the text raise about digital technology?",
        options: [
          "Only about cost and affordability",
          "Only about technical difficulties",
          "Privacy, information overload, and quality of online interactions",
          "Only about environmental impact"
        ],
        answer: 2
      },
      {
        question: "What skills does the text suggest are important for the digital age?",
        options: [
          "Only technical programming skills",
          "Only social media management",
          "Digital literacy and critical thinking",
          "Only data analysis skills"
        ],
        answer: 2
      }
    ],
    writingPrompt: "Discuss how digital technology has changed your daily life and what challenges you face in using it.",
    difficulty: "medium",
    category: "technology"
  },
  {
    id: 7,
    title: "The Power of Music",
    content: `Music has a unique ability to connect people across cultures, languages, and generations. It can evoke powerful emotions, trigger memories, and even influence our mood and behavior. From ancient tribal ceremonies to modern concert halls, music has been an essential part of human expression and communication.

Scientific research has shown that music affects our brains in remarkable ways. It can reduce stress, improve cognitive function, and even help with physical rehabilitation. Learning to play a musical instrument develops coordination, discipline, and creativity, while listening to music can enhance our emotional intelligence and social connections.

In today's digital age, music is more accessible than ever before. Streaming platforms allow us to explore diverse genres and artists from around the world. However, this accessibility also raises questions about how we value and support musicians in the modern economy. As we enjoy the convenience of digital music, we must also consider how to ensure artists receive fair compensation for their work.`,
    translation: `音乐具有独特的能力，能够连接不同文化、语言和世代的人们。它可以唤起强烈的情感，触发记忆，甚至影响我们的情绪和行为。从古老的部落仪式到现代音乐厅，音乐一直是人类表达和交流的重要组成部分。

科学研究表明，音乐以显著的方式影响我们的大脑。它可以减轻压力，改善认知功能，甚至有助于身体康复。学习演奏乐器可以培养协调能力、纪律性和创造力，而听音乐则可以增强我们的情商和社交联系。

在当今的数字时代，音乐比以往任何时候都更容易获得。流媒体平台让我们能够探索来自世界各地的各种流派和艺术家。然而，这种可及性也引发了我们如何重视和支持现代经济中的音乐家的问题。在我们享受数字音乐便利的同时，我们还必须考虑如何确保艺术家获得公平的工作报酬。`,
    vocabulary: [
      "music",
      "connect",
      "culture",
      "emotion",
      "memory",
      "behavior",
      "ceremony",
      "expression",
      "scientific",
      "cognitive",
      "rehabilitation",
      "coordination",
      "discipline",
      "creativity",
      "compensation"
    ],
    questions: [
      {
        question: "What unique ability does music have according to the text?",
        options: [
          "Only to entertain people",
          "To connect people across cultures, languages, and generations",
          "Only to make money for artists",
          "Only to help people sleep better"
        ],
        answer: 1
      },
      {
        question: "What benefits of music are mentioned in the text?",
        options: [
          "Only physical exercise benefits",
          "Only financial benefits for the music industry",
          "Reducing stress, improving cognitive function, and helping with rehabilitation",
          "Only helping people dance better"
        ],
        answer: 2
      },
      {
        question: "What challenge does the text mention regarding digital music?",
        options: [
          "Only technical problems with streaming",
          "Only sound quality issues",
          "Ensuring artists receive fair compensation for their work",
          "Only finding good music online"
        ],
        answer: 2
      }
    ],
    writingPrompt: "Describe how music has influenced your life and what role it plays in your daily routine.",
    difficulty: "easy",
    category: "arts"
  },
  {
    id: 8,
    title: "The Art of Problem Solving",
    content: `Problem solving is a fundamental skill that we use throughout our lives. Whether we're facing academic challenges, personal dilemmas, or professional obstacles, the ability to analyze situations and find effective solutions is invaluable.

The process of problem solving typically involves several steps. First, we need to clearly identify and understand the problem. This might involve gathering information, asking questions, and looking at the situation from different perspectives. Next, we brainstorm possible solutions, considering both conventional and creative approaches. Then, we evaluate these options based on their feasibility, potential outcomes, and alignment with our goals.

Effective problem solvers also know when to seek help and collaborate with others. They recognize that some problems are too complex to solve alone and that different perspectives can lead to better solutions. Additionally, they learn from both successes and failures, using these experiences to improve their problem-solving skills for future challenges.`,
    translation: `解决问题是我们一生中使用的基本技能。无论我们面临学术挑战、个人困境还是职业障碍，分析情况并找到有效解决方案的能力都是无价的。

解决问题的过程通常包括几个步骤。首先，我们需要清晰地识别和理解问题。这可能涉及收集信息、提出问题，并从不同角度看待情况。接下来，我们集思广益，考虑可能的解决方案，同时考虑常规和创造性的方法。然后，我们根据可行性、潜在结果和与目标的一致性来评估这些选项。

有效的解决问题者也知道何时寻求帮助并与他人合作。他们认识到有些问题太复杂，无法独自解决，不同的观点可以带来更好的解决方案。此外，他们从成功和失败中学习，利用这些经验来提高他们未来挑战的解决问题能力。`,
    vocabulary: [
      "problem solving",
      "fundamental",
      "skill",
      "challenge",
      "dilemma",
      "obstacle",
      "analyze",
      "solution",
      "identify",
      "understand",
      "perspective",
      "brainstorm",
      "evaluate",
      "feasibility",
      "collaborate"
    ],
    questions: [
      {
        question: "What is the first step in the problem-solving process according to the text?",
        options: [
          "Immediately implementing a solution",
          "Clearly identifying and understanding the problem",
          "Asking others to solve it for you",
          "Ignoring the problem and hoping it goes away"
        ],
        answer: 1
      },
      {
        question: "What does the text suggest about evaluating solutions?",
        options: [
          "Choose the first solution that comes to mind",
          "Only consider conventional approaches",
          "Evaluate based on feasibility, potential outcomes, and alignment with goals",
          "Always choose the most expensive solution"
        ],
        answer: 2
      },
      {
        question: "What does the text say about learning from problem-solving experiences?",
        options: [
          "Only learn from successes",
          "Ignore failures completely",
          "Learn from both successes and failures to improve future skills",
          "Problem-solving skills cannot be improved"
        ],
        answer: 2
      }
    ],
    writingPrompt: "Describe a challenging problem you faced and how you solved it. What did you learn from this experience?",
    difficulty: "medium",
    category: "personal development"
  },
  {
    id: 9,
    title: "The Importance of Sleep",
    content: `Sleep is essential for our physical and mental well-being. During sleep, our bodies repair tissues, strengthen the immune system, and consolidate memories. Despite its importance, many people struggle with getting adequate sleep due to busy schedules, stress, and the use of electronic devices before bedtime.

Research has shown that teenagers need between 8 to 10 hours of sleep per night for optimal functioning. However, biological changes during adolescence often make it difficult to fall asleep early and wake up early. This natural shift in circadian rhythm, combined with early school start times, creates a significant challenge for many students.

To improve sleep quality, experts recommend establishing a consistent sleep schedule, creating a relaxing bedtime routine, and keeping electronic devices out of the bedroom. The blue light emitted by screens can interfere with the production of melatonin, a hormone that helps regulate sleep. Additionally, regular exercise, a balanced diet, and stress management techniques can all contribute to better sleep habits.`,
    translation: `睡眠对我们的身心健康至关重要。在睡眠期间，我们的身体修复组织，增强免疫系统，并巩固记忆。尽管睡眠很重要，但由于繁忙的日程安排、压力和睡前使用电子设备，许多人难以获得充足的睡眠。

研究表明，青少年每晚需要8到10小时的睡眠才能获得最佳功能。然而，青春期期间的生物变化往往使早睡早起变得困难。这种昼夜节律的自然变化，加上学校早开始时间，为许多学生创造了重大挑战。

为了改善睡眠质量，专家建议建立一致的睡眠时间表，创建放松的睡前习惯，并将电子设备放在卧室外。屏幕发出的蓝光会干扰褪黑激素的产生，这是一种帮助调节睡眠的激素。此外，定期锻炼、均衡饮食和压力管理技巧都可以有助于养成更好的睡眠习惯。`,
    vocabulary: [
      "sleep",
      "essential",
      "well-being",
      "repair",
      "immune",
      "consolidate",
      "memory",
      "adequate",
      "adolescence",
      "circadian",
      "rhythm",
      "melatonin",
      "hormone",
      "regulate",
      "habit"
    ],
    questions: [
      {
        question: "How many hours of sleep do teenagers need according to the text?",
        options: [
          "4 to 6 hours",
          "6 to 8 hours",
          "8 to 10 hours",
          "10 to 12 hours"
        ],
        answer: 2
      },
      {
        question: "What does the text identify as a challenge for teenagers' sleep?",
        options: [
          "Too much free time",
          "Natural shift in circadian rhythm combined with early school start times",
          "Lack of comfortable beds",
          "Too much homework"
        ],
        answer: 1
      },
      {
        question: "What does the text suggest about electronic devices and sleep?",
        options: [
          "They help people fall asleep faster",
          "They have no effect on sleep",
          "The blue light they emit can interfere with melatonin production",
          "They should be used right before bedtime"
        ],
        answer: 2
      }
    ],
    writingPrompt: "Describe your sleep habits and how they affect your daily life. What changes could you make to improve your sleep quality?",
    difficulty: "easy",
    category: "health"
  },
  {
    id: 10,
    title: "The Art of Problem Solving",
    content: `Problem solving is a fundamental skill that we use throughout our lives. Whether we're facing academic challenges, personal dilemmas, or professional obstacles, the ability to analyze situations and find effective solutions is invaluable.

The process of problem solving typically involves several steps. First, we need to clearly identify and understand the problem. This might involve gathering information, asking questions, and looking at the situation from different perspectives. Next, we brainstorm possible solutions, considering both conventional and creative approaches. Then, we evaluate these options based on their feasibility, potential outcomes, and alignment with our goals.

Effective problem solvers also know when to seek help and collaborate with others. They recognize that some problems are too complex to solve alone and that different perspectives can lead to better solutions. Additionally, they learn from both successes and failures, using these experiences to improve their problem-solving skills for future challenges.`,
    translation: `解决问题是我们一生中使用的基本技能。无论我们面临学术挑战、个人困境还是职业障碍，分析情况并找到有效解决方案的能力都是无价的。

解决问题的过程通常包括几个步骤。首先，我们需要清晰地识别和理解问题。这可能涉及收集信息、提出问题，并从不同角度看待情况。接下来，我们集思广益，考虑可能的解决方案，同时考虑常规和创造性的方法。然后，我们根据可行性、潜在结果和与目标的一致性来评估这些选项。

有效的解决问题者也知道何时寻求帮助并与他人合作。他们认识到有些问题太复杂，无法独自解决，不同的观点可以带来更好的解决方案。此外，他们从成功和失败中学习，利用这些经验来提高他们未来挑战的解决问题能力。`,
    vocabulary: [
      "problem solving",
      "fundamental",
      "skill",
      "challenge",
      "dilemma",
      "obstacle",
      "analyze",
      "solution",
      "identify",
      "understand",
      "perspective",
      "brainstorm",
      "evaluate",
      "feasibility",
      "collaborate"
    ],
    questions: [
      {
        question: "What is the first step in the problem-solving process according to the text?",
        options: [
          "Immediately implementing a solution",
          "Clearly identifying and understanding the problem",
          "Asking others to solve it for you",
          "Ignoring the problem and hoping it goes away"
        ],
        answer: 1
      },
      {
        question: "What does the text suggest about evaluating solutions?",
        options: [
          "Choose the first solution that comes to mind",
          "Only consider conventional approaches",
          "Evaluate based on feasibility, potential outcomes, and alignment with goals",
          "Always choose the most expensive solution"
        ],
        answer: 2
      },
      {
        question: "What does the text say about learning from problem-solving experiences?",
        options: [
          "Only learn from successes",
          "Ignore failures completely",
          "Learn from both successes and failures to improve future skills",
          "Problem-solving skills cannot be improved"
        ],
        answer: 2
      }
    ],
    writingPrompt: "Describe a challenging problem you faced and how you solved it. What did you learn from this experience?",
    difficulty: "medium",
    category: "personal development"
  },
  {
    id: 11,
    title: "The Importance of Sleep",
    content: `Sleep is essential for our physical and mental well-being. During sleep, our bodies repair tissues, strengthen the immune system, and consolidate memories. Despite its importance, many people struggle with getting adequate sleep due to busy schedules, stress, and the use of electronic devices before bedtime.

Research has shown that teenagers need between 8 to 10 hours of sleep per night for optimal functioning. However, biological changes during adolescence often make it difficult to fall asleep early and wake up early. This natural shift in circadian rhythm, combined with early school start times, creates a significant challenge for many students.

To improve sleep quality, experts recommend establishing a consistent sleep schedule, creating a relaxing bedtime routine, and keeping electronic devices out of the bedroom. The blue light emitted by screens can interfere with the production of melatonin, a hormone that helps regulate sleep. Additionally, regular exercise, a balanced diet, and stress management techniques can all contribute to better sleep habits.`,
    translation: `睡眠对我们的身心健康至关重要。在睡眠期间，我们的身体修复组织，增强免疫系统，并巩固记忆。尽管睡眠很重要，但由于繁忙的日程安排、压力和睡前使用电子设备，许多人难以获得充足的睡眠。

研究表明，青少年每晚需要8到10小时的睡眠才能获得最佳功能。然而，青春期期间的生物变化往往使早睡早起变得困难。这种昼夜节律的自然变化，加上学校早开始时间，为许多学生创造了重大挑战。

为了改善睡眠质量，专家建议建立一致的睡眠时间表，创建放松的睡前习惯，并将电子设备放在卧室外。屏幕发出的蓝光会干扰褪黑激素的产生，这是一种帮助调节睡眠的激素。此外，定期锻炼、均衡饮食和压力管理技巧都可以有助于养成更好的睡眠习惯。`,
    vocabulary: [
      "sleep",
      "essential",
      "well-being",
      "repair",
      "immune",
      "consolidate",
      "memory",
      "adequate",
      "adolescence",
      "circadian",
      "rhythm",
      "melatonin",
      "hormone",
      "regulate",
      "habit"
    ],
    questions: [
      {
        question: "How many hours of sleep do teenagers need according to the text?",
        options: [
          "4 to 6 hours",
          "6 to 8 hours",
          "8 to 10 hours",
          "10 to 12 hours"
        ],
        answer: 2
      },
      {
        question: "What does the text identify as a challenge for teenagers' sleep?",
        options: [
          "Too much free time",
          "Natural shift in circadian rhythm combined with early school start times",
          "Lack of comfortable beds",
          "Too much homework"
        ],
        answer: 1
      },
      {
        question: "What does the text suggest about electronic devices and sleep?",
        options: [
          "They help people fall asleep faster",
          "They have no effect on sleep",
          "The blue light they emit can interfere with melatonin production",
          "They should be used right before bedtime"
        ],
        answer: 2
      }
    ],
    writingPrompt: "Describe your sleep habits and how they affect your daily life. What changes could you make to improve your sleep quality?",
    difficulty: "easy",
    category: "health"
  },
  {
    id: 12,
    title: "The Future of Artificial Intelligence",
    content: `Artificial Intelligence (AI) is rapidly transforming our world. From virtual assistants like Siri and Alexa to self-driving cars and advanced medical diagnostics, AI technologies are becoming increasingly integrated into our daily lives. This technological revolution promises to solve complex problems and improve efficiency across various sectors.

However, the rise of AI also raises important ethical questions. Concerns about privacy, job displacement, and decision-making autonomy have sparked debates about how to develop and regulate these technologies responsibly. As AI systems become more sophisticated, ensuring they align with human values and benefit society as a whole becomes crucial.

Education about AI is essential for future generations. Understanding how AI works, its capabilities, and its limitations will help young people navigate a world where AI plays an increasingly central role. By developing critical thinking skills and ethical frameworks, students can contribute to shaping an AI future that enhances human potential rather than replacing it.`,
    translation: `人工智能（AI）正在迅速改变我们的世界。从Siri和Alexa等虚拟助手到自动驾驶汽车和先进的医疗诊断，AI技术正日益融入我们的日常生活。这场技术革命有望解决复杂问题并提高各个领域的效率。

然而，AI的兴起也提出了重要的伦理问题。关于隐私、工作替代和决策自主权的担忧引发了关于如何负责任地开发和监管这些技术的辩论。随着AI系统变得更加复杂，确保它们与人类价值观一致并造福整个社会变得至关重要。

关于AI的教育对子孙后代至关重要。了解AI的工作原理、能力和局限性将帮助年轻人在AI发挥越来越核心作用的世界中导航。通过发展批判性思维技能和伦理框架，学生可以为塑造一个增强而非取代人类潜力的AI未来做出贡献。`,
    vocabulary: [
      "artificial intelligence",
      "transform",
      "virtual assistant",
      "self-driving",
      "diagnostics",
      "integrated",
      "revolution",
      "efficiency",
      "ethical",
      "privacy",
      "displacement",
      "autonomy",
      "sophisticated",
      "align",
      "critical thinking"
    ],
    questions: [
      {
        question: "According to the text, what are some examples of AI technologies mentioned?",
        options: [
          "Only virtual assistants",
          "Virtual assistants, self-driving cars, and medical diagnostics",
          "Only self-driving cars",
          "Only medical diagnostics"
        ],
        answer: 1
      },
      {
        question: "What ethical concerns does the text mention regarding AI?",
        options: [
          "Only privacy concerns",
          "Only job displacement",
          "Privacy, job displacement, and decision-making autonomy",
          "Only decision-making autonomy"
        ],
        answer: 2
      },
      {
        question: "What does the text suggest is essential for future generations regarding AI?",
        options: [
          "Avoiding AI completely",
          "Learning to code AI systems",
          "Understanding how AI works, its capabilities, and limitations",
          "Only focusing on the benefits of AI"
        ],
        answer: 2
      }
    ],
    writingPrompt: "How do you think artificial intelligence will change your life in the next ten years? What opportunities and challenges might it bring?",
    difficulty: "hard",
    category: "technology"
  },
  {
    id: 13,
    title: "The Benefits of Outdoor Education",
    content: `Outdoor education programs offer students unique learning experiences that cannot be replicated in traditional classroom settings. By taking learning outside, students engage with the natural world directly, developing a deeper understanding of environmental science, biology, and ecology. These hands-on experiences make abstract concepts tangible and memorable.

Beyond academic knowledge, outdoor education fosters important life skills. Students learn teamwork through collaborative activities like orienteering or building shelters. They develop problem-solving abilities when faced with unexpected challenges in nature. Resilience grows as they navigate difficult terrain or weather conditions. Perhaps most importantly, outdoor education helps students develop a sense of wonder and appreciation for the natural world.

Research has shown that time spent in nature has numerous benefits for mental and physical health. Outdoor education programs often incorporate physical activity, reducing stress and improving overall well-being. Additionally, these experiences can help students develop a sense of environmental stewardship, inspiring them to protect natural spaces for future generations.`,
    translation: `户外教育项目为学生提供了在传统课堂环境中无法复制的独特学习体验。通过将学习带到户外，学生直接与自然世界互动，对环境科学、生物学和生态学有更深入的理解。这些实践经验使抽象概念变得具体和难忘。

除了学术知识外，户外教育还培养重要的生活技能。学生通过定向越野或搭建庇护所等协作活动学习团队合作。当面对自然中的意外挑战时，他们培养解决问题的能力。当他们 navigating 困难地形或天气条件时，韧性得到增强。也许最重要的是，户外教育帮助学生培养对自然世界的好奇心和欣赏。

研究表明，在自然中度过的时间对身心健康有许多好处。户外教育项目通常包含体育活动，减轻压力并改善整体健康。此外，这些体验可以帮助学生培养环境管理意识，激励他们为子孙后代保护自然空间。`,
    vocabulary: [
      "outdoor education",
      "unique",
      "replicate",
      "engage",
      "environmental science",
      "biology",
      "ecology",
      "hands-on",
      "tangible",
      "memorable",
      "teamwork",
      "collaborative",
      "orienteering",
      "resilience",
      "stewardship"
    ],
    questions: [
      {
        question: "What subjects does the text mention students can learn better through outdoor education?",
        options: [
          "Only mathematics",
          "Only language arts",
          "Environmental science, biology, and ecology",
          "Only history"
        ],
        answer: 2
      },
      {
        question: "What life skills does the text mention are developed through outdoor education?",
        options: [
          "Only teamwork",
          "Only problem-solving",
          "Teamwork, problem-solving, and resilience",
          "Only resilience"
        ],
        answer: 2
      },
      {
        question: "According to the text, what benefit does outdoor education provide for mental and physical health?",
        options: [
          "It has no benefits",
          "It only improves physical health",
          "It reduces stress and improves overall well-being",
          "It only improves mental health"
        ],
        answer: 2
      }
    ],
    writingPrompt: "Describe an outdoor learning experience you've had. What did you learn from it, and how did it differ from classroom learning?",
    difficulty: "medium",
    category: "education"
  }
];

export const writingMaterials: WritingMaterial[] = [
  {
    id: 1,
    title: "My Future Career",
    prompt: "Write an essay about your dream job and how you plan to achieve it. Include your interests, skills, and the steps you will take to prepare for this career.",
    promptTranslation: "写一篇关于你理想工作的文章，以及你计划如何实现它。包括你的兴趣、技能，以及你将为这个职业做准备的步骤。",
    examples: [
      "My dream job is to become a software engineer. I am passionate about technology and enjoy solving problems. To achieve this goal, I will study computer science in university, learn programming languages, and gain practical experience through internships.",
      "I want to become a doctor to help people and save lives. I am interested in biology and chemistry, and I am good at working under pressure. I will need to study medicine for many years, complete internships at hospitals, and continue learning throughout my career."
    ],
    examplesTranslation: [
      "我的理想工作是成为一名软件工程师。我对技术充满热情，喜欢解决问题。为了实现这个目标，我将在大学学习计算机科学，学习编程语言，并通过实习获得实践经验。",
      "我想成为一名医生来帮助人们和拯救生命。我对生物学和化学感兴趣，而且我善于在压力下工作。我需要学习医学多年，在医院完成实习，并在整个职业生涯中继续学习。"
    ],
    keywords: [
      "career",
      "dream",
      "goal",
      "passion",
      "interest",
      "skill",
      "education",
      "experience",
      "future",
      "plan",
      "prepare",
      "achieve",
      "challenge",
      "opportunity",
      "success"
    ],
    grammarPoints: [
      "Use future tense to describe your plans",
      "Use present tense to describe your current interests and skills",
      "Use conditional sentences to discuss possibilities",
      "Use modal verbs to express ability and necessity",
      "Use connecting words to organize your ideas"
    ],
    difficulty: "medium",
    category: "career"
  },
  {
    id: 2,
    title: "Environmental Protection",
    prompt: "Write an essay about environmental problems and solutions. Discuss the challenges facing our planet and what individuals and governments can do to protect the environment.",
    promptTranslation: "写一篇关于环境问题和解决方案的文章。讨论我们星球面临的挑战，以及个人和政府可以为保护环境做些什么。",
    examples: [
      "Climate change is one of the biggest environmental challenges we face today. Rising temperatures, extreme weather events, and melting ice caps threaten ecosystems worldwide. To address this issue, we need to reduce greenhouse gas emissions by using renewable energy, improving energy efficiency, and changing our consumption habits.",
      "Deforestation is destroying habitats and contributing to climate change. To protect forests, governments should implement stricter regulations, promote sustainable logging practices, and support reforestation projects. Individuals can help by reducing paper consumption, supporting environmental organizations, and choosing products from sustainable sources."
    ],
    examplesTranslation: [
      "气候变化是我们今天面临的最大环境挑战之一。气温上升、极端天气事件和冰盖融化威胁着全球生态系统。为了解决这个问题，我们需要通过使用可再生能源、提高能源效率和改变消费习惯来减少温室气体排放。",
      "森林砍伐正在破坏栖息地并加剧气候变化。为了保护森林，政府应该实施更严格的规定，推广可持续的伐木做法，并支持重新造林项目。个人可以通过减少纸张消耗、支持环保组织和选择来自可持续来源的产品来提供帮助。"
    ],
    keywords: [
      "environment",
      "climate change",
      "pollution",
      "deforestation",
      "biodiversity",
      "sustainable",
      "renewable",
      "conservation",
      "emission",
      "ecosystem",
      "habitat",
      "regulation",
      "solution",
      "challenge",
      "protection"
    ],
    grammarPoints: [
      "Use present tense to describe current environmental problems",
      "Use modal verbs to suggest solutions",
      "Use passive voice to emphasize actions and results",
      "Use conditional sentences to discuss possible outcomes",
      "Use cause and effect connectors to explain relationships"
    ],
    difficulty: "hard",
    category: "environment"
  },
  {
    id: 3,
    title: "My School Life",
    prompt: "Write an essay about your school life, including your daily routine, favorite subjects, extracurricular activities, and relationships with teachers and classmates.",
    promptTranslation: "写一篇关于你学校生活的文章，包括你的日常生活、喜欢的科目、课外活动，以及与老师和同学的关系。",
    examples: [
      "My school life is busy but enjoyable. Every morning, I arrive at school at 7:30 and attend classes until 4:00 PM. My favorite subjects are English and Science because they are interesting and challenging. After school, I participate in the basketball team and the debate club, which help me develop teamwork and communication skills.",
      "I have been studying at my current school for three years, and I have made many friends. The teachers are helpful and encourage us to think critically. Although I sometimes find mathematics difficult, my math teacher always explains concepts clearly and helps me improve. I believe my school experience is preparing me well for the future."
    ],
    examplesTranslation: [
      "我的学校生活忙碌但愉快。每天早上，我7:30到达学校，上课到下午4:00。我最喜欢的科目是英语和科学，因为它们有趣且具有挑战性。放学后，我参加篮球队和辩论俱乐部，这帮助我培养团队合作和沟通能力。",
      "我在现在的学校已经学习了三年，交了许多朋友。老师们都很乐于助人，鼓励我们批判性思考。虽然我有时觉得数学很难，但我的数学老师总是清晰地解释概念并帮助我提高。我相信我的学校经历为我未来做好了准备。"
    ],
    keywords: [
      "school",
      "routine",
      "subject",
      "class",
      "teacher",
      "classmate",
      "friend",
      "activity",
      "club",
      "study",
      "learn",
      "develop",
      "experience",
      "challenge",
      "achievement"
    ],
    grammarPoints: [
      "Use present simple to describe regular activities",
      "Use present continuous for current actions",
      "Use past simple for past experiences",
      "Use adjectives to describe people and experiences",
      "Use time expressions to organize your daily routine"
    ],
    difficulty: "easy",
    category: "school"
  },
  {
    id: 4,
    title: "My Role Model",
    prompt: "Write an essay about someone who has inspired you in your life. Describe their qualities, achievements, and how they have influenced you.",
    promptTranslation: "写一篇关于激励你生活的人的文章。描述他们的品质、成就，以及他们如何影响了你。",
    examples: [
      "My grandmother is my role model because of her strength and kindness. Despite facing many challenges in life, she always maintains a positive attitude and helps others. Her dedication to family and community service has taught me the importance of giving back to society.",
      "My science teacher, Dr. Smith, has inspired me to pursue a career in research. His passion for discovery and innovative teaching methods have shown me that learning can be both exciting and meaningful. He encourages students to think critically and never stop questioning."
    ],
    examplesTranslation: [
      "我的祖母是我的榜样，因为她坚强和善良。尽管面临许多生活挑战，她始终保持积极的态度并帮助他人。她对家庭和社区服务的奉献精神教会了我回馈社会的重要性。",
      "我的科学老师史密斯博士激励我追求研究事业。他对发现的热爱和创新教学方法向我展示了学习可以既令人兴奋又有意义。他鼓励学生批判性思考，永远不要停止质疑。"
    ],
    keywords: [
      "role model",
      "inspire",
      "influence",
      "qualities",
      "achievements",
      "strength",
      "kindness",
      "dedication",
      "passion",
      "teaching",
      "learning",
      "community",
      "service",
      "discovery",
      "innovation"
    ],
    grammarPoints: [
      "Use present tense to describe current qualities and characteristics",
      "Use past tense to describe past achievements and experiences",
      "Use adjectives to describe personality traits",
      "Use connecting words to show relationships between ideas",
      "Use examples to support your main points"
    ],
    difficulty: "medium",
    category: "personal"
  },
  {
    id: 5,
    title: "The Future of Education",
    prompt: "Write an essay about how you think education will change in the future. Consider the role of technology, teaching methods, and the skills students will need.",
    promptTranslation: "写一篇关于你认为教育在未来将如何变化的文章。考虑技术的作用、教学方法，以及学生将需要的技能。",
    examples: [
      "In the future, education will become more personalized and technology-driven. Virtual reality and artificial intelligence will create immersive learning experiences, allowing students to explore historical events or scientific concepts in interactive ways. Teachers will focus more on guiding students' critical thinking and creativity rather than just delivering information.",
      "The future of education will emphasize practical skills and real-world applications. Students will learn through project-based learning and internships, developing problem-solving abilities and adaptability. Digital literacy and emotional intelligence will be as important as traditional academic subjects."
    ],
    examplesTranslation: [
      "在未来，教育将变得更加个性化和技术驱动。虚拟现实和人工智能将创造沉浸式学习体验，让学生能够以互动方式探索历史事件或科学概念。教师将更多地关注引导学生批判性思考和创造力，而不仅仅是传递信息。",
      "教育的未来将强调实践技能和实际应用。学生将通过基于项目的学习和实习来学习，培养解决问题的能力和适应性。数字素养和情商将与传统学科同等重要。"
    ],
    keywords: [
      "education",
      "future",
      "technology",
      "learning",
      "teaching",
      "virtual reality",
      "artificial intelligence",
      "personalized",
      "interactive",
      "critical thinking",
      "creativity",
      "digital literacy",
      "practical skills",
      "adaptability",
      "innovation"
    ],
    grammarPoints: [
      "Use future tense to make predictions",
      "Use modal verbs to express possibilities",
      "Use conditional sentences to discuss potential scenarios",
      "Use passive voice to emphasize changes and developments",
      "Use comparative structures to discuss differences between present and future"
    ],
    difficulty: "hard",
    category: "education"
  },
  {
    id: 6,
    title: "The Impact of Social Media",
    prompt: "Write an essay about how social media has affected your life and society in general. Discuss both positive and negative aspects, and consider how to use social media responsibly.",
    promptTranslation: "写一篇关于社交媒体如何影响你的生活和社会整体的文章。讨论积极和消极的方面，并考虑如何负责任地使用社交媒体。",
    examples: [
      "Social media has revolutionized how we connect with others, allowing us to maintain relationships with friends and family across great distances. However, it can also lead to feelings of inadequacy when comparing our lives to the carefully curated images others share. To use social media responsibly, I limit my daily usage, focus on meaningful interactions rather than passive scrolling, and remind myself that what I see online often represents only a small part of someone's life.",
      "While social media platforms have created new opportunities for learning and activism, they have also contributed to the spread of misinformation and online harassment. I believe the key to navigating social media is developing critical thinking skills to evaluate information, setting boundaries for our online presence, and using these platforms to amplify positive messages rather than negativity."
    ],
    examplesTranslation: [
      "社交媒体彻底改变了我们与他人联系的方式，使我们能够与远方的朋友和家人保持关系。然而，当我们将自己的生活与他人精心策划的图像进行比较时，它也可能导致不足感。为了负责任地使用社交媒体，我限制每日使用时间，专注于有意义的互动而不是被动滚动，并提醒自己，我在网上看到的往往只代表某人生活的一小部分。",
      "虽然社交媒体平台为学习和行动主义创造了新的机会，但它们也助长了错误信息的传播和网络骚扰。我认为驾驭社交媒体的关键是培养批判性思维能力来评估信息，为我们的在线存在设定界限，并使用这些平台来放大积极的信息而不是消极的信息。"
    ],
    keywords: [
      "social media",
      "connection",
      "communication",
      "relationship",
      "comparison",
      "responsibility",
      "boundary",
      "misinformation",
      "critical thinking",
      "online presence",
      "digital footprint",
      "privacy",
      "addiction",
      "well-being",
      "authenticity"
    ],
    grammarPoints: [
      "Use present perfect to describe ongoing effects",
      "Use conditional sentences to discuss possibilities",
      "Use passive voice to emphasize impacts",
      "Use modal verbs to express advice and recommendations",
      "Use contrasting connectors to compare positive and negative aspects"
    ],
    difficulty: "medium",
    category: "technology"
  },
  {
    id: 7,
    title: "My Cultural Heritage",
    prompt: "Write an essay about your cultural heritage and how it has shaped your identity. Describe traditions, values, and experiences that connect you to your cultural background.",
    promptTranslation: "写一篇关于你的文化遗产以及它如何塑造你的身份的文章。描述将你与你的文化背景联系起来的传统、价值观和经历。",
    examples: [
      "My Chinese heritage has profoundly influenced who I am today. The emphasis on family bonds, respect for elders, and the value of education are core principles that guide my life. Traditional celebrations like Chinese New Year and Mid-Autumn Festival connect me to my roots and provide opportunities to share my culture with others. These cultural elements have taught me the importance of balance, harmony, and perseverance in facing life's challenges.",
      "Growing up in a multicultural environment has given me a unique perspective on my Japanese-American heritage. I've learned to navigate between traditional Japanese customs and American cultural norms, finding strength in this dual identity. The Japanese concept of 'ganbaru' (perseverance) and the American spirit of independence have both shaped my approach to challenges and opportunities. My cultural heritage is not just about the food I eat or the holidays I celebrate, but about the values and worldview that inform my daily decisions."
    ],
    examplesTranslation: [
      "我的中国血统深刻地影响了今天的我。对家庭纽带的重视、对长辈的尊重以及教育的价值是指导我生活的核心原则。春节和中秋节等传统庆祝活动将我与我的根源联系起来，并提供了与他人分享我的文化的机会。这些文化元素教会了我面对生活挑战时平衡、和谐和毅力的重要性。",
      "在多文化环境中成长使我对我的日裔美国人血统有了独特的视角。我学会了在传统日本习俗和美国文化规范之间导航，在这种双重身份中找到力量。日本的'ganbaru'（毅力）概念和美国独立精神都塑造了我应对挑战和机遇的方式。我的文化遗产不仅仅关乎我吃的食物或我庆祝的节日，还关乎影响我日常决策的价值观和世界观。"
    ],
    keywords: [
      "heritage",
      "culture",
      "identity",
      "tradition",
      "value",
      "custom",
      "celebration",
      "family",
      "community",
      "history",
      "ancestry",
      "multicultural",
      "diversity",
      "perspective",
      "roots"
    ],
    grammarPoints: [
      "Use present tense to describe current influences",
      "Use past tense to describe childhood experiences",
      "Use present perfect to describe ongoing connections",
      "Use descriptive adjectives to convey cultural elements",
      "Use relative clauses to provide additional information about cultural practices"
    ],
    difficulty: "medium",
    category: "personal"
  },
  {
    id: 8,
    title: "The Role of Technology in Education",
    prompt: "Write an essay about how technology has changed education and learning. Discuss both the benefits and challenges of using technology in the classroom, and consider how it might evolve in the future.",
    promptTranslation: "写一篇关于技术如何改变教育和学习的文章。讨论在课堂中使用技术的利弊，并考虑它未来可能如何发展。",
    examples: [
      "Technology has revolutionized education by making learning more accessible, interactive, and personalized. Online platforms allow students to access educational resources anytime and anywhere, while interactive software provides immediate feedback and adapts to individual learning styles. However, this digital transformation also raises concerns about screen time, digital distractions, and the digital divide between students with different access to technology. To maximize the benefits of educational technology, teachers must carefully integrate it into their curriculum, ensuring it enhances rather than replaces traditional learning methods.",
      "The integration of technology in education has created new opportunities for collaborative learning and global connections. Students can now collaborate on projects with peers from around the world, participate in virtual field trips, and access expert knowledge through video conferences. Despite these advantages, we must address challenges such as ensuring equitable access to technology, teaching digital literacy skills, and maintaining a balance between online and offline learning experiences. As technology continues to evolve, educators must remain adaptable and focused on using these tools to develop critical thinking and problem-solving skills rather than simply memorizing information."
    ],
    examplesTranslation: [
      "技术通过使学习更加便捷、互动和个性化，彻底改变了教育。在线平台允许学生随时随地访问教育资源，而交互式软件提供即时反馈并适应个人学习风格。然而，这种数字化转型也引发了对屏幕时间、数字干扰以及不同技术获取能力学生之间数字鸿沟的担忧。为了最大化教育技术的好处，教师必须谨慎地将其整合到课程中，确保它增强而不是取代传统学习方法。",
      "技术在教育中的整合为协作学习和全球连接创造了新的机会。学生现在可以与世界各地的同龄人合作项目，参与虚拟实地考察，并通过视频会议获取专家知识。尽管有这些优势，我们必须解决确保公平获取技术、教授数字素养技能以及在在线和离线学习体验之间保持平衡等挑战。随着技术不断发展，教育工作者必须保持适应性，并专注于使用这些工具来培养批判性思维和解决问题的能力，而不仅仅是记忆信息。"
    ],
    keywords: [
      "technology",
      "education",
      "learning",
      "digital",
      "online",
      "interactive",
      "personalized",
      "accessibility",
      "collaboration",
      "integration",
      "curriculum",
      "digital literacy",
      "equity",
      "adaptation",
      "innovation"
    ],
    grammarPoints: [
      "Use present perfect to describe changes that have occurred",
      "Use future tense to make predictions about technology's evolution",
      "Use passive voice to emphasize the impact of technology",
      "Use conditional sentences to discuss possibilities and outcomes",
      "Use contrasting connectors to compare benefits and challenges"
    ],
    difficulty: "hard",
    category: "education"
  },
  {
    id: 9,
    title: "My Hometown",
    prompt: "Write an essay describing your hometown, including its history, culture, landmarks, and what makes it special to you. Consider both physical characteristics and the people who live there.",
    promptTranslation: "写一篇描述你家乡的文章，包括它的历史、文化、地标以及对你来说特别之处。考虑物理特征和居住在那里的人们。",
    examples: [
      "My hometown, a small coastal city, is known for its rich maritime history and vibrant cultural scene. The historic lighthouse, built in 1852, stands as a symbol of our community's resilience, having guided countless ships through treacherous waters. Our annual seafood festival, which celebrates our fishing heritage, brings together locals and tourists alike, creating a sense of community that transcends generations. What makes my hometown special is not just its picturesque beaches or the friendly faces I encounter daily, but the way it has preserved its unique identity while embracing progress and change.",
      "Nestled between rolling hills and a winding river, my hometown combines natural beauty with a proud industrial heritage. The old textile mill, now converted into a museum, tells the story of how our community transformed from a small farming village into a thriving manufacturing center. Our diverse population, including descendants of the original settlers and recent immigrants, has created a rich tapestry of traditions, cuisines, and perspectives. The local park, where I spent countless hours as a child, remains my favorite place, offering a peaceful retreat from the busy city life while connecting me to cherished memories of my upbringing."
    ],
    examplesTranslation: [
      "我的家乡，一座小 coastal 城市，以其丰富的海洋历史和充满活力的文化场景而闻名。建于1852年的历史灯塔是我们社区韧性的象征，曾引导无数船只穿过危险水域。我们一年一度的海鲜节庆祝我们的渔业传统，将当地人和游客聚集在一起，创造一种超越世代的社区意识。我的家乡特别之处不仅在于其如画的海滩或我每天遇到的友好面孔，还在于它在拥抱进步和变化的同时保留了其独特的身份。",
      "我的家乡坐落在连绵起伏的丘陵和蜿蜒的河流之间，将自然美景与自豪的工业遗产相结合。现在改建为博物馆的旧纺织厂讲述了我们社区如何从小农庄转变为繁荣的制造业中心的故事。我们多样化的人口，包括原始定居者的后裔和最近的移民，创造了丰富的传统、美食和观点。我小时候花了无数时间的当地公园仍然是我最喜欢的地方，提供了一个远离繁忙城市生活的宁静 retreat，同时将我与我珍贵的成长记忆联系起来。"
    ],
    keywords: [
      "hometown",
      "history",
      "culture",
      "landmark",
      "community",
      "tradition",
      "heritage",
      "identity",
      "memory",
      "place",
      "people",
      "change",
      "progress",
      "connection",
      "belonging"
    ],
    grammarPoints: [
      "Use descriptive adjectives to paint a vivid picture",
      "Use present tense to describe current characteristics",
      "Use past tense to describe historical aspects",
      "Use relative clauses to provide additional information about places and people",
      "Use spatial prepositions to describe location and layout"
    ],
    difficulty: "medium",
    category: "personal"
  },
  {
    id: 10,
    title: "The Impact of Social Media",
    prompt: "Write an essay about how social media has affected your life and society in general. Discuss both positive and negative aspects, and consider how to use social media responsibly.",
    promptTranslation: "写一篇关于社交媒体如何影响你的生活和社会整体的文章。讨论积极和消极的方面，并考虑如何负责任地使用社交媒体。",
    examples: [
      "Social media has revolutionized how we connect with others, allowing us to maintain relationships with friends and family across great distances. However, it can also lead to feelings of inadequacy when comparing our lives to the carefully curated images others share. To use social media responsibly, I limit my daily usage, focus on meaningful interactions rather than passive scrolling, and remind myself that what I see online often represents only a small part of someone's life.",
      "While social media platforms have created new opportunities for learning and activism, they have also contributed to the spread of misinformation and online harassment. I believe the key to navigating social media is developing critical thinking skills to evaluate information, setting boundaries for our online presence, and using these platforms to amplify positive messages rather than negativity."
    ],
    examplesTranslation: [
      "社交媒体彻底改变了我们与他人联系的方式，使我们能够与远方的朋友和家人保持关系。然而，当我们将自己的生活与他人精心策划的图像进行比较时，它也可能导致不足感。为了负责任地使用社交媒体，我限制每日使用时间，专注于有意义的互动而不是被动滚动，并提醒自己，我在网上看到的往往只代表某人生活的一小部分。",
      "虽然社交媒体平台为学习和行动主义创造了新的机会，但它们也助长了错误信息的传播和网络骚扰。我认为驾驭社交媒体的关键是培养批判性思维能力来评估信息，为我们的在线存在设定界限，并使用这些平台来放大积极的信息而不是消极的信息。"
    ],
    keywords: [
      "social media",
      "connection",
      "communication",
      "relationship",
      "comparison",
      "responsibility",
      "boundary",
      "misinformation",
      "critical thinking",
      "online presence",
      "digital footprint",
      "privacy",
      "addiction",
      "well-being",
      "authenticity"
    ],
    grammarPoints: [
      "Use present perfect to describe ongoing effects",
      "Use conditional sentences to discuss possibilities",
      "Use passive voice to emphasize impacts",
      "Use modal verbs to express advice and recommendations",
      "Use contrasting connectors to compare positive and negative aspects"
    ],
    difficulty: "medium",
    category: "technology"
  },
  {
    id: 11,
    title: "My Cultural Heritage",
    prompt: "Write an essay about your cultural heritage and how it has shaped your identity. Describe traditions, values, and experiences that connect you to your cultural background.",
    promptTranslation: "写一篇关于你的文化遗产以及它如何塑造你的身份的文章。描述将你与你的文化背景联系起来的传统、价值观和经历。",
    examples: [
      "My Chinese heritage has profoundly influenced who I am today. The emphasis on family bonds, respect for elders, and the value of education are core principles that guide my life. Traditional celebrations like Chinese New Year and Mid-Autumn Festival connect me to my roots and provide opportunities to share my culture with others. These cultural elements have taught me the importance of balance, harmony, and perseverance in facing life's challenges.",
      "Growing up in a multicultural environment has given me a unique perspective on my Japanese-American heritage. I've learned to navigate between traditional Japanese customs and American cultural norms, finding strength in this dual identity. The Japanese concept of 'ganbaru' (perseverance) and the American spirit of independence have both shaped my approach to challenges and opportunities. My cultural heritage is not just about the food I eat or the holidays I celebrate, but about the values and worldview that inform my daily decisions."
    ],
    examplesTranslation: [
      "我的中国血统深刻地影响了今天的我。对家庭纽带的重视、对长辈的尊重以及教育的价值是指导我生活的核心原则。春节和中秋节等传统庆祝活动将我与我的根源联系起来，并提供了与他人分享我的文化的机会。这些文化元素教会了我面对生活挑战时平衡、和谐和毅力的重要性。",
      "在多文化环境中成长使我对我的日裔美国人血统有了独特的视角。我学会了在传统日本习俗和美国文化规范之间导航，在这种双重身份中找到力量。日本的'ganbaru'（毅力）概念和美国独立精神都塑造了我应对挑战和机遇的方式。我的文化遗产不仅仅关乎我吃的食物或我庆祝的节日，还关乎影响我日常决策的价值观和世界观。"
    ],
    keywords: [
      "heritage",
      "culture",
      "identity",
      "tradition",
      "value",
      "custom",
      "celebration",
      "family",
      "community",
      "history",
      "ancestry",
      "multicultural",
      "diversity",
      "perspective",
      "roots"
    ],
    grammarPoints: [
      "Use present tense to describe current influences",
      "Use past tense to describe childhood experiences",
      "Use present perfect to describe ongoing connections",
      "Use descriptive adjectives to convey cultural elements",
      "Use relative clauses to provide additional information about cultural practices"
    ],
    difficulty: "medium",
    category: "personal"
  },
  {
    id: 12,
    title: "The Role of Technology in Education",
    prompt: "Write an essay about how technology has changed education and learning. Discuss both the advantages and disadvantages of using technology in the classroom, and consider how it might evolve in the future.",
    promptTranslation: "写一篇关于技术如何改变教育和学习的文章。讨论在课堂中使用技术的优点和缺点，并考虑它未来可能如何发展。",
    examples: [
      "Technology has revolutionized education by making information more accessible than ever before. With just a few clicks, students can access vast libraries of knowledge, watch educational videos, and participate in virtual field trips to places they might never visit in person. This accessibility has democratized learning, allowing students from diverse backgrounds to access the same high-quality educational resources. However, this digital revolution also presents challenges, such as the digital divide that leaves some students without access to necessary technology, and the potential for distraction when devices are used inappropriately in the classroom.",
      "The integration of technology in education has transformed the role of teachers from knowledge dispensers to learning facilitators. Modern classrooms often feature interactive whiteboards, tablets, and educational software that engage students in ways traditional methods cannot. This shift has allowed for more personalized learning experiences, where students can progress at their own pace and focus on areas where they need more support. Looking to the future, emerging technologies like artificial intelligence and virtual reality promise to further enhance educational experiences, potentially creating even more immersive and adaptive learning environments."
    ],
    examplesTranslation: [
      "技术通过使信息比以往任何时候都更容易获取，彻底改变了教育。只需点击几下，学生就可以访问庞大的知识库，观看教育视频，并参与虚拟实地考察，前往他们可能永远无法亲自访问的地方。这种可及性使学习民主化，使来自不同背景的学生能够访问相同的高质量教育资源。然而，这场数字革命也带来了挑战，例如数字鸿沟使一些学生无法获得必要的技术，以及设备在课堂中不当使用可能导致分心的可能性。",
      "技术在教育中的整合已将教师的角色从知识传授者转变为学习促进者。现代课堂通常配备交互式白板、平板电脑和教育软件，以传统方法无法实现的方式吸引学生。这种转变允许更个性化的学习体验，学生可以按照自己的节奏学习，并专注于需要更多支持的领域。展望未来，人工智能和虚拟现实等新兴技术有望进一步增强教育体验，可能创造更加沉浸式和适应性的学习环境。"
    ],
    keywords: [
      "technology",
      "education",
      "learning",
      "digital",
      "accessibility",
      "democratize",
      "interactive",
      "personalized",
      "engagement",
      "digital divide",
      "distraction",
      "facilitator",
      "adaptive",
      "immersive",
      "integration"
    ],
    grammarPoints: [
      "Use present perfect to describe ongoing changes",
      "Use future tense with 'will' and 'might' to discuss possibilities",
      "Use passive voice to emphasize the impact of technology",
      "Use comparative structures to discuss advantages and disadvantages",
      "Use conditional sentences to discuss hypothetical scenarios"
    ],
    difficulty: "medium",
    category: "education"
  },
  {
    id: 13,
    title: "The Importance of Mental Health",
    prompt: "Write an essay about the importance of mental health and how it affects our daily lives. Discuss ways to maintain good mental health and how society's understanding of mental health has evolved.",
    promptTranslation: "写一篇关于心理健康的重要性以及它如何影响我们日常生活的文章。讨论保持良好心理健康的方法，以及社会对心理健康的理解如何演变。",
    examples: [
      "Mental health is as crucial to our well-being as physical health, yet it has historically received less attention and understanding. Our mental state affects every aspect of our lives, from our ability to concentrate at school or work to our relationships with family and friends. When our mental health suffers, it can lead to difficulties in daily functioning, reduced quality of life, and in severe cases, serious conditions that require professional intervention. Recognizing the signs of mental health challenges and knowing when to seek help is an essential life skill that should be taught from an early age.",
      "Society's understanding of mental health has evolved significantly over the past few decades. What was once stigmatized and misunderstood is now increasingly recognized as a legitimate health concern that deserves the same attention and care as physical ailments. This shift in perspective has led to greater awareness, more open discussions, and improved access to mental health resources. Maintaining good mental health involves regular self-care practices such as adequate sleep, exercise, healthy relationships, and stress management techniques. Additionally, creating supportive environments in schools and workplaces that prioritize mental well-being can help prevent issues before they become severe."
    ],
    examplesTranslation: [
      "心理健康对我们的福祉与身体健康同样重要，但历史上它受到的关注和理解较少。我们的心理状态影响我们生活的方方面面，从我们在学校或工作中集中注意力的能力到我们与家人和朋友的关系。当我们的心理健康受到影响时，可能导致日常功能困难，生活质量下降，在严重的情况下，需要专业干预的严重状况。识别心理健康挑战的迹象并知道何时寻求帮助是一项应该从小教授的基本生活技能。",
      "社会对心理健康的理解在过去几十年中发生了显著变化。曾经被污名化和误解的东西现在越来越被认识到是一个值得与身体疾病同样关注和照顾的合法健康问题。这种观点的转变导致了更大的意识、更开放的讨论和改善的心理健康资源获取。保持良好的心理健康涉及定期自我护理实践，如充足的睡眠、锻炼、健康的关系和压力管理技巧。此外，在学校和工作场所创造优先考虑心理福祉的支持性环境可以帮助在问题变得严重之前预防问题。"
    ],
    keywords: [
      "mental health",
      "well-being",
      "psychological",
      "emotional",
      "stigma",
      "awareness",
      "self-care",
      "stress",
      "anxiety",
      "depression",
      "resilience",
      "support",
      "intervention",
      "therapy",
      "counseling"
    ],
    grammarPoints: [
      "Use present tense to describe current understanding",
      "Use past tense to discuss historical perspectives",
      "Use modal verbs to express advice and recommendations",
      "Use cause-and-effect connectors to explain relationships",
      "Use passive voice to emphasize the impact of societal changes"
    ],
    difficulty: "medium",
    category: "health"
  }
]; 