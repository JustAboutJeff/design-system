const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const util = require('util')

module.exports = {
  // TODO: read directory to make more dynamic
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/install': { page: '/install' },
      '/design-assets': { page: '/design-assets' },
      '/contribute': { page: '/contribute' },
      '/contribute/code': { page: '/contribute/code' },
      '/contribute/components': { page: '/contribute/components' },
      '/roadmap': { page: '/roadmap' },
      '/components/actionmenu': { page: '/components/actionmenu' },
      '/components/avatar': { page: '/components/avatar' },
      '/components/badge': { page: '/components/badge' },
      '/components/banner': { page: '/components/banner' },
      '/components/breadcrumb': { page: '/components/breadcrumb' },
      '/components/button': { page: '/components/button' },
      '/components/card': { page: '/components/card' },
      '/components/checkbox': { page: '/components/checkbox' },
      '/components/circularprogress': { page: '/components/circularprogress' },
      '/components/code': { page: '/components/code' },
      '/components/datepicker': { page: '/components/datepicker' },
      '/components/dialog': { page: '/components/dialog' },
      '/components/dialog-modal-example': {
        page: '/components/dialog-modal-example'
      },
      '/components/drawer': { page: '/components/drawer' },
      '/components/dropdown': { page: '/components/dropdown' },
      '/components/errors': { page: '/components/errors' },
      '/components/form': { page: '/components/form' },
      '/components/icon': { page: '/components/icon' },
      '/components/layout': { page: '/components/layout' },
      '/components/link': { page: '/components/link' },
      '/components/radio': { page: '/components/radio' },
      '/components/row': { page: '/components/row' },
      '/components/switch': { page: '/components/switch' },
      '/components/tab': { page: '/components/tab' },
      '/components/table': { page: '/components/table' },
      '/components/tag': { page: '/components/tag' },
      '/components/text': { page: '/components/text' },
      '/components/textarea': { page: '/components/textarea' },
      '/components/textinput': { page: '/components/textinput' },
      '/components/theme': { page: '/components/theme' },
      '/components/tooltip': { page: '/components/tooltip' },
      '/components/viewtoggle': { page: '/components/viewtoggle' },
      '/core/build': { page: '/core/build' },
      '/core/usage': { page: '/core/usage' },
      '/core/color': { page: '/core/color' },
      '/core/motion': { page: '/core/motion' },
      '/core/spacing': { page: '/core/spacing' },
      '/core/typography': { page: '/core/typography' },
      '/patterns/iconography': { page: '/patterns/iconography' },
      '/patterns/voice-tone': { page: '/patterns/voice-tone' }
    }
  },
  webpack(config) {
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()
      if (entries['main.js']) {
        entries['main.js'].unshift('./src/polyfills.js')
      }
      return entries
    }
    config.plugins = config.plugins
      .filter(
        plugin =>
          plugin &&
          plugin.constructor &&
          plugin.constructor.name !== 'UglifyJsPlugin'
      )
      .concat([new webpack.EnvironmentPlugin(localEnv)])
    return config
  }
}
