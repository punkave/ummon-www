'use strict';


// Declare app level module which depends on filters, and services
angular.module('ummon', ['ummon.services'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'partials/tasks',
        controller: TasksCtrl
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }]);