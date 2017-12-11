// app.routing.js

"use strict";

import { appBlog } from "./app.states";

appRouting.$inject = ["$urlRouterProvider", "$stateProvider"];

function appRouting($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state(appBlog);
}

export { appRouting };
