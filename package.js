Package.describe({
  summary: 'Blaze configuration templates for Intranet 42 OAuth.',
  version: '1.0.0',
  name: 'chap:intra42-config-ui'
})

Package.onUse(function (api) {
  api.use('templating@1.2.13', 'client')
  api.addFiles('intra42_login_button.css', 'client')
  api.addFiles(
    ['intra42_configure.html', 'intra42_configure.js'],
    'client'
  )
})
