let app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
    $scope.name = 'Bob';
});

app.directive('fooBar', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: 'this is directive',
        link: function(scope, element, attrs, ctrl, transclude) {
            transclude(scope, function(clone, scope) {
                console.log('!', clone, scope);
                element.append(clone);
            });
            
        }
    };
});