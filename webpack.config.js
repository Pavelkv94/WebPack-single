const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');

const createFormModule = (formName, env, argv) => {
  return {
    entry: {
      [formName]: [`/src/scripts/${formName}.js`]
    },
    mode: argv.mode,
    module: {
      rules: [
        {
          test: /.jsx$/,
          exclude: /(node_modules|bower_components)/,
          use: { loader: "babel-loader" }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.less$/i,
          use: ["style-loader", "css-loader", "less-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: `${formName}.html`,
        template: './src/templates/baseFormTemplate.html',
      }),
      new HtmlInlineScriptPlugin({
        names: [formName],
        htmlMatchPattern: [/.html$/],
        scriptMatchPattern: [/.js$/],
      }),
      // workaround
      new HtmlReplaceWebpackPlugin([
        {
          pattern: '<head>',
          replacement: "<form class='form-horizontal'><div id='reactContainer' />"
        },
        {
          pattern: '</head>',
          replacement: '</form>'
        },
        {
          pattern: '<script defer="defer">',
          replacement: "<script cam-script type='text/javascript'>"
        },
        {
          pattern: '<script defer>',
          replacement: "<script cam-script type='text/javascript'>"
        }
      ])
    ],
    optimization: {
      minimize: argv.mode === 'production'
    },
    output: {
      filename: `${formName}.js`,
      path: path.resolve(__dirname, argv.mode === 'production' ? 'prod' : 'dist'),
    }
  }
};

module.exports = (env, argv) => [
  createFormModule('mainForm', env, argv),
];