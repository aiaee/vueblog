// nav_en
module.exports = [
  { text: 'Home', link: '/' },
  {
    text: 'Intro',
    link: '/intro/', //catalog链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到catalog
    items: [
      {
        text: 'Knowledge reserve',
        items: [
          {text: 'Linear Algebra', link: '/knowledge/pages/31143cc480faf9a11/'},
          {text: 'Probability and statistics', link: '/knowledge/pages/325d463fbdb172d43b/'},
          {text: 'Data analysis', link: '/knowledge/pages/325d463fbdb172d43b/'},
          {text: 'Statistical Learning Algorithms', link: '/knowledge/pages/335d463fbdb172d43b/'},
          {text: 'Machine Learning Algorithms', link: '/knowledge/pages/345d463fbdb172d43b/'},
          {text: 'Deep Learning Algorithms', link: '/knowledge/pages/355d463fbdb172d43b/'},
        ],
      },
    ],
  },
  {
    text: 'Frameworks',
    link: '/framework',
    items: [
      {text: 'Pytorch', link: '/framework/note/javascript/'},
      {text: 'Mxnet', link: '/framework/note/es6/'},
      {text: 'Tensorflow', link: '/framework/note/vue/'},
      {text: 'Darknet', link: '/framework/note/react/'},
    ],
  },
  {
    text: 'Models',
    link: '/model/',
    items: [
      { text: 'Identification, classification', link: '/model/pages/9a7ee40fc232253e/' },
      { text: 'Behavioral Judgment', link: '/model/pages/4c778760be26d8b3/' },
      { text: '3D Reconstruction', link: '/model/pages/117708e0af7f0bd9/' },
      { text: 'Other models', link: '/model/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: 'Innovation',
    link: '/innovation/',
    items: [
      { text: 'Scientific articles', link: '/innovation/pages/8309a5b876fc95e3/' },
      { text: 'Advanced innovation', link: '/innovation/pages/0a83b083bdf257cb/' },
    ],
  },
  {
    text: 'More',
    link: '/more/',
    items: [
      { text: 'Demo', link: '/more/demo/' },
      { text: 'Training', link: '/more/pages/f2a556/' },
      { text: 'Programming', link: '/more/pages/aea6571b7a8bae86/' },
      { text: 'Practice', link: '/more/pages/2d615df9a36a98ed/' },
      { text: 'Skills and experience', link: '/more/pages/baaa02/' },
      { text: 'Useful links', link: '/more/friends/' },
    ],
  },
  { text: 'About', link: '/about/' },
]
