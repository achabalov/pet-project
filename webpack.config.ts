import {buildWebpackConfig} from './config/build/buildWebpackConfiguration'
import webpack from "webpack";
import path from 'path'
import {BuildPaths, BuildEnv} from "./config/build/types/config";


module.exports = (env: BuildEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.PORT || 3000

    const config: webpack.Configuration = buildWebpackConfig({
        mode: 'development',
        paths,
        isDev,
        port: PORT
    })
    return config
}
