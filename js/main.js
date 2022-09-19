let app = angular.module('app', ['ngMockE2E']);
app.run(function($httpBackend){
    let books = [
        {
            name: 'AngularJS'
        },
        {
            name: 'EmberJS'
        },
        {
            name: 'ReactJS'
        }
    ];
    $httpBackend.whenGET('http://localhost:3001/books').respond(200, books);
    $httpBackend.whenPOST('http://localhost:3001/books').respond(function(method, url, data) {
        let result = JSON.parse(data);
        books.push(result);
        return [200, result];
    });
});

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
