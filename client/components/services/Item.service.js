'use strict';

angular.module('codelabApp')
    .service('Item', function ($resource) {
      return $resource('/api/items/:id', {id: '@id'}, {
            query: {
              isArray: true,
              transformResponse: function (data) {
                return angular.fromJson(data).data.items;
              }
            },
            get: {
              transformResponse: function (data) {
                return angular.fromJson(data).data.item[0];
              }
            }
          }
      );
    });

