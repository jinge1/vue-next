const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
      targets: {
        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
      }
    }
  ]
]
const plugins = [
  '@babel/plugin-transform-runtime',
  // 解析类的属性
  '@babel/plugin-proposal-class-properties'
]

module.exports = {
  presets,
  plugins
}
