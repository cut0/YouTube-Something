# YouTube Something

Youtube Something is a chorme extension that provides "useful" and "not-so-useful" extensions for Youtube

## Features

YouTube Something provides the following features

### Sticky Video Player

Fix Youtube videos and make comments easier to see

![CleanShot 2024-02-04 at 19 48 01](https://github.com/cut0/YouTube-Something/assets/59341902/852a393a-0820-4813-a2df-1b1ae316f302)

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

