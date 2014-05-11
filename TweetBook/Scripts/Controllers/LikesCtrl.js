'use strict';

tweetBook.controller('LikesCtrl', function ($scope, IWarehouse) {
    $scope.favorites = IWarehouse.Favorites;

})