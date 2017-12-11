// app.states.js

"use strict";

const appBlog = {
  name: "blog",
  url: "/blog",
  component: "blogComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return import(/* webpackChunkName: "blog.module" */ "./pages/blog/blog.module")
      .then(mod => $ocLazyLoad.load(mod.BLOG_MODULE))
      .catch(err => {
        throw new Error("Ooops, something went wrong, " + err);
      });
  }
};

export { appBlog };
