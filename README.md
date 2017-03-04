# html-to-maml
`html-to-maml` is a simple tool for converting HTML tags into MAML documents.  It is built on [himalaya](https://github.com/andrejewski/himalaya), and therefore does **not** convert `script` or `style` tags. 

# Using this module in other modules

Here is a quick example of how this module can be used in other modules. The [TypeScript Module Resolution Logic](https://www.typescriptlang.org/docs/handbook/module-resolution.html) makes it quite easy. The file `src/index.ts` acts as an aggregator of all the functionality in this module. It imports from other files and re-exports to provide a unified interface for this module. The _package.json_ file contains `main` attribute that points to the generated `lib/index.js` file and `typings` attribute that points to the generated `lib/index.d.ts` file.

> If you are planning to have code in multiple files (which is quite natural for a NodeJS module) that users can import, make sure you update `src/index.ts` file appropriately.

We will published this module to _npm_ with the name `html-to-maml`, so you can install it using `npm install -s html-to-maml`.  Then, in your code: 

- To use `html-to-maml` in a TypeScript file -

```ts
import { html-to-maml } from "html-to-maml";

const maml = html-to-maml("<p>Hello, MAML!</p>");
```

- To use the `Mamlify` class in a JavaScript file -

```js
const html-to-maml = require('html-to-maml').Mamlify;

const maml = html-to-maml("<p>Hello, MAML!</p>");
```
