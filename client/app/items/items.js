'use strict';

angular.module('codelabApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/items', {
        templateUrl: 'app/items/items.html',
        controller: 'ItemsCtrl'
      });
  });