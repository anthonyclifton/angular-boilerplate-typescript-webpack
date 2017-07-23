import * as angular from "angular";
import {View1Component} from "./view1.component";
import {View1Controller} from "./view1.controller";

const view1Module: angular.IModule = angular.module("demo.view1", []);

view1Module.component(View1Component.injectionName, new View1Component());

view1Module.controller(View1Controller.injectionName, View1Controller);

export { view1Module };