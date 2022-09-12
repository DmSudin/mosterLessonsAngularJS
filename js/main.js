let app = angular.module('app', []);

app.controller('firstCtrl', function($scope, myFactory) {
    $scope.myFactory = myFactory;
    console.log('firstCtrl')
    $scope.hello = 'hello world';
});

app.controller('secondCtrl', function($scope, myFactory) {
    $scope.myFactory = myFactory;
    console.log('secondCtrl')
    $scope.hello = 'hello world';
});

app.factory('myFactory', function() {
    return {
        hello: 'hello world'
    };
});