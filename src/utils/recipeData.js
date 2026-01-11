// 模拟食谱数据（可根据需要扩展）
export const recipeList = [
  {
    id: 1,
    title: '番茄炒蛋',
    cover: new URL('../assets/images/番茄炒蛋.png', import.meta.url).href,  // 使用项目中已有的本地图片
    ingredients: ['番茄', '鸡蛋', '盐', '糖', '食用油'],
    steps: [
      '番茄洗净切块，鸡蛋打入碗中加少许盐打散',
      '锅中倒油烧热，倒入蛋液炒至凝固盛出备用',
      '锅中留少许底油，放入番茄块翻炒至出汁',
      '加入适量盐和糖调味，倒入炒好的鸡蛋翻炒均匀即可'
    ],
    time: '15分钟',
    difficulty: '简单',
    category: '家常菜'
  },
  {
    id: 2,
    title: '宫保鸡丁',
    cover: new URL('../assets/images/宫保鸡丁.png', import.meta.url).href,  // 使用项目中已有的本地图片
    ingredients: ['鸡胸肉', '花生米', '干辣椒', '花椒', '酱油', '醋', '糖', '淀粉'],
    steps: [
      '鸡胸肉切丁，用盐、淀粉、料酒腌制15分钟',
      '干辣椒剪段，葱姜蒜切末',
      '调碗汁：酱油2勺、醋1勺、糖1勺、淀粉1勺、清水适量',
      '锅中倒油，放入花椒、干辣椒炒香',
      '加入腌好的鸡丁翻炒至变色',
      '倒入碗汁翻炒均匀，最后加入花生米炒匀即可'
    ],
    time: '25分钟',
    difficulty: '中等',
    category: '川菜'
  },
  {
    id: 3,
    title: '糖醋排骨',
    cover: new URL('../assets/images/糖醋排骨.png', import.meta.url).href,  // 使用项目中已有的本地图片
    ingredients: ['猪排骨', '生抽', '老抽', '料酒', '糖', '醋', '淀粉', '葱', '姜', '蒜'],
    steps: [
      '排骨切段洗净，用料酒、生抽、姜腌制30分钟',
      '锅中倒油烧至六成热，放入排骨炸至金黄捞出',
      '锅中留少许底油，放入葱姜蒜爆香',
      '加入适量清水、老抽、糖、醋烧开',
      '放入炸好的排骨，小火炖20分钟',
      '大火收汁，最后勾芡即可'
    ],
    time: '50分钟',
    difficulty: '中等',
    category: '家常菜'
  },
  // 西餐食谱
  {
    id: 4,
    title: '意大利肉酱面',
    cover: new URL('../assets/images/意大利肉酱面.png', import.meta.url).href,  // 使用项目中已有的本地图片
    ingredients: ['意大利面', '牛肉末', '洋葱', '番茄', '番茄酱', '蒜末', '盐', '黑胡椒', '橄榄油', '罗勒叶'],
    steps: [
      '锅中加水烧开，加盐，放入意大利面煮8-10分钟至熟',
      '锅中倒橄榄油，放入洋葱和蒜末炒香',
      '加入牛肉末翻炒至变色',
      '加入番茄块和番茄酱，小火炖煮15分钟',
      '加入盐和黑胡椒调味，撒入罗勒叶',
      '将煮好的意大利面倒入肉酱中搅拌均匀即可'
    ],
    time: '30分钟',
    difficulty: '中等',
    category: '西餐'
  },
  {
    id: 5,
    title: '煎牛排',
    cover: new URL('../assets/images/煎牛排.png', import.meta.url).href,  // 使用项目中已有的本地图片
    ingredients: ['牛排', '盐', '黑胡椒', '橄榄油', '黄油', '迷迭香', '大蒜'],
    steps: [
      '牛排用盐和黑胡椒腌制15分钟',
      '锅中倒橄榄油烧热，放入牛排煎2-3分钟至一面金黄',
      '翻面，加入黄油、迷迭香和大蒜',
      '煎至喜欢的熟度（3分熟约5分钟，5分熟约7分钟）',
      '取出牛排静置5分钟，切块即可'
    ],
    time: '20分钟',
    difficulty: '中等',
    category: '西餐'
  },
  {
    id: 6,
    title: '凯撒沙拉',
    cover: new URL('../assets/images/凯撒沙拉.png', import.meta.url).href,  // 使用项目中已有的本地图片
    ingredients: ['罗马生菜', '烤面包丁', '帕玛森奶酪', '凯撒沙拉酱', '橄榄油', '盐', '黑胡椒'],
    steps: [
      '罗马生菜洗净撕成小块',
      '烤面包丁用橄榄油、盐和黑胡椒炒香',
      '将生菜放入碗中，加入凯撒沙拉酱拌匀',
      '撒上烤面包丁和帕玛森奶酪碎即可'
    ],
    time: '15分钟',
    difficulty: '简单',
    category: '西餐'
  },
  // 凉菜食谱
  {
    id: 7,
    title: '拍黄瓜',
    cover: new URL('../assets/images/拍黄瓜.png', import.meta.url).href,  // 使用项目中已有的本地图片
    ingredients: ['黄瓜', '蒜末', '生抽', '醋', '糖', '盐', '香油', '辣椒油'],
    steps: [
      '黄瓜洗净拍碎，切成段',
      '加入蒜末、生抽、醋、糖、盐、香油和辣椒油',
      '搅拌均匀，腌制10分钟即可'
    ],
    time: '15分钟',
    difficulty: '简单',
    category: '凉菜'
  },
  {
    id: 8,
    title: '凉拌西红柿',
    cover: new URL('../assets/images/凉拌西红柿.png', import.meta.url).href,  // 使用项目中已有的本地图片
    ingredients: ['西红柿', '白糖'],
    steps: [
      '西红柿洗净切块',
      '撒上白糖，腌制15分钟即可'
    ],
    time: '15分钟',
    difficulty: '简单',
    category: '凉菜'
  },
  {
    id: 9,
    title: '凉拌海带丝',
    cover: new URL('../assets/images/凉拌海带丝.png', import.meta.url).href,  // 使用项目中已有的本地图片
    ingredients: ['海带丝', '蒜末', '生抽', '醋', '糖', '盐', '香油', '辣椒油', '芝麻'],
    steps: [
      '海带丝泡发洗净，焯水3分钟捞出沥干',
      '加入蒜末、生抽、醋、糖、盐、香油和辣椒油',
      '搅拌均匀，撒上芝麻即可'
    ],
    time: '20分钟',
    difficulty: '简单',
    category: '凉菜'
  },
  {
    id: 10,
    title: '凉拌木耳',
    cover: new URL('../assets/images/凉拌木耳.png', import.meta.url).href,  // 使用项目中已有的本地图片
    ingredients: ['干木耳', '蒜末', '生抽', '醋', '糖', '盐', '香油', '辣椒油'],
    steps: [
      '干木耳泡发洗净，焯水2分钟捞出沥干',
      '加入蒜末、生抽、醋、糖、盐、香油和辣椒油',
      '搅拌均匀即可'
    ],
    time: '25分钟',
    difficulty: '简单',
    category: '凉菜'
  }
]

// 食谱分类列表
export const categories = [
  { id: 'all', name: '全部' },
  { id: '家常菜', name: '家常菜' },
  { id: '川菜', name: '川菜' },
  { id: '西餐', name: '西餐' },
  { id: '凉菜', name: '凉菜' }
]