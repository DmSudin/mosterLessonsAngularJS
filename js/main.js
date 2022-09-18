let app = angular.module('app', []);

app.run(function($templateCache) {
    $templateCache.put('bookmarks.html', "<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div>")

});

app.controller('mainCtrl', function($scope) {
});

app.directive('fooBar', function($templateCache) {
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
            console.error($templateCache.info());
        }
    };
});