var app = angular.module('sampleApp', ['ngRoute']);

app.config(function($logProvider, $routeProvider){
	$logProvider.debugEnabled(false);

	$routeProvider
	.when('/:message', {
		template: '<h1>{{message}}</h1>',
		controller: 'RPCtrl'
	})
});

app.run(function($rootScope, $log){
	$rootScope.$log = $log;
	$rootScope.name = "Hasith";
});

app.controller('Tweet', function($scope){
	$scope.myFunc = function(event){
		$scope.$log.debug(event);		
		$scope.name = event.type;
	}

	$scope.showName = function(){
		$scope.$log.debug('Name: '+$scope.name);		
	}
});

app.controller('NameCtrl', function($scope){
	$scope.showName = function(){
		$scope.$log.info('Name: '+$scope.name);		
	}
});

app.controller('RPCtrl', function($scope, $routeProvider){
	$scope.message = $routeProvider.message
});