<table bgcolor="#fff" border="0" width="100%" style="margin: 0; border: 0; width: 100%;">
  <tr valign="middle">
    <td border="0">
      <a href="https://angularjs.org/" target="_blank">
        <img width="300" heigth="200" src="https://angularjs.org/img/AngularJS-large.png" alt="AngularJS">
      </a>
    </td>
    <td border="0" style="font-size: 2.5em; color: #000;">
      <strong>+</strong>
    </td>
    <td border="0">
      <a href="https://github.com/webpack/webpack" target="_blank">
        <img width="150" heigth="200" src="https://webpack.js.org/assets/icon-square-big.svg" alt="Webpack">
      </a>
    </td>
    <td border="0" style="font-size: 2.5em; color: #000;">
      <strong>+</strong>
    </td>
    <td border="0">
      <a href="https://oclazyload.readme.io/" target="_blank">
        <img width="76" heigth="80" src="https://files.readme.io/Jf0ukPc2SmeSSG4wtZK0_ocLazyLoad-logo2.png" alt="ocLazyLoad">
      </a>
    </td>
    <td border="0" style="font-size: 2.5em; color: #000;">
      <strong>=</strong>
    </td>
    <td border="0" style="font-size: 2.5em; color: #000;">
      :heart_eyes:
    </td>
  </tr>
</table>

[![GitHub license](https://img.shields.io/github/license/var-bin/angularjs-lazyload.svg)](https://github.com/var-bin/angularjs-lazyload/blob/master/LICENSE)
[![David](https://img.shields.io/david/var-bin/angularjs-lazyload.svg)](https://github.com/var-bin/angularjs-lazyload)
[![Build Status](https://travis-ci.org/var-bin/angularjs-lazyload.svg?branch=master)](https://travis-ci.org/var-bin/angularjs-lazyload)
[![Build status](https://ci.appveyor.com/api/projects/status/1q7hekkmwurqj9pe?svg=true)](https://ci.appveyor.com/project/var-bin/angularjs-lazyload)
[![@var_bincom on Twitter](https://img.shields.io/twitter/follow/var_bincom.svg?style=social&label=Follow%20%40var_bincom)](https://twitter.com/var_bincom)

# angularjs-lazyload
This repo is existed to help you to understand how to implement lazyload technique via Webpack and a little bit of magic.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/var-bin/angularjs-lazyload)

## Install
1. Do `git clone` stuff.
2. `cd angularjs-lazyload`.
3. `npm install`.
4. Run **dev** mode: `npm start`.

The init state of App:

```
project-root
├── src
│   ├── core
│   │   ├── bootstrap.js
│   ├── pages
│   │   ├── home
│   │   │   ├── about
│   │   │   │   ├── about.module.js
│   │   │   │   ├── about.view.html
│   │   │   ├── index
│   │   │   │   ├── index.module.js
│   │   │   │   ├── index.view.html
│   │   │   ├── home.module.js
│   │   │   ├── home.module.routing.js
│   │   │   ├── home.module.states.js
├── app.js
├── index.html
```
