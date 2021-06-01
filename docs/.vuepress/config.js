const getSidebar = require('./utils/getSidebar');
const path = require('path');
module.exports = {
  title: 'AppWorks',
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require('markdown-it-multimd-table'));
    },
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '文档', link: '/pack/about' },
      {
        text: '物料',
        ariaLabel: 'Menu',
        items: [
          { text: '自定义物料', link: '/materials/about' },
          { text: 'Fusion 物料', link: '/materialCenter/fusion' },
          { text: 'Ant Design 物料', link: '/materialCenter/antd' },
          { text: 'Rax 物料', link: '/materialCenter/rax' },
          { text: 'Vue 物料', link: '/materialCenter/vue' },
        ],
      },
      {
        text: '研发中心',
        link: 'https://appworks.alibaba-inc.com/',
      },
      {
        text: 'Github',
        link: 'https://github.com/appworks-lab'
      }
    ],
    sidebar: getSidebar(),
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/docs/.vuepress'),
        '@assets': path.resolve(__dirname, '/docs/.vuepress/assets'),
      },
    },
  },
};
