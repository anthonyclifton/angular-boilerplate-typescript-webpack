var CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    entry: {
        app: './app/app.ts',
        mock: './test/mocks/mocks.ts'
    },
    output: {
        path: __dirname + '/build/',
        publicPath: 'build/',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.js.map'
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new CaseSensitivePathsPlugin()
        ],
        modules: ["node_modules", "thirdparty"],
        alias: {
            material_css: __dirname + "/node_modules/angular-material/angular-material.min.css",
            appbar_components_css: __dirname + "/node_modules/app-chooser/dist/Appbar-Components.css"
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: "pre",
                use: [
                    {loader: 'awesome-typescript-loader'},
                    {
                        loader: 'tslint-loader',
                        options: {
                            emitErrors: true,
                            failOnHint: true,
                            rulesDirectory: './node_modules/tslint-microsoft-contrib'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
        ]
    },
    devtool: 'cheap-source-map',
    devServer: {
        https: true
    }
};