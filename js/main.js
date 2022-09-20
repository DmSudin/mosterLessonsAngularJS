let app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })
        .when('/posts', {
            template: '<h1>Posts</h1>'
        })
});

app.controller('homeCtrl', function($scope) {
    console.error('homeCtrl');
    $scope.model = {
        message: 'this is homepage'
    };
});