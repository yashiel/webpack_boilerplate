const WebPak = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require("fs");
const glob = require('glob');
const webpages = JSON.parse(fs.readFileSync("./src/pages/pages.json", "utf8"));


const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const entryHtmlPlugins = webpages.map(function(entryName) {
    return new HtmlWebpackPlugin({
        filename: entryName + ".html",
        template: __dirname + `/src/partials/template.html`,
        inject: false,
        title: entryName,
        meta: [{
                name: 'description',
                content: 'A better default template for html-webpack-plugin.'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        ],
        mobile: true,
        lang: 'en-US',
        // devServer:'//localhost:9000',
        // inlineManifestWebpackName: 'webpackManifest',
        googleAnalytics: {
            trackingId: 'UA-XXXX-XX',
            pageViewOnLoad: true
        },
    });
});



module.exports = {

    mode: "production",
    devtool: "source-map", //"source-map"
    entry: path.resolve(__dirname, "index.js"),
    target: 'web',

    optimization: {
        splitChunks: {
            cacheGroups: {
                js: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    filename: "assets/js/[name].min.js",
                    chunks: 'all',
                    // priority: 30,
                    enforce: true
                }
            }
        },

    },


    module: {
        rules: [{
                test: /\.(s[ac]|c)ss$/i,
                exclude: /node_modules/,
                use: [{
                    
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: path.join(__dirname, './dist/')
                    }
                
                }, {
                    loader: "css-loader",
                    options: {
                        // modules: true,
                        // importLoaders: 2,
                        // url: true,
                    }
                }, "postcss-loader", {
                    loader: "sass-loader",
                    options: {
                        sourceMap: false,
                        // implementation: require("dart-sass"),
                        sassOptions: {
                            indentWidth: 4,
                            includePaths: [
                                // path.resolve(__dirname, "/src/scss/pages/"),
                                // path.resolve(__dirname, "node_modules/bootstrap/scss/"),
                                // path.resolve(__dirname, "node_modules/bootstrap/scss/"),
                                // require("bourbon").includePaths,
                                // require("rfs").includePaths
                            ],
                            outputStyle: "compressed",
                        }
                    }
                }, ],
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name][ext]'
                }
            },
            {
                test: /\.(mp4|webm)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/videos/[name][ext]'
                }
            },
            {
                test: /\.(svg)$/,
                type: 'asset/inline'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
        ]
    },



    output: {
        path: path.join(__dirname, './', "dist"),
        filename: "assets/js/bundle-[fullhash].js",
        clean: true,
    },

    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ],

    },


    plugins: [
            new MiniCssExtractPlugin({
                filename: "assets/css/[name].css",
                chunkFilename: "assets/css/[id].css",
            }),
            
            new WebPak.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                _: "underscore"
            }),
        ]
        .concat(entryHtmlPlugins)

};