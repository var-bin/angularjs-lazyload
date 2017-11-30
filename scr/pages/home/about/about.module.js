// about.module.js

"use strict";

import angular from "angular";

class HomeAboutController {
  constructor() {
    this.title = "HomeAboutComponent";
  }
}

class HomeAboutComponent {
  constructor() {
    this.template = require("./about.view.html");
    this.controller = HomeAboutController;
  }
}

const HOME_ABOUT_MODULE = angular
  .module("home.about.module", [])
  .component("homeAboutComponent", new HomeAboutComponent());

export { HOME_ABOUT_MODULE };
