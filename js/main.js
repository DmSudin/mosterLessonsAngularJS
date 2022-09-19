let app = angular.module('app', []);

app.controller('mainCtrl', function($http, $scope) {
    $http.get('http://localhost:3001/books')
        .success(function(result) {
            console.error('success', result);
            $scope.books = result;
        })
        .error(function(result){
            console.error('error');
        });

        $scope.addBook = function(book) {
            console.error(book);
            $http.post('http://localhost:3001/books', book)
                .success(function(result) {
                    console.error('saved');
                    $scope.books.push(book);
                    $scope.book = null;
                })
                .error(function(result) {
                    console.error('error while saving');
                    console.error(result);
                })
        }
});
