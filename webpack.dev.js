const WebPak = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require("fs");
const webpages = JSON.parse(fs.readFileSync("./src/pages/pages.json", "utf8"));
const DashboardPlugin = require("webpack-dashboard/plugin");


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
        // googleAnalytics: {
        //     trackingId: 'UA-XXXX-XX',
        //     pageViewOnLoad: true
        // },
    });
});



module.exports = {

    mode: "development",
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, "index.js"),
    target: 'web',

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        watchContentBase: true,
        compress: true,
        historyApiFallback: true,
        hot: true,
        port: 9000,
        open: true,
        serveIndex: true,
        // writeToDisk:true
    },


    module: {
        rules: [{
                test: /\.(s[ac]|c)ss$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", {
                    loader: 'resolve-url-loader',
                }, "postcss-loader", {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
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
                test: /\.(gif|png|jpe?g|mp4|webm)$/,
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
        filename: "bundle.js",
        clean: true,
        // assetModuleFilename: 'assets/img/[name][ext]'
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
            new DashboardPlugin(),
            new WebPak.HotModuleReplacementPlugin(),
            new WebPak.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                _: "underscore"
            }),
        ]
        .concat(entryHtmlPlugins)

};