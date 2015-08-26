'use strict';

angular.module('codelabApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/items'
      });

    $locationProvider.html5Mode(true);
  });
