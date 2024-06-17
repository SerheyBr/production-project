import webpack from "webpack";

export function buildLouders(): webpack.RuleSetRule[] {
  const typescriotLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };

  return [typescriotLoader, cssLoader];
}
