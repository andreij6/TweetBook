'use strict';

tweetBook.factory('IMessage',
        function ($http, $q, IWarehouse) {
            return {
                tweet: function (message) {
                    message.time = Date.now();

                    var url = "https://tuita.firebaseio.com/Profile/Tweets/.json";
                    var deffered = $q.defer();

                    $http.post(url, message).success(function (data) {
                        deffered.resolve(data);
                    }).error(function (status) {
                        deffered.reject(status);
                    })

                    return deffered.promise;
                },
                favoriteMessage: function (message) {
                    var url = "https://tuita.firebaseio.com/Profile/Likes/.json";
                    var deffered = $q.defer();

                    $http.post(url, message).success(function (data) {
                        deffered.resolve(data);
                    }).error(function (status) {
                        deffered.reject(status);
                    })

                    return deffered.promise;
                },

                deleteTweet: function (tweet) {
                    var deffered = $q.defer();
                    var url = "https://tuita.firebaseio.com/Profile/Tweets/"+ tweet.key +".json";

                    $http.delete(url).success(function (data) {
                        deffered.resolve(data);
                    }).error(function (status) {
                        deffered.reject(status);
                    })

                    return deffered.promise;
                },

                editTweet: function (tweet) {

                }

            }
        }
    );