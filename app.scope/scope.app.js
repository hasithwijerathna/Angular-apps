var app = angular.module('sampleApp', []);

app.controller('AppCtrl', function($scope){
	console.log("Contriller: "+ $scope);

	$scope.onSearch = function(){
		console.log('onSearch');
	}
});

app.directive('app', function(){
	return{
		scope:{},
		link: function(scope){
			console.log("Derective: "+scope);
		}

	}
})