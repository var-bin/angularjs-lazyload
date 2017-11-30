// home.module.routing.js

"use strict";

import { homeIndex, homeAbout } from "./home.module.states";

homeRouting.$inject = ["$urlRouterProvider", "$stateProvider"];

function homeRouting($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state(homeIndex);
  $stateProvider.state(homeAbout);
}

export { homeRouting };
