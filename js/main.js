let app = angular.module('app', []);


app.controller('firstCtrl', function($scope) {
    $scope.name = 'Harry';
    $scope.color = '#333333';

    $scope.reverse = function() {
        $scope.name = $scope.name.split('').reverse().join('');
    };
});






app.directive('fooBar', function() {

    return {
        scope: {
            name: '@',
            color: '=',
            reverse: '&'
        },
        template: "<div>my directive name is {{name}} <input type='text' ng-model='name'></div> <div> color in directive: {{color}}</div><input type='text' ng-model='color'> <button ng-click='reverse()'>Reverse name (directive)</button>",
        link: function(scope, element, attrs) {
            console.error('fooBar');
        }
    };
});