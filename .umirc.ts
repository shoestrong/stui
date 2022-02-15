import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'st-UI',
  favicon: 'https://learn.shoestrong.com/favicon.ico',
  logo: 'https://learn.shoestrong.com/favicon.ico',
  publicPath: './',
  base: '/',
  mode: 'site',
  targets: {
    ie: 9,
    chrome: 49,
    firefox: 64,
    safari: 10,
    edge: 13,
    ios: 10,
  },
  fastRefresh: {},
  headScripts: [{ src: './lib/babel-polyfill.min.js' }],
  outputPath: 'docs-dist',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    'en-US': [
      { title: 'Components', path: '/en-US/components' },
      { title: 'github', path: 'https://github.com/z5829984520/zc-react-comp' },
    ],
    'zh-CN': [
      { title: '组件', path: '/components' },
      { title: 'github', path: 'https://github.com/z5829984520/zc-react-comp' },
    ],
  },
  history: {
    type: 'hash',
  },
  mfsu: { production: { output: '.mfsu-production' } },
  // more config: https://d.umijs.org/config
});
