'use strict';

angular.module('codelabApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/items/:id', {
        templateUrl: 'app/item/item.html',
        controller: 'ItemCtrl'
      });
  });