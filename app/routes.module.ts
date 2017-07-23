import * as angular from "angular";
import * as uiRouter from "@uirouter/angularjs";
import {View1Component} from "./view1/view1.component";
import {View2Component} from "./view2/view2.component";

const routeModule: angular.IModule = angular.module("demo.routes", [uiRouter.default])
    .config([
        "$stateProvider",
        "$urlServiceProvider",
        ($stateProvider: uiRouter.StateProvider,
         $urlServiceProvider: uiRouter.UrlService) => {
            const view1: uiRouter.Ng1StateDeclaration = {
                name: "view1",
                url: "/view1",
                views: {
                    content: { component: View1Component.injectionName }
                }
            };

            const view2: uiRouter.Ng1StateDeclaration = {
                name: "view2",
                url: "/view2",
                views: {
                    content: { component: View2Component.injectionName }
                }
            };

            $stateProvider.state(view1);
            $stateProvider.state(view2);

            $urlServiceProvider.rules.otherwise({ state: view1.name })
        }
    ]);

export { routeModule };