'use strict';

tweetBook.factory('IWarehouse',
        function ($http, $q) {
            return {
                      Profile: {
                            name: "John Doe",
                            born: "1/1/2000",
                            lives: "Nowhere, US",
                            username: "JDoe"
                      },

                      Friends: [{ name: "James" }, { name: "Jenny" }, { name: "Jeff" }, { name: "Johnny" }],

                      Likes: 59,

                      GetProfileInfo: function () {
                          var deffered = $q.defer();

                          $http({
                              method: "GET",
                              url: "https://tuita.firebaseio.com/Profile/.json"
                          }).success(function (data) {
                              deffered.resolve(data);
                          }).error(function (status) {
                              deffered.reject(status);
                          })

                          return deffered.promise;
                      },
                      FriendObj: [],
                      AllTweets: [],
                      Favorites: [],
                      Photos: []

            }
                
        }
    );