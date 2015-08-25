'use strict';

angular.module('codelabApp')
  .controller('ItemsCtrl', function ($scope, Item) {

      $scope.items = Item.query();

      $scope.search = function (form) {
        if (form.$invalid) {
          return;
        }

        $scope.items = Item.search({q: $scope.query});
        
      };

  });
