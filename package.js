Package.describe({
  summary: 'Blaze configuration templates for Intranet 42 OAuth.',
  version: '1.0.1',
  name: 'chap:intra42-config-ui',
  git: 'https://github.com/marcchapeau/meteor-intra42-config-ui'
})

Package.onUse(function (api) {
  api.use('templating@1.2.13', 'client')
  api.addFiles('intra42_login_button.css', 'client')
  api.addFiles(
    ['intra42_configure.html', 'intra42_configure.js'],
    'client'
  )
})
