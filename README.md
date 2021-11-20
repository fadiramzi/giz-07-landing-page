## SvelteMe

This is my personal svelte template, and it:

### Features
- builds with [snowpack](https://www.snowpack.dev)
- supports front end routing with [svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router)
- supports [scss and sass](https://sass-lang.com/documentation/syntax)
- supports [typescript](https://www.typescriptlang.org/)
- supports [iconify](https://iconify.design) (with the [MDI set](https://iconify.design/icon-sets/mdi) applied)

### Building
Here's a simple rundown of how this template builds a distributable:

`/src & /public -> snowpack -> /build`

### Available Scripts
| yarn       | npm           | result						|
| ---------- | ------------- | ---------------------------- |
| yarn dev   | npm run dev   | spins dev server				|
| yarn check | npm run check | checks for errors & warnings	|
| yarn build | npm run build | builds a distributable		|

### More
- find [more icon sets to use](https://iconify.design/icon-sets) with iconify
- generate [a placeholder favicon](https://favicon.io/favicon-generator) and put it in /public/favicon
- generate [a placeholder logo](https://brandhub.io/logos) and put it in /public/branding
