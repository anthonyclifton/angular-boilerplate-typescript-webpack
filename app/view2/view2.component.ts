import * as angular from "angular";
import * as template from "./view2.html";
import {View2Controller} from "./view2.controller";

//tslint:disable no-any
export class View2Component implements angular.IComponentOptions {
    public static injectionName: string = "view2Component";
    public template: any = template;
    public controller: string = View2Controller.injectionName;
    public controllerAs: string = "view2Ctrl";
    public bindToController: boolean = true;
    public scope: {} = {};
}