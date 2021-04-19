const path= require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssAssetsPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports= {
    entry: {
        'app' : './src/index.js',
        'assets/js/banner' : './src/assets/js/banner.js',
        'assets/js/tabs' : './src/assets/js/tabs.js',
        'assets/js/upload' : './src/assets/js/upload.js',
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, "/app"),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, "/app"),
        port:8081,
        writeToDisk: true,
    },
    module : {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssAssetsPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /images/,
                use: [
                    {   
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: "assets/fonts",
                        }
                    }
                ]
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                  use: [
                    {   
                      loader: 'file-loader',
                      options: {
                        name: '[name].[ext]',
                        outputPath: "assets/images",
                      }
                    }
                ]
            }


        ]
    },

    plugins: [
        new CleanWebpackPlugin({cleanStalWebpackAssets: false}),
        new OptimizeCssAssetsPlugin({}),
        new MiniCssAssetsPlugin({
            filename:"css/style.css"
        }),

        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: ['app']
        }),

        new HtmlWebpackPlugin({
            filename: "components/button.html",
            template: "./src/components/button.html",
            chunks: ['app']
        }),

        new HtmlWebpackPlugin({
            filename: "components/textfield.html",
            template: "./src/components/textfield.html",
            chunks: ['app']
        }),

        new HtmlWebpackPlugin({
            filename: "components/card.html",
            template: "./src/components/card.html",
            chunks: ['app']
        }),

        new HtmlWebpackPlugin({
            filename: "components/banner.html",
            template: "./src/components/banner.html",
            chunks: ['app','assets/js/banner']
        }),

        new HtmlWebpackPlugin({
            filename: "components/list.html",
            template: "./src/components/list.html",
            chunks: ['app']
        }),

        new HtmlWebpackPlugin({
            filename: "components/tabs.html",
            template: "./src/components/tabs.html",
            chunks: ['app' ,'assets/js/tabs']
        }),

        new HtmlWebpackPlugin({
            filename: "components/upload.html",
            template: "./src/components/upload.html",
            chunks: ['app' , 'assets/js/upload' ]
        }),
    ]
}