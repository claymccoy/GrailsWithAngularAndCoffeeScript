

describe 'service', ->
  setup = {}

  beforeEach module 'phonecatServices'

  beforeEach inject (_$httpBackend_, $rootScope, Grails) ->
    setup.httpBackend = _$httpBackend_
    setup.scope = $rootScope.$new()
    setup.grails = Grails

  describe 'Grails', ->

    it 'should call url with controller, action, and id', ->
      setup.httpBackend.expectGET('/phonecat/grailsControllerName/grailsActionName/grailsId').respond()
      setup.scope.controller = 'grailsControllerName'
      setup.scope.action = 'grailsActionName'
      setup.scope.id = 'grailsId'
      setup.grails.getResource(setup.scope).get()

    it 'should call url with only controller and action', ->
      setup.httpBackend.expectGET('/phonecat/grailsControllerName/grailsActionName').respond()
      setup.scope.controller = 'grailsControllerName'
      setup.scope.action = 'grailsActionName'
      setup.grails.getResource(setup.scope).get()

    it 'should call url with only controller and specified action', ->
      setup.httpBackend.expectGET('/phonecat/grailsControllerName/alternateGrailsActionName').respond()
      setup.scope.controller = 'grailsControllerName'
      setup.scope.action = 'grailsActionName'
      setup.grails.getResource(setup.scope).get {action: 'alternateGrailsActionName'}

    it 'should call url without controller, action, or id', ->
      setup.httpBackend.expectGET('/phonecat').respond()
      setup.grails.getResource(setup.scope).get()
