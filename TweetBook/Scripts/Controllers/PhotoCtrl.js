'use strict';

tweetBook.controller('PhotoCtrl', function ($scope, IPhoto, IWarehouse) {
    $scope.postImage = function (image) {
        IPhoto.postImage(image).then(
                function (data) {
                    image.key = data.name;
                    IWarehouse.Photos.push(image);

                    document.getElementById("newPhoto").value = " ";
                },
                function (statusCode) {
                    console.log(statusCode);
                }
            );
    }

    $scope.photos = IWarehouse.Photos;

});