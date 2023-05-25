//引入一個包
const path = require('path');

//引入html插件
const HTMLWebPackPlaugin = require('html-webpack-plugin');

//引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack 中的所有的配置信息都應該寫在module.exports中
module.exports = {
    //指定入口文件
    entry: "./src/index.ts",

    //指定打包文件所在目錄
    output: {
        //指定打包文件的目錄
        path: path.resolve(__dirname, "dist"),
        //打包後的文件的文件
        filename: "bundle.js",
        // //告訴webpack不使用箭頭函式
        // environment:{
        //     arrowFunction:false;
        // }
    },

    //指定webpack打包時要使用模塊
    module: {
        //指定要加載的規則
        rules: [
            {
                //test 指定的是規則生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: [
                    //配置babel
                    {
                        //指定加載器
                        loader: "babel-loader",
                        //設定babel
                        options: {
                            //設置預定定義的環境
                            presets: [
                                [
                                    //指定環境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目標瀏覽器
                                        target: {
                                            "chrome": "110"
                                        },
                                        // 指定corejs的版本
                                        "corejs": "3",
                                        //使用corejs的方式 "usage" 表示按需加載
                                        "useBuiltIns": "usage",
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                //要排除的文件
                exclude: /node-modules/,
            }
        ]
    },

    //配罝Webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebPackPlaugin({
            //title:"這是一個自定義的title",
            template: "./src/index.html"
        }),
    ],

    //用來設罝引用模塊
    resolve: {
        extensions: ['.ts', '.js']
    },

};
