import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLouders({isDev}:BuildOptions): webpack.RuleSetRule[] {
  const typescriotLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
		isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
		{
		// test: /\.css$/i,
		loader: "css-loader",
		options: {
		  modules: {
			auto: (resPath: string) => Boolean(resPath.includes('.module.')),
		 	 localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
		  },
		  
		},
	 },
	  "sass-loader"],
  };

  return [typescriotLoader, cssLoader];
}
