'use strict';

var tweetBook = angular.module('tweetBook', ['ngRoute','firebase']);

tweetBook.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: "Views/Home.html",
                controller: "HomeCtrl"
            }
        ).when('/Likes',
            {
                templateUrl: "Views/Likes.html",
                controller: "LikesCtrl"
            }
        ).when('/Photos',
            {
                templateUrl: "Views/Photos.html",
                controller: "PhotoCtrl"
            }
        )
});