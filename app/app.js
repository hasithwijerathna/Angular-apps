var app = angular.module('sampleApp', []);

app.controller('AppCtrl', function($scope){
	$scope.loadTweets = function(){
		// alert('loading...!');
		console.log('loading...!');
	};

	$scope.deleteTweets = function(){
		// alert('deleting...!');
		console.log('deleting...!');
	}
});

app.directive('enter', function($templateCache){
	return function(scope, element, attrs){
		element.bind('mouseenter', function(){
			// console.log('mouse entered!');
			scope.$apply(attrs.enter);
			scope.$apply(attrs.delete);
		});
	//element.append($templateCache.get('newTweet.html'))
	}
});