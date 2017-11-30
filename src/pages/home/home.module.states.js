// home.module.states.js

"use scrict";

const homeIndex = {
  name: "home",
  url: "/home",
  component: "homeComponent",
  resolve: {
    loadHomeModule: ($ocLazyLoad) => {
      return new Promise((resolve, reject) => {
        require.ensure([], () => {
          // load whole module
          let module = require("./index/index.module");

          $ocLazyLoad.load({
            name: "home.module"
          });

          if (module.name) {
            resolve(module.name);
          } else {
            reject("Ooops, somethig went wrong!");
          }
        });
      });
    }
  }
};

const homeAbout = {
  name: "home.about",
  url: "/about",
  component: "homeAboutComponent",
  resolve: {
    loadAboutModule: ($ocLazyLoad) => {
      return new Promise((resolve, reject) => {
        require.ensure([], () => {
          // load whole module
          let module = require("./about/about.module");

          $ocLazyLoad.load({
            name: "home.about.module"
          });

          if (module.name) {
            resolve(module.name);
          } else {
            reject("Ooops, somethig went wrong!");
          }
        });
      });
    }
  }
};

export { homeIndex, homeAbout };
