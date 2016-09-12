var app = angular.module("app",  ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: '/pages/landing.html'
    })
    .when('/about', {
        templateUrl: '/pages/about.html'
    })
    .when('/contact', {
        templateUrl: '/pages/contact.html'
    })
});