'use strict';

angular.module('codelabApp')
    .service('Item', function ($resource) {
      return $resource('/items/:id', {id: '@id'});
    });

