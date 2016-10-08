var app = angular.module('sampleApp', []);

app.factory('Data', function(){
	return {message: "I am hasith wijerathna"}
});

app.controller('AppCtrl', function($scope, Data){
	$scope.data = Data;

});

app.filter('revers', function(Data){
	return function(text){
			return text.split(" ").reverse().join(" ");
		}
});

app.directive('zippy', function($templateCache){
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@'
		},
		template: $templateCache.get('zippyTemplate.html'),/*'<div><h3 ng-click="toggelContent()">{{title | revers}}</h3><div ng-show="isContentVisible" ng-transclude>Hello World</div></div>',*/
		link: function(scope){
			scope.isContentVisible = false;

			scope.toggelContent = function(){
				console.log('Title: '+scope.title);
				scope.isContentVisible = !scope.isContentVisible;	
			}
		}
	}
});