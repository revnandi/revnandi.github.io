---
title: "Logging library versions with Vite's define feature"
slug: "logging-library-versions-with-vite-s-define-feature"
description: ""
pubDate: "February 26 2025"
tags: ["vite", "javascript", "typescript"]
---

Recently, we encountered an issue with a third party developing a feature in their off-the-shelf product, which integrates with our app. They built this functionality using one of our frontend libraries. During testing, we discovered a bug that actually originated from our own library.

When verifying the fixes, we weren’t always sure whether they were using the correct version of our library. To address this, we decided to add a console log displaying the library version when it loads in the browser.

Since we use Vite as the bundler for the library I checked the docs and found that we can use the [define feature](https://vite.dev/config/shared-options.html#define) for this. With define we can add global constant replacements. 

First, make sure your package.json has your version number

```json
{
  "name": "example-libary",
  "description": "Example library",
  "version": "7.5.3",
}
```

In your vite.config.js, add this to the config

```ts
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
})
```

Add this type definition to your env.d.ts or vite-env.d.ts

```ts
declare const __APP_VERSION__: string
```

Finally, log the version in your init function

```ts
console.log(`Example lib version: ${__APP_VERSION__}`)
```

Console logs are usually discouraged in production code, this is actually fine for debugging purposes in controlled environments. For production, you might want to add some log level controls.

The cool thing about this solution is that during development, `__APP_VERSION__` is just a global variable. But when you build for production, Vite replaces it with the actual version string, so there's zero performance hit.
