import webpack from "webpack";
import { bildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPatchs } from "./config/build/types/config";
import path from "path";

const paths: BuildPatchs = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "publick", "index.html"),
};

const mode = "developments";
const isDev = mode === "developments";

const config: webpack.Configuration = bildWebpackConfig({
  mode: "developments",
  paths: paths,
  isDev,
});

export default config;
