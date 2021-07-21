const path = require('path')
const createExpoWebpackConfig = require('@expo/webpack-config')

module.exports = async function (env, args) {
  const config = await createExpoWebpackConfig(env, args) 

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
      path.join(__dirname, 'node_modules/react-router-native'),
    ]
  })

  return config
}