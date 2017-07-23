import * as angular from "angular";
import * as template from "./view1.html"
import {View1Controller} from "./view1.controller";

//tslint:disable no-any
export class View1Component implements angular.IComponentOptions {
    public static injectionName: string = "view1Component";
    public template: any = template;
    public controller: string = View1Controller.injectionName;
    public controllerAs: string = "view1Ctrl";
    public bindToController: boolean = true;
    public scope: {} = {};
}