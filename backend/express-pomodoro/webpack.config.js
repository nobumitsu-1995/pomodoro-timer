const path = require('path')
const sass = require('sass')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackNodeExternals = require('webpack-node-externals')
const copyWebpackPlugin = require('copy-webpack-plugin')
const writeFilePlugin = require('write-file-webpack-plugin')

const env = process.env.NODE_ENV || 'development'
const isProd = env === 'production'
const outputPath = path.resolve(__dirname, isProd ? 'prod' : 'build')

module.exports = {
  mode: env,
  entry: {
    app: './src/main.ts',
    styles: './src/assets/styles/index.scss',
  },
  output: {
    filename: '[name].js',
    path: outputPath,
    clean: true,
  },
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false, // if you don't put this is, __dirname
    __filename: false, // and __filename return blank or /
  },
  externals: [webpackNodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'sass-loader', options: { implementation: sass } },
        ],
      },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'public/style/index.css',
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: 'src/views/*.ejs',
          to: 'views/[name][ext]',
        },
        {
          from: 'src/views/notices/*.ejs',
          to: 'views/notices/[name][ext]',
        },
      ],
    }),
    new writeFilePlugin(),
  ],
}
