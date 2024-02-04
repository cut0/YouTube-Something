import { build } from "esbuild";
import { copy } from "esbuild-plugin-copy";
import { solidPlugin } from "esbuild-plugin-solid";

const run = async () => {
  try {
    await build({
      entryPoints: ["src/app/index.tsx"],
      bundle: true,
      minify: true,
      outfile: "dist/index.js",
      plugins: [
        solidPlugin(),
        copy({
          resolveFrom: "cwd",
          assets: {
            from: ["./assets/*"],
            to: ["./dist"],
          },
          watch: true,
        }),
      ],
    });
    await build({
      entryPoints: ["src/contentScripts/index.ts"],
      bundle: true,
      minify: true,
      outfile: "dist/contentScript.js",
    });
  } catch (e) {
    console.error(e);
  }
};

run();
