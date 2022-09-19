
let app = angular.module('app', []);

app.directive('uiSource', function(){
    return {
        compile: function(element) {
            let escape = function(content) {
                return content.replace(/\</g, '&lt;')
                                .replace(/\>/g, '&gt;')

            };

            let pre = angular.element("<pre class='prettyprint'></pre>");
            let pretty = prettyPrintOne(escape(element.html()));
            console.error(pretty);
            pre.append(pretty);
            element.replaceWith(pre);
        }
    };
});