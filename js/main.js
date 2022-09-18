let app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
});

app.directive('fooBar', function() {
    let bookmarks = [
        {
            id: 1,
            name: 'EmberJS'
        },
        {
            id: 2,
            name: 'AngularJS'
        }
    ];
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'bookmarks.html',
        link: function(scope, element, attrs) {
            scope.bookmarks = bookmarks;            
        }
    };
});