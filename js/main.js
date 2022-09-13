let app = angular.module('app', []);

app.directive('fooBar', function() {
    let bookmarks = [
        {
            id: 1,
            name: 'Angular JS'
        },
        {
            id: 2,
            name: 'Ember JS'
        },
        {
            id: 3,
            name: 'React JS'
        },
    ];

    return {
        template: `<div ng-repeat="bookmark in myBookmarks">{{bookmark.name}}</div>`,        
        link: function(scope, element, attrs) {
            scope.name = 'user';
            scope.myBookmarks = bookmarks;
        }
    };
});