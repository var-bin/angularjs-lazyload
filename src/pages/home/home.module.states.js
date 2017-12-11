// home.module.states.js

"use scrict";

const homeIndex = {
  name: "home",
  url: "/home",
  component: "homeComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return require.ensure([], () => {
      // load whole module
      const module = require("./index/index.module");

      $ocLazyLoad.load(module.default);
    }, "index.module");
  }
};

const homeAbout = {
  name: "home.about",
  url: "/about",
  component: "homeAboutComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return require.ensure([], () => {
      // load whole module
      let module = require("./about/about.module");

      $ocLazyLoad.load(module.HOME_ABOUT_MODULE);
    }, "about.module");
  }
};

export { homeIndex, homeAbout };
