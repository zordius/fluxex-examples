badge-render
============

A Node.js + PhantomJS based solution to generate browser testing results badge

LOGO images from https://github.com/substack/browser-badge

[![npm version](https://img.shields.io/npm/v/badge-render.svg)](https://www.npmjs.org/package/badge-render) [![Dependency Status](https://david-dm.org/zordius/badge-render.png)](https://david-dm.org/zordius/badge-render) [![Build Status](https://travis-ci.org/zordius/badge-render.svg?branch=master)](https://travis-ci.org/zordius/badge-render)

Install
-------

```
npm install badge-render
```

Commandline Usage
-----------------

**Generate your badge by badge json**

```sh
badge-render examples/all_browsers_pass.json lib/index.html
```

* The input JSON: <a href="examples/all_browsers_pass.json">examples/all_browsers_pass.json</a>
* The output HTML: <a href="lib/index.html">lib/index.html</a>
* The output PNG: <img src="lib/index.html.png" />

**Options: Output png with another name**
```sh
badge-render examples/all_browsers_pass.json lib/index.html --png test.png
```

**Options: Scale the html and png**

This feature is supported by updating PhantomJS zoomFactor.

```sh
badge-render examples/all_browsers_pass.json lib/index.html --png examples/scale.png --scale 0.5
```

* The output PNG: <img src="examples/scale.png" />

**Options: Change the rendered image size**

This feature is supported by changing PhantomJS viewport size. Default viewport size is 500x320. When the real HTML size larger, the rendered image size will auto expanded.

```sh
badge-render examples/all_browsers_pass.json lib/index.html --png examples/small.png --scale 0.6 --width 180 --height 200
```

* The output PNG: <img src="examples/small.png" />

**Options: customize the style**

Append your css file into the HTML.

```sh
badge-render examples/all_browsers_pass.json lib/index.html --png examples/style.png --css examples/extra.css
```

* The CSS file: <a href="examples/extra.css">examples/extra.css</a>
* The output PNG: <img src="examples/style.png" />

**Saucelabs+Travis Migration**

Use this command `badge-saucelabs-results > badge.json` to save your saucelabs test results. The command will use `SAUCE_USERNAME` to look for your recent tests result, and then use `TRAVIS_JOB_ID` to match your build name.

If you want to use different build name to match sauce labs results, you can try `badge-saucelabs-results YOUR_BUILD_NAME > badge.json` . After the results save to badge.json, you can then render the badge by `badge-render` command.

CommonJS Usage
--------------

```javascript
var badge = require('badge-render');

// generate HTML by default handlebars template
badge({
 browsers: {
   safari: {'10.0': true},
   explorer: {'10.0': false},
   firefox: {'10.0': true}
 }
});

// provide more options
badge({
  browsers: {...},
  title: 'change title of the html (default template)',
  assets: 'change the assets base url (default template)',
  template: 'template string',
  css: 'css string for template (default template)'
}, {
  file: 'full path of output file',
  hbfile: 'full path of handlebars template',
  cssfile: 'full path of css file to customize default template'
});
```
