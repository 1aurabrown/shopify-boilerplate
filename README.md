# Shopify Theme Developer Boilerplate
Simple boilerplate setup for developing Shopify Themes.
Adaped from: [Youfront/shopify-development-boilerplate](https://github.com/Youfront/shopify-development-boilerplate)

#### Demo
A demo can be viewed [here](https://boilerplate-demo.myshopify.com/).

#### Asset bundling
All theme source files live in `src/`. The compiled theme is output to `dist/`. The content of `dist/` is synced with Shopify using themekit.

Webpack will generate bundles for each separate view template. To create a bundle that corresponds to the product template, add a file called `product.js` to `src/scripts/templates/`. At build time, webpack iterates over all the contents of this folder and ouputs a separate bundle for each of these entry files. Make sure your file name corresponsds to the template name used by Shopify.

Webpack will create a separate .css bundle for each .js entry point. Import your .css files into your [template].js file generate create a [template].css file.

A bundle of global dependencies will be generated from `src/scripts/layout/theme.js`. Scripts for global functionality (eg. header, footer), should be imported in this file. A global CSS file (`src/styles/theme.css`) is imported in this file as well and output as `theme.css`. Global styles, helper classes, etc. should be imported in this main global CSS file

#### Styles
This boilerplate uses postcss and [tailwind](https://tailwindcss.com/). For the moment there are no other external style dependencies.

### Responsive Images
This boilerplate makes use of [lazySizes](http://afarkas.github.io/lazysizes/rias/). Some liquid snippets are included for generating responsive `<img>` tags that work with lazySizes.

#### Shopify theme component packages
Certain packages provided by Shopify as part of [shopify/theme-scripts](https://github.com/Shopify/theme-scripts/), namely for section registration and reactive product form handling.

#### Not included in the boilerplate
Elements which I found myself frequently removing from the Slate starter-theme boilerplate have been left out. This includes:
- icons
- Theme settings for colors and fonts, and the accompanying liquid/css interpolations.

#### Stack
- [Themekit](https://github.com/Shopify/themekit)
- [Webpack](https://webpack.js.org/)
- [PostCSS](https://postcss.org/)
