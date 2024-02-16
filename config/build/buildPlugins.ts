import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import SpriteLoaderPlugin from "svg-sprite-loader/plugin";
import { buildPagesList } from "./scripts/buildPagesList";
import WatchExternalFilesPlugin from "webpack-watch-files-plugin";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new webpack.ProgressPlugin(),
    // @ts-ignore
    new SpriteLoaderPlugin(),
    new WatchExternalFilesPlugin({
      files: ["src/**/*.html"],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets/images",
          to: "./assets/images/",
          noErrorOnMissing: true,
        },
        {
          from: "src/assets/favicons",
          to: "./assets/favicons/",
          noErrorOnMissing: true,
        },
        {
          from: "src/assets/fonts",
          to: "./assets/fonts/",
          noErrorOnMissing: true,
        },
        {
          from: "src/assets/videos",
          to: "./assets/videos/",
          noErrorOnMissing: true,
        },
      ],
    }),
    ...buildPagesList(paths),
  ];
}
