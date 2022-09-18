let app = angular.module('app', []);

app.run(function($templateCache) {
    $templateCache.put('bookmarks.html', "<div ng-repeat='bookmark in bookmarks'>{{bookmark.name}}</div>")

});

app.controller('mainCtrl', function($scope) {
    console.error('ctrl scope: ', $scope);
    $scope.posts = [
        {
            name: 'This is post about cats'
        },
        {
            name: 'This is post about dogs'
        },
    ];

    $scope.getPosts = function() {
        return $scope.posts;        
    };
});

app.directive('post', function() {

    return {
        scope: false,
        template: "<div ng-repeat='post in getPosts()'>{{post.name}}</div>",
        link: function(scope, element, attrs) {
            console.error('scope', scope);
        }
    };
});