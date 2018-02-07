# yyvip-pug HTML loader for webpack

yyvip-pug-loader is forked from pug-html-loader.

```
npm install --save yyvip-pug-loader
```

## Usage

In your sources:

``` javascript
var html = require('./file.pug')
// => returns file.pug content as html compiled string
```

In your webpack.config.js  file:

```javascript
module.exports = {
  // your config settings ...
  rules: [
    // your modules...
    loaders: [{
      include: /\.pug/,
      loader: ['raw-loader', 'yyvip-pug-loader'],
      options: {
        // options to pass to the compiler same as: https://pugjs.org/api/reference.html
        data: {} // set of data to pass to the pug render.
      }
    }]
  ]
};
```

## Using it with html-loader

`yyvip-pug-loader` encode to content to a string variable to avoid it and pass the string content to the loader chain please use the following configuration:

```javascript
module.exports = {
  // your config settings ...
  module: [
    // your modules...
    rules: [{
      test: /\.pug/,
      loaders: ['html-loader', 'yyvip-pug-loader'],
      options: {
        // options to pass to the compiler same as: https://pugjs.org/api/reference.html
        data: {} // set of data to pass to the pug render.
      }
    }]
  ]
};
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.
