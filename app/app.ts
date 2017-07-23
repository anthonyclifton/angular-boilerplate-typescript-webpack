import * as angular from "angular";
import {routeModule} from "./routes.module";
import {view1Module} from "./view1/view1.module";
import {view2Module} from "./view2/view2.module";

const app: angular.IModule = angular.module("demo", [
    "demo.view1",
    "demo.view2",
    routeModule.name,
    view1Module.name,
    view2Module.name
]);

app.config([
    '$locationProvider',
    function($locationProvider: any) {
        $locationProvider.hashPrefix('!');
    }
]);

export { app };