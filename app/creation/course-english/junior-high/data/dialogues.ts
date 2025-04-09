export interface Dialogue {
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

export const dialogues: Dialogue[] = [
  {
    id: 1,
    scenario: "校园生活 - 新学期开始",
    emoji: "🏫",
    conversations: [
      {
        speaker: "Tom",
        text: "Hey, Lucy! How was your summer vacation?",
        translation: "嘿，露西！你的暑假过得怎么样？",
        gender: "male"
      },
      {
        speaker: "Lucy",
        text: "It was great! I went to Beijing with my family. We visited the Great Wall and the Forbidden City. How about you?",
        translation: "很棒！我和家人去了北京。我们参观了长城和故宫。你呢？",
        gender: "female"
      },
      {
        speaker: "Tom",
        text: "I stayed at home most of the time, but I took some online courses to improve my English. I also read several books.",
        translation: "我大部分时间都待在家里，但我参加了一些在线课程来提高我的英语。我还读了几本书。",
        gender: "male"
      },
      {
        speaker: "Lucy",
        text: "That sounds productive! Are you ready for the new semester? I heard we have a new English teacher this year.",
        translation: "听起来很有成效！你准备好迎接新学期了吗？我听说今年我们有一位新的英语老师。",
        gender: "female"
      },
      {
        speaker: "Tom",
        text: "Yes, I'm looking forward to it. I hope we'll have more speaking practice in class. Speaking English is my weakness.",
        translation: "是的，我很期待。我希望课堂上能有更多的口语练习。说英语是我的弱项。",
        gender: "male"
      },
      {
        speaker: "Lucy",
        text: "Mine too. Maybe we can practice together after school sometimes?",
        translation: "我也是。也许我们可以有时候放学后一起练习？",
        gender: "female"
      },
      {
        speaker: "Tom",
        text: "That's a great idea! Let's meet in the library after class on Tuesdays and Thursdays.",
        translation: "这是个好主意！我们周二和周四放学后在图书馆见面吧。",
        gender: "male"
      }
    ]
  },
  {
    id: 2,
    scenario: "兴趣与爱好 - 音乐俱乐部",
    emoji: "🎵",
    conversations: [
      {
        speaker: "Sarah",
        text: "Hi, Mike! I heard you joined the school band. What instrument do you play?",
        translation: "嗨，迈克！我听说你加入了学校乐队。你演奏什么乐器？",
        gender: "female"
      },
      {
        speaker: "Mike",
        text: "I play the guitar. I've been learning for about two years now. Do you play any instruments?",
        translation: "我弹吉他。我已经学了大约两年了。你演奏什么乐器吗？",
        gender: "male"
      },
      {
        speaker: "Sarah",
        text: "I play the piano. I started when I was six. Our school is having a talent show next month. Are you going to perform?",
        translation: "我弹钢琴。我六岁就开始学了。我们学校下个月有一个才艺表演。你要表演吗？",
        gender: "female"
      },
      {
        speaker: "Mike",
        text: "Yes, I'm planning to play a song with my friend who plays the drums. What about you?",
        translation: "是的，我计划和一个打鼓的朋友一起演奏一首歌。你呢？",
        gender: "male"
      },
      {
        speaker: "Sarah",
        text: "I'm thinking of playing a classical piece by Beethoven. But I'm a bit nervous about performing in front of everyone.",
        translation: "我想演奏一首贝多芬的古典乐曲。但我有点害怕在大家面前表演。",
        gender: "female"
      },
      {
        speaker: "Mike",
        text: "Don't worry, you'll do great! Practice makes perfect. Maybe we could practice together sometimes?",
        translation: "别担心，你会表现得很好的！熟能生巧。也许我们可以有时候一起练习？",
        gender: "male"
      },
      {
        speaker: "Sarah",
        text: "That would be fun! We could even try playing a duet for the next talent show.",
        translation: "那会很有趣！我们甚至可以为下次才艺表演尝试二重奏。",
        gender: "female"
      }
    ]
  },
  {
    id: 3,
    scenario: "梦想与未来 - 职业规划",
    emoji: "🌟",
    conversations: [
      {
        speaker: "David",
        text: "What do you want to be when you grow up, Emma?",
        translation: "艾玛，你长大后想做什么？",
        gender: "male"
      },
      {
        speaker: "Emma",
        text: "I want to be a doctor. I've always been interested in science and helping people. How about you?",
        translation: "我想成为一名医生。我一直对科学和帮助他人感兴趣。你呢？",
        gender: "female"
      },
      {
        speaker: "David",
        text: "I'm not sure yet. I like computers and technology, so maybe a software engineer or a game developer.",
        translation: "我还不太确定。我喜欢电脑和技术，所以也许是软件工程师或游戏开发者。",
        gender: "male"
      },
      {
        speaker: "Emma",
        text: "That sounds interesting! Have you taken any programming classes?",
        translation: "听起来很有趣！你上过编程课吗？",
        gender: "female"
      },
      {
        speaker: "David",
        text: "Yes, I've learned some basic Python and JavaScript. I'm also thinking of joining the robotics club at school.",
        translation: "是的，我学过一些基本的Python和JavaScript。我还考虑加入学校的机器人俱乐部。",
        gender: "male"
      },
      {
        speaker: "Emma",
        text: "That's cool! I'm planning to take more biology and chemistry classes next year to prepare for medical school.",
        translation: "太酷了！我计划明年上更多的生物和化学课，为医学院做准备。",
        gender: "female"
      },
      {
        speaker: "David",
        text: "It's good to have a plan. But remember, it's okay to change your mind as you learn more about different careers.",
        translation: "有计划很好。但记住，随着你对不同职业了解更多，改变主意也是可以的。",
        gender: "male"
      }
    ]
  },
  {
    id: 4,
    scenario: "假期计划 - 春假旅行",
    emoji: "✈️",
    conversations: [
      {
        speaker: "Lisa",
        text: "Are you doing anything special for spring break, Jack?",
        translation: "杰克，春假你有什么特别的计划吗？",
        gender: "female"
      },
      {
        speaker: "Jack",
        text: "Yes, my family is going to Hainan for a week. We're looking forward to the beach and warm weather. How about you?",
        translation: "是的，我们全家要去海南一周。我们期待着海滩和温暖的天气。你呢？",
        gender: "male"
      },
      {
        speaker: "Lisa",
        text: "I'm going to visit my grandparents in the countryside. They have a beautiful garden with lots of flowers.",
        translation: "我要去乡下看望我的祖父母。他们有一个漂亮的花园，里面有很多花。",
        gender: "female"
      },
      {
        speaker: "Jack",
        text: "That sounds nice! Will you be helping them in the garden?",
        translation: "听起来不错！你会帮他们在花园里干活吗？",
        gender: "male"
      },
      {
        speaker: "Lisa",
        text: "Yes, I love gardening. My grandmother is teaching me how to grow vegetables. What activities are you planning in Hainan?",
        translation: "是的，我喜欢园艺。我奶奶正在教我如何种植蔬菜。你在海南计划做什么活动？",
        gender: "female"
      },
      {
        speaker: "Jack",
        text: "We're going to go swimming, snorkeling, and maybe try some water sports. I'm also looking forward to trying the local seafood.",
        translation: "我们要去游泳、浮潜，也许还会尝试一些水上运动。我还期待着品尝当地的海鲜。",
        gender: "male"
      },
      {
        speaker: "Lisa",
        text: "That sounds like a lot of fun! Don't forget to bring back some souvenirs for me!",
        translation: "听起来很有趣！别忘了给我带些纪念品！",
        gender: "female"
      }
    ]
  },
  {
    id: 5,
    scenario: "小组讨论 - 环境保护",
    emoji: "🌍",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we're going to discuss environmental protection. What are some ways we can help protect the environment?",
        translation: "今天我们要讨论环境保护。我们有哪些方法可以帮助保护环境？",
        gender: "female"
      },
      {
        speaker: "Alex",
        text: "We can reduce plastic use by bringing reusable bags when shopping and using refillable water bottles.",
        translation: "我们可以通过购物时带可重复使用的袋子和使用可重复装水的水瓶来减少塑料使用。",
        gender: "male"
      },
      {
        speaker: "Sophie",
        text: "We should also recycle paper, glass, and plastic. My family has separate bins for different types of waste.",
        translation: "我们还应该回收纸张、玻璃和塑料。我家有不同垃圾的单独垃圾桶。",
        gender: "female"
      },
      {
        speaker: "Teacher",
        text: "Good points! What else can we do to help the environment?",
        translation: "好观点！我们还能做些什么来帮助环境？",
        gender: "female"
      },
      {
        speaker: "Alex",
        text: "We can save energy by turning off lights when we leave a room and using energy-efficient appliances.",
        translation: "我们可以通过离开房间时关灯和使用节能电器来节省能源。",
        gender: "male"
      },
      {
        speaker: "Sophie",
        text: "We can also plant trees and support environmental organizations. I'm thinking of joining the school's environmental club.",
        translation: "我们还可以植树和支持环保组织。我正在考虑加入学校的环保俱乐部。",
        gender: "female"
      },
      {
        speaker: "Teacher",
        text: "Excellent suggestions! Remember, even small actions can make a big difference when everyone participates.",
        translation: "很好的建议！记住，当每个人都参与时，即使是小行动也能产生很大的影响。",
        gender: "female"
      }
    ]
  },
  {
    id: 6,
    scenario: "小演讲 - 自我介绍",
    emoji: "🎤",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today, each of you will give a short self-introduction. Let's start with you, Peter.",
        translation: "今天，你们每个人都要做一个简短的自我介绍。我们从你开始，彼得。",
        gender: "female"
      },
      {
        speaker: "Peter",
        text: "Good morning, everyone. My name is Peter, and I'm 14 years old. I live with my parents and my younger sister.",
        translation: "大家早上好。我叫彼得，今年14岁。我和父母以及妹妹住在一起。",
        gender: "male"
      },
      {
        speaker: "Peter",
        text: "I enjoy playing basketball and reading science fiction books. In my free time, I like to build model airplanes.",
        translation: "我喜欢打篮球和读科幻小说。在空闲时间，我喜欢制作飞机模型。",
        gender: "male"
      },
      {
        speaker: "Peter",
        text: "My favorite subject is science, and I hope to become an engineer in the future. Thank you for listening.",
        translation: "我最喜欢的科目是科学，我希望将来成为一名工程师。谢谢大家听我介绍。",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "Thank you, Peter. That was a good introduction. Now, let's hear from you, Mary.",
        translation: "谢谢你，彼得。这是一个很好的介绍。现在，让我们听听你的，玛丽。",
        gender: "female"
      },
      {
        speaker: "Mary",
        text: "Hello, everyone. I'm Mary, and I'm also 14. I have two older brothers who are in college.",
        translation: "大家好。我是玛丽，也是14岁。我有两个正在上大学的哥哥。",
        gender: "female"
      },
      {
        speaker: "Mary",
        text: "I love drawing and painting. I'm a member of the school art club, and we have an exhibition next month.",
        translation: "我喜欢画画。我是学校艺术俱乐部的成员，我们下个月有一个展览。",
        gender: "female"
      },
      {
        speaker: "Mary",
        text: "I'm interested in history and literature. I want to be a teacher when I grow up. Thank you.",
        translation: "我对历史和文学感兴趣。我长大后想成为一名教师。谢谢大家。",
        gender: "female"
      }
    ]
  },
  {
    id: 7,
    scenario: "校园活动 - 运动会",
    emoji: "🏃",
    conversations: [
      {
        speaker: "Coach",
        text: "The school sports meet is coming up next week. Who wants to participate in the 100-meter race?",
        translation: "学校运动会下周就要开始了。谁想参加100米赛跑？",
        gender: "male"
      },
      {
        speaker: "Students",
        text: "Me! I do! I want to try!",
        translation: "我！我想！我想试试！",
        gender: "child"
      },
      {
        speaker: "Coach",
        text: "Great enthusiasm! Let's have a practice race today to see who our best runners are.",
        translation: "热情很高！今天我们来一场练习赛，看看谁是我们最好的跑步者。",
        gender: "male"
      },
      {
        speaker: "Tom",
        text: "I won the race last year. I've been training every morning for the past month.",
        translation: "我去年赢得了比赛。过去一个月我每天早上都在训练。",
        gender: "male"
      },
      {
        speaker: "Lucy",
        text: "I'm not as fast as Tom, but I'm good at long-distance running. I'll join the 800-meter race instead.",
        translation: "我没有汤姆快，但我擅长长跑。我要参加800米赛跑。",
        gender: "female"
      },
      {
        speaker: "Coach",
        text: "That's good to know. We need participants for all events. How about the relay race? We need four people for each team.",
        translation: "这很好。我们需要所有项目的参与者。接力赛怎么样？每个队需要四个人。",
        gender: "male"
      },
      {
        speaker: "Students",
        text: "I'll be in the relay team! Count me in!",
        translation: "我要加入接力队！算我一个！",
        gender: "child"
      },
      {
        speaker: "Coach",
        text: "Perfect! Let's start our practice now. Remember, the most important thing is to have fun and do your best.",
        translation: "太好了！现在开始练习吧。记住，最重要的是玩得开心并尽你所能。",
        gender: "male"
      }
    ]
  },
  {
    id: 8,
    scenario: "学习讨论 - 学习方法",
    emoji: "📚",
    conversations: [
      {
        speaker: "Sarah",
        text: "I'm having trouble with math. No matter how much I study, I still can't understand some concepts.",
        translation: "我在数学上有困难。无论我学习多少，我仍然无法理解一些概念。",
        gender: "female"
      },
      {
        speaker: "David",
        text: "Have you tried watching online tutorials? There are some great math channels on YouTube that explain things clearly.",
        translation: "你试过看在线教程吗？YouTube上有一些很好的数学频道，解释得很清楚。",
        gender: "male"
      },
      {
        speaker: "Sarah",
        text: "Yes, I've watched some videos, but I still get confused when doing homework. How do you study for math?",
        translation: "是的，我看过一些视频，但在做作业时我仍然感到困惑。你是怎么学习数学的？",
        gender: "female"
      },
      {
        speaker: "David",
        text: "I find it helpful to practice with a study group. We meet twice a week and help each other with difficult problems.",
        translation: "我发现和学习小组一起练习很有帮助。我们每周见面两次，互相帮助解决难题。",
        gender: "male"
      },
      {
        speaker: "Sarah",
        text: "That sounds like a good idea. Do you think I could join your study group?",
        translation: "听起来是个好主意。你觉得我可以加入你的学习小组吗？",
        gender: "female"
      },
      {
        speaker: "David",
        text: "Of course! We meet on Tuesday and Thursday after school in the library. The more, the merrier!",
        translation: "当然可以！我们周二和周四放学后在图书馆见面。人越多越热闹！",
        gender: "male"
      },
      {
        speaker: "Sarah",
        text: "Thanks! I'll definitely come. Maybe we can also share some study tips for other subjects.",
        translation: "谢谢！我一定会来。也许我们还可以分享其他科目的学习技巧。",
        gender: "female"
      }
    ]
  },
  {
    id: 11,
    scenario: '科技与创新 - 人工智能',
    emoji: '🤖',
    conversations: [
      {
        speaker: 'Alex',
        text: 'Have you heard about the latest developments in artificial intelligence?',
        translation: '你听说过人工智能的最新发展吗？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'Yes, it\'s fascinating how AI is transforming various industries.',
        translation: '是的，人工智能正在改变各个行业，这很令人着迷。',
        gender: 'female'
      },
      {
        speaker: 'Alex',
        text: 'I\'m particularly interested in machine learning applications.',
        translation: '我对机器学习应用特别感兴趣。',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'That\'s a growing field with lots of opportunities.',
        translation: '这是一个有很多机会的成长领域。',
        gender: 'female'
      }
    ]
  },
  {
    id: 12,
    scenario: '健康与运动 - 马拉松训练',
    emoji: '🏃',
    conversations: [
      {
        speaker: 'David',
        text: 'How\'s your marathon training going?',
        translation: '你的马拉松训练进展如何？',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'It\'s challenging but rewarding. I\'m up to 15 miles now.',
        translation: '很有挑战性但也很有收获。我现在能跑15英里了。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'That\'s impressive! Do you have a target time?',
        translation: '真令人印象深刻！你有目标时间吗？',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'I\'m aiming for under 4 hours. We\'ll see!',
        translation: '我的目标是4小时以内。我们拭目以待！',
        gender: 'female'
      }
    ]
  },
  {
    id: 13,
    scenario: '艺术与文化 - 博物馆参观',
    emoji: '🏛️',
    conversations: [
      {
        speaker: 'Lisa',
        text: 'Have you been to the new art exhibition?',
        translation: '你去过新的艺术展览吗？',
        gender: 'female'
      },
      {
        speaker: 'Tom',
        text: 'Yes, the modern art section was particularly interesting.',
        translation: '是的，现代艺术部分特别有趣。',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'I loved the interactive installations.',
        translation: '我喜欢那些互动装置。',
        gender: 'female'
      },
      {
        speaker: 'Tom',
        text: 'They really make you think about art differently.',
        translation: '它们真的让你以不同的方式思考艺术。',
        gender: 'male'
      }
    ]
  },
  {
    id: 14,
    scenario: '环境与气候 - 可再生能源',
    emoji: '🌞',
    conversations: [
      {
        speaker: 'Mike',
        text: 'What do you think about solar energy?',
        translation: '你觉得太阳能怎么样？',
        gender: 'male'
      },
      {
        speaker: 'Anna',
        text: 'It\'s a promising solution for sustainable energy.',
        translation: '它是可持续能源的一个有希望的解决方案。',
        gender: 'female'
      },
      {
        speaker: 'Mike',
        text: 'The technology keeps improving too.',
        translation: '技术也在不断改进。',
        gender: 'male'
      },
      {
        speaker: 'Anna',
        text: 'Exactly, and it\'s becoming more affordable.',
        translation: '没错，而且它正变得越来越实惠。',
        gender: 'female'
      }
    ]
  },
  {
    id: 15,
    scenario: '职业发展 - 远程工作',
    emoji: '💻',
    conversations: [
      {
        speaker: 'Chris',
        text: 'How do you find working remotely?',
        translation: '你觉得远程工作怎么样？',
        gender: 'male'
      },
      {
        speaker: 'Maria',
        text: 'It has its challenges, but I enjoy the flexibility.',
        translation: '有一些挑战，但我喜欢这种灵活性。',
        gender: 'female'
      },
      {
        speaker: 'Chris',
        text: 'Do you miss the office environment?',
        translation: '你想念办公室环境吗？',
        gender: 'male'
      },
      {
        speaker: 'Maria',
        text: 'Sometimes, but video calls help stay connected.',
        translation: '有时候会，但视频通话有助于保持联系。',
        gender: 'female'
      }
    ]
  },
  {
    id: 16,
    scenario: '教育与学习 - 在线课程',
    emoji: '📚',
    conversations: [
      {
        speaker: 'James',
        text: 'Are you taking any online courses?',
        translation: '你在上任何在线课程吗？',
        gender: 'male'
      },
      {
        speaker: 'Sophie',
        text: 'Yes, I\'m learning programming through an online platform.',
        translation: '是的，我正在通过一个在线平台学习编程。',
        gender: 'female'
      },
      {
        speaker: 'James',
        text: 'How\'s that going?',
        translation: '进展如何？',
        gender: 'male'
      },
      {
        speaker: 'Sophie',
        text: 'It\'s great! The flexibility allows me to learn at my own pace.',
        translation: '很棒！这种灵活性让我可以按照自己的节奏学习。',
        gender: 'female'
      }
    ]
  },
  {
    id: 17,
    scenario: '社交与友谊 - 社区活动',
    emoji: '🤝',
    conversations: [
      {
        speaker: 'Peter',
        text: 'Are you involved in any community activities?',
        translation: '你参与任何社区活动吗？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'Yes, I volunteer at the local food bank.',
        translation: '是的，我在当地食物银行做志愿者。',
        gender: 'female'
      },
      {
        speaker: 'Peter',
        text: 'That\'s wonderful! How often do you volunteer?',
        translation: '太棒了！你多久做一次志愿者？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'Every weekend. It\'s very fulfilling.',
        translation: '每周末。这很有成就感。',
        gender: 'female'
      }
    ]
  },
  {
    id: 18,
    scenario: '旅行与探索 - 背包旅行',
    emoji: '🎒',
    conversations: [
      {
        speaker: 'Alex',
        text: 'Have you ever been backpacking?',
        translation: '你去过背包旅行吗？',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'Yes, I traveled through Europe last summer.',
        translation: '是的，我去年夏天穿越了欧洲。',
        gender: 'female'
      },
      {
        speaker: 'Alex',
        text: 'That sounds amazing! What was your favorite place?',
        translation: '听起来很棒！你最喜欢哪个地方？',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'Italy was incredible, especially the food!',
        translation: '意大利很棒，特别是食物！',
        gender: 'female'
      }
    ]
  },
  {
    id: 19,
    scenario: '音乐与艺术 - 音乐会',
    emoji: '🎵',
    conversations: [
      {
        speaker: 'David',
        text: 'Did you enjoy the concert last night?',
        translation: '你喜欢昨晚的音乐会吗？',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'It was fantastic! The orchestra was amazing.',
        translation: '太棒了！管弦乐队很出色。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'I especially liked the classical pieces.',
        translation: '我特别喜欢那些古典乐曲。',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'Me too! The conductor was brilliant.',
        translation: '我也是！指挥家很出色。',
        gender: 'female'
      }
    ]
  },
  {
    id: 20,
    scenario: '科学与研究 - 实验室工作',
    emoji: '🔬',
    conversations: [
      {
        speaker: 'Tom',
        text: 'How\'s your research project going?',
        translation: '你的研究项目进展如何？',
        gender: 'male'
      },
      {
        speaker: 'Anna',
        text: 'We\'re making good progress with the experiments.',
        translation: '我们的实验进展顺利。',
        gender: 'female'
      },
      {
        speaker: 'Tom',
        text: 'Any interesting findings so far?',
        translation: '目前有什么有趣的发现吗？',
        gender: 'male'
      },
      {
        speaker: 'Anna',
        text: 'Yes, we\'ve discovered some promising results.',
        translation: '是的，我们发现了一些有希望的结果。',
        gender: 'female'
      }
    ]
  },
  {
    id: 21,
    scenario: '科技与创新 - 虚拟现实',
    emoji: '🎮',
    conversations: [
      {
        speaker: 'David',
        text: 'Have you tried virtual reality technology?',
        translation: '你试过虚拟现实技术吗？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'Yes, I played a VR game at my friend\'s house. It was incredible!',
        translation: '是的，我在朋友家玩过VR游戏。太不可思议了！',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'What kind of game was it?',
        translation: '是什么类型的游戏？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'It was a space exploration game. You could float around in zero gravity.',
        translation: '是一个太空探索游戏。你可以在零重力环境中漂浮。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'That sounds amazing! I\'d love to try it someday.',
        translation: '听起来太棒了！我希望有一天能试试。',
        gender: 'male'
      }
    ]
  },
  {
    id: 22,
    scenario: '健康与健身 - 瑜伽课程',
    emoji: '🧘',
    conversations: [
      {
        speaker: 'Sarah',
        text: 'How long have you been practicing yoga?',
        translation: '你练习瑜伽多久了？',
        gender: 'female'
      },
      {
        speaker: 'Mike',
        text: 'About two years now. It\'s really helped with my flexibility and stress.',
        translation: '大约两年了。它真的帮助我提高了灵活性和减轻了压力。',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'I\'ve been thinking about trying it. Do you have any recommendations for beginners?',
        translation: '我一直在考虑尝试。你对初学者有什么建议吗？',
        gender: 'female'
      },
      {
        speaker: 'Mike',
        text: 'Start with basic poses and don\'t push yourself too hard. There are also great online classes.',
        translation: '从基本姿势开始，不要太过勉强自己。网上也有很多很好的课程。',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'Thanks for the advice! Maybe I\'ll join your class next week.',
        translation: '谢谢你的建议！也许我下周会加入你的课程。',
        gender: 'female'
      }
    ]
  },
  {
    id: 23,
    scenario: '艺术与文化 - 电影讨论',
    emoji: '🎬',
    conversations: [
      {
        speaker: 'Tom',
        text: 'Have you seen the new superhero movie?',
        translation: '你看过新的超级英雄电影吗？',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'Yes, I watched it last weekend. The special effects were amazing!',
        translation: '是的，我上周末看了。特效太棒了！',
        gender: 'female'
      },
      {
        speaker: 'Tom',
        text: 'I agree! What did you think about the plot?',
        translation: '我同意！你觉得剧情怎么样？',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'It was a bit predictable, but the character development was good.',
        translation: '有点可预测，但角色发展很好。',
        gender: 'female'
      },
      {
        speaker: 'Tom',
        text: 'I\'m looking forward to the sequel. It\'s coming out next year.',
        translation: '我很期待续集。明年就要上映了。',
        gender: 'male'
      }
    ]
  },
  {
    id: 24,
    scenario: '环境与气候 - 垃圾分类',
    emoji: '♻️',
    conversations: [
      {
        speaker: 'Emma',
        text: 'Do you practice waste sorting at home?',
        translation: '你在家做垃圾分类吗？',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'Yes, we have separate bins for recyclables, food waste, and general trash.',
        translation: '是的，我们有可回收物、食物垃圾和一般垃圾的单独垃圾桶。',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'That\'s great! It\'s important for environmental protection.',
        translation: '太好了！这对环境保护很重要。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'I agree. It takes a little extra effort, but it\'s worth it.',
        translation: '我同意。需要一点额外的努力，但这是值得的。',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'I\'ve been trying to reduce my plastic use too.',
        translation: '我也一直在尝试减少塑料使用。',
        gender: 'female'
      }
    ]
  },
  {
    id: 25,
    scenario: '职业发展 - 创业计划',
    emoji: '💡',
    conversations: [
      {
        speaker: 'Alex',
        text: 'Have you thought about starting your own business?',
        translation: '你想过创办自己的企业吗？',
        gender: 'male'
      },
      {
        speaker: 'Sophie',
        text: 'Yes, I have some ideas for a sustainable fashion brand.',
        translation: '是的，我对可持续时尚品牌有一些想法。',
        gender: 'female'
      },
      {
        speaker: 'Alex',
        text: 'That sounds interesting! What\'s your business plan?',
        translation: '听起来很有趣！你的商业计划是什么？',
        gender: 'male'
      },
      {
        speaker: 'Sophie',
        text: 'I\'m still working on it, but I\'m focusing on eco-friendly materials and ethical production.',
        translation: '我还在制定中，但我专注于环保材料和道德生产。',
        gender: 'female'
      },
      {
        speaker: 'Alex',
        text: 'You should definitely research the market and create a detailed financial plan.',
        translation: '你一定要研究市场并制定详细的财务计划。',
        gender: 'male'
      }
    ]
  },
  {
    id: 26,
    scenario: '教育与学习 - 语言交换',
    emoji: '🗣️',
    conversations: [
      {
        speaker: 'James',
        text: 'Are you participating in any language exchange programs?',
        translation: '你参加任何语言交换项目吗？',
        gender: 'male'
      },
      {
        speaker: 'Maria',
        text: 'Yes, I meet with a native English speaker twice a week to practice.',
        translation: '是的，我每周与一位英语母语者见面两次来练习。',
        gender: 'female'
      },
      {
        speaker: 'James',
        text: 'How\'s that working out for you?',
        translation: '这对你效果如何？',
        gender: 'male'
      },
      {
        speaker: 'Maria',
        text: 'It\'s been great! My speaking skills have improved a lot.',
        translation: '很棒！我的口语技能提高了很多。',
        gender: 'female'
      },
      {
        speaker: 'James',
        text: 'That\'s encouraging. Maybe I should try something similar.',
        translation: '这很鼓舞人心。也许我应该尝试类似的事情。',
        gender: 'male'
      }
    ]
  },
  {
    id: 27,
    scenario: '社交与友谊 - 社交媒体',
    emoji: '📱',
    conversations: [
      {
        speaker: 'Peter',
        text: 'How much time do you spend on social media?',
        translation: '你在社交媒体上花多少时间？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'Probably too much! I try to limit myself to an hour a day.',
        translation: '可能太多了！我试着限制自己每天一小时。',
        gender: 'female'
      },
      {
        speaker: 'Peter',
        text: 'That\'s a good approach. I find it can be quite addictive.',
        translation: '这是个好方法。我发现它可能很容易上瘾。',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'Definitely. I\'ve been trying to have more face-to-face interactions instead.',
        translation: '当然。我一直在尝试有更多的面对面互动。',
        gender: 'female'
      },
      {
        speaker: 'Peter',
        text: 'That\'s a healthy balance. Real connections are important.',
        translation: '这是个健康的平衡。真实的联系很重要。',
        gender: 'male'
      }
    ]
  },
  {
    id: 28,
    scenario: '旅行与探索 - 文化体验',
    emoji: '🌏',
    conversations: [
      {
        speaker: 'Alex',
        text: 'What\'s the most interesting cultural experience you\'ve had while traveling?',
        translation: '你在旅行中经历过的最有趣的文化体验是什么？',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'When I visited Japan, I participated in a traditional tea ceremony.',
        translation: '当我访问日本时，我参加了一个传统的茶道仪式。',
        gender: 'female'
      },
      {
        speaker: 'Alex',
        text: 'That sounds fascinating! What was it like?',
        translation: '听起来很迷人！是什么样的？',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'It was very peaceful and ritualistic. Every movement had meaning.',
        translation: '非常平静和有仪式感。每个动作都有意义。',
        gender: 'female'
      },
      {
        speaker: 'Alex',
        text: 'I\'d love to experience something like that someday.',
        translation: '我希望有一天能体验这样的事情。',
        gender: 'male'
      }
    ]
  },
  {
    id: 29,
    scenario: '音乐与艺术 - 街头表演',
    emoji: '🎭',
    conversations: [
      {
        speaker: 'David',
        text: 'Did you see that street performer yesterday?',
        translation: '你昨天看到那个街头表演者了吗？',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'Yes, the one playing the violin? He was incredibly talented!',
        translation: '是的，那个拉小提琴的？他非常有才华！',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'I stopped to listen for a while. His interpretation of classical pieces was unique.',
        translation: '我停下来听了一会儿。他对古典乐曲的诠释很独特。',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'I gave him some money. Street artists deserve support for their work.',
        translation: '我给了他一些钱。街头艺术家应该得到对他们工作的支持。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'I agree. It adds so much to the city\'s cultural atmosphere.',
        translation: '我同意。它为城市的文化氛围增添了很多。',
        gender: 'male'
      }
    ]
  },
  {
    id: 30,
    scenario: '科学与研究 - 太空探索',
    emoji: '🚀',
    conversations: [
      {
        speaker: 'Tom',
        text: 'Are you following the latest space mission?',
        translation: '你在关注最新的太空任务吗？',
        gender: 'male'
      },
      {
        speaker: 'Anna',
        text: 'Yes, the Mars rover mission is fascinating!',
        translation: '是的，火星探测器任务很迷人！',
        gender: 'female'
      },
      {
        speaker: 'Tom',
        text: 'What discoveries have they made so far?',
        translation: '他们到目前为止有什么发现？',
        gender: 'male'
      },
      {
        speaker: 'Anna',
        text: 'They\'ve found evidence of ancient water and are analyzing soil samples.',
        translation: '他们发现了古代水的证据，正在分析土壤样本。',
        gender: 'female'
      },
      {
        speaker: 'Tom',
        text: 'It\'s incredible to think we might find signs of life on another planet.',
        translation: '想到我们可能在另一个星球上找到生命的迹象，真是不可思议。',
        gender: 'male'
      }
    ]
  },
  {
    id: 31,
    scenario: '科技与创新 - 智能家居',
    emoji: '🏠',
    conversations: [
      {
        speaker: 'David',
        text: 'Have you set up any smart home devices?',
        translation: '你设置了任何智能家居设备吗？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'Yes, I have smart lights and a voice-controlled assistant.',
        translation: '是的，我有智能灯和语音控制助手。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'How do you like them? Are they convenient?',
        translation: '你觉得怎么样？方便吗？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'They\'re great! I can control everything from my phone, even when I\'m not home.',
        translation: '很棒！我可以从手机上控制一切，即使我不在家。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'I\'m thinking about getting a smart thermostat to save on energy bills.',
        translation: '我正在考虑买一个智能恒温器来节省能源费用。',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'That\'s a good idea! It can learn your schedule and adjust automatically.',
        translation: '这是个好主意！它可以学习你的日程并自动调整。',
        gender: 'female'
      }
    ]
  },
  {
    id: 32,
    scenario: '健康与健身 - 营养饮食',
    emoji: '🥗',
    conversations: [
      {
        speaker: 'Sarah',
        text: 'Have you been following any specific diet plan?',
        translation: '你一直在遵循特定的饮食计划吗？',
        gender: 'female'
      },
      {
        speaker: 'Mike',
        text: 'I\'ve been trying to eat more plant-based foods and reduce processed sugar.',
        translation: '我一直在尝试多吃植物性食物，减少加工糖的摄入。',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'How\'s that working for you? Do you feel better?',
        translation: '效果如何？你感觉好些了吗？',
        gender: 'female'
      },
      {
        speaker: 'Mike',
        text: 'Yes, I have more energy and my digestion has improved.',
        translation: '是的，我有更多精力，消化也改善了。',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'That\'s great! Do you have any favorite healthy recipes?',
        translation: '太好了！你有什么喜欢的健康食谱吗？',
        gender: 'female'
      },
      {
        speaker: 'Mike',
        text: 'I make a great quinoa bowl with roasted vegetables. I can share the recipe with you.',
        translation: '我会做一种很棒的藜麦碗，配烤蔬菜。我可以和你分享食谱。',
        gender: 'male'
      }
    ]
  },
  {
    id: 33,
    scenario: '艺术与文化 - 摄影技巧',
    emoji: '📸',
    conversations: [
      {
        speaker: 'Tom',
        text: 'I see you\'ve been taking a lot of photos lately. Are you learning photography?',
        translation: '我看到你最近拍了很多照片。你在学习摄影吗？',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'Yes, I\'ve been practicing composition and lighting techniques.',
        translation: '是的，我一直在练习构图和光线技巧。',
        gender: 'female'
      },
      {
        speaker: 'Tom',
        text: 'What kind of camera are you using?',
        translation: '你使用什么类型的相机？',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'I started with my phone, but I recently bought a DSLR to learn manual settings.',
        translation: '我从手机开始，但最近买了一台单反相机来学习手动设置。',
        gender: 'female'
      },
      {
        speaker: 'Tom',
        text: 'That\'s a big step up! Do you have any favorite subjects to photograph?',
        translation: '这是一个很大的进步！你有什么喜欢拍摄的主题吗？',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'I love street photography and capturing candid moments of people.',
        translation: '我喜欢街头摄影，捕捉人们自然的瞬间。',
        gender: 'female'
      }
    ]
  },
  {
    id: 34,
    scenario: '环境与气候 - 零浪费生活',
    emoji: '♻️',
    conversations: [
      {
        speaker: 'Emma',
        text: 'I\'ve been trying to live a zero-waste lifestyle. It\'s challenging but rewarding.',
        translation: '我一直在尝试过零浪费生活。这很有挑战性但也很有收获。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'That\'s impressive! What changes have you made?',
        translation: '真令人印象深刻！你做了哪些改变？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'I bring my own containers to the store, use cloth napkins, and make my own cleaning products.',
        translation: '我带自己的容器去商店，使用布餐巾，自己制作清洁产品。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'Do you find it difficult to maintain this lifestyle?',
        translation: '你觉得维持这种生活方式困难吗？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'It takes some planning, but I\'ve reduced my waste significantly. Every small change helps.',
        translation: '需要一些计划，但我已经显著减少了浪费。每一个小改变都有帮助。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'I\'d like to learn more about this. Maybe you could share some tips?',
        translation: '我想了解更多。也许你可以分享一些技巧？',
        gender: 'male'
      }
    ]
  },
  {
    id: 35,
    scenario: '职业发展 - 数字营销',
    emoji: '📊',
    conversations: [
      {
        speaker: 'Alex',
        text: 'I\'ve been learning about digital marketing strategies. The field is constantly evolving.',
        translation: '我一直在学习数字营销策略。这个领域在不断演变。',
        gender: 'male'
      },
      {
        speaker: 'Sophie',
        text: 'That\'s true. What aspects are you focusing on?',
        translation: '确实如此。你关注哪些方面？',
        gender: 'female'
      },
      {
        speaker: 'Alex',
        text: 'I\'m particularly interested in social media marketing and SEO techniques.',
        translation: '我对社交媒体营销和SEO技术特别感兴趣。',
        gender: 'male'
      },
      {
        speaker: 'Sophie',
        text: 'Those are valuable skills. Have you had a chance to apply them in any projects?',
        translation: '这些都是有价值的技能。你有机会在任何项目中应用它们吗？',
        gender: 'female'
      },
      {
        speaker: 'Alex',
        text: 'Yes, I helped a small business improve their online presence. Their engagement increased by 40%.',
        translation: '是的，我帮助一家小企业改善了他们的在线形象。他们的参与度增加了40%。',
        gender: 'male'
      },
      {
        speaker: 'Sophie',
        text: 'That\'s impressive! Digital marketing is definitely a growing field with lots of opportunities.',
        translation: '真令人印象深刻！数字营销绝对是一个有很多机会的成长领域。',
        gender: 'female'
      }
    ]
  },
  {
    id: 36,
    scenario: '教育与学习 - 在线认证',
    emoji: '🎓',
    conversations: [
      {
        speaker: 'James',
        text: 'Have you ever taken an online certification course?',
        translation: '你上过在线认证课程吗？',
        gender: 'male'
      },
      {
        speaker: 'Maria',
        text: 'Yes, I completed a project management certification last year.',
        translation: '是的，我去年完成了一个项目管理认证。',
        gender: 'female'
      },
      {
        speaker: 'James',
        text: 'How was the experience? Was it recognized by employers?',
        translation: '体验如何？雇主认可吗？',
        gender: 'male'
      },
      {
        speaker: 'Maria',
        text: 'It was challenging but flexible. And yes, it helped me get my current job.',
        translation: '很有挑战性但很灵活。是的，它帮助我获得了现在的工作。',
        gender: 'female'
      },
      {
        speaker: 'James',
        text: 'I\'m considering taking a data science certification. Any recommendations?',
        translation: '我正在考虑参加数据科学认证。有什么建议吗？',
        gender: 'male'
      },
      {
        speaker: 'Maria',
        text: 'Look for programs with hands-on projects and industry recognition. That makes a big difference.',
        translation: '寻找有实践项目和行业认可的课程。这有很大的区别。',
        gender: 'female'
      }
    ]
  },
  {
    id: 37,
    scenario: '社交与友谊 - 网络社区',
    emoji: '🌐',
    conversations: [
      {
        speaker: 'Peter',
        text: 'Are you part of any online communities?',
        translation: '你是任何在线社区的成员吗？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'Yes, I\'m active in a photography forum and a book club on social media.',
        translation: '是的，我活跃在一个摄影论坛和社交媒体上的一个读书俱乐部。',
        gender: 'female'
      },
      {
        speaker: 'Peter',
        text: 'Do you find these communities valuable?',
        translation: '你觉得这些社区有价值吗？',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'Absolutely! I\'ve learned so much and even met some friends in real life.',
        translation: '当然！我学到了很多，甚至在线下见过一些朋友。',
        gender: 'female'
      },
      {
        speaker: 'Peter',
        text: 'That\'s great! I\'ve been looking for a coding community to join.',
        translation: '太好了！我一直在寻找一个编程社区加入。',
        gender: 'male'
      },
      {
        speaker: 'Emma',
        text: 'There are many active ones. I can recommend a few that focus on beginners.',
        translation: '有很多活跃的社区。我可以推荐几个专注于初学者的。',
        gender: 'female'
      }
    ]
  },
  {
    id: 38,
    scenario: '旅行与探索 - 文化节庆',
    emoji: '🎉',
    conversations: [
      {
        speaker: 'Alex',
        text: 'Have you ever experienced a traditional festival in another country?',
        translation: '你体验过其他国家的传统节日吗？',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'Yes, I was in Thailand during Songkran, their New Year water festival.',
        translation: '是的，我在泰国体验了宋干节，他们的新年泼水节。',
        gender: 'female'
      },
      {
        speaker: 'Alex',
        text: 'That sounds fun! What was it like?',
        translation: '听起来很有趣！是什么样的？',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'It was amazing! Everyone was so friendly, spraying water at each other and having a great time.',
        translation: '太棒了！每个人都很友好，互相泼水，玩得很开心。',
        gender: 'female'
      },
      {
        speaker: 'Alex',
        text: 'I\'d love to experience something like that. Are there any festivals you\'d recommend?',
        translation: '我很想体验这样的事情。你有什么推荐的节日吗？',
        gender: 'male'
      },
      {
        speaker: 'Sarah',
        text: 'The Holi festival in India is incredible, and the Lantern Festival in Taiwan is beautiful.',
        translation: '印度的胡里节很不可思议，台湾的元宵节很美。',
        gender: 'female'
      }
    ]
  },
  {
    id: 39,
    scenario: '音乐与艺术 - 街头艺术',
    emoji: '🎨',
    conversations: [
      {
        speaker: 'David',
        text: 'Have you seen the new street art in the downtown area?',
        translation: '你看过市中心的新街头艺术吗？',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'Yes, those murals are incredible! They\'ve transformed the whole neighborhood.',
        translation: '是的，那些壁画太不可思议了！它们改变了整个社区。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'I especially like the one with the geometric patterns and bright colors.',
        translation: '我特别喜欢那个有几何图案和明亮色彩的。',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'That artist has a unique style. I follow their work on social media.',
        translation: '那位艺术家有独特的风格。我在社交媒体上关注他们的作品。',
        gender: 'female'
      },
      {
        speaker: 'David',
        text: 'Street art really adds character to the city, don\'t you think?',
        translation: '街头艺术真的为城市增添了特色，你不觉得吗？',
        gender: 'male'
      },
      {
        speaker: 'Lisa',
        text: 'Absolutely! It makes public spaces more engaging and tells local stories.',
        translation: '当然！它使公共空间更具吸引力，讲述当地故事。',
        gender: 'female'
      }
    ]
  },
  {
    id: 40,
    scenario: '科学与研究 - 气候变化',
    emoji: '🌡️',
    conversations: [
      {
        speaker: 'Tom',
        text: 'Have you been following the latest climate change reports?',
        translation: '你关注最新的气候变化报告吗？',
        gender: 'male'
      },
      {
        speaker: 'Anna',
        text: 'Yes, the data is concerning. We\'re seeing record temperatures globally.',
        translation: '是的，数据令人担忧。我们看到全球温度创下纪录。',
        gender: 'female'
      },
      {
        speaker: 'Tom',
        text: 'What do you think about the proposed solutions?',
        translation: '你对提出的解决方案有什么看法？',
        gender: 'male'
      },
      {
        speaker: 'Anna',
        text: 'We need a combination of renewable energy, conservation, and policy changes.',
        translation: '我们需要可再生能源、保护和政策变化的结合。',
        gender: 'female'
      },
      {
        speaker: 'Tom',
        text: 'I\'ve been trying to reduce my carbon footprint by using public transportation more.',
        translation: '我一直在尝试通过更多地使用公共交通工具来减少我的碳足迹。',
        gender: 'male'
      },
      {
        speaker: 'Anna',
        text: 'Every little bit helps. I\'ve also been supporting environmental organizations.',
        translation: '每一点都有帮助。我也一直在支持环保组织。',
        gender: 'female'
      }
    ]
  },
  {
    id: 51,
    scenario: "学校生活 - 课堂讨论",
    emoji: "📚",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we'll discuss the importance of reading. Who would like to share their favorite book?",
        translation: "今天我们来讨论阅读的重要性。谁想分享一下他们最喜欢的书？",
        gender: "female"
      },
      {
        speaker: "Tom",
        text: "I love 'Harry Potter'. The magical world is fascinating!",
        translation: "我喜欢《哈利·波特》。魔法世界很迷人！",
        gender: "male"
      },
      {
        speaker: "Lucy",
        text: "I prefer science fiction books. They make me think about the future.",
        translation: "我更喜欢科幻小说。它们让我思考未来。",
        gender: "female"
      }
    ]
  },
  {
    id: 52,
    scenario: "家庭生活 - 晚餐时间",
    emoji: "🍽️",
    conversations: [
      {
        speaker: "Mom",
        text: "How was your day at school, dear?",
        translation: "亲爱的，今天在学校过得怎么样？",
        gender: "female"
      },
      {
        speaker: "Child",
        text: "It was good! We had a math test today.",
        translation: "很好！今天我们进行了数学测试。",
        gender: "child"
      },
      {
        speaker: "Dad",
        text: "Did you do well on the test?",
        translation: "考试考得好吗？",
        gender: "male"
      }
    ]
  },
  {
    id: 53,
    scenario: "社交活动 - 生日派对",
    emoji: "🎂",
    conversations: [
      {
        speaker: "Host",
        text: "Welcome to my birthday party! Help yourself to some snacks.",
        translation: "欢迎来到我的生日派对！请随意享用一些零食。",
        gender: "female"
      },
      {
        speaker: "Guest",
        text: "Happy Birthday! Here's your gift.",
        translation: "生日快乐！这是给你的礼物。",
        gender: "male"
      },
      {
        speaker: "Host",
        text: "Thank you so much! Let's play some games!",
        translation: "非常感谢！我们来玩些游戏吧！",
        gender: "female"
      }
    ]
  },
  {
    id: 54,
    scenario: "购物 - 服装店",
    emoji: "👕",
    conversations: [
      {
        speaker: "Shop Assistant",
        text: "Can I help you find anything?",
        translation: "需要我帮您找什么吗？",
        gender: "female"
      },
      {
        speaker: "Customer",
        text: "Yes, I'm looking for a new school uniform.",
        translation: "是的，我在找新的校服。",
        gender: "male"
      },
      {
        speaker: "Shop Assistant",
        text: "What size do you wear?",
        translation: "您穿多大尺码？",
        gender: "female"
      }
    ]
  },
  {
    id: 55,
    scenario: "运动与健康 - 体育课",
    emoji: "⚽",
    conversations: [
      {
        speaker: "Coach",
        text: "Today we'll practice basketball. Everyone, get into teams of five.",
        translation: "今天我们来练习篮球。大家分成五人一组。",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "Can I be the team captain?",
        translation: "我能当队长吗？",
        gender: "female"
      },
      {
        speaker: "Coach",
        text: "Sure! Remember to pass the ball and work as a team.",
        translation: "当然可以！记住要传球，要团队合作。",
        gender: "male"
      }
    ]
  },
  {
    id: 56,
    scenario: "科技与互联网 - 电脑课",
    emoji: "💻",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we'll learn about basic programming. Open your laptops.",
        translation: "今天我们来学习基础编程。打开你们的笔记本电脑。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "I forgot to charge my laptop. Can I share with someone?",
        translation: "我忘记给笔记本电脑充电了。我能和别人共用吗？",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "Of course. Sit next to Tom and work together.",
        translation: "当然可以。坐在汤姆旁边一起工作吧。",
        gender: "male"
      }
    ]
  },
  {
    id: 57,
    scenario: "文化与传统 - 春节",
    emoji: "🏮",
    conversations: [
      {
        speaker: "Grandmother",
        text: "Let's make dumplings together for Chinese New Year!",
        translation: "让我们一起包饺子过年吧！",
        gender: "female"
      },
      {
        speaker: "Child",
        text: "Can I help wrap the dumplings?",
        translation: "我能帮忙包饺子吗？",
        gender: "child"
      },
      {
        speaker: "Grandmother",
        text: "Of course! I'll teach you the traditional way.",
        translation: "当然可以！我来教你传统的方法。",
        gender: "female"
      }
    ]
  },
  {
    id: 58,
    scenario: "旅行与探索 - 博物馆参观",
    emoji: "🏛️",
    conversations: [
      {
        speaker: "Guide",
        text: "Welcome to the Science Museum. Let's start with the dinosaur exhibition.",
        translation: "欢迎来到科学博物馆。让我们从恐龙展览开始。",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "Wow! These fossils are amazing!",
        translation: "哇！这些化石太神奇了！",
        gender: "female"
      },
      {
        speaker: "Guide",
        text: "Yes, they're millions of years old. Let me tell you about their history.",
        translation: "是的，它们有数百万年的历史。让我告诉你们它们的历史。",
        gender: "male"
      }
    ]
  },
  {
    id: 59,
    scenario: "学习与考试 - 期末考试",
    emoji: "📝",
    conversations: [
      {
        speaker: "Teacher",
        text: "Remember to read all questions carefully before answering.",
        translation: "记住在答题前要仔细阅读所有问题。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "I'm confused about the math formulas.",
        translation: "我对数学公式很困惑。",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "Let's go through them together. Which one do you find most difficult?",
        translation: "让我们一起复习。你觉得哪个最难？",
        gender: "female"
      }
    ]
  },
  {
    id: 60,
    scenario: "日常生活 - 公交车上",
    emoji: "🚌",
    conversations: [
      {
        speaker: "Passenger",
        text: "Excuse me, is this seat taken?",
        translation: "打扰一下，这个座位有人坐吗？",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "No, you can sit here. I'm getting off at the next stop.",
        translation: "没有，你可以坐这里。我下一站就下车了。",
        gender: "male"
      },
      {
        speaker: "Passenger",
        text: "Thank you so much! You're very kind.",
        translation: "非常感谢！你真是太好了。",
        gender: "female"
      }
    ]
  },
  {
    id: 61,
    scenario: "学校生活 - 图书馆",
    emoji: "📖",
    conversations: [
      {
        speaker: "Librarian",
        text: "Please keep quiet in the library. This is a study area.",
        translation: "请在图书馆保持安静。这是学习区。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "I'm sorry. I'm looking for a book about Chinese history.",
        translation: "对不起。我在找一本关于中国历史的书。",
        gender: "male"
      },
      {
        speaker: "Librarian",
        text: "The history books are in section D. Let me help you find it.",
        translation: "历史书在D区。让我帮你找。",
        gender: "female"
      }
    ]
  },
  {
    id: 62,
    scenario: "家庭生活 - 周末计划",
    emoji: "📅",
    conversations: [
      {
        speaker: "Mom",
        text: "What would you like to do this weekend?",
        translation: "这个周末你想做什么？",
        gender: "female"
      },
      {
        speaker: "Child",
        text: "Can we go to the zoo? I want to see the pandas!",
        translation: "我们能去动物园吗？我想看熊猫！",
        gender: "child"
      },
      {
        speaker: "Dad",
        text: "That's a great idea! We can pack some snacks and make it a family day.",
        translation: "这是个好主意！我们可以带些零食，来个家庭日。",
        gender: "male"
      }
    ]
  },
  {
    id: 63,
    scenario: "社交活动 - 同学聚会",
    emoji: "🎮",
    conversations: [
      {
        speaker: "Host",
        text: "Who wants to play video games? I have a new racing game.",
        translation: "谁想玩电子游戏？我有个新的赛车游戏。",
        gender: "male"
      },
      {
        speaker: "Friend",
        text: "I'll play! I'm really good at racing games.",
        translation: "我要玩！我很擅长赛车游戏。",
        gender: "female"
      },
      {
        speaker: "Host",
        text: "Great! Let's have a competition!",
        translation: "太好了！我们来比赛吧！",
        gender: "male"
      }
    ]
  },
  {
    id: 64,
    scenario: "购物 - 文具店",
    emoji: "✏️",
    conversations: [
      {
        speaker: "Student",
        text: "Do you have any notebooks with graph paper?",
        translation: "你们有带格子的笔记本吗？",
        gender: "female"
      },
      {
        speaker: "Shop Assistant",
        text: "Yes, we have them in different sizes. Which size do you prefer?",
        translation: "是的，我们有不同尺寸的。你喜欢哪种尺寸？",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "I need A4 size for my math class.",
        translation: "我需要A4尺寸的，用于数学课。",
        gender: "female"
      }
    ]
  },
  {
    id: 65,
    scenario: "运动与健康 - 游泳课",
    emoji: "🏊",
    conversations: [
      {
        speaker: "Coach",
        text: "Today we'll practice the breaststroke. Watch my demonstration.",
        translation: "今天我们来练习蛙泳。看我的示范。",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "I'm a bit nervous about swimming in deep water.",
        translation: "在深水区游泳我有点紧张。",
        gender: "female"
      },
      {
        speaker: "Coach",
        text: "Don't worry, I'll be right next to you. Let's start with the basic movements.",
        translation: "别担心，我会在你旁边。让我们从基本动作开始。",
        gender: "male"
      }
    ]
  },
  {
    id: 66,
    scenario: "科技与互联网 - 手机使用",
    emoji: "📱",
    conversations: [
      {
        speaker: "Parent",
        text: "How much time do you spend on your phone each day?",
        translation: "你每天花多少时间在手机上？",
        gender: "female"
      },
      {
        speaker: "Child",
        text: "I mainly use it for homework and keeping in touch with friends.",
        translation: "我主要用它做作业和与朋友保持联系。",
        gender: "male"
      },
      {
        speaker: "Parent",
        text: "Remember to take breaks and not use it too much before bed.",
        translation: "记得要休息，睡觉前不要用太多。",
        gender: "female"
      }
    ]
  },
  {
    id: 67,
    scenario: "文化与传统 - 中秋节",
    emoji: "🥮",
    conversations: [
      {
        speaker: "Grandmother",
        text: "Let's make mooncakes together for Mid-Autumn Festival!",
        translation: "让我们一起做月饼过中秋节吧！",
        gender: "female"
      },
      {
        speaker: "Child",
        text: "Can I help mix the ingredients?",
        translation: "我能帮忙混合原料吗？",
        gender: "child"
      },
      {
        speaker: "Grandmother",
        text: "Of course! I'll teach you our family's secret recipe.",
        translation: "当然可以！我来教你我们家的秘方。",
        gender: "female"
      }
    ]
  },
  {
    id: 68,
    scenario: "旅行与探索 - 公园野餐",
    emoji: "🧺",
    conversations: [
      {
        speaker: "Friend",
        text: "This is a perfect spot for our picnic!",
        translation: "这是野餐的完美地点！",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "Yes, the weather is beautiful today. What did you bring to eat?",
        translation: "是的，今天天气很好。你带了什么吃的？",
        gender: "male"
      },
      {
        speaker: "Friend",
        text: "I made some sandwiches and brought some fruit. How about you?",
        translation: "我做了些三明治，还带了些水果。你呢？",
        gender: "female"
      }
    ]
  },
  {
    id: 69,
    scenario: "学习与考试 - 作业帮助",
    emoji: "📚",
    conversations: [
      {
        speaker: "Student",
        text: "Can you help me with my math homework?",
        translation: "你能帮我做数学作业吗？",
        gender: "female"
      },
      {
        speaker: "Friend",
        text: "Sure! Which problem are you stuck on?",
        translation: "当然可以！你卡在哪道题了？",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "I don't understand how to solve these equations.",
        translation: "我不明白怎么解这些方程。",
        gender: "female"
      }
    ]
  },
  {
    id: 70,
    scenario: "日常生活 - 餐厅点餐",
    emoji: "🍽️",
    conversations: [
      {
        speaker: "Waiter",
        text: "Are you ready to order?",
        translation: "您准备好点餐了吗？",
        gender: "male"
      },
      {
        speaker: "Customer",
        text: "Yes, I'd like a hamburger and a coke, please.",
        translation: "是的，我要一个汉堡和一杯可乐。",
        gender: "female"
      },
      {
        speaker: "Waiter",
        text: "Would you like fries with that?",
        translation: "要配薯条吗？",
        gender: "male"
      }
    ]
  },
  {
    id: 71,
    scenario: "学校生活 - 科学实验",
    emoji: "🔬",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we'll do a simple chemistry experiment. Put on your safety goggles.",
        translation: "今天我们要做一个简单的化学实验。戴上安全护目镜。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "What are we going to make?",
        translation: "我们要做什么？",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "We'll make a volcano using baking soda and vinegar.",
        translation: "我们要用苏打粉和醋制作火山。",
        gender: "female"
      }
    ]
  },
  {
    id: 72,
    scenario: "家庭生活 - 家务分工",
    emoji: "🧹",
    conversations: [
      {
        speaker: "Mom",
        text: "Can you help clean your room today?",
        translation: "今天能帮忙打扫你的房间吗？",
        gender: "female"
      },
      {
        speaker: "Child",
        text: "Do I have to? I was planning to play video games.",
        translation: "必须现在吗？我本来打算玩电子游戏的。",
        gender: "child"
      },
      {
        speaker: "Mom",
        text: "Yes, please. A clean room will help you study better.",
        translation: "是的，拜托了。干净的房间会让你学习更好。",
        gender: "female"
      }
    ]
  },
  {
    id: 73,
    scenario: "社交活动 - 才艺表演",
    emoji: "🎭",
    conversations: [
      {
        speaker: "Host",
        text: "Welcome to our talent show! Who's performing first?",
        translation: "欢迎来到我们的才艺表演！谁第一个表演？",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "I'll play the piano. I've been practicing for weeks.",
        translation: "我要弹钢琴。我已经练习好几周了。",
        gender: "female"
      },
      {
        speaker: "Host",
        text: "Great! Let's give her a big round of applause!",
        translation: "太好了！让我们给她热烈的掌声！",
        gender: "male"
      }
    ]
  },
  {
    id: 74,
    scenario: "购物 - 超市",
    emoji: "🛒",
    conversations: [
      {
        speaker: "Parent",
        text: "We need to buy some groceries for the week.",
        translation: "我们需要买这周的杂货。",
        gender: "female"
      },
      {
        speaker: "Child",
        text: "Can we get some snacks too?",
        translation: "我们也能买些零食吗？",
        gender: "child"
      },
      {
        speaker: "Parent",
        text: "Yes, but only healthy snacks. Let's look at the fruit section first.",
        translation: "可以，但只能是健康的零食。让我们先看看水果区。",
        gender: "female"
      }
    ]
  },
  {
    id: 75,
    scenario: "运动与健康 - 晨跑",
    emoji: "🏃",
    conversations: [
      {
        speaker: "Friend",
        text: "Do you want to join our morning running group?",
        translation: "你想加入我们的晨跑小组吗？",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "What time do you usually run?",
        translation: "你们通常什么时候跑步？",
        gender: "female"
      },
      {
        speaker: "Friend",
        text: "We meet at 6:30 AM at the park. It's a great way to start the day!",
        translation: "我们早上6:30在公园集合。这是开始一天的好方式！",
        gender: "male"
      }
    ]
  },
  {
    id: 76,
    scenario: "科技与互联网 - 网络安全",
    emoji: "🔒",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we'll learn about internet safety. What should you never share online?",
        translation: "今天我们来学习网络安全。你们在网上永远不应该分享什么？",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "We should never share our passwords or personal information.",
        translation: "我们永远不应该分享密码或个人信息。",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "Correct! Always be careful about what you post on social media.",
        translation: "对！要始终注意你在社交媒体上发布的内容。",
        gender: "female"
      }
    ]
  },
  {
    id: 77,
    scenario: "文化与传统 - 端午节",
    emoji: "🚣",
    conversations: [
      {
        speaker: "Parent",
        text: "Let's make zongzi for Dragon Boat Festival!",
        translation: "让我们包粽子过端午节吧！",
        gender: "female"
      },
      {
        speaker: "Child",
        text: "Can I help wrap them? It looks fun!",
        translation: "我能帮忙包粽子吗？看起来很有趣！",
        gender: "child"
      },
      {
        speaker: "Parent",
        text: "Of course! I'll teach you how to fold the bamboo leaves.",
        translation: "当然可以！我来教你如何折叠竹叶。",
        gender: "female"
      }
    ]
  },
  {
    id: 78,
    scenario: "旅行与探索 - 动物园",
    emoji: "🦁",
    conversations: [
      {
        speaker: "Guide",
        text: "Welcome to our zoo! Let's start with the lion enclosure.",
        translation: "欢迎来到我们的动物园！让我们从狮子区开始。",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "Wow! The lions are so majestic!",
        translation: "哇！狮子好威武啊！",
        gender: "female"
      },
      {
        speaker: "Guide",
        text: "Yes, they are the king of the jungle. Let me tell you about their habits.",
        translation: "是的，它们是丛林之王。让我告诉你们它们的习性。",
        gender: "male"
      }
    ]
  },
  {
    id: 79,
    scenario: "学习与考试 - 小组项目",
    emoji: "👥",
    conversations: [
      {
        speaker: "Teacher",
        text: "For this project, you'll work in groups of four.",
        translation: "这个项目，你们要四人一组。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "Can I choose my group members?",
        translation: "我能选择我的组员吗？",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "Yes, but make sure everyone has a chance to participate.",
        translation: "可以，但要确保每个人都有机会参与。",
        gender: "female"
      }
    ]
  },
  {
    id: 80,
    scenario: "日常生活 - 天气变化",
    emoji: "☔",
    conversations: [
      {
        speaker: "Parent",
        text: "It looks like it's going to rain. Don't forget your umbrella.",
        translation: "看起来要下雨了。别忘了带伞。",
        gender: "female"
      },
      {
        speaker: "Child",
        text: "But the weather forecast said it would be sunny today!",
        translation: "但天气预报说今天会晴天！",
        gender: "child"
      },
      {
        speaker: "Parent",
        text: "It's better to be prepared. The weather can change quickly.",
        translation: "最好做好准备。天气变化很快的。",
        gender: "female"
      }
    ]
  },
  {
    id: 81,
    scenario: "学校生活 - 艺术课",
    emoji: "🎨",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we'll learn about watercolor painting. Get your brushes ready.",
        translation: "今天我们来学习水彩画。准备好你们的画笔。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "I'm not very good at painting. Can you help me?",
        translation: "我不太会画画。你能帮我吗？",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "Of course! Let's start with some basic techniques.",
        translation: "当然可以！让我们从一些基本技巧开始。",
        gender: "female"
      }
    ]
  },
  {
    id: 82,
    scenario: "家庭生活 - 宠物照顾",
    emoji: "🐕",
    conversations: [
      {
        speaker: "Parent",
        text: "Who will walk the dog today?",
        translation: "今天谁去遛狗？",
        gender: "female"
      },
      {
        speaker: "Child",
        text: "I'll do it! I love taking Max for walks.",
        translation: "我去！我喜欢带Max散步。",
        gender: "child"
      },
      {
        speaker: "Parent",
        text: "Remember to bring a plastic bag for cleaning up.",
        translation: "记得带塑料袋清理。",
        gender: "female"
      }
    ]
  },
  {
    id: 83,
    scenario: "社交活动 - 生日礼物",
    emoji: "🎁",
    conversations: [
      {
        speaker: "Friend",
        text: "Happy Birthday! I got you something special.",
        translation: "生日快乐！我给你准备了特别的礼物。",
        gender: "female"
      },
      {
        speaker: "Birthday Person",
        text: "Really? What is it? I'm so excited!",
        translation: "真的吗？是什么？我好兴奋！",
        gender: "male"
      },
      {
        speaker: "Friend",
        text: "Open it and see! I hope you like it.",
        translation: "打开看看！希望你喜欢。",
        gender: "female"
      }
    ]
  },
  {
    id: 84,
    scenario: "购物 - 书店",
    emoji: "📚",
    conversations: [
      {
        speaker: "Student",
        text: "Do you have the latest Harry Potter book?",
        translation: "你们有最新的哈利·波特书吗？",
        gender: "female"
      },
      {
        speaker: "Bookseller",
        text: "Yes, it's in the children's section. Would you like me to show you?",
        translation: "是的，在儿童区。要我带你去吗？",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "Yes, please! I've been waiting for this book for months!",
        translation: "好的，谢谢！我等这本书等了好几个月了！",
        gender: "female"
      }
    ]
  },
  {
    id: 85,
    scenario: "运动与健康 - 篮球训练",
    emoji: "🏀",
    conversations: [
      {
        speaker: "Coach",
        text: "Today we'll practice free throws. Line up at the free throw line.",
        translation: "今天我们来练习罚球。在罚球线排队。",
        gender: "male"
      },
      {
        speaker: "Player",
        text: "I always miss free throws. Can you help me with my technique?",
        translation: "我总是罚球不进。你能帮我改进技术吗？",
        gender: "female"
      },
      {
        speaker: "Coach",
        text: "Focus on your form and follow through with your shot.",
        translation: "注意你的姿势，投篮后要跟随动作。",
        gender: "male"
      }
    ]
  },
  {
    id: 86,
    scenario: "科技与互联网 - 编程课",
    emoji: "💻",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we'll learn about loops in programming. Open your laptops.",
        translation: "今天我们来学习编程中的循环。打开你们的笔记本电脑。",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "I don't understand how to use 'for' loops.",
        translation: "我不明白怎么用'for'循环。",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "Let me show you with a simple example. We'll count from 1 to 10.",
        translation: "让我用一个简单的例子来展示。我们来数1到10。",
        gender: "female"
      }
    ]
  },
  {
    id: 87,
    scenario: "文化与传统 - 春节晚会",
    emoji: "🎭",
    conversations: [
      {
        speaker: "Host",
        text: "Welcome to our Spring Festival Gala! Who's excited?",
        translation: "欢迎来到我们的春节晚会！谁很兴奋？",
        gender: "male"
      },
      {
        speaker: "Audience",
        text: "Me! I love the dragon dance!",
        translation: "我！我喜欢舞龙！",
        gender: "child"
      },
      {
        speaker: "Host",
        text: "Great! The performance will start in five minutes.",
        translation: "太好了！表演五分钟后开始。",
        gender: "male"
      }
    ]
  },
  {
    id: 88,
    scenario: "旅行与探索 - 夏令营",
    emoji: "⛺",
    conversations: [
      {
        speaker: "Counselor",
        text: "Welcome to summer camp! Let's set up your tents.",
        translation: "欢迎来到夏令营！让我们搭帐篷吧。",
        gender: "female"
      },
      {
        speaker: "Camper",
        text: "I've never camped before. Is it hard to set up a tent?",
        translation: "我从没露营过。搭帐篷难吗？",
        gender: "male"
      },
      {
        speaker: "Counselor",
        text: "Don't worry, I'll help you. It's easier than it looks.",
        translation: "别担心，我会帮你。比看起来容易。",
        gender: "female"
      }
    ]
  },
  {
    id: 89,
    scenario: "学习与考试 - 复习课",
    emoji: "📝",
    conversations: [
      {
        speaker: "Teacher",
        text: "Let's review for tomorrow's test. Any questions?",
        translation: "让我们复习明天的考试。有什么问题吗？",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "I'm confused about the math formulas.",
        translation: "我对数学公式很困惑。",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "Let's go through them together. Which one do you find most difficult?",
        translation: "让我们一起复习。你觉得哪个最难？",
        gender: "female"
      }
    ]
  },
  {
    id: 90,
    scenario: "日常生活 - 公交车上",
    emoji: "🚌",
    conversations: [
      {
        speaker: "Elderly Person",
        text: "Would you mind if I sit here? My legs are tired.",
        translation: "你介意我坐这里吗？我的腿很累。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "Of course not! Please take my seat.",
        translation: "当然不介意！请坐我的座位。",
        gender: "male"
      },
      {
        speaker: "Elderly Person",
        text: "Thank you so much! You're very kind.",
        translation: "非常感谢！你真是太好了。",
        gender: "female"
      }
    ]
  },
  {
    id: 91,
    scenario: "学校生活 - 音乐课",
    emoji: "🎵",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we'll learn a new song. Does anyone play an instrument?",
        translation: "今天我们来学一首新歌。有人会演奏乐器吗？",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "I play the piano. Can I accompany the class?",
        translation: "我会弹钢琴。我能为全班伴奏吗？",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "That would be wonderful! Let's start with the melody.",
        translation: "那太好了！让我们从旋律开始。",
        gender: "female"
      }
    ]
  },
  {
    id: 92,
    scenario: "家庭生活 - 晚餐准备",
    emoji: "👨‍🍳",
    conversations: [
      {
        speaker: "Parent",
        text: "Who wants to help cook dinner tonight?",
        translation: "谁想帮忙做晚饭？",
        gender: "female"
      },
      {
        speaker: "Child",
        text: "I'll help! What are we making?",
        translation: "我来帮忙！我们要做什么？",
        gender: "child"
      },
      {
        speaker: "Parent",
        text: "We're making spaghetti. You can help stir the sauce.",
        translation: "我们要做意大利面。你可以帮忙搅拌酱料。",
        gender: "female"
      }
    ]
  },
  {
    id: 93,
    scenario: "社交活动 - 电影之夜",
    emoji: "🎬",
    conversations: [
      {
        speaker: "Host",
        text: "What movie should we watch tonight?",
        translation: "今晚我们看什么电影？",
        gender: "male"
      },
      {
        speaker: "Friend",
        text: "How about an animated movie? I brought some popcorn!",
        translation: "看动画片怎么样？我带了爆米花！",
        gender: "female"
      },
      {
        speaker: "Host",
        text: "Great idea! Let's set up the projector.",
        translation: "好主意！让我们设置投影仪。",
        gender: "male"
      }
    ]
  },
  {
    id: 94,
    scenario: "购物 - 服装店",
    emoji: "👕",
    conversations: [
      {
        speaker: "Customer",
        text: "Do you have this shirt in a smaller size?",
        translation: "这件衬衫有小一点的尺码吗？",
        gender: "female"
      },
      {
        speaker: "Shop Assistant",
        text: "Let me check in the back. What size are you looking for?",
        translation: "让我去后面看看。你在找什么尺码？",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "I need a medium. This large is too big.",
        translation: "我需要中码。这个大码太大了。",
        gender: "female"
      }
    ]
  },
  {
    id: 95,
    scenario: "运动与健康 - 瑜伽课",
    emoji: "🧘",
    conversations: [
      {
        speaker: "Instructor",
        text: "Let's start with some basic breathing exercises.",
        translation: "让我们从一些基本的呼吸练习开始。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "I'm not very flexible. Will that be a problem?",
        translation: "我不是很灵活。这会有问题吗？",
        gender: "male"
      },
      {
        speaker: "Instructor",
        text: "Not at all. We'll start with simple poses and gradually increase difficulty.",
        translation: "完全不会。我们从简单的姿势开始，慢慢增加难度。",
        gender: "female"
      }
    ]
  },
  {
    id: 96,
    scenario: "科技与互联网 - 机器人课",
    emoji: "🤖",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we'll build a simple robot. Get your kits ready.",
        translation: "今天我们来建造一个简单的机器人。准备好你们的工具包。",
        gender: "male"
      },
      {
        speaker: "Student",
        text: "I've never built a robot before. Is it difficult?",
        translation: "我从没造过机器人。难吗？",
        gender: "female"
      },
      {
        speaker: "Teacher",
        text: "Don't worry, I'll guide you through each step.",
        translation: "别担心，我会指导你完成每一步。",
        gender: "male"
      }
    ]
  },
  {
    id: 97,
    scenario: "文化与传统 - 书法课",
    emoji: "✒️",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we'll practice calligraphy. Hold your brush correctly.",
        translation: "今天我们来练习书法。正确握笔。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "My characters always look messy. How can I improve?",
        translation: "我的字总是看起来很乱。我怎么改进？",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "Practice makes perfect. Start with basic strokes.",
        translation: "熟能生巧。从基本笔画开始。",
        gender: "female"
      }
    ]
  },
  {
    id: 98,
    scenario: "旅行与探索 - 博物馆参观",
    emoji: "🏛️",
    conversations: [
      {
        speaker: "Guide",
        text: "Welcome to our museum. Let's start with the ancient artifacts.",
        translation: "欢迎来到我们的博物馆。让我们从古代文物开始。",
        gender: "male"
      },
      {
        speaker: "Visitor",
        text: "These artifacts are amazing! How old are they?",
        translation: "这些文物太神奇了！它们有多少年了？",
        gender: "female"
      },
      {
        speaker: "Guide",
        text: "Some are over 2000 years old. Let me tell you their history.",
        translation: "有些超过2000年了。让我告诉你们它们的历史。",
        gender: "male"
      }
    ]
  },
  {
    id: 99,
    scenario: "学习与考试 - 科学实验",
    emoji: "🔬",
    conversations: [
      {
        speaker: "Teacher",
        text: "Today we'll do a chemistry experiment. Put on your safety goggles.",
        translation: "今天我们要做化学实验。戴上安全护目镜。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "What are we going to make?",
        translation: "我们要做什么？",
        gender: "male"
      },
      {
        speaker: "Teacher",
        text: "We'll make a chemical reaction using baking soda and vinegar.",
        translation: "我们要用苏打粉和醋做化学反应。",
        gender: "female"
      }
    ]
  },
  {
    id: 100,
    scenario: "日常生活 - 公园散步",
    emoji: "🌳",
    conversations: [
      {
        speaker: "Friend",
        text: "The weather is perfect for a walk in the park.",
        translation: "天气很适合在公园散步。",
        gender: "female"
      },
      {
        speaker: "Student",
        text: "Yes, and the flowers are blooming beautifully.",
        translation: "是的，花儿开得很漂亮。",
        gender: "male"
      },
      {
        speaker: "Friend",
        text: "Let's take some photos for our nature project.",
        translation: "让我们为自然项目拍些照片。",
        gender: "female"
      }
    ]
  }
]; 