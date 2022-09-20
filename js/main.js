let app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeCtrl'
        })
        .when('/posts', {
            templateUrl: 'posts.html',
            controller: 'postsCtrl'
        })
        .when('/posts/:postId', {
            templateUrl: 'post.html',
            controller: 'postCtrl'
        })
        .otherwise({
            template: '404 - no such page'
        })
});

app.run(function($rootScope) {
    $rootScope.$on('$routeChangeStart', function(event, current, previous, reject) {
        console.error('changeStart', arguments);
    });

    $rootScope.$on('$routeChangeSuccess', function(event, current, previous, reject) {
        console.error('changeSuccess', arguments);
        $rootScope.currentPath = current.$$route.originalPath;
    });

});

app.controller('homeCtrl', function($scope) {
    console.error('homeCtrl');
    $scope.model = {
        message: 'this is homepage'
    };
});

app.controller('postCtrl', function($scope, $routeParams, postsFactory) {
    let postId = Number($routeParams.postId);
    $scope.post = _.findWhere(postsFactory, {id: postId});

});

app.controller('postsCtrl', function($scope, postsFactory) {
    $scope.posts = postsFactory;
});

app.controller('pathCtrl', function() {});

app.factory('postsFactory', function() {
    return [
        {
            id: 1,
            name: 'post one'
        },
        {
            id: 2,
            name: 'post two'
        },
        {
            id: 3,
            name: 'post three'
        },
    ];
});