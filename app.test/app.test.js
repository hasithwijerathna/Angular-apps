(function(){
	var app = angular.module('sampleApp', []);

	app.controller('AppCtrl', function($scope){
		$scope.name = 'Test Name';

		var element = angular.element(document.querySelector('#name_input'));
		// var element = angular.element('.name_input1');

		element.on('keyup', function(event){
			console.log("Name from scope: "+$scope.name+ ", Name from element: "+element.val());
		});

		$scope.stats = [];

		element.on('mouseenter', function(event){
			console.log("mouse enter...! "+ event.type);
			$scope.stats.push({X: event.screenX, Y: event.screenY});
		});

		element.on('mouseleave', function(event){
			console.log("mouse leave...! "+ event.type+", "+event.screenX);
			console.log(JSON.stringify($scope.stats));
		});
	});
})()