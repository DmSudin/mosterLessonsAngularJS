let app = angular.module('app', []);

app.directive('fooBar', function() {
    return {
        restrict: 'EAMC',
        link: function() {
            console.log('fooBar');
        }
    };

});