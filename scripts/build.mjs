import htmlPlugin from "@chialab/esbuild-plugin-html";
import { build } from "esbuild";
import { solidPlugin } from "esbuild-plugin-solid";

const run = async () => {
  try {
    await build({
      entryPoints: ["index.html"],
      outdir: "dist",
      minify: true,
      assetNames: "assets/[name]-[hash]",
      plugins: [htmlPlugin()],
    });
    await build({
      entryPoints: ["src/index.tsx"],
      bundle: true,
      minify: true,
      outfile: "dist/index.js",
      plugins: [solidPlugin()],
    });
  } catch (e) {
    console.error(e);
  }
};

run();
