'use strict';

tweetBook.factory('IPhoto', function ($http, $q) {
    return {
        postImage: function (image) {
                image.time = Date.now();

                var url = "https://tuita.firebaseio.com/Profile/Images/.json";
                var deffered = $q.defer();

                $http.post(url, image).success(function(data){
                    deffered.resolve(data);
                }).error(function(status){
                    deffered.reject(status);
                })

                return deffered.promise;
        }
    }
});