'use strict';

tweetBook.factory('IFriend',
    function ($http, $q, IWarehouse) {
        return {
            getFriends: function () {
                var deffered = $q.defer();

                $http({
                    method: "GET",
                    url: "https://tuita.firebaseio.com/Profile/Friends/.json"
                }).success(function (data) {
                    deffered.resolve(data);
                }).error(function (status) {
                    deffered.reject(status);
                })

                return deffered.promise;
            },

            getFriendInfo: function () {
                for (var x = 0; x < IWarehouse.Friends.length; x++) {

                    $http.get(IWarehouse.Friends[x].friendUrl + "/Profile/.json")
                        .success(function (data) {
                            IWarehouse.FriendObj.push(data);

                            for (var x in data.Tweets) {
                                if (typeof data.Tweets[x] !== "string") {
                                    data.Tweets[x].pictureUrl = data.pictureUrl;
                                    data.Tweets[x].userName = data.userName;
                                    IWarehouse.AllTweets.push(data.Tweets[x]);
                                }
                                    
                            }
                            console.log(IWarehouse.AllTweets);
                        }).error(function (status) {
                            console.log(status);
                        })
                }
            }
        }
    });