'use strict';

angular.module('codelabApp')
    .controller('ItemCtrl', function ($scope, $stateParams, Item) {

      $scope.item = Item.get({id: $stateParams.id});

      $scope.buy = function (item) {

      };
    });
