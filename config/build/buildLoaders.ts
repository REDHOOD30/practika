import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const typeScriptLoaders =
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    const scssLoaders =
        {
            test: /\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            namedExport: false,
                            exportLocalsConvention: 'as-is',
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                        },
                    }
                },
                "sass-loader",
            ],
        }

    return [
        typeScriptLoaders,
        scssLoaders,
    ]
}