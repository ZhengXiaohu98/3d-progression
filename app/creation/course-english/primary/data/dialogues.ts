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
    scenario: "问候与介绍",
    emoji: "👋",
    conversations: [
      { speaker: "Tom", text: "Hi! I'm Tom. What's your name?", translation: "嗨！我是汤姆。你叫什么名字？", gender: "male" },
      { speaker: "Lucy", text: "Hello! I'm Lucy. Nice to meet you!", translation: "你好！我是露西。很高兴见到你！", gender: "female" },
      { speaker: "Tom", text: "Nice to meet you too! How are you?", translation: "我也很高兴见到你！你好吗？", gender: "male" },
      { speaker: "Lucy", text: "I'm fine, thank you. And you?", translation: "我很好，谢谢。你呢？", gender: "female" },
      { speaker: "Tom", text: "I'm great! Have a nice day!", translation: "我很好！祝你有愉快的一天！", gender: "male" }
    ]
  },
  {
    id: 2,
    scenario: "在学校",
    emoji: "🏫",
    conversations: [
      { speaker: "Teacher", text: "Good morning, class!", translation: "早上好，同学们！", gender: "female" },
      { speaker: "Students", text: "Good morning, teacher!", translation: "早上好，老师！", gender: "child" },
      { speaker: "Teacher", text: "Today we will learn about animals.", translation: "今天我们将学习关于动物的知识。", gender: "female" },
      { speaker: "Student", text: "I love animals! Can we talk about pandas?", translation: "我喜欢动物！我们可以讨论熊猫吗？", gender: "child" },
      { speaker: "Teacher", text: "Yes, we will! Pandas are very interesting.", translation: "是的，我们会的！熊猫很有趣。", gender: "female" }
    ]
  },
  {
    id: 3,
    scenario: "在超市",
    emoji: "🛒",
    conversations: [
      { speaker: "Customer", text: "Excuse me, where are the apples?", translation: "打扰一下，苹果在哪里？", gender: "female" },
      { speaker: "Staff", text: "The apples are in aisle 3.", translation: "苹果在3号货架。", gender: "male" },
      { speaker: "Customer", text: "Thank you! How much are they?", translation: "谢谢！它们多少钱？", gender: "female" },
      { speaker: "Staff", text: "They are $2 per pound.", translation: "每磅2美元。", gender: "male" },
      { speaker: "Customer", text: "Great! I'll take three pounds.", translation: "太好了！我要买三磅。", gender: "female" }
    ]
  },
  {
    id: 4,
    scenario: "天气交谈",
    emoji: "🌤️",
    conversations: [
      { speaker: "Jack", text: "How's the weather today?", translation: "今天天气怎么样？", gender: "male" },
      { speaker: "Mary", text: "It's sunny and warm!", translation: "阳光明媚，很暖和！", gender: "female" },
      { speaker: "Jack", text: "Perfect! Let's go to the park.", translation: "太好了！我们去公园吧。", gender: "male" },
      { speaker: "Mary", text: "Good idea! I love sunny days.", translation: "好主意！我喜欢晴天。", gender: "female" },
      { speaker: "Jack", text: "Me too! We can play outside.", translation: "我也是！我们可以在外面玩。", gender: "male" }
    ]
  },
  {
    id: 5,
    scenario: "点餐",
    emoji: "🍽️",
    conversations: [
      { speaker: "Waiter", text: "Welcome! What would you like to order?", translation: "欢迎光临！您想点什么？", gender: "male" },
      { speaker: "Customer", text: "I'd like a hamburger and fries, please.", translation: "我要一个汉堡和薯条，谢谢。", gender: "female" },
      { speaker: "Waiter", text: "Would you like something to drink?", translation: "您需要饮料吗？", gender: "male" },
      { speaker: "Customer", text: "Yes, an orange juice, please.", translation: "是的，要一杯橙汁，谢谢。", gender: "female" },
      { speaker: "Waiter", text: "Okay, I'll bring your order soon.", translation: "好的，我很快就把您的餐点送来。", gender: "male" }
    ]
  },
  {
    id: 6,
    scenario: "在公园",
    emoji: "🌳",
    conversations: [
      { speaker: "Child", text: "Can we feed the ducks?", translation: "我们能喂鸭子吗？", gender: "child" },
      { speaker: "Parent", text: "Yes, but only with bread.", translation: "可以，但只能用面包。", gender: "female" },
      { speaker: "Child", text: "Look! They're coming!", translation: "看！它们来了！", gender: "child" },
      { speaker: "Parent", text: "Throw the bread gently.", translation: "轻轻地把面包扔出去。", gender: "female" },
      { speaker: "Child", text: "They love the bread!", translation: "它们很喜欢面包！", gender: "child" }
    ]
  },
  {
    id: 7,
    scenario: "生日派对",
    emoji: "🎂",
    conversations: [
      { speaker: "Birthday Child", text: "Thank you for coming to my party!", translation: "谢谢你们来参加我的派对！", gender: "child" },
      { speaker: "Friend", text: "Happy Birthday! Here's your present.", translation: "生日快乐！这是你的礼物。", gender: "child" },
      { speaker: "Birthday Child", text: "Wow! I love it!", translation: "哇！我很喜欢！", gender: "child" },
      { speaker: "Friend", text: "Let's play some games!", translation: "我们来玩游戏吧！", gender: "child" },
      { speaker: "Birthday Child", text: "Yes! Let's play hide and seek!", translation: "好！我们来玩捉迷藏！", gender: "child" }
    ]
  },
  {
    id: 8,
    scenario: "在图书馆",
    emoji: "📚",
    conversations: [
      { speaker: "Student 1", text: "Can you help me find a storybook?", translation: "你能帮我找一本故事书吗？", gender: "child" },
      { speaker: "Librarian", text: "Of course! What kind of story do you like?", translation: "当然可以！你喜欢什么类型的故事？", gender: "female" },
      { speaker: "Student 1", text: "I like stories about animals.", translation: "我喜欢关于动物的故事。", gender: "child" },
      { speaker: "Librarian", text: "Follow me, I'll show you the animal section.", translation: "跟我来，我带你去动物区。", gender: "female" },
      { speaker: "Student 1", text: "Thank you very much!", translation: "非常感谢！", gender: "child" }
    ]
  },
  {
    id: 9,
    scenario: "在医院",
    emoji: "🏥",
    conversations: [
      { speaker: "Doctor", text: "What's wrong? How do you feel?", translation: "怎么了？感觉如何？", gender: "male" },
      { speaker: "Patient", text: "I have a headache and fever.", translation: "我头痛和发烧。", gender: "female" },
      { speaker: "Doctor", text: "Let me check your temperature.", translation: "让我量一下你的体温。", gender: "male" },
      { speaker: "Patient", text: "Will I need medicine?", translation: "我需要吃药吗？", gender: "female" },
      { speaker: "Doctor", text: "Yes, and you need to rest.", translation: "是的，你需要休息。", gender: "male" }
    ]
  },
  {
    id: 10,
    scenario: "在动物园",
    emoji: "🦁",
    conversations: [
      { speaker: "Guide", text: "Welcome to our zoo!", translation: "欢迎来到我们的动物园！", gender: "male" },
      { speaker: "Child", text: "Where are the pandas?", translation: "熊猫在哪里？", gender: "child" },
      { speaker: "Guide", text: "They're in the bamboo forest area.", translation: "它们在竹林区。", gender: "male" },
      { speaker: "Child", text: "Are they eating bamboo?", translation: "它们在吃竹子吗？", gender: "child" },
      { speaker: "Guide", text: "Yes! Pandas love bamboo.", translation: "是的！熊猫很喜欢竹子。", gender: "male" }
    ]
  },
  {
    id: 11,
    scenario: "在游泳池",
    emoji: "🏊",
    conversations: [
      { speaker: "Swimming Teacher", text: "Are you ready for your swimming lesson?", translation: "准备好开始游泳课了吗？", gender: "male" },
      { speaker: "Student", text: "Yes, but I'm a little nervous.", translation: "是的，但我有点紧张。", gender: "child" },
      { speaker: "Swimming Teacher", text: "Don't worry, I'll help you.", translation: "别担心，我会帮你的。", gender: "male" },
      { speaker: "Student", text: "Can you teach me to float?", translation: "你能教我漂浮吗？", gender: "child" },
      { speaker: "Swimming Teacher", text: "Of course! Let's start with that.", translation: "当然！我们就从这个开始。", gender: "male" }
    ]
  },
  {
    id: 12,
    scenario: "在玩具店",
    emoji: "🧸",
    conversations: [
      { speaker: "Child", text: "Mom, I want this robot!", translation: "妈妈，我想要这个机器人！", gender: "child" },
      { speaker: "Mother", text: "How much is it?", translation: "多少钱？", gender: "female" },
      { speaker: "Child", text: "It's only £15!", translation: "只要15英镑！", gender: "child" },
      { speaker: "Mother", text: "Do you have enough pocket money?", translation: "你的零花钱够吗？", gender: "female" },
      { speaker: "Child", text: "Yes! I saved £20!", translation: "够！我存了20英镑！", gender: "child" }
    ]
  },
  {
    id: 13,
    scenario: "在电影院",
    emoji: "🎬",
    conversations: [
      { speaker: "Friend 1", text: "What movie do you want to watch?", translation: "你想看什么电影？", gender: "female" },
      { speaker: "Friend 2", text: "How about the new cartoon?", translation: "看新的动画片怎么样？", gender: "child" },
      { speaker: "Friend 1", text: "Good idea! Should we buy popcorn?", translation: "好主意！我们要买爆米花吗？", gender: "female" },
      { speaker: "Friend 2", text: "Yes, and some juice too!", translation: "是的，还要买些果汁！", gender: "child" },
      { speaker: "Friend 1", text: "Perfect! The movie starts in 10 minutes.", translation: "太好了！电影10分钟后开始。", gender: "female" }
    ]
  },
  {
    id: 14,
    scenario: "在海滩",
    emoji: "🏖️",
    conversations: [
      { speaker: "Child", text: "Can we build a sandcastle?", translation: "我们可以建造沙堡吗？", gender: "child" },
      { speaker: "Parent", text: "Sure! Let's get some water first.", translation: "当然可以！我们先去拿些水。", gender: "male" },
      { speaker: "Child", text: "I found some shells!", translation: "我找到了一些贝壳！", gender: "child" },
      { speaker: "Parent", text: "We can use them to decorate the castle.", translation: "我们可以用它们来装饰城堡。", gender: "male" },
      { speaker: "Child", text: "This is so much fun!", translation: "这太有趣了！", gender: "child" }
    ]
  },
  {
    id: 15,
    scenario: "在宠物店",
    emoji: "🐕",
    conversations: [
      { speaker: "Customer", text: "I'd like to adopt a puppy.", translation: "我想领养一只小狗。", gender: "female" },
      { speaker: "Staff", text: "What kind of dog are you looking for?", translation: "你在找什么品种的狗？", gender: "male" },
      { speaker: "Customer", text: "A small, friendly one.", translation: "一只小型、友好的狗。", gender: "female" },
      { speaker: "Staff", text: "How about this little Beagle?", translation: "这只小比格犬怎么样？", gender: "male" },
      { speaker: "Customer", text: "Perfect! Can I pet him?", translation: "太好了！我可以摸摸它吗？", gender: "female" }
    ]
  },
  {
    id: 16,
    scenario: "在音乐教室",
    emoji: "🎵",
    conversations: [
      { speaker: "Music Teacher", text: "Today we'll learn a new song.", translation: "今天我们来学习一首新歌。", gender: "female" },
      { speaker: "Student", text: "What song is it?", translation: "是什么歌？", gender: "child" },
      { speaker: "Music Teacher", text: "It's 'Twinkle Twinkle Little Star'.", translation: "是《小星星》。", gender: "female" },
      { speaker: "Student", text: "I love that song!", translation: "我喜欢这首歌！", gender: "child" },
      { speaker: "Music Teacher", text: "Let's sing it together.", translation: "让我们一起唱吧。", gender: "female" }
    ]
  },
  {
    id: 17,
    scenario: "在体育课",
    emoji: "⚽",
    conversations: [
      { speaker: "PE Teacher", text: "Today we'll play basketball.", translation: "今天我们来打篮球。", gender: "male" },
      { speaker: "Student", text: "I'm not good at basketball.", translation: "我不擅长打篮球。", gender: "child" },
      { speaker: "PE Teacher", text: "Don't worry, I'll teach you.", translation: "别担心，我来教你。", gender: "male" },
      { speaker: "Student", text: "Thank you, teacher!", translation: "谢谢老师！", gender: "child" },
      { speaker: "PE Teacher", text: "Let's start with dribbling.", translation: "我们从运球开始。", gender: "male" }
    ]
  },
  {
    id: 18,
    scenario: "在美术课",
    emoji: "🎨",
    conversations: [
      { speaker: "Art Teacher", text: "Today we'll draw flowers.", translation: "今天我们来画花。", gender: "female" },
      { speaker: "Student", text: "I love drawing flowers!", translation: "我喜欢画花！", gender: "child" },
      { speaker: "Art Teacher", text: "Start with the petals.", translation: "从花瓣开始画。", gender: "female" },
      { speaker: "Student", text: "Like this?", translation: "是这样吗？", gender: "child" },
      { speaker: "Art Teacher", text: "Yes, that's perfect!", translation: "是的，太棒了！", gender: "female" }
    ]
  },
  {
    id: 19,
    scenario: "在科学课",
    emoji: "🔬",
    conversations: [
      { speaker: "Science Teacher", text: "Today we'll learn about plants.", translation: "今天我们来学习植物。", gender: "male" },
      { speaker: "Student", text: "Do plants need water?", translation: "植物需要水吗？", gender: "child" },
      { speaker: "Science Teacher", text: "Yes, they need water and sunlight.", translation: "是的，它们需要水和阳光。", gender: "male" },
      { speaker: "Student", text: "What else do they need?", translation: "它们还需要什么？", gender: "child" },
      { speaker: "Science Teacher", text: "They also need soil and air.", translation: "它们还需要土壤和空气。", gender: "male" }
    ]
  },
  {
    id: 20,
    scenario: "在数学课",
    emoji: "📐",
    conversations: [
      { speaker: "Math Teacher", text: "Let's learn addition today.", translation: "今天我们来学习加法。", gender: "female" },
      { speaker: "Student", text: "What is 5 plus 3?", translation: "5加3等于多少？", gender: "child" },
      { speaker: "Math Teacher", text: "5 plus 3 equals 8.", translation: "5加3等于8。", gender: "female" },
      { speaker: "Student", text: "That's easy!", translation: "这很简单！", gender: "child" },
      { speaker: "Math Teacher", text: "Great job! Let's try another one.", translation: "做得很好！让我们试试另一个。", gender: "female" }
    ]
  },
  {
    id: 21,
    scenario: "在餐厅",
    emoji: "🍝",
    conversations: [
      { speaker: "Waiter", text: "Welcome to our restaurant!", translation: "欢迎光临我们的餐厅！", gender: "male" },
      { speaker: "Customer", text: "Table for two, please.", translation: "请给我们安排一个两人桌。", gender: "female" },
      { speaker: "Waiter", text: "This way, please.", translation: "请这边走。", gender: "male" },
      { speaker: "Customer", text: "Can we see the menu?", translation: "能看看菜单吗？", gender: "female" },
      { speaker: "Waiter", text: "Here you are.", translation: "给您菜单。", gender: "male" }
    ]
  },
  {
    id: 22,
    scenario: "在购物中心",
    emoji: "🛍️",
    conversations: [
      { speaker: "Shop Assistant", text: "Can I help you find anything?", translation: "需要帮您找什么吗？", gender: "female" },
      { speaker: "Customer", text: "I'm looking for a new shirt.", translation: "我在找一件新衬衫。", gender: "male" },
      { speaker: "Shop Assistant", text: "What size do you wear?", translation: "您穿多大尺码？", gender: "female" },
      { speaker: "Customer", text: "Medium, please.", translation: "中码，谢谢。", gender: "male" },
      { speaker: "Shop Assistant", text: "Follow me, I'll show you our new collection.", translation: "跟我来，我带您看看我们的新品。", gender: "female" }
    ]
  },
  {
    id: 200,
    scenario: "在毕业典礼",
    emoji: "🎓",
    conversations: [
      { speaker: "Principal", text: "Congratulations to all graduates!", translation: "祝贺所有毕业生！", gender: "male" },
      { speaker: "Student", text: "I'm so happy to graduate!", translation: "我很高兴能毕业！", gender: "child" },
      { speaker: "Parent", text: "We're proud of you!", translation: "我们为你感到骄傲！", gender: "female" },
      { speaker: "Student", text: "Thank you for your support!", translation: "谢谢你们的支持！", gender: "child" },
      { speaker: "Principal", text: "Wish you all a bright future!", translation: "祝你们都有一个光明的未来！", gender: "male" }
    ]
  },
  {
    id: 23,
    scenario: "在游乐园",
    emoji: "🎡",
    conversations: [
      { speaker: "Child", text: "Mom, can we go on the roller coaster?", translation: "妈妈，我们能坐过山车吗？", gender: "child" },
      { speaker: "Mother", text: "Are you tall enough for it?", translation: "你身高够了吗？", gender: "female" },
      { speaker: "Child", text: "Yes! I'm 120cm tall!", translation: "够了！我有120厘米高！", gender: "child" },
      { speaker: "Mother", text: "Okay, let's go! Are you excited?", translation: "好吧，我们去吧！你兴奋吗？", gender: "female" },
      { speaker: "Child", text: "Yes! This is my first time!", translation: "是的！这是我第一次坐！", gender: "child" }
    ]
  },
  {
    id: 24,
    scenario: "在博物馆",
    emoji: "🏛️",
    conversations: [
      { speaker: "Guide", text: "Welcome to our museum!", translation: "欢迎来到我们的博物馆！", gender: "female" },
      { speaker: "Student", text: "What's that big dinosaur?", translation: "那个大恐龙是什么？", gender: "child" },
      { speaker: "Guide", text: "That's a T-Rex! It lived millions of years ago.", translation: "那是霸王龙！它生活在数百万年前。", gender: "female" },
      { speaker: "Student", text: "Wow! How big was it?", translation: "哇！它有多大？", gender: "child" },
      { speaker: "Guide", text: "It was about 12 meters long!", translation: "它大约有12米长！", gender: "female" }
    ]
  },
  {
    id: 25,
    scenario: "在农场",
    emoji: "🚜",
    conversations: [
      { speaker: "Farmer", text: "Welcome to our farm!", translation: "欢迎来到我们的农场！", gender: "male" },
      { speaker: "Child", text: "Can we see the animals?", translation: "我们能看看动物吗？", gender: "child" },
      { speaker: "Farmer", text: "Of course! Let's start with the cows.", translation: "当然！我们先看奶牛。", gender: "male" },
      { speaker: "Child", text: "Do they give us milk?", translation: "它们给我们牛奶吗？", gender: "child" },
      { speaker: "Farmer", text: "Yes! We milk them every morning.", translation: "是的！我们每天早上都挤奶。", gender: "male" }
    ]
  },
  {
    id: 26,
    scenario: "在火车站",
    emoji: "🚂",
    conversations: [
      { speaker: "Ticket Officer", text: "Can I help you with your tickets?", translation: "需要帮您买票吗？", gender: "female" },
      { speaker: "Passenger", text: "Yes, two tickets to London, please.", translation: "是的，请给我两张去伦敦的票。", gender: "male" },
      { speaker: "Ticket Officer", text: "When would you like to travel?", translation: "您想什么时候出发？", gender: "female" },
      { speaker: "Passenger", text: "Tomorrow morning at 9.", translation: "明天早上9点。", gender: "male" },
      { speaker: "Ticket Officer", text: "That will be £50 each.", translation: "每张票50英镑。", gender: "female" }
    ]
  },
  {
    id: 27,
    scenario: "在邮局",
    emoji: "📮",
    conversations: [
      { speaker: "Postal Worker", text: "How can I help you today?", translation: "今天需要什么帮助？", gender: "male" },
      { speaker: "Customer", text: "I need to send this package to China.", translation: "我需要把这个包裹寄到中国。", gender: "female" },
      { speaker: "Postal Worker", text: "Let me weigh it for you.", translation: "让我帮您称重。", gender: "male" },
      { speaker: "Customer", text: "How long will it take?", translation: "需要多长时间？", gender: "female" },
      { speaker: "Postal Worker", text: "About 5-7 business days.", translation: "大约5-7个工作日。", gender: "male" }
    ]
  },
  {
    id: 28,
    scenario: "在图书馆",
    emoji: "📚",
    conversations: [
      { speaker: "Librarian", text: "Can I help you find a book?", translation: "需要帮您找书吗？", gender: "female" },
      { speaker: "Student", text: "Yes, I need a science book.", translation: "是的，我需要一本科学书。", gender: "child" },
      { speaker: "Librarian", text: "What topic are you interested in?", translation: "您对什么主题感兴趣？", gender: "female" },
      { speaker: "Student", text: "I like space and planets.", translation: "我喜欢太空和行星。", gender: "child" },
      { speaker: "Librarian", text: "Follow me to the science section.", translation: "跟我来科学区。", gender: "female" }
    ]
  },
  {
    id: 29,
    scenario: "在电影院",
    emoji: "🎬",
    conversations: [
      { speaker: "Ticket Seller", text: "What movie would you like to see?", translation: "您想看什么电影？", gender: "female" },
      { speaker: "Customer", text: "Is the new cartoon showing?", translation: "新的动画片在上映吗？", gender: "male" },
      { speaker: "Ticket Seller", text: "Yes, it starts in 10 minutes.", translation: "是的，10分钟后开始。", gender: "female" },
      { speaker: "Customer", text: "Two tickets, please.", translation: "请给我两张票。", gender: "male" },
      { speaker: "Ticket Seller", text: "That will be £20.", translation: "一共20英镑。", gender: "female" }
    ]
  },
  {
    id: 30,
    scenario: "在游泳池",
    emoji: "🏊",
    conversations: [
      { speaker: "Lifeguard", text: "Do you know how to swim?", translation: "你会游泳吗？", gender: "male" },
      { speaker: "Child", text: "Yes, I can swim a little.", translation: "是的，我会一点。", gender: "child" },
      { speaker: "Lifeguard", text: "Please stay in the shallow area.", translation: "请待在浅水区。", gender: "male" },
      { speaker: "Child", text: "Can I use the float?", translation: "我能用游泳圈吗？", gender: "child" },
      { speaker: "Lifeguard", text: "Yes, that's a good idea!", translation: "是的，这是个好主意！", gender: "male" }
    ]
  },
  {
    id: 31,
    scenario: "在公园",
    emoji: "🌳",
    conversations: [
      { speaker: "Child", text: "Can we feed the ducks?", translation: "我们能喂鸭子吗？", gender: "child" },
      { speaker: "Parent", text: "Yes, but only with bread.", translation: "可以，但只能用面包。", gender: "female" },
      { speaker: "Child", text: "Look! They're coming!", translation: "看！它们来了！", gender: "child" },
      { speaker: "Parent", text: "Throw the bread gently.", translation: "轻轻地把面包扔出去。", gender: "female" },
      { speaker: "Child", text: "They love the bread!", translation: "它们很喜欢面包！", gender: "child" }
    ]
  },
  {
    id: 32,
    scenario: "在玩具店",
    emoji: "🧸",
    conversations: [
      { speaker: "Child", text: "Mom, I want this robot!", translation: "妈妈，我想要这个机器人！", gender: "child" },
      { speaker: "Mother", text: "How much is it?", translation: "多少钱？", gender: "female" },
      { speaker: "Child", text: "It's only £15!", translation: "只要15英镑！", gender: "child" },
      { speaker: "Mother", text: "Do you have enough pocket money?", translation: "你的零花钱够吗？", gender: "female" },
      { speaker: "Child", text: "Yes! I saved £20!", translation: "够！我存了20英镑！", gender: "child" }
    ]
  },
  {
    id: 33,
    scenario: "在生日派对",
    emoji: "🎂",
    conversations: [
      { speaker: "Birthday Child", text: "Thank you for coming to my party!", translation: "谢谢你们来参加我的派对！", gender: "child" },
      { speaker: "Friend", text: "Happy Birthday! Here's your present.", translation: "生日快乐！这是你的礼物。", gender: "child" },
      { speaker: "Birthday Child", text: "Wow! I love it!", translation: "哇！我很喜欢！", gender: "child" },
      { speaker: "Friend", text: "Let's play some games!", translation: "我们来玩游戏吧！", gender: "child" },
      { speaker: "Birthday Child", text: "Yes! Let's play hide and seek!", translation: "好！我们来玩捉迷藏！", gender: "child" }
    ]
  },
  {
    id: 34,
    scenario: "在动物园",
    emoji: "🦁",
    conversations: [
      { speaker: "Guide", text: "Welcome to our zoo!", translation: "欢迎来到我们的动物园！", gender: "male" },
      { speaker: "Child", text: "Where are the pandas?", translation: "熊猫在哪里？", gender: "child" },
      { speaker: "Guide", text: "They're in the bamboo forest area.", translation: "它们在竹林区。", gender: "male" },
      { speaker: "Child", text: "Are they eating bamboo?", translation: "它们在吃竹子吗？", gender: "child" },
      { speaker: "Guide", text: "Yes! Pandas love bamboo.", translation: "是的！熊猫很喜欢竹子。", gender: "male" }
    ]
  },
  {
    id: 35,
    scenario: "在科学展览",
    emoji: "🔬",
    conversations: [
      { speaker: "Scientist", text: "Would you like to see a cool experiment?", translation: "想看一个很酷的实验吗？", gender: "female" },
      { speaker: "Student", text: "Yes! What are we going to do?", translation: "好啊！我们要做什么？", gender: "child" },
      { speaker: "Scientist", text: "We'll make a volcano!", translation: "我们要制作一个火山！", gender: "female" },
      { speaker: "Student", text: "How does it work?", translation: "它是怎么工作的？", gender: "child" },
      { speaker: "Scientist", text: "Watch carefully and I'll show you!", translation: "仔细看，我来演示给你看！", gender: "female" }
    ]
  },
  {
    id: 36,
    scenario: "在音乐课",
    emoji: "🎸",
    conversations: [
      { speaker: "Music Teacher", text: "Today we'll learn the guitar.", translation: "今天我们来学习吉他。", gender: "male" },
      { speaker: "Student", text: "I've never played before.", translation: "我以前从来没弹过。", gender: "child" },
      { speaker: "Music Teacher", text: "Don't worry, I'll teach you the basics.", translation: "别担心，我来教你基础。", gender: "male" },
      { speaker: "Student", text: "What's this string called?", translation: "这根弦叫什么？", gender: "child" },
      { speaker: "Music Teacher", text: "That's the E string, the thinnest one.", translation: "那是E弦，最细的那根。", gender: "male" }
    ]
  },
  {
    id: 37,
    scenario: "在美术展览",
    emoji: "🎨",
    conversations: [
      { speaker: "Artist", text: "Welcome to my art exhibition!", translation: "欢迎来到我的艺术展览！", gender: "female" },
      { speaker: "Visitor", text: "Your paintings are beautiful!", translation: "你的画真漂亮！", gender: "male" },
      { speaker: "Artist", text: "Thank you! This one is my favorite.", translation: "谢谢！这幅是我最喜欢的。", gender: "female" },
      { speaker: "Visitor", text: "What inspired you to paint it?", translation: "是什么启发你画这幅画的？", gender: "male" },
      { speaker: "Artist", text: "I painted it after visiting the beach.", translation: "是在参观海滩后画的。", gender: "female" }
    ]
  },
  {
    id: 38,
    scenario: "在体育比赛",
    emoji: "⚽",
    conversations: [
      { speaker: "Coach", text: "Are you ready for the match?", translation: "准备好比赛了吗？", gender: "male" },
      { speaker: "Player", text: "Yes! I'm excited!", translation: "是的！我很兴奋！", gender: "child" },
      { speaker: "Coach", text: "Remember our strategy.", translation: "记住我们的策略。", gender: "male" },
      { speaker: "Player", text: "We'll win this game!", translation: "我们会赢得这场比赛！", gender: "child" },
      { speaker: "Coach", text: "That's the spirit! Go team!", translation: "就是这种精神！加油！", gender: "male" }
    ]
  },
  {
    id: 39,
    scenario: "在野餐",
    emoji: "🧺",
    conversations: [
      { speaker: "Parent", text: "What a perfect day for a picnic!", translation: "多适合野餐的一天啊！", gender: "female" },
      { speaker: "Child", text: "Can we eat now?", translation: "我们现在可以吃了吗？", gender: "child" },
      { speaker: "Parent", text: "Yes, let's unpack the food.", translation: "是的，让我们把食物拿出来。", gender: "female" },
      { speaker: "Child", text: "I made the sandwiches!", translation: "我做了三明治！", gender: "child" },
      { speaker: "Parent", text: "They look delicious!", translation: "看起来很好吃！", gender: "female" }
    ]
  },
  {
    id: 40,
    scenario: "在露营",
    emoji: "⛺",
    conversations: [
      { speaker: "Parent", text: "Let's set up our tent.", translation: "我们来搭帐篷吧。", gender: "male" },
      { speaker: "Child", text: "Can I help?", translation: "我能帮忙吗？", gender: "child" },
      { speaker: "Parent", text: "Of course! Hold this pole.", translation: "当然！拿着这根杆子。", gender: "male" },
      { speaker: "Child", text: "Will we see stars tonight?", translation: "今晚我们能看见星星吗？", gender: "child" },
      { speaker: "Parent", text: "Yes, the sky is very clear!", translation: "是的，天空很晴朗！", gender: "male" }
    ]
  },
  {
    id: 41,
    scenario: "在机场",
    emoji: "✈️",
    conversations: [
      { speaker: "Check-in Staff", text: "Good morning! May I see your passport?", translation: "早上好！能看一下您的护照吗？", gender: "female" },
      { speaker: "Passenger", text: "Here it is. I'm going to New York.", translation: "给您。我要去纽约。", gender: "male" },
      { speaker: "Check-in Staff", text: "How many bags are you checking in?", translation: "您要托运几件行李？", gender: "female" },
      { speaker: "Passenger", text: "Just one suitcase, please.", translation: "就一个行李箱，谢谢。", gender: "male" },
      { speaker: "Check-in Staff", text: "Your gate is A12. Have a nice flight!", translation: "您的登机口是A12。祝您旅途愉快！", gender: "female" }
    ]
  },
  {
    id: 42,
    scenario: "在咖啡店",
    emoji: "☕",
    conversations: [
      { speaker: "Barista", text: "What would you like to drink?", translation: "您想喝点什么？", gender: "male" },
      { speaker: "Customer", text: "A cappuccino, please.", translation: "一杯卡布奇诺，谢谢。", gender: "female" },
      { speaker: "Barista", text: "Would you like it hot or iced?", translation: "要热的还是冰的？", gender: "male" },
      { speaker: "Customer", text: "Hot, please. And a chocolate muffin.", translation: "热的，谢谢。再来一个巧克力松饼。", gender: "female" },
      { speaker: "Barista", text: "Coming right up!", translation: "马上就好！", gender: "male" }
    ]
  },
  {
    id: 43,
    scenario: "在健身房",
    emoji: "💪",
    conversations: [
      { speaker: "Trainer", text: "How's your workout going?", translation: "训练进行得怎么样？", gender: "male" },
      { speaker: "Member", text: "I'm trying to get stronger.", translation: "我正在努力变得更强壮。", gender: "female" },
      { speaker: "Trainer", text: "Let me show you the correct form.", translation: "让我教你正确的姿势。", gender: "male" },
      { speaker: "Member", text: "Is this better?", translation: "这样更好吗？", gender: "female" },
      { speaker: "Trainer", text: "Yes, perfect! Keep it up!", translation: "是的，很好！继续保持！", gender: "male" }
    ]
  },
  {
    id: 44,
    scenario: "在宠物医院",
    emoji: "🐾",
    conversations: [
      { speaker: "Vet", text: "What seems to be the problem with your dog?", translation: "您的狗怎么了？", gender: "female" },
      { speaker: "Owner", text: "He's not eating well.", translation: "它最近食欲不好。", gender: "male" },
      { speaker: "Vet", text: "Let me check his temperature.", translation: "让我量一下它的体温。", gender: "female" },
      { speaker: "Owner", text: "Is he going to be okay?", translation: "它会没事吧？", gender: "male" },
      { speaker: "Vet", text: "Yes, it's just a small fever. I'll give you some medicine.", translation: "是的，只是有点发烧。我给您开些药。", gender: "female" }
    ]
  },
  {
    id: 45,
    scenario: "在花店",
    emoji: "💐",
    conversations: [
      { speaker: "Florist", text: "Can I help you choose some flowers?", translation: "需要帮您挑选花吗？", gender: "female" },
      { speaker: "Customer", text: "I need flowers for my mother's birthday.", translation: "我需要给我妈妈买生日花。", gender: "male" },
      { speaker: "Florist", text: "How about these roses? They're fresh.", translation: "这些玫瑰怎么样？很新鲜。", gender: "female" },
      { speaker: "Customer", text: "They're beautiful! How much are they?", translation: "真漂亮！多少钱？", gender: "male" },
      { speaker: "Florist", text: "£20 for a dozen. Would you like them wrapped?", translation: "一打20英镑。需要包装吗？", gender: "female" }
    ]
  },
  {
    id: 46,
    scenario: "在理发店",
    emoji: "💇",
    conversations: [
      { speaker: "Hair stylist", text: "How would you like your hair cut?", translation: "您想要什么样的发型？", gender: "female" },
      { speaker: "Customer", text: "Just a trim, please.", translation: "就修剪一下，谢谢。", gender: "male" },
      { speaker: "Hair stylist", text: "Would you like it washed first?", translation: "要先洗一下吗？", gender: "female" },
      { speaker: "Customer", text: "Yes, please. It's been a long day.", translation: "是的，谢谢。今天很累。", gender: "male" },
      { speaker: "Hair stylist", text: "I'll make you feel refreshed!", translation: "我会让您感觉焕然一新！", gender: "female" }
    ]
  },
  {
    id: 47,
    scenario: "在书店",
    emoji: "📖",
    conversations: [
      { speaker: "Bookseller", text: "Are you looking for anything specific?", translation: "您在找什么特定的书吗？", gender: "male" },
      { speaker: "Customer", text: "I need a book for my daughter.", translation: "我需要给我女儿买本书。", gender: "female" },
      { speaker: "Bookseller", text: "How old is she?", translation: "她多大了？", gender: "male" },
      { speaker: "Customer", text: "She's eight. She loves stories about magic.", translation: "她八岁。她喜欢魔法故事。", gender: "female" },
      { speaker: "Bookseller", text: "I have just the book for her!", translation: "我正好有适合她的书！", gender: "male" }
    ]
  },
  {
    id: 48,
    scenario: "在牙医诊所",
    emoji: "🦷",
    conversations: [
      { speaker: "Dentist", text: "How often do you brush your teeth?", translation: "你多久刷一次牙？", gender: "female" },
      { speaker: "Patient", text: "Twice a day, morning and night.", translation: "一天两次，早晚各一次。", gender: "child" },
      { speaker: "Dentist", text: "That's good! Let me check your teeth.", translation: "很好！让我检查一下你的牙齿。", gender: "female" },
      { speaker: "Patient", text: "Do I have any cavities?", translation: "我有蛀牙吗？", gender: "child" },
      { speaker: "Dentist", text: "No cavities! Keep up the good work!", translation: "没有蛀牙！继续保持！", gender: "female" }
    ]
  },
  {
    id: 49,
    scenario: "在照相馆",
    emoji: "📸",
    conversations: [
      { speaker: "Photographer", text: "Are you ready for your school photo?", translation: "准备好拍学校照片了吗？", gender: "male" },
      { speaker: "Student", text: "Yes! Should I smile?", translation: "是的！我要微笑吗？", gender: "child" },
      { speaker: "Photographer", text: "Yes, a big smile! Look at the camera.", translation: "是的，要大笑！看着相机。", gender: "male" },
      { speaker: "Student", text: "Like this?", translation: "像这样吗？", gender: "child" },
      { speaker: "Photographer", text: "Perfect! Say cheese!", translation: "完美！说茄子！", gender: "male" }
    ]
  },
  {
    id: 50,
    scenario: "在冰淇淋店",
    emoji: "🍦",
    conversations: [
      { speaker: "Ice cream seller", text: "What flavor would you like?", translation: "您想要什么口味？", gender: "female" },
      { speaker: "Child", text: "Chocolate, please!", translation: "巧克力，谢谢！", gender: "child" },
      { speaker: "Ice cream seller", text: "Would you like sprinkles on top?", translation: "要加彩色糖粒吗？", gender: "female" },
      { speaker: "Child", text: "Yes! And some whipped cream too!", translation: "要！还要加一些鲜奶油！", gender: "child" },
      { speaker: "Ice cream seller", text: "Here's your special ice cream!", translation: "这是您的特制冰淇淋！", gender: "female" }
    ]
  }
]; 