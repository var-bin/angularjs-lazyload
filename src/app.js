// app.js

"use strict";

import angular from "angular";
import "@uirouter/angularjs";
import "oclazyload";

import "./pages/home/home.module";

const LAZY_APP =  angular
  .module("lazyApp", [
    "ui.router",
    "oc.lazyLoad",
    "homeModule"
  ]);

export { LAZY_APP };
