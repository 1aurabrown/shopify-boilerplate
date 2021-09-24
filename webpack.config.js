const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');

const scriptRoot = './src/scripts';

var entries = {
  theme: scriptRoot + '/layout/theme.js'
}

const files = glob.sync(scriptRoot + '/templates/*.js')
files.forEach(function(file) {
  var extension = path.extname(file);
  var fileName = path.basename(file,extension);
  entries[fileName] = file
})


console.log(entries)
var config = {
  optimization: {
    minimizer: [
      new CssnanoPlugin({
        test: /.scss$/
      }),
      new TerserPlugin()
    ]
  },

  entry: entries,

  output: {
    path: path.join(__dirname, 'dist/assets/'),
    filename: '[name].js',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CopyWebpackPlugin({
      patterns: [{
        context: './src/',
        from: '**/*',
        to: path.join(__dirname, 'dist'),
        globOptions: {
          ignore: ["**/scripts/**", "**/styles/**"]
        }
      }],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  target: 'es5',
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
};


module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
  } else {
    config.devtool = 'source-map';
  }
  return config
}
