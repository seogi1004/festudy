const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env) => {
    return {
        mode: !env ? 'development' : env,
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'build.js'
        },
        module: {
            rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            }, {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // enable CSS Modules
                            modules: true,
                            // customize generated class names
                            localIdentName: '[local]'
                        }
                    }
                ]
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }]
        },
        resolve: {
            extensions: [ '.ts', '.js', '.vue', '.json' ],
            alias: {
                '@': path.resolve(__dirname, './src'),
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    }
}