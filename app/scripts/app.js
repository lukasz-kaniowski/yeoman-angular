'use strict';

var yeomanAngularApp = angular.module('yeomanAngularApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'TasksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
