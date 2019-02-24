module.exports = {
  title: '知识中心',
  description: '前端知识学习、分享',
  head: [
    ['link', { rel: 'shortcut icon', href: '/image/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
        { text: '指南', link: '/guide/' },
        { text: 'Github', link: 'https://github.com/stormzhangbx/vuePress-template' },
    ],
    sidebar: {
      // sidebar: [
      //   '/guide/',
      //   '/guide/vue',
      //   '/guide/eslint',
      // ],
      '/guide/': [
        ['', 'vue风格指南'],
        ['es6', 'es6特性'],
        ['eslint', 'eslint 规范'],
        ['git', '常用 git 命令'],
        ['vue-devtools', 'vue-devtools'],
        ['web 通用规范', 'web 通用规范'],
        ['环境一致性规范', '环境一致性规范(web前端)'],
      ]
    }
  },
  lastUpdated: '上次更新',
  serviceWorker: {
    updatePopup: true
  },
  repo: 'https://github.com/stormzhangbx/stormzhangbx.github.io',
  repoLabel: '查看源码',
  docsRepo: 'https://github.com/stormzhangbx/vuePress-templage',
  editLinks: true,
  editLinkText: '帮助我们改善此页面！'
}