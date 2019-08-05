module.exports = {
  base: '/lengzi/',
  title: 'lengzi',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/introduce/'
      },
      {
        text: 'Github',
        link: 'https://google.com'
      },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/tabs',
          '/components/toast',
          '/components/popover',
          '/components/collapse'
        ]
      },

    ]
  }
}