(function() {
  var appName;
  angular.module('phonecatServices', ['ngResource']).service('Grails', function($resource) {
    return {
      getResource: function(scope) {
        return $resource("/" + appName + "/:controller/:action/:id", {
          controller: scope.controller || '',
          action: scope.action || '',
          id: scope.id || ''
        }, function() {});
      }
    };
  });
  angular.module('phonecatFilters', []).filter('checkmark', function() {
    return function(input) {
      if (input) {
        return '\u2713';
      } else {
        return '\u2718';
      }
    };
  });
  this.PhoneListCtrl = function($scope, Grails) {
    $scope.phones = Grails.getResource($scope).query({
      action: 'query'
    });
    return $scope.orderProp = 'age';
  };
  this.PhoneDetailCtrl = function($scope, Grails) {
    $scope.phone = Grails.getResource($scope).get({
      action: 'query'
    }, function(phone) {
      return $scope.setMainImage(phone.images[0]);
    });
    return $scope.setMainImage = function(imageUrl) {
      return $scope.mainImageUrl = imageUrl;
    };
  };
  appName = 'phonecat';
  angular.module(appName, ['phonecatFilters', 'phonecatServices']);
}).call(this);
