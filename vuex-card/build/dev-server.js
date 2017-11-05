'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

var data = [
  {
    id: 123111,
    name: '极米无屏电视 CC',
    pic: 'http://image.smartisanos.cn/resource/41cb562a47d4831e199ed7e2057f3b61.jpg?x-oss-process=image/resize,w_206/quality,Q_90/format,webp',
    stock: 2,
    price: 2599,
    num: 0,
    isAdded: false
  },
  {
    id: 123112,
    name: 'Smartisan 卫衣 大爆炸',
    pic: 'http://image.smartisanos.cn/resource/3859ea627faeb07b34b55c1ce736012b.png?x-oss-process=image/resize,w_206/quality,Q_90/format,webp',
    stock: 10,
    price: 249,
    num: 0,
    isAdded: false
  },
  {
    id: 123113,
    name: '坚果 Pro 钢化玻璃保护膜（前屏用）',
    pic: 'http://image.smartisanos.cn/resource/30cacf4088f7105d16452c661afd9299.jpg?x-oss-process=image/resize,w_206/quality,Q_90/format,webp',
    stock: 7,
    price: 49,
    num: 0,
    isAdded: false
  },
  {
    id: 123114,
    name: 'Smartisan M1/M1L 软胶保护套',
    pic: 'http://image.smartisanos.cn/resource/ff6e3d787c07983fa4c2c281c48e03c9.png?x-oss-process=image/resize,w_206/quality,Q_90/format,webp',
    stock: 29,
    price: 19,
    num: 0,
    isAdded: false
  }
]

const apiRouter = express.Router()
apiRouter.get('/', (req, res) => {
  res.json({
    data: data
  })
})
app.use('/api', apiRouter)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
