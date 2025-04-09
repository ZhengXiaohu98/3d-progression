export interface ReadingItem {
  id: number;
  title: string;
  type: 'story' | 'diary' | 'dialogue';
  level: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  translation: string;
  vocabulary: string[];
  questions: {
    question: string;
    options: string[];
    answer: number;
  }[];
  writingPrompt?: string;
}

export interface WritingItem {
  id: number;
  title: string;
  type: 'sentence' | 'paragraph' | 'diary';
  level: 'beginner' | 'intermediate' | 'advanced';
  prompt: string;
  promptTranslation: string;
  examples: string[];
  examplesTranslation: string[];
  keywords: string[];
  grammarPoints: string[];
}

export const readingMaterials: ReadingItem[] = [
  // 初级阅读材料 - 童话故事
  {
    id: 1,
    title: "The Little Red Hen",
    type: "story",
    level: "beginner",
    content: `Once upon a time, there was a little red hen. She lived on a farm. She was friends with a lazy dog, a sleepy cat, and a noisy duck.

One day, the little red hen found some wheat seeds. She had an idea. "Who will help me plant these seeds?" she asked.

"Not I," said the lazy dog.
"Not I," said the sleepy cat.
"Not I," said the noisy duck.

"Then I will plant them myself," said the little red hen. And she did.`,
    translation: `从前，有一只小红母鸡。她住在一个农场里。她有一只懒惰的狗、一只爱睡的猫和一只吵闹的鸭子做朋友。

一天，小红母鸡发现了一些麦种。她有了一个主意。"谁愿意帮我种这些种子？"她问道。

"我不愿意，"懒惰的狗说。
"我不愿意，"爱睡的猫说。
"我不愿意，"吵闹的鸭子说。

"那我自己来种，"小红母鸡说。于是她就自己种了。`,
    vocabulary: ["hen", "farm", "lazy", "sleepy", "noisy", "wheat", "seeds", "plant"],
    questions: [
      {
        question: "Where did the little red hen live?",
        options: ["In a house", "On a farm", "In a tree", "In a garden"],
        answer: 1
      },
      {
        question: "What did the little red hen find?",
        options: ["Corn", "Wheat seeds", "Rice", "Vegetables"],
        answer: 1
      }
    ],
    writingPrompt: "Write about what you would do if you were the little red hen."
  },
  // 初级阅读材料 - 日记
  {
    id: 2,
    title: "My First Day at School",
    type: "diary",
    level: "beginner",
    content: `Dear Diary,

Today was my first day at school. I was very excited! I met my new teacher, Miss Brown. She is very kind.

I made two new friends. Their names are Tom and Lucy. We played together at lunch time. We ate sandwiches and apples.

In class, we learned numbers from 1 to 10. We also sang a song about colors. I like school very much!

Love,
Sarah`,
    translation: `亲爱的日记：

今天是我在学校的第一天。我很兴奋！我见到了新老师，布朗老师。她非常和蔼。

我交了两个新朋友。他们叫汤姆和露西。我们在午餐时间一起玩。我们吃了三明治和苹果。

在课堂上，我们学习了1到10的数字。我们还唱了一首关于颜色的歌。我很喜欢学校！

爱你的，
莎拉`,
    vocabulary: ["excited", "teacher", "kind", "friends", "lunch", "learn", "numbers", "colors"],
    questions: [
      {
        question: "Who is Sarah's teacher?",
        options: ["Miss Brown", "Mr. Smith", "Mrs. White", "Dr. Green"],
        answer: 0
      },
      {
        question: "What did Sarah eat for lunch?",
        options: ["Pizza", "Sandwiches and apples", "Rice and fish", "Burgers"],
        answer: 1
      }
    ],
    writingPrompt: "Write about your first day at school."
  },
  // 初级阅读材料 - 对话
  {
    id: 3,
    title: "At the Park",
    type: "dialogue",
    level: "beginner",
    content: `Tom: Hi, Lucy! Do you want to play on the swings?
Lucy: Yes, I love swings! Let's go together.
Tom: Look at that big slide. It's fun too!
Lucy: I can slide down very fast. Watch me!
Tom: Wow! You're good at sliding.
Lucy: Let's play hide and seek next.
Tom: That's a great idea! You count first.`,
    translation: `汤姆：嗨，露西！你想玩秋千吗？
露西：是的，我喜欢秋千！我们一起玩吧。
汤姆：看那个大滑梯。也很好玩！
露西：我可以滑得很快。看着我！
汤姆：哇！你滑得真好。
露西：接下来我们玩捉迷藏吧。
汤姆：好主意！你先数数。`,
    vocabulary: ["swings", "slide", "fast", "hide", "seek", "count", "play", "together"],
    questions: [
      {
        question: "What do Tom and Lucy play first?",
        options: ["Hide and seek", "Swings", "Slide", "Ball"],
        answer: 1
      },
      {
        question: "What game do they want to play next?",
        options: ["Swings", "Slide", "Hide and seek", "Ball"],
        answer: 2
      }
    ],
    writingPrompt: "Write a dialogue about playing with your friend."
  },
  // 中级阅读材料 - 童话故事
  {
    id: 4,
    title: "The Three Little Pigs",
    type: "story",
    level: "intermediate",
    content: `Once there were three little pigs. They left their mother to build their own houses.

The first little pig built his house with straw. It was quick and easy. But the big bad wolf came and blew it down.

The second little pig built his house with sticks. It was also quick and easy. The wolf came and blew it down too.

The third little pig built his house with bricks. It took longer, but it was strong. When the wolf came, he couldn't blow it down.

The three little pigs learned that hard work pays off.`,
    translation: `从前有三只小猪。他们离开妈妈去建造自己的房子。

第一只小猪用稻草盖房子。这很快也很容易。但是大灰狼来了，把房子吹倒了。

第二只小猪用树枝盖房子。这也很快很容易。狼来了，也把它吹倒了。

第三只小猪用砖头盖房子。这花了更长时间，但很坚固。当狼来的时候，他吹不倒它。

三只小猪明白了努力工作是值得的。`,
    vocabulary: ["straw", "sticks", "bricks", "quick", "easy", "strong", "wolf", "blow"],
    questions: [
      {
        question: "What did the first pig use to build his house?",
        options: ["Sticks", "Bricks", "Straw", "Wood"],
        answer: 2
      },
      {
        question: "Why couldn't the wolf blow down the third house?",
        options: ["It was made of straw", "It was made of sticks", "It was made of bricks", "It was too small"],
        answer: 2
      }
    ],
    writingPrompt: "Write about what you learned from the three little pigs."
  },
  {
    id: 5,
    title: "My Favorite Animal",
    type: "story",
    level: "beginner",
    content: `I have a pet cat named Whiskers. She is very cute and playful. Every morning, she wakes me up by purring softly. She likes to chase balls of yarn and play with toy mice.

Whiskers has soft orange fur and bright green eyes. She loves to sit in sunny spots by the window. When I come home from school, she always runs to greet me.

I love my cat very much. She is my best friend.`,
    translation: `我有一只叫胡须的宠物猫。她非常可爱和爱玩。每天早上，她都会轻轻地发出呼噜声把我叫醒。她喜欢追逐毛线球和玩玩具老鼠。

胡须有着柔软的橙色毛发和明亮的绿色眼睛。她喜欢坐在窗边阳光充足的地方。当我放学回家时，她总是跑来迎接我。

我非常爱我的猫。她是我最好的朋友。`,
    vocabulary: ["pet", "cat", "purr", "chase", "yarn", "toy", "mouse", "fur", "greet"],
    questions: [
      {
        question: "What is the name of the pet cat?",
        options: ["Whiskers", "Fluffy", "Mittens", "Snowball"],
        answer: 0
      },
      {
        question: "What color is the cat's fur?",
        options: ["White", "Black", "Orange", "Brown"],
        answer: 2
      }
    ],
    writingPrompt: "Write about your favorite pet or animal."
  },
  {
    id: 6,
    title: "A Day at the Beach",
    type: "diary",
    level: "intermediate",
    content: `Dear Diary,

Today was a perfect day at the beach! The sun was shining brightly, and the waves were gentle. My family and I built a huge sandcastle with towers and a moat. We collected beautiful seashells along the shore.

In the afternoon, we went swimming in the ocean. The water was refreshing, and we saw some colorful fish swimming near us. We also played beach volleyball with some other families.

As the sun set, we had a picnic dinner on the beach. We watched the beautiful orange sky and listened to the waves. It was a magical end to a perfect day.

Love,
Emma`,
    translation: `亲爱的日记：

今天在海滩度过了完美的一天！阳光明媚，海浪轻柔。我和家人一起建造了一个巨大的沙堡，有塔楼和护城河。我们沿着海岸收集了美丽的贝壳。

下午，我们去海里游泳。海水很清爽，我们看到一些彩色的小鱼在我们附近游动。我们还和其他家庭一起打沙滩排球。

日落时分，我们在海滩上野餐。我们欣赏着美丽的橙色天空，聆听着海浪声。这是完美一天的魔幻结束。

爱你的，
艾玛`,
    vocabulary: ["beach", "sandcastle", "seashell", "swimming", "ocean", "volleyball", "sunset", "picnic"],
    questions: [
      {
        question: "What did they build on the beach?",
        options: ["A sandcastle", "A boat", "A house", "A tent"],
        answer: 0
      },
      {
        question: "What did they see while swimming?",
        options: ["Dolphins", "Colorful fish", "Sea turtles", "Crabs"],
        answer: 1
      }
    ],
    writingPrompt: "Write about your favorite day at the beach or a special outdoor activity."
  },
  {
    id: 7,
    title: "The Magic Garden",
    type: "story",
    level: "beginner",
    content: `In a small town, there was a magic garden. Every morning, colorful flowers would bloom and sing sweet songs. The garden was cared for by a kind old woman named Mrs. Green.

One day, a little girl named Lily found the garden. She was amazed by the singing flowers. Mrs. Green taught Lily how to take care of the garden. She learned to water the flowers and talk to them gently.

Soon, the garden became even more beautiful. The flowers sang louder and their colors became brighter. Lily and Mrs. Green became best friends, sharing the magic of the garden together.`,
    translation: `在一个小镇上，有一个魔法花园。每天早上，五颜六色的花朵都会绽放并唱起甜美的歌。这个花园由一位善良的老妇人格林太太照料。

一天，一个叫莉莉的小女孩发现了这个花园。她被会唱歌的花朵惊呆了。格林太太教莉莉如何照料花园。她学会了给花朵浇水，温柔地和它们说话。

很快，花园变得更加美丽了。花朵唱得更响亮，颜色更加鲜艳。莉莉和格林太太成为了最好的朋友，一起分享花园的魔法。`,
    vocabulary: ["garden", "bloom", "sing", "sweet", "kind", "amazed", "gentle", "beautiful"],
    questions: [
      {
        question: "Who takes care of the magic garden?",
        options: ["Lily", "Mrs. Green", "The flowers", "The town people"],
        answer: 1
      },
      {
        question: "What makes the garden special?",
        options: ["Its size", "The singing flowers", "The old woman", "The town location"],
        answer: 1
      }
    ],
    writingPrompt: "Write about a magical place you would like to visit."
  },
  {
    id: 8,
    title: "My Science Project",
    type: "diary",
    level: "intermediate",
    content: `Dear Diary,

Today was exciting! Our class started a science project about plants. We each got a small pot and some seeds. I chose to grow sunflowers.

First, we learned about what plants need to grow: sunlight, water, and good soil. Then we planted our seeds carefully. I put three seeds in my pot and covered them with soil.

Our teacher said we need to water the plants every day and make sure they get enough sunlight. I can't wait to see my sunflowers grow! I will measure them every week and write down how tall they get.

I hope my sunflowers will be the tallest in the class!`,
    translation: `亲爱的日记：

今天真令人兴奋！我们班开始了一个关于植物的科学项目。我们每个人都得到了一个小花盆和一些种子。我选择种向日葵。

首先，我们学习了植物生长需要什么：阳光、水和好的土壤。然后我们小心地种下种子。我在花盆里放了三个种子，并用土覆盖。

老师说我们需要每天给植物浇水，确保它们得到足够的阳光。我等不及要看我的向日葵生长了！我会每周测量它们的高度并记录下来。

我希望我的向日葵会是班里最高的！`,
    vocabulary: ["science", "project", "plant", "seed", "soil", "sunlight", "measure", "grow"],
    questions: [
      {
        question: "What kind of plant did the writer choose to grow?",
        options: ["Roses", "Sunflowers", "Tomatoes", "Beans"],
        answer: 1
      },
      {
        question: "How many seeds did the writer plant?",
        options: ["One", "Two", "Three", "Four"],
        answer: 2
      }
    ],
    writingPrompt: "Write about a science project you would like to do."
  },
  {
    id: 9,
    title: "My Pet Dog",
    type: "story",
    level: "beginner",
    content: `I have a pet dog named Max. He is a golden retriever with soft fur and a wagging tail. Max is very friendly and loves to play with me.

Every morning, Max wakes me up by licking my face. He likes to go for walks in the park and chase balls. When I come home from school, he runs to greet me at the door.

Max is not just a pet, he is my best friend. He makes me happy when I am sad and keeps me company when I am alone. I love my dog very much!`,
    translation: `我有一只叫马克斯的宠物狗。他是一只金毛寻回犬，有着柔软的毛发和摇摆的尾巴。马克斯非常友好，喜欢和我一起玩。

每天早上，马克斯都会舔我的脸把我叫醒。他喜欢在公园里散步和追球。当我放学回家时，他会在门口跑来迎接我。

马克斯不仅仅是一只宠物，他是我最好的朋友。当我难过时他会让我开心，当我独自一人时他会陪伴我。我非常爱我的狗！`,
    vocabulary: ["pet", "dog", "friendly", "play", "walk", "park", "chase", "friend", "happy"],
    questions: [
      {
        question: "What kind of dog is Max?",
        options: ["A golden retriever", "A poodle", "A bulldog", "A husky"],
        answer: 0
      },
      {
        question: "How does Max wake up the writer?",
        options: ["By barking", "By licking", "By jumping", "By wagging tail"],
        answer: 1
      }
    ],
    writingPrompt: "Write about your favorite pet or an animal you would like to have as a pet."
  },
  {
    id: 10,
    title: "A Trip to the Zoo",
    type: "diary",
    level: "intermediate",
    content: `Dear Diary,

Today was an exciting day! My class went on a field trip to the zoo. We saw many amazing animals. The lions were sleeping in the sun, and the monkeys were swinging from tree to tree.

The elephants were the biggest animals I have ever seen. They used their long trunks to pick up food. The giraffes had very long necks to reach the leaves on tall trees.

My favorite part was watching the penguins swim. They moved so fast in the water! We also learned about how to protect endangered animals. It was a fun and educational day.

Love,
Tom`,
    translation: `亲爱的日记：

今天真是令人兴奋的一天！我们班去动物园进行实地考察。我们看到了许多令人惊叹的动物。狮子在阳光下睡觉，猴子在树上荡来荡去。

大象是我见过的最大的动物。它们用长鼻子捡起食物。长颈鹿有很长的脖子，可以够到高树上的叶子。

我最喜欢的部分是看企鹅游泳。它们在水中游得真快！我们还学习了如何保护濒危动物。这是有趣又有教育意义的一天。

爱你的，
汤姆`,
    vocabulary: ["zoo", "animal", "lion", "monkey", "elephant", "giraffe", "penguin", "endangered", "protect"],
    questions: [
      {
        question: "What were the lions doing?",
        options: ["Running", "Sleeping", "Eating", "Playing"],
        answer: 1
      },
      {
        question: "What did they learn about at the zoo?",
        options: ["Animal names", "Animal food", "Protecting endangered animals", "Animal sounds"],
        answer: 2
      }
    ],
    writingPrompt: "Write about a field trip you have been on or would like to go on."
  }
];

export const writingMaterials: WritingItem[] = [
  // 初级写作 - 句子
  {
    id: 1,
    title: "There is/are Sentences",
    type: "sentence",
    level: "beginner",
    prompt: "Write sentences using 'There is' or 'There are' to describe your classroom.",
    promptTranslation: "用'There is'或'There are'写句子来描述你的教室。",
    examples: [
      "There is a big blackboard in my classroom.",
      "There are many students in my class.",
      "There is a teacher's desk at the front."
    ],
    examplesTranslation: [
      "我的教室里有一块大黑板。",
      "我的班级里有许多学生。",
      "教室前面有一张讲台。"
    ],
    keywords: ["classroom", "blackboard", "desk", "students", "teacher", "window", "door", "book"],
    grammarPoints: ["There is/are", "Singular/Plural nouns", "Articles (a/an)"]
  },
  // 初级写作 - 段落
  {
    id: 2,
    title: "I like/don't like Paragraph",
    type: "paragraph",
    level: "beginner",
    prompt: "Write a paragraph about things you like and don't like to do.",
    promptTranslation: "写一段关于你喜欢和不喜欢做的事情。",
    examples: [
      "I like to play soccer with my friends. I also like to read books and watch cartoons. I don't like to do homework, but I know it's important. I don't like to eat vegetables, but my mom says they are good for me."
    ],
    examplesTranslation: [
      "我喜欢和朋友们踢足球。我还喜欢读书和看卡通片。我不喜欢做作业，但我知道这很重要。我不喜欢吃蔬菜，但妈妈说蔬菜对我有好处。"
    ],
    keywords: ["like", "don't like", "play", "read", "watch", "do", "eat", "important"],
    grammarPoints: ["Present simple", "Like/Don't like", "Connecting words (and, but)"]
  },
  // 初级写作 - 日记
  {
    id: 3,
    title: "My Day Diary",
    type: "diary",
    level: "beginner",
    prompt: "Write a diary entry about your typical day.",
    promptTranslation: "写一篇关于你典型的一天的日记。",
    examples: [
      `Dear Diary,

Today I woke up at 7 o'clock. I had breakfast with my family. Then I went to school by bus. At school, I learned math and English. I played with my friends at lunch time. After school, I did my homework. In the evening, I watched TV with my family. I went to bed at 9 o'clock.

It was a good day!`
    ],
    examplesTranslation: [
      `亲爱的日记：

今天我7点起床。我和家人一起吃早餐。然后我坐公交车去学校。在学校，我学习了数学和英语。我在午餐时间和朋友们玩耍。放学后，我做作业。晚上，我和家人一起看电视。我9点睡觉。

这是美好的一天！`
    ],
    keywords: ["wake up", "breakfast", "school", "learn", "play", "homework", "watch TV", "bed"],
    grammarPoints: ["Past simple", "Time expressions", "Daily routines"]
  },
  // 中级写作 - 句子
  {
    id: 4,
    title: "Can/Can't Sentences",
    type: "sentence",
    level: "intermediate",
    prompt: "Write sentences about what you and your friends can and can't do.",
    promptTranslation: "写句子描述你和你的朋友们能做什么和不能做什么。",
    examples: [
      "I can swim very well.",
      "My friend Tom can play the piano.",
      "I can't speak French.",
      "My sister can't ride a bike yet."
    ],
    examplesTranslation: [
      "我游泳游得很好。",
      "我的朋友汤姆会弹钢琴。",
      "我不会说法语。",
      "我妹妹还不会骑自行车。"
    ],
    keywords: ["can", "can't", "swim", "play", "speak", "ride", "dance", "sing"],
    grammarPoints: ["Can/Can't", "Adverbs of ability", "Present simple"]
  },
  {
    id: 5,
    title: "My Family",
    type: "paragraph",
    level: "beginner",
    prompt: "Write a paragraph about your family members and what they like to do.",
    promptTranslation: "写一段关于你的家庭成员和他们喜欢做什么。",
    examples: [
      "I have a big family. My father likes to read books and play chess. My mother loves cooking and gardening. My older sister enjoys playing the piano, and my little brother likes to play with his toy cars. We all love to watch movies together on weekends."
    ],
    examplesTranslation: [
      "我有一个大家庭。我爸爸喜欢读书和下棋。我妈妈喜欢烹饪和园艺。我姐姐喜欢弹钢琴，我弟弟喜欢玩他的玩具车。我们周末都喜欢一起看电影。"
    ],
    keywords: ["family", "father", "mother", "sister", "brother", "like", "love", "enjoy", "play", "watch"],
    grammarPoints: ["Present simple", "Family vocabulary", "Like/Love/Enjoy + gerund"]
  },
  {
    id: 6,
    title: "My School Day",
    type: "diary",
    level: "intermediate",
    prompt: "Write a diary entry about your typical school day, including what you learn and do.",
    promptTranslation: "写一篇关于你典型的学校生活的日记，包括你学习的内容和做的事情。",
    examples: [
      `Dear Diary,

Today was a busy day at school. In the morning, we had math class where we learned about fractions. I found it challenging but interesting. During lunch break, I played basketball with my friends in the playground.

In the afternoon, we had science class. We did an experiment with plants and learned about photosynthesis. It was fun to watch the plants grow. After school, I went to the library to do my homework.

I feel tired but happy because I learned many new things today.`
    ],
    examplesTranslation: [
      `亲爱的日记：

今天在学校度过了忙碌的一天。早上，我们上数学课学习了分数。我觉得有点难但很有趣。午休时间，我和朋友们在操场上打篮球。

下午，我们上科学课。我们做了一个关于植物的实验，学习了光合作用。看着植物生长很有趣。放学后，我去图书馆做作业。

虽然很累，但我很开心，因为我今天学到了很多新东西。`
    ],
    keywords: ["school", "class", "learn", "play", "experiment", "homework", "library", "busy", "happy"],
    grammarPoints: ["Past simple", "Time expressions", "School subjects", "Daily routines"]
  },
  {
    id: 7,
    title: "My Favorite Season",
    type: "paragraph",
    level: "beginner",
    prompt: "Write a paragraph about your favorite season and what you like to do during that time.",
    promptTranslation: "写一段关于你最喜欢的季节以及在那时你喜欢做什么。",
    examples: [
      "My favorite season is spring. The weather is warm and nice. Flowers bloom everywhere. I like to fly kites in the park with my friends. We also like to go on picnics and watch butterflies. Spring makes me feel happy and energetic."
    ],
    examplesTranslation: [
      "我最喜欢的季节是春天。天气温暖宜人。到处都有花朵绽放。我喜欢和朋友们在公园里放风筝。我们还喜欢野餐和观察蝴蝶。春天让我感到快乐和充满活力。"
    ],
    keywords: ["season", "weather", "flowers", "friends", "park", "picnic", "happy", "energetic"],
    grammarPoints: ["Present simple", "Adjectives", "Time expressions"]
  },
  {
    id: 8,
    title: "A Special Day",
    type: "diary",
    level: "intermediate",
    prompt: "Write a diary entry about a special day you had recently.",
    promptTranslation: "写一篇关于你最近度过的特殊一天的日记。",
    examples: [
      `Dear Diary,

Today was a very special day! It was my birthday, and my family had a surprise party for me. When I came home from school, everyone was hiding in the living room. When I opened the door, they all jumped out and shouted "Happy Birthday!"

We had a big cake with candles, and I made a wish before blowing them out. My friends gave me wonderful presents. We played games and had lots of fun together. It was the best birthday ever!

I feel so lucky to have such a wonderful family and friends.`
    ],
    examplesTranslation: [
      `亲爱的日记：

今天是非常特别的一天！今天是我的生日，我的家人为我准备了一个惊喜派对。当我放学回家时，大家都藏在客厅里。当我打开门时，他们都跳出来喊道"生日快乐！"

我们有一个带蜡烛的大蛋糕，我在吹灭蜡烛之前许了一个愿望。我的朋友们给了我很好的礼物。我们一起玩游戏，玩得很开心。这是最好的生日！

我觉得很幸运能有这么好的家人和朋友。`
    ],
    keywords: ["special", "birthday", "surprise", "party", "cake", "wish", "presents", "lucky"],
    grammarPoints: ["Past simple", "Time expressions", "Emotions and feelings"]
  },
  {
    id: 9,
    title: "My Favorite Food",
    type: "paragraph",
    level: "beginner",
    prompt: "Write a paragraph about your favorite food and why you like it.",
    promptTranslation: "写一段关于你最喜欢的食物以及为什么喜欢它。",
    examples: [
      "My favorite food is pizza. I like it because it has many delicious toppings like cheese, tomatoes, and mushrooms. The crust is crispy and the cheese is gooey. I enjoy eating pizza with my family on movie nights. It makes me feel happy and satisfied."
    ],
    examplesTranslation: [
      "我最喜欢的食物是披萨。我喜欢它是因为它有很多美味的配料，比如奶酪、番茄和蘑菇。外皮酥脆，奶酪拉丝。我喜欢在电影之夜和家人一起吃披萨。它让我感到快乐和满足。"
    ],
    keywords: ["food", "pizza", "cheese", "toppings", "crispy", "family", "movie", "happy"],
    grammarPoints: ["Present simple", "Food vocabulary", "Adjectives", "Because"]
  },
  {
    id: 10,
    title: "A Family Trip",
    type: "diary",
    level: "intermediate",
    prompt: "Write a diary entry about a family trip you went on or would like to go on.",
    promptTranslation: "写一篇关于你参加过的或想要参加的家庭旅行的日记。",
    examples: [
      `Dear Diary,

Last summer, my family went on a trip to the beach. We stayed in a small hotel near the ocean. Every morning, we watched the sunrise over the water. During the day, we built sandcastles, swam in the sea, and collected seashells.

In the evening, we had dinner at different restaurants and watched the sunset. One day, we went on a boat trip and saw dolphins jumping in the waves. It was amazing!

I love spending time with my family, and this trip was one of the best memories I have.`
    ],
    examplesTranslation: [
      `亲爱的日记：

去年夏天，我们一家人去海滩旅行。我们住在海边的一家小旅馆里。每天早上，我们都能看到海上的日出。白天，我们堆沙堡、在海里游泳、收集贝壳。

晚上，我们在不同的餐厅吃晚餐，欣赏日落。有一天，我们乘船出海，看到海豚在波浪中跳跃。真是太神奇了！

我喜欢和家人一起度过时光，这次旅行是我最美好的回忆之一。`
    ],
    keywords: ["trip", "beach", "family", "sunrise", "sunset", "swim", "boat", "dolphin", "memory"],
    grammarPoints: ["Past simple", "Time expressions", "Family activities", "Travel vocabulary"]
  }
]; 