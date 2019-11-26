module.exports = {
    base: '/', // 站点的基础路径，它的值应当总是以斜杠开始，并以斜杠结束
    title: 'Hello VuePress',
    description: 'Just playing around',

    themeConfig: {
        logo: '/image/logo.jpg',
        nav: [ // 导航栏
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/foo/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [ // 侧边栏
            ['/', '首页'],
            ['/foo/','我的第一个测试'],
        ]
    }
  }