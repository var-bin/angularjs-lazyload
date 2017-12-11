// home.module.states.js

"use scrict";

const homeIndex = {
  name: "home",
  url: "/home",
  component: "homeComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    /* eslint no-undef: 0 */
    return System.import(/* webpackChunkName: "index.module" */ "./index/index.module")
      .then(mod => $ocLazyLoad.load(mod.HOME_INDEX_MODULE));
  }
};

const homeAbout = {
  name: "home.about",
  url: "/about",
  component: "homeAboutComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    /* eslint no-undef: 0 */
    return System.import(/* webpackChunkName: "about.module" */ "./about/about.module")
      .then(mod => $ocLazyLoad.load(mod.HOME_ABOUT_MODULE));
  }
};

export { homeIndex, homeAbout };
