---
title: "Use Tailwind CSS in a Winter CMS theme"
description: "This guide shows how to add Tailwind CSS to a Winter CMS theme using Laravel Mix."
pubDate: "March 28 2024"
---

```bash
pnpm add -D tailwindcss postcss autoprefixer
```

Next, run the Tailwind initialisation:

```bash
npx tailwindcss init
```

This will create a Tailwind configuration file ***tailwind.config.js*** in the root folder that should be moved inside the theme folder.

Then, add a ***winter.mix.js*** configuration file inside the theme folder that will compile Tailwind as needed:

```javascript
const mix = require("laravel-mix");
mix.setPublicPath(__dirname);

// Render Tailwind style
mix.postCss("assets/css/base.css", "assets/css/theme.css", [
  require("postcss-import"),
  require("tailwindcss"),
]);
```
