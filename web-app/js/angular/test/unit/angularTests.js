(function() {
  describe('service', function() {
    var setup;
    setup = {};
    beforeEach(module('phonecatServices'));
    beforeEach(inject(function(_$httpBackend_, $rootScope, Grails) {
      setup.httpBackend = _$httpBackend_;
      setup.scope = $rootScope.$new();
      return setup.grails = Grails;
    }));
    return describe('Grails', function() {
      it('should call url with controller, action, and id', function() {
        setup.httpBackend.expectGET('/phonecat/grailsControllerName/grailsActionName/grailsId').respond();
        setup.scope.controller = 'grailsControllerName';
        setup.scope.action = 'grailsActionName';
        setup.scope.id = 'grailsId';
        return setup.grails.getResource(setup.scope).get();
      });
      it('should call url with only controller and action', function() {
        setup.httpBackend.expectGET('/phonecat/grailsControllerName/grailsActionName').respond();
        setup.scope.controller = 'grailsControllerName';
        setup.scope.action = 'grailsActionName';
        return setup.grails.getResource(setup.scope).get();
      });
      it('should call url with only controller and specified action', function() {
        setup.httpBackend.expectGET('/phonecat/grailsControllerName/alternateGrailsActionName').respond();
        setup.scope.controller = 'grailsControllerName';
        setup.scope.action = 'grailsActionName';
        return setup.grails.getResource(setup.scope).get({
          action: 'alternateGrailsActionName'
        });
      });
      return it('should call url without controller, action, or id', function() {
        setup.httpBackend.expectGET('/phonecat').respond();
        return setup.grails.getResource(setup.scope).get();
      });
    });
  });
  describe('filter', function() {
    beforeEach(module('phonecatFilters'));
    return describe('checkmark', function() {
      return it('should convert boolean values to unicode checkmark or cross', inject(function(checkmarkFilter) {
        expect(checkmarkFilter(true)).toBe('\u2713');
        return expect(checkmarkFilter(false)).toBe('\u2718');
      }));
    });
  });
  describe('PhoneCat controllers', function() {
    beforeEach(function() {
      return this.addMatchers({
        toEqualData: function(expected) {
          return angular.equals(this.actual, expected);
        }
      });
    });
    beforeEach(module('phonecatServices'));
    beforeEach(inject(function($rootScope) {
      return $rootScope.controller = 'phone';
    }));
    return describe('PhoneListCtrl', function() {
      var setup;
      setup = {};
      beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, $rootElement) {
        setup.httpBackend = _$httpBackend_;
        setup.httpBackend.expectGET('/phonecat/phone/query').respond([
          {
            name: 'Nexus S'
          }, {
            name: 'Motorola DROID'
          }
        ]);
        setup.scope = $rootScope.$new();
        return setup.ctrl = $controller(PhoneListCtrl, {
          $scope: setup.scope
        });
      }));
      it('should create "phones" model with 2 phones fetched from xhr', function() {
        expect(setup.scope.phones).toEqualData([]);
        setup.httpBackend.flush();
        return expect(setup.scope.phones).toEqualData([
          {
            name: 'Nexus S'
          }, {
            name: 'Motorola DROID'
          }
        ]);
      });
      it('should set the default value of orderProp model', function() {
        return expect(setup.scope.orderProp).toBe('age');
      });
      return describe('PhoneDetailCtrl', function() {
        var xyzPhoneData;
        setup = {};
        xyzPhoneData = {
          name: 'phone xyz',
          images: ['image/url1.png', 'image/url2.png']
        };
        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
          setup.httpBackend = _$httpBackend_;
          setup.httpBackend.expectGET('/phonecat/phone/query/xyz').respond(xyzPhoneData);
          setup.scope = $rootScope.$new();
          setup.scope.id = 'xyz';
          return setup.ctrl = $controller(PhoneDetailCtrl, {
            $scope: setup.scope
          });
        }));
        return it('should fetch phone detail', function() {
          expect(setup.scope.phone).toEqualData({});
          setup.httpBackend.flush();
          return expect(setup.scope.phone).toEqualData(xyzPhoneData);
        });
      });
    });
  });
}).call(this);
