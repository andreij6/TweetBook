'use strict';

tweetBook.controller('HomeCtrl', function ($scope, IWarehouse, IFriend, IMessage) {
    $scope.profile = IWarehouse.profile;

    $scope.friends = IWarehouse.FriendObj;

    $scope.Tweets = IWarehouse.AllTweets;

    $scope.Favorite = function (tweet) {
        IMessage.favoriteMessage(tweet).then(
            function (data) {
                tweet.likeKey = data.name;
                IWarehouse.Favorites.push(tweet);
            },
            function (statusCode) {
                console.log(statusCode)
            }

            );
    };

    $scope.DeleteTweet = function (tweet) {
        IMessage.deleteTweet(tweet).then(
                function (data) {
                    var index = IWarehouse.AllTweets.indexOf(tweet);

                    IWarehouse.AllTweets.splice(index, 1);

                },
                function (statusCode) {
                    console.log(statusCode);
                }
            );
    };

    $scope.SetupEdit = function (tweet) {
        document.getElementById("messageIn").value = tweet.message;

        if (tweet.image)
            document.getElementById("imageIn").value = tweet.image;


    };

    $scope.EditTweet = function (tweet) { };

    $scope.enableCBox = function () {

    }


});