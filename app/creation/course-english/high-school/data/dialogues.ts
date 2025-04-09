// 高中英语对话数据
export interface DialogueItem {
  id: number;
  scenario: string;
  emoji: string;
  conversations: {
    speaker: string;
    text: string;
    translation: string;
    gender: 'male' | 'female' | 'child';
  }[];
}

export const dialogues: DialogueItem[] = [
  {
    id: 1,
    scenario: "学术讨论 - 气候变化",
    emoji: "🌍",
    conversations: [
      {
        speaker: "Professor",
        text: "Today we'll be discussing the impact of climate change on global ecosystems. What are your thoughts on the current situation?",
        translation: "今天我们将讨论气候变化对全球生态系统的影响。你们对当前情况有什么看法？",
        gender: "male"
      },
      {
        speaker: "Student A",
        text: "I believe the rising global temperatures are causing unprecedented changes in biodiversity. Many species are struggling to adapt.",
        translation: "我认为全球气温上升正在导致生物多样性发生前所未有的变化。许多物种难以适应。",
        gender: "female"
      },
      {
        speaker: "Student B",
        text: "That's a valid point. However, I think we should also consider the economic implications of transitioning to renewable energy sources.",
        translation: "这是一个有效的观点。不过，我认为我们也应该考虑向可再生能源过渡的经济影响。",
        gender: "male"
      },
      {
        speaker: "Professor",
        text: "Excellent observations. Let's analyze the data from recent studies to support these arguments.",
        translation: "很好的观察。让我们分析最近研究的数据来支持这些论点。",
        gender: "male"
      }
    ]
  },
  {
    id: 2,
    scenario: "新闻采访 - 科技创新",
    emoji: "📱",
    conversations: [
      {
        speaker: "Reporter",
        text: "Welcome to Tech Today. We're here with Dr. Sarah Chen, who has just unveiled a breakthrough in quantum computing. Dr. Chen, could you explain the significance of your research?",
        translation: "欢迎来到《今日科技》。我们请到了刚刚在量子计算领域取得突破的陈博士。陈博士，您能解释一下您的研究意义吗？",
        gender: "female"
      },
      {
        speaker: "Dr. Chen",
        text: "Thank you for having me. Our team has developed a new algorithm that significantly reduces the error rate in quantum calculations, bringing us closer to practical quantum computers.",
        translation: "感谢您的邀请。我们团队开发了一种新算法，显著降低了量子计算中的错误率，使我们更接近实用的量子计算机。",
        gender: "female"
      },
      {
        speaker: "Reporter",
        text: "That sounds fascinating. What potential applications could this technology have in the future?",
        translation: "这听起来很吸引人。这项技术未来可能有什么潜在应用？",
        gender: "female"
      },
      {
        speaker: "Dr. Chen",
        text: "The possibilities are vast. From cryptography to drug discovery, quantum computing could revolutionize fields that require complex calculations beyond the capabilities of classical computers.",
        translation: "可能性非常广泛。从密码学到药物发现，量子计算可能会彻底改变需要复杂计算的领域，这些计算超出了经典计算机的能力。",
        gender: "female"
      }
    ]
  },
  {
    id: 3,
    scenario: "辩论 - 社交媒体影响",
    emoji: "💬",
    conversations: [
      {
        speaker: "Moderator",
        text: "Today's debate topic is: 'Social media has more negative than positive effects on society.' Let's begin with the opening statements.",
        translation: "今天的辩论主题是：'社交媒体对社会的负面影响大于正面影响。'让我们开始开场陈述。",
        gender: "male"
      },
      {
        speaker: "Affirmative Speaker",
        text: "Social media has created an environment where misinformation spreads rapidly, contributing to polarization and mental health issues, particularly among young people.",
        translation: "社交媒体创造了一个环境，使错误信息迅速传播，导致两极分化和心理健康问题，特别是在年轻人中。",
        gender: "female"
      },
      {
        speaker: "Negative Speaker",
        text: "While there are challenges, social media has democratized information access, facilitated social movements, and connected people across geographical boundaries like never before.",
        translation: "虽然存在挑战，但社交媒体已经使信息获取民主化，促进了社会运动，并以前所未有的方式连接了地理边界之外的人们。",
        gender: "male"
      },
      {
        speaker: "Moderator",
        text: "Thank you for your opening statements. Let's proceed with the cross-examination phase.",
        translation: "感谢你们的开场陈述。让我们进入交叉询问阶段。",
        gender: "male"
      }
    ]
  },
  {
    id: 4,
    scenario: "学术讲座 - 文学分析",
    emoji: "📚",
    conversations: [
      {
        speaker: "Professor",
        text: "In today's lecture, we'll be examining the use of symbolism in Shakespeare's 'Macbeth.' The play is rich with metaphors that reflect the psychological descent of its protagonist.",
        translation: "在今天的讲座中，我们将 examine 莎士比亚《麦克白》中的象征主义运用。这部剧充满了反映主角心理堕落的隐喻。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "I've always been intrigued by the recurring motif of blood in the play. Could you elaborate on its significance?",
        translation: "我一直对剧中反复出现的血液主题很感兴趣。您能详细说明它的意义吗？",
        gender: "male"
      },
      {
        speaker: "Professor",
        text: "Excellent question. The blood imagery serves multiple purposes: it represents guilt, the irreversible nature of Macbeth's actions, and the corruption of his soul.",
        translation: "很好的问题。血液意象有多种用途：它代表内疚、麦克白行为的不可逆转性，以及他灵魂的腐败。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "That's fascinating. I hadn't considered how the blood also symbolizes the political corruption in Scotland at the time.",
        translation: "这很吸引人。我没有考虑到血液也象征着当时苏格兰的政治腐败。",
        gender: "male"
      }
    ]
  },
  {
    id: 5,
    scenario: "模拟会议 - 商业策略",
    emoji: "💼",
    conversations: [
      {
        speaker: "CEO",
        text: "Thank you all for coming to this strategy meeting. Our company is at a crossroads, and we need to decide whether to expand into the Asian market or focus on strengthening our domestic presence.",
        translation: "感谢大家参加这次战略会议。我们公司正处于十字路口，需要决定是进军亚洲市场还是专注于加强我们在国内的存在。",
        gender: "male"
      },
      {
        speaker: "Marketing Director",
        text: "Based on our market research, the Asian market offers tremendous growth potential, particularly in emerging economies like India and Vietnam.",
        translation: "根据我们的市场研究，亚洲市场提供了巨大的增长潜力，特别是在印度和越南等新兴经济体。",
        gender: "female"
      },
      {
        speaker: "CFO",
        text: "While the growth potential is attractive, we need to consider the significant investment required for market entry and the potential risks of currency fluctuations.",
        translation: "虽然增长潜力很有吸引力，但我们需要考虑市场进入所需的重大投资以及货币波动的潜在风险。",
        gender: "male"
      },
      {
        speaker: "CEO",
        text: "Let's analyze the projected ROI for both scenarios before making a final decision. I'd like each department to prepare a detailed report by next week.",
        translation: "让我们分析两种情况的预计投资回报率，然后再做出最终决定。我希望每个部门在下周之前准备一份详细报告。",
        gender: "male"
      }
    ]
  },
  {
    id: 6,
    scenario: "学术讨论 - 哲学思想",
    emoji: "🤔",
    conversations: [
      {
        speaker: "Professor",
        text: "Today we'll explore the concept of free will versus determinism. Do we truly have the ability to make choices, or are our actions predetermined by prior causes?",
        translation: "今天我们将探讨自由意志与决定论的概念。我们是否真正有能力做出选择，还是我们的行为是由先前的原因预先决定的？",
        gender: "female"
      },
      {
        speaker: "Student A",
        text: "I believe in compatibilism—that free will and determinism can coexist. We make choices, but those choices are influenced by our experiences and genetic predispositions.",
        translation: "我相信兼容论——自由意志和决定论可以共存。我们做出选择，但这些选择受到我们经验和遗传倾向的影响。",
        gender: "male"
      },
      {
        speaker: "Student B",
        text: "That's an interesting perspective, but doesn't that still imply that our 'choices' are ultimately determined by factors outside our control?",
        translation: "这是一个有趣的观点，但这是否仍然意味着我们的'选择'最终是由我们无法控制的因素决定的？",
        gender: "female"
      },
      {
        speaker: "Professor",
        text: "This is precisely the paradox that philosophers have grappled with for centuries. Let's examine some classical arguments from both sides.",
        translation: "这正是哲学家们几个世纪以来一直在努力解决的悖论。让我们 examine 双方的一些经典论点。",
        gender: "female"
      }
    ]
  },
  {
    id: 7,
    scenario: "模拟面试 - 职业发展",
    emoji: "👔",
    conversations: [
      {
        speaker: "Interviewer",
        text: "Thank you for coming in today. Could you walk me through your academic background and what interests you about this research position?",
        translation: "感谢您今天来面试。您能介绍一下您的学术背景以及是什么让您对这个研究职位感兴趣吗？",
        gender: "male"
      },
      {
        speaker: "Candidate",
        text: "I graduated with honors in Computer Science from Stanford, with a focus on artificial intelligence. Your company's work in developing ethical AI frameworks particularly interests me.",
        translation: "我以优异成绩从斯坦福大学计算机科学专业毕业，专注于人工智能。贵公司在开发伦理人工智能框架方面的工作特别吸引我。",
        gender: "female"
      },
      {
        speaker: "Interviewer",
        text: "That's impressive. How do you see the role of ethics in AI development, and what challenges do you anticipate in this field?",
        translation: "这令人印象深刻。您如何看待伦理在人工智能开发中的作用，以及您预计这个领域会面临什么挑战？",
        gender: "male"
      },
      {
        speaker: "Candidate",
        text: "I believe ethical considerations should be integrated into the development process from the beginning, not added as an afterthought. The main challenge is balancing innovation with responsible implementation.",
        translation: "我认为伦理考虑应该从一开始就融入开发过程，而不是事后添加。主要挑战是在创新与负责任实施之间取得平衡。",
        gender: "female"
      }
    ]
  },
  {
    id: 8,
    scenario: "学术讨论 - 历史事件",
    emoji: "⏳",
    conversations: [
      {
        speaker: "Professor",
        text: "Today we'll examine the causes and consequences of the Industrial Revolution. How did this period transform society, economy, and the environment?",
        translation: "今天我们将 examine 工业革命的原因和后果。这一时期如何改变了社会、经济和环境？",
        gender: "male"
      },
      {
        speaker: "Student A",
        text: "The shift from agrarian to industrial economies led to unprecedented urbanization, but also created significant social inequalities and environmental degradation.",
        translation: "从农业经济向工业经济的转变导致了前所未有的城市化，但也造成了严重的社会不平等和环境退化。",
        gender: "female"
      },
      {
        speaker: "Student B",
        text: "I think we should also consider the technological innovations that made this transformation possible, and how they continue to influence our modern world.",
        translation: "我认为我们还应该考虑使这种转变成为可能的技术创新，以及它们如何继续影响我们的现代世界。",
        gender: "male"
      },
      {
        speaker: "Professor",
        text: "Excellent points. Let's analyze primary sources from the period to understand how contemporaries experienced and interpreted these changes.",
        translation: "很好的观点。让我们分析这一时期的原始资料，以了解当时的人们如何经历和解释这些变化。",
        gender: "male"
      }
    ]
  },
  {
    id: 9,
    scenario: "模拟辩论 - 教育改革",
    emoji: "🎓",
    conversations: [
      {
        speaker: "Moderator",
        text: "Today's debate focuses on the proposition: 'Standardized testing should be abolished in favor of project-based assessment.' Let's begin with opening statements.",
        translation: "今天的辩论聚焦于命题：'应该废除标准化考试，转而采用基于项目的评估。'让我们开始开场陈述。",
        gender: "female"
      },
      {
        speaker: "Proponent",
        text: "Standardized tests fail to measure creativity, critical thinking, and practical skills. Project-based assessment provides a more holistic evaluation of student capabilities.",
        translation: "标准化考试无法衡量创造力、批判性思维和实践技能。基于项目的评估提供了对学生能力的更全面评估。",
        gender: "male"
      },
      {
        speaker: "Opponent",
        text: "While no assessment method is perfect, standardized tests provide objective, comparable data that helps identify achievement gaps and ensure accountability in education.",
        translation: "虽然没有完美的评估方法，但标准化考试提供了客观、可比较的数据，有助于识别成绩差距并确保教育问责制。",
        gender: "female"
      },
      {
        speaker: "Moderator",
        text: "Thank you for your opening statements. Let's proceed with the rebuttal phase.",
        translation: "感谢你们的开场陈述。让我们进入反驳阶段。",
        gender: "female"
      }
    ]
  },
  {
    id: 10,
    scenario: "学术讨论 - 科学发现",
    emoji: "🔬",
    conversations: [
      {
        speaker: "Researcher",
        text: "Our team has recently discovered a novel mechanism by which certain bacteria can break down plastic waste. This could potentially revolutionize recycling processes.",
        translation: "我们团队最近发现了一种新机制，某些细菌可以通过这种机制分解塑料废物。这可能会彻底改变回收过程。",
        gender: "female"
      },
      {
        speaker: "Journalist",
        text: "That's fascinating. Could you explain how this process works and what makes it different from existing recycling methods?",
        translation: "这很吸引人。您能解释这个过程是如何工作的，以及它与现有回收方法有什么不同吗？",
        gender: "male"
      },
      {
        speaker: "Researcher",
        text: "Unlike traditional recycling, which often degrades material quality, our bacterial process can break down plastics into their original monomers, allowing for true closed-loop recycling.",
        translation: "与传统回收不同，传统回收往往会降低材料质量，我们的细菌过程可以将塑料分解成原始单体，实现真正的闭环回收。",
        gender: "female"
      },
      {
        speaker: "Journalist",
        text: "What are the next steps in your research, and when might this technology be implemented on a larger scale?",
        translation: "您研究的下一步是什么，这项技术何时可能在大规模上实施？",
        gender: "male"
      }
    ]
  },
  {
    id: 11,
    scenario: "校园生活 - 社团活动",
    emoji: "🎨",
    conversations: [
      {
        speaker: "Student A",
        text: "Hey, are you going to the club fair this afternoon? I heard there are some new clubs being introduced this semester.",
        translation: "嘿，你今天下午去参加社团博览会吗？我听说这学期有一些新社团要介绍。",
        gender: "female"
      },
      {
        speaker: "Student B",
        text: "Definitely! I'm particularly interested in the debate club. I think it would help improve my public speaking skills.",
        translation: "当然去！我对辩论社特别感兴趣。我认为它能帮助提高我的公共演讲能力。",
        gender: "male"
      },
      {
        speaker: "Student A",
        text: "That's a great choice! I'm thinking about joining the environmental club. They're planning a recycling campaign for the school.",
        translation: "这是个很好的选择！我在考虑加入环保社。他们正在为学校计划一个回收活动。",
        gender: "female"
      },
      {
        speaker: "Student B",
        text: "We should definitely support that. Maybe our clubs could collaborate on some projects this year. It would be a great way to meet new people too.",
        translation: "我们当然应该支持。也许我们的社团今年可以合作一些项目。这也是认识新朋友的好方式。",
        gender: "male"
      }
    ]
  },
  {
    id: 12,
    scenario: "学术竞赛 - 科学奥林匹克",
    emoji: "🧪",
    conversations: [
      {
        speaker: "Coach",
        text: "Congratulations to all of you for making it to the state science olympiad! Let's review our strategy for tomorrow's competition.",
        translation: "恭喜你们所有人都进入了州科学奥林匹克竞赛！让我们回顾一下明天比赛的策略。",
        gender: "female"
      },
      {
        speaker: "Student A",
        text: "I've been practicing the chemistry lab section. The titration experiment is challenging, but I think I've got the technique down now.",
        translation: "我一直在练习化学实验部分。滴定实验很有挑战性，但我认为我现在已经掌握了技巧。",
        gender: "male"
      },
      {
        speaker: "Student B",
        text: "I'm focusing on the physics problems. The key is to identify the relevant formulas quickly and check units carefully.",
        translation: "我专注于物理问题。关键是快速识别相关公式并仔细检查单位。",
        gender: "female"
      },
      {
        speaker: "Coach",
        text: "Remember, teamwork is crucial. Help each other out, and don't forget to manage your time effectively. Good luck everyone!",
        translation: "记住，团队合作至关重要。互相帮助，别忘了有效管理时间。祝大家好运！",
        gender: "female"
      }
    ]
  },
  {
    id: 13,
    scenario: "未来规划 - 大学申请",
    emoji: "🎓",
    conversations: [
      {
        speaker: "Guidance Counselor",
        text: "So, have you thought about which universities you'd like to apply to? It's important to consider both academic programs and campus culture.",
        translation: "那么，你想过要申请哪些大学了吗？考虑学术项目和校园文化都很重要。",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "I'm interested in engineering programs, particularly at MIT and Stanford. But I'm also considering some liberal arts colleges for their smaller class sizes.",
        translation: "我对工程专业感兴趣，特别是麻省理工学院和斯坦福大学。但我也在考虑一些文理学院，因为它们的班级规模较小。",
        gender: "female"
      },
      {
        speaker: "Guidance Counselor",
        text: "That's a good approach. Have you started working on your personal statement? It's your chance to showcase your unique experiences and perspectives.",
        translation: "这是个好方法。你开始写个人陈述了吗？这是你展示独特经历和观点的机会。",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "I have some ideas, but I'm struggling to narrow them down. How do I make my application stand out among thousands of others?",
        translation: "我有一些想法，但我在努力缩小范围。我如何让我的申请在数千份申请中脱颖而出？",
        gender: "female"
      }
    ]
  },
  {
    id: 14,
    scenario: "学术讨论 - 人工智能伦理",
    emoji: "🤖",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we'll discuss the ethical implications of artificial intelligence. As AI becomes more sophisticated, what responsibilities do we have in its development?",
        translation: "今天我们将讨论人工智能的伦理影响。随着人工智能变得越来越复杂，我们在其开发中有什么责任？",
        gender: "male"
      },
      {
        speaker: "Student A",
        text: "I think we need strict regulations to prevent AI from being used in harmful ways, like autonomous weapons or surveillance systems that violate privacy.",
        translation: "我认为我们需要严格的法规来防止人工智能被用于有害方式，如自主武器或侵犯隐私的监控系统。",
        gender: "female"
      },
      {
        speaker: "Student B",
        text: "But isn't it also important to consider the potential benefits? AI could help solve major problems like climate change or disease if developed responsibly.",
        translation: "但考虑潜在好处也很重要，不是吗？如果负责任地开发，人工智能可以帮助解决气候变化或疾病等重大问题。",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "Excellent points from both of you. The key is finding a balance between innovation and ethical considerations. Let's explore some case studies to further this discussion.",
        translation: "你们两个都提出了很好的观点。关键是在创新和伦理考虑之间找到平衡。让我们探讨一些案例研究来进一步讨论。",
        gender: "male"
      }
    ]
  },
  {
    id: 15,
    scenario: "校园活动 - 文化节",
    emoji: "🌏",
    conversations: [
      {
        speaker: "Student A",
        text: "The international cultural festival is coming up next week. Are you participating in any performances or food booths?",
        translation: "国际文化节下周就要到了。你参加任何表演或食品摊位吗？",
        gender: "female"
      },
      {
        speaker: "Student B",
        text: "Yes! I'm helping with the Chinese food booth, and I'm also performing a traditional dance with the Asian Cultural Club.",
        translation: "是的！我在帮忙准备中国食品摊位，我还和亚洲文化俱乐部一起表演传统舞蹈。",
        gender: "male"
      },
      {
        speaker: "Student A",
        text: "That sounds amazing! I'm part of the Latin American dance group. It's a great opportunity to share our cultures and learn from each other.",
        translation: "听起来很棒！我是拉丁美洲舞蹈团的一员。这是分享我们文化和互相学习的好机会。",
        gender: "female"
      },
      {
        speaker: "Student B",
        text: "Exactly! I love how our school celebrates diversity. It makes me appreciate different perspectives and traditions I might not have encountered otherwise.",
        translation: "没错！我喜欢我们学校庆祝多样性的方式。它让我欣赏我可能 otherwise 不会遇到的不同观点和传统。",
        gender: "male"
      }
    ]
  }
]; 