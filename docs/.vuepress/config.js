module.exports = {
  title: 'test-ui',
  base: '/test-component/',
  themeConfig: {
    nav: [{
      text: 'Home', link: '/',
    }, {
      text: 'Github', link: 'https://github.com/zhanglei0123/test-component'
    }, {
      text: 'Npm', link: 'https://www.npmjs.com/package/test-component-zl'
    }],
    sidebar: [
      '/',
      'componentsDocs/card'
    ]
  }
}