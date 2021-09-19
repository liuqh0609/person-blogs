import { defineConfig } from 'dumi';

export default defineConfig({
  title: '热爱',
  favicon: 'http://114.115.134.172/favicon.ico',
  outputPath: 'docs-dist',
  theme: {
    config: '61',
  },
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
