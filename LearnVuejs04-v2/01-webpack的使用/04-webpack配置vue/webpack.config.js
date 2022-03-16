const path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'dundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责加载css 
        //style-loader负责将css添加到dom中
        //使用多个loader时候,使用是从右向左读
        use: ['style-loader','css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片,小于limit时,会将图片编译成base64字符串形式
              //当加载的图片,大于limit时,需要将file-loader模块进行加载
              limit: 13000,
              name:'img/[name].[hash:8].[ext]'
            }
            
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env']
            presets: ['es2015']
          }
        }
      }
    ]
  },
  resolve:{
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}