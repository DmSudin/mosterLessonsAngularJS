let app = angular.module('app', []);

app.controller('myBooksCtrl', function($scope) {
    $scope.showBook = function() {
        console.log('this is some book');
    };
});

app.controller('angularBookCtrl', function($scope) {
    $scope.showBook = function() {
        console.log('this is angular js book');
    };
});


app.controller('emberBookCtrl', function($scope) {

});
