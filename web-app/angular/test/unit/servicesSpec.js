'use strict';

/* jasmine specs for services go here */

describe('service', function() {
    var grails, scope, $httpBackend;

    beforeEach(module('phonecatServices'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, Grails) {
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        grails = Grails;
    }));

    describe('Grails', function(){

        it('should call url with controller, action, and id', function() {
            $httpBackend.expectGET('/phonecat/grailsControllerName/grailsActionName/grailsId').respond();
            scope.controller = 'grailsControllerName';
            scope.action = 'grailsActionName';
            scope.id = 'grailsId';
            grails.getResource(scope).get();
        });

        it('should call url with only controller and action', function() {
            $httpBackend.expectGET('/phonecat/grailsControllerName/grailsActionName').respond();
            scope.controller = 'grailsControllerName';
            scope.action = 'grailsActionName';
            grails.getResource(scope).get();
        });

        it('should call url with only controller and specified action', function() {
            $httpBackend.expectGET('/phonecat/grailsControllerName/alternateGrailsActionName').respond();
            scope.controller = 'grailsControllerName';
            scope.action = 'grailsActionName';
            grails.getResource(scope).get({action: 'alternateGrailsActionName'});
        });

        it('should call url without controller, action, or id', function() {
            $httpBackend.expectGET('/phonecat').respond();
            grails.getResource(scope).get();
        });

    });

});
