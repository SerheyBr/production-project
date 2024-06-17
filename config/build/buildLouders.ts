import webpack from "webpack";

export function buildLouders(): webpack.RuleSetRule[] {
  const typescriotLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriotLoader];
}
