import * as angular from "angular";
import {View2Component} from "./view2.component";
import {View2Controller} from "./view2.controller";

const view2Module: angular.IModule = angular.module("demo.view2", []);

view2Module.component(View2Component.injectionName, new View2Component());

view2Module.controller(View2Controller.injectionName, View2Controller);

export { view2Module };