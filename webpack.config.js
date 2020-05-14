const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');
var fs = require('fs');

const scriptRoot = './src/scripts/'
const entries = {
  theme: {
    import: './scripts/layout/theme.js',
  }
}
const templatesJS = glob.sync(scriptRoot + "templates/**/*.js").reduce((acc, path) => {
    const entry = path.replace(scriptRoot + "templates/", '').replace('.js', '')
    acc[entry] = {
      import: path.replace('src/', ''),
      dependOn: 'theme'
    }
    return acc
}, entries)

console.log(templatesJS)
var config = {
  optimization: {
    minimizer: [
      new CssnanoPlugin({
        test: /.s?css?$/,
        sourceMap: true
      }),
      new TerserPlugin({
        sourceMap: true
      })
    ]
  },

  entry: templatesJS,


  output: {
    path: path.join(__dirname, 'dist/assets/'),
    filename: '[name].js',
  },

  context: path.resolve(__dirname, 'src'),

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      sourceMap: true
    }),
    new CopyWebpackPlugin([{
      from: '**/*',
      to: path.join(__dirname, 'dist'),
      ignore: ['styles/', 'scripts/', '*.js', '*.scss', '*.sass', '*.css', ],
    }], {}),
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
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: { sourceMap: true }},
          { loader: 'css-loader', options: { sourceMap: true }},
          { loader: 'postcss-loader', options: { sourceMap: true }}
        ]
      },
    ],
  },
  target: 'web'
};


module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
  } else {
    config.devtool = 'source-map';
  }
  return config
}
