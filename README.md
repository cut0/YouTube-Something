# YouTube Something

Youtube Something is a chorme extension that provides "useful" and "not-so-useful" extensions for Youtube

## Features

YouTube Something provides the following features

### Sticky Video Player

Fix Youtube videos and make comments easier to see

It works by adding the following one-liners to the console without extensions

```js
document.querySelectorAll("#player canvas").forEach((c) => c.remove()) ||
  (document.getElementById("player").style.cssText =
    "position: sticky; top: 56px; z-index: 400");
```

## Keywords

- chorme-extension
- [SolidJS](https://www.solidjs.com/)
- [esbuild](https://esbuild.github.io/)
- [Biome](https://biomejs.dev/guides/getting-started/#editor-setup)
