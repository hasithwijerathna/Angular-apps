var app = angular.module('sampleApp', []);

app.directive('clock', function(){
	return{
		restrict: 'E',
		scope:{
			timezone:'@'
		},
		template:'<div>12:00PM {{timezone}}</div>'
	}
});

app.directive('panel', function(){
	return {
		restrict:'E',
		transclude:true,
		scope:{
			title:'@'
		},
		template:'<div style="border: 3px solid black; margin: 5px">' +
				'<div style="background-color: deepskyblue">{{title}}</div>'+
				'<div ng-transclude></div>'+
		'</div>'
	}
});