import * as angular from "angular";
import {app} from "../../app/app";
import "angular-mocks";

const mockModule: angular.IModule = angular.module("mockModule", [
    app.name,
    "ngMockE2E"
]);

export { mockModule };