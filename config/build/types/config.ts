export type BuildMode = "production" | "developments";

export interface BuildPatchs {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPatchs;
  isDev: boolean;
}
