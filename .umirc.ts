import { defineConfig } from 'dumi';

export default defineConfig({
  title: '热爱',
  history: { type: 'hash' },
  favicon: 'http://qiniu.liuqh.cn/favicon.ico',
  outputPath: 'docs-dist',
  dynamicImport: {
    // loading: '@/Loading',
  },
  theme: {
    config: '61',
  },
  headScripts: [
    '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js',
  ],
  links: [
    {
      rel: 'stylesheet',
      href: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.css',
    },
  ],
  ignoreMomentLocale: true,
  metas: [
    {
      // 解决语雀图片防盗链
      name: 'referrer',
      content: 'no-referrer',
    },
    {
      name: 'keywords',
      content: '博客，刘庆华，前端，学习笔记，问题思考',
    },
    {
      name: 'description',
      content:
        '一个喜欢前端，喜欢编程的年轻人，在此小站记录学习笔记和日常的一些思考',
    },
  ],
  themeConfig: {
    // logo: 'http://114.115.134.172/img/logo.ac0d1e0b.png',
    // banner: 'assets/banner.jpg',
    // cyanosis || arknights
    markdownTheme: 'arknights',
    routes: [
      { path: '/', title: '热爱' },
      { path: '/相册', title: '随手拍' },
      { path: '/关于我', title: '关于我' },
    ],
  },
});
