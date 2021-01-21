const navbar = require("./config/nav")
const sidebar = require("./config/sidebar")
const audio = require("./config/audios")

module.exports = {
  title: '邱垂杰的个人博客',
  description: "个人学习笔记",
  port: "9000",
  repo: "https://github.com/tuiuQ/blog.git",
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['script', { type: "text/javascript", src: "/js/jquery-3.1.1.min.js" }],
    ['script', { type: "text/javascript", src: "/js/init.js" }],
    ['link', { rel: 'icon', href: '/images/logo.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  theme: "reco",
  themeConfig: {
    type: "blog",
    nav: navbar,
    sidebar: sidebar,
    sidebarDepth: 3,
    authorAvatar: '/images/logo.jpg',
    author: "邱垂杰",
    huawei: true,
    valineConfig: {
      appId: "Y2SuFcWdFsVaeXd8zPII2WBE-gzGzoHsz",
      appKey: "Hq6YIHt5h2KUb6DG07AiICJn"
    },
    lastUpdated: 'Last Updated',
    codeTheme: "solarizedlight"
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    },
    '@vuepress-reco/vuepress-plugin-bgm-player': {
      audios: audio
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    }
  }
}