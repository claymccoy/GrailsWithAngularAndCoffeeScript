'use strict';

/* Controllers */

function PhoneListCtrl($scope, Grails) {
    $scope.phones = Grails.getResource($scope).query({action: 'query'});
    $scope.orderProp = 'age';
}

function PhoneDetailCtrl($scope, Grails) {
    $scope.phone = Grails.getResource($scope).get({action: 'query'}, function(phone) {
        $scope.setMainImage(phone.images[0]);
    });

    $scope.setMainImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    };
}
