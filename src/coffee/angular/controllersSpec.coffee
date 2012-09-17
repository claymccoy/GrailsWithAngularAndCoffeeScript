

describe 'PhoneCat controllers', ->

  beforeEach ->
    this.addMatchers {
      toEqualData: (expected) -> angular.equals this.actual, expected
    }

  beforeEach module 'phonecatServices'

  beforeEach inject ($rootScope) ->
    $rootScope.controller = 'phone'

  describe 'PhoneListCtrl', ->
    setup = {}

    beforeEach inject (_$httpBackend_, $rootScope, $controller, $rootElement) ->
      setup.httpBackend = _$httpBackend_
      setup.httpBackend.expectGET('/phonecat/phone/query').
      respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}])
      setup.scope = $rootScope.$new()
      setup.ctrl = $controller PhoneListCtrl, {$scope: setup.scope}

    it 'should create "phones" model with 2 phones fetched from xhr', ->
      expect(setup.scope.phones).toEqualData []
      setup.httpBackend.flush()
      expect(setup.scope.phones).toEqualData [{name: 'Nexus S'}, {name: 'Motorola DROID'}]

    it 'should set the default value of orderProp model', ->
      expect(setup.scope.orderProp).toBe 'age'

    describe 'PhoneDetailCtrl', ->
      setup = {}
      xyzPhoneData = {
        name: 'phone xyz',
        images: ['image/url1.png', 'image/url2.png']
      }

      beforeEach inject (_$httpBackend_, $rootScope, $routeParams, $controller) ->
        setup.httpBackend = _$httpBackend_
        setup.httpBackend.expectGET('/phonecat/phone/query/xyz').respond xyzPhoneData
        setup.scope = $rootScope.$new()
        setup.scope.id = 'xyz'
        setup.ctrl = $controller PhoneDetailCtrl, {$scope: setup.scope}

      it 'should fetch phone detail', ->
        expect(setup.scope.phone).toEqualData {}
        setup.httpBackend.flush()
        expect(setup.scope.phone).toEqualData xyzPhoneData
