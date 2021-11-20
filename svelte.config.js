const sveltePreprocess = require("svelte-preprocess");

const postcss_config = {
    plugins: [
    ],
}

const preprocess = sveltePreprocess({
    postcss: postcss_config,
});

module.exports = {
    preprocess,
};
