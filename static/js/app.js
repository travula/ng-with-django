var app = angular.module('app', []);

app.config([
    '$controllerProvider',
    function ($controllerProvider) {
	$controllerProvider.allowGlobals();
    }
]);

app.filter('range', function() {
    return function(input, min, max) {
	for (var i=parseInt(min); i<parseInt(max); i++) {
	    input.push(i);
	}
	return input;
    };
});
