'use strict';

tweetBook.controller('IndexCtrl', function ($scope, IWarehouse, IFriend, IMessage) {

    $scope.getProfile = function () {
        var friends = [];
        var tweets = [];

        IWarehouse.GetProfileInfo().then(
                function (data) {
                    IWarehouse.Profile = data;
                    $scope.profile = IWarehouse.Profile;

                    for (var x in data.Friends)
                    {
                        data.Friends[x].key = x;
                        friends.push(data.Friends[x]);
                    }

                    for (var x in data.Tweets)
                    {
                        data.Tweets[x].userName = data.userName;
                        data.Tweets[x].key = x;
                        data.Tweets[x].mine = true;
                        data.Tweets[x].pictureUrl = data.pictureUrl;
                        tweets.push(data.Tweets[x]);
                    }

                    for (var x in data.Images)
                    {
                        IWarehouse.Photos.push(data.Images[x]);
                    }

                    for (var x in data.Likes)
                    {
                        IWarehouse.Favorites.push(data.Likes[x]);
                        $scope.profile.likes = IWarehouse.Favorites;
                    }

                    IWarehouse.Tweets = tweets;
                    IWarehouse.Friends = friends;

                    for (var x in tweets)
                    {
                        IWarehouse.AllTweets.push(tweets[x]);
                    }
                    
                    IFriend.getFriendInfo();

                    $scope.tweets = IWarehouse.Tweets
                    $scope.friends = IWarehouse.Friends;

                },
                function (statusCode) {
                    console.log(statusCode);
                }
            );
    };

    $scope.getProfile();

    $scope.tweetIt = function (tweet) {

        IMessage.tweet(tweet).then(
                function (data) {
                    tweet.key = data.name;
                    tweet.mine = true;
                    tweet.userName = $scope.profile.userName;
                    tweet.pictureUrl = $scope.profile.pictureUrl;
                    $scope.tweets.push(tweet);
                    IWarehouse.AllTweets.push(tweet);
                    
                    document.getElementById("messageIn").value = " ";
                    document.getElementById("imageIn").value = " ";
                },
                function (statusCode) {
                    console.log(statusCode);
                }
            );
    };

});