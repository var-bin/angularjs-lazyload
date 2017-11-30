// app.js

"use strict";

import angular from "angular";
import "@uirouter/angularjs";
import "oclazyload";

import { HOME_MODULE } from "./pages/home/home.module";
import { appRouting } from "./app.routing";

const LAZY_APP =  angular
  .module("lazyApp", [
    "ui.router",
    "oc.lazyLoad",
    "homeModule"
  ])
  .config(appRouting);

export { LAZY_APP };
