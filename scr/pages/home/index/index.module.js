// index.module.js

"use strict";

import angular from "angular";
import "./index.styles.css";

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

const HOME_INDEX_MODULE = angular
  .module("home.module", [])
  .component("homeComponent", new HomeIndexComponent());

export { HOME_INDEX_MODULE };
