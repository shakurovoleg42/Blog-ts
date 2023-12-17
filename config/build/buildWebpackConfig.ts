import { BuildOptions } from "./types/config";
import  webpack  from "webpack";
import path from 'path';
import { buildPlugin } from "./buildPlugin";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugin(),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}