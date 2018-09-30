var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/vue-math.js',
  // entry: './src/vue-single.js',
  // entry: './src/ts/test1.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
        { test: /\.ts$/, use: 'awesome-typescript-loader' },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        { enforce: 'pre', test: /\.ts$/, loader: 'tslint-loader' }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json', '.ts']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
      new webpack.optimize.UglifyJsPlugin({
          // 사실 아래와 같이만 써도 트리 쉐이킹이 된다.
          // compress: true

          compress: {
              // warnings: false, // 콘솔 창에 출력되는 게 보기 귀찮다면 요 놈을 주석 제거하면 된다.
              unused: true // 요 놈이 핵심
          },
          mangle: false,    // DEMO ONLY: Don't change variable names.(난독화)
          beautify: true,   // DEMO ONLY: Preserve whitespace (가독성 좋게 함)
          output: {
              comments: true  // DEMO ONLY: Helpful comments (주석 삭제 안 함)
          }
      }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
