/*
 * 详细配置文档，详见：https://umijs.org/config/
 */

import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
// import proxy from './proxy';
// 路由表
import routes from './routes';

// const { REACT_APP_ENV } = process.env;
export default defineConfig({
  // 设置路由前缀，通常用于部署到非根目录
  // base:'',

  // 配置 webpack 的 publicPath; 打包部署的时候要注意
  // publicPath:'',

  // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  // 设置 history 类型 ；ype，可选 browser、hash 和 memory
  history: {
    type: 'hash',
  },
  // 国际话配置
  locale: {
    default: 'zh-CN',
  },
  // 是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行
  // 考虑用户首次加载页面缓慢问题
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  // 配置需要兼容的浏览器最低版本
  // 默认兼容: { chrome: 49, firefox: 64, safari: 10, edge: 13, ios: 10 }
  targets: {
    ie: 11,
  },
  // 配置路由
  routes,
  // 配置主题样式，实际上是配 less 变量
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // 配置标题
  title: false,
  // 忽略 moment 的 locale 文件，用于减少尺寸
  ignoreMomentLocale: true,
  // 配置代理能力
  // proxy: proxy[REACT_APP_ENV || 'dev'],

  // 配置是否需要生成额外用于描述产物的 manifest 文件，默认会生成 asset-manifest.json
  // umi build 时才生效
  manifest: {
    basePath: '/',
  },

  // 配置额外的 umi 插件
  // plugins: ['react-dev-inspector/plugins/umi/react-inspector'],
  // 设置哪些模块可以不被打包，通过 <script> 或其他方式引入，通常需要和 scripts 或 headScripts 配置同时使用
  externals:{},

  // 设置 less-loader 配置项
  // lessLoader:{}
});
