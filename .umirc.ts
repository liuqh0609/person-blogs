import { defineConfig } from 'dumi';

export default defineConfig({
  title: '热爱',
  history: { type: 'hash' },
  favicon: 'http://114.115.134.172/favicon.ico',
  outputPath: 'docs-dist',
  theme: {
    config: '61',
  },
  metas: [
    {
      // 解决语雀图片防盗链
      name: 'referrer',
      content: 'no-referrer',
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
