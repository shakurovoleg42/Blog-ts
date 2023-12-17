import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from "html-webpack-plugin";


export function buildPlugin(): webpack.WebpackPluginInstance[] {

    return [
        new HTMLWebpackPlugin({
            template: ,
        }),
        new webpack.ProgressPlugin(),
    ]
}