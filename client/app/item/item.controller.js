'use strict';

angular.module('codelabApp')
    .controller('ItemCtrl', function ($scope, $routeParams, Item) {

      $scope.item = Item.get({id: $routeParams.id});

      $scope.buy = function (item) {

      };
    });
