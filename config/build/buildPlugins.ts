import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {

    const plugins= [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: ".css/[name].[contenthash].css",
            chunkFilename: ".css/[name].[contenthash].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]

    if (isDev) {
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false
            })
        )
    }

    return plugins
}