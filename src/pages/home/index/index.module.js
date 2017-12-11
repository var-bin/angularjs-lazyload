// index.module.js

"use strict";

import angular from "angular";

class HomeIndexController {
  constructor() {
    this.title = "HomeComponent";
  }
}

class HomeIndexComponent {
  constructor() {
    this.template = require("./index.view.html");
    this.controller = HomeIndexController;
  }
}

angular
  .module("home.module", [])
  .component("homeComponent", new HomeIndexComponent());
