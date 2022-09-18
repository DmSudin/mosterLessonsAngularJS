let app = angular.module('app', []);

app.run(function($templateCache) {
    $templateCache.put('bookmarks.html', "<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div>")

});

app.controller('booksCtrl', function($scope) {
    $scope.name = 'Harry';
    console.error('scope from ctrl: ', $scope);
});






app.directive('book', function() {
    return {
        scope: true,
        template: "<div>My name is {{name}} <input type='text' ng-model=name></div>",
        link: function(scope, element, attrs) {
            console.error('scope from directive', scope);
            console.error(scope.name);
        }
    };
});