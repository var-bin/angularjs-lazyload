// home.module.states.js

"use scrict";

const homeIndex = {
  name: "home",
  url: "/home",
  component: "homeComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return import(/* webpackChunkName: "index.module" */ "./index/index.module")
      .then(mod => $ocLazyLoad.load(mod.HOME_INDEX_MODULE))
      .catch(err => {
        throw new Error("Ooops, something went wrong, " + err);
      });
  }
};

const homeAbout = {
  name: "home.about",
  url: "/about",
  component: "homeAboutComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return import(/* webpackChunkName: "about.module" */ "./about/about.module")
      .then(mod => $ocLazyLoad.load(mod.HOME_ABOUT_MODULE))
      .catch(err => {
        throw new Error("Ooops, something went wrong, " + err);
      });
  }
};

export { homeIndex, homeAbout };
