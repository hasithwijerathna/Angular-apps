var app = angular.module('sampleApp', []);

app.controller('AppCtrl', function($scope){
	$scope.calling = function(message){
		alert(message);
	};

	$scope.callHome = function(message){
		alert(message+" Calling home... ");
	};

	$scope.callOffice = function(message){
		alert(message+" Calling office...");
	};

	$scope.ctrlFlavor = "Tea"

	$scope.vehicleType = "TATA"
});

app.directive('phone', function(){
	return {
		restrict:'E',
		scope:{
			dial:'&',
			value:'@'
		},
		template:'<input type="text" ng-model="msg" style="margin-right: 10px">' +
			'<input type="button" value="{{value}}" ng-click="dial({message:msg})"><br><br>'
	}
});

app.directive('drink', function(){
	return{
		restrict:'E',
		scope:{
			flavor:'='
		},
		template:'<input type="text" ng-model="flavor"><br>'
	}
});

app.directive('vehicle', function(){
	return{
		restrict:'E',
		scope:{
			model:'@'
		},
		template:'<div>{{model}}</div><br>'
	}
});