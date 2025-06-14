import webpack from "webpack";
import {BuildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPath} from "./config/build/types/config";
import path from "node:path";

export default (env: BuildEnv) => {

    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3030

    const config: webpack.Configuration = BuildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    })

    return config
};