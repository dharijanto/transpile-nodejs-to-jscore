# README

This repo is an example of using webpack to bundle NodeJS code into a javascript file that can be executed by JSContext.

## Configuration
- `webpack.config.js`
  - `output.library.name: "bundle"`: this creates a new variable `bundle` that contains the exports
- `index.js`
  - `exports.marked = marked`
- In the case above, it will expose "bundle.marked"