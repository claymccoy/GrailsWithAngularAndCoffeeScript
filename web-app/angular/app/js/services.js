'use strict';

var appName = 'phonecat';

/* Services */
angular.module('phonecatServices', ['ngResource'])
    .service('Grails', function ($resource) {
        return {
            getResource: function (scope) {
                return $resource('/' + appName + '/:controller/:action/:id',
                    {controller: scope.controller || '', action: scope.action || '', id: scope.id || ''}, {});
            }
        };
    });
