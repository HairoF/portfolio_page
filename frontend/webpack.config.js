const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

console.log('isdev:', isDev);

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const optimization = () => {
    const config = {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
              },
            },
        },
    }
    if(isProd) {
        config.minimizer = [
            new TerserWebpackPlugin()
        ]
    }

    return config
}
const babelOptions = (preset) => {
    const opts = {
        presets: [
            '@babel/preset-env'   
        ]
    }

    if(preset) {
        opts.presets.push(preset)
    }
    return opts
}

const jsLoaders = () => {
    const loaders = [{
        loader:'babel-loader',
        options: babelOptions()
    }];
    if(isDev) {
        loaders.push('eslint-loader');
    }
    return loaders
}

const cssLoaders = extra => {
    const loaders = [{
            loader: MiniCssExtractPlugin.loader,
        },
        'css-loader',

    ];
    if (extra) {
        loaders.push(extra);
    }

    return loaders;
};

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.ts',
        analytics: ['@babel/polyfill', './analytics.jsx']
    },
    devServer: {
        hot:true,
        liveReload: false,
        static: './dist',
    },
    devtool: 'inline-source-map',
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.resolve(__dirname, './src/header/header.html')
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.resolve(__dirname, './src/main/main.html')
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.resolve(__dirname, './src/footer/footer.html')
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'src/header/logo.svg'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/main/slider/icons/icons-woman.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/main/slider/icons/icons-man.png'),
                    to: path.resolve(__dirname, 'dist/img')
                },
            ]
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.html$/i,
            //     loader: "html-loader",
            // },
            {
                test: /\.css$/i,
                use: cssLoaders(),
                sideEffects: true,
            },
            {
                test: /\.(sa|sc)ss$/,
                use: cssLoaders('sass-loader'),
                sideEffects: true,
                exclude: /\.module.(s(a|c)ss)$/
            },
            {
                test: /\.module\.(sa|sc)ss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType:
                                isDev
                                    ? 'styleTag'
                                    : 'singletonStyleTag'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev,
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDev
                        }
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.ts?$/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                },
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader:'babel-loader',
                    options: babelOptions('@babel/preset-react')
                },
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.js'],
    },
    optimization: optimization(),
}