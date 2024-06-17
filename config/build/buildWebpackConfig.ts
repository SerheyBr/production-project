import path from "path";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildPlugins } from "./buildPligins";
import { buildLouders } from "./buildLouders";
import { buildResolve } from "./buildResolves";

export function bildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;

  return {
    entry: paths.entry,
    mode: "development",
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLouders(),
    },
    resolve: buildResolve(),
  };
}
