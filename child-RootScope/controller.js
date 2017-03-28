angular.module("MyFirstApp", [])
	.run(function($rootScope){
		$rootScope.nombre = "Daniel";
	})
	.controller("FirstController", function($scope){
		$scope.nombre = "Augusto";
		setTimeout(function() {
			$scope.$apply(function(){
				$scope.nombre = "Cardozo";
			})
		}, 1000);
	})
	.controller("ChildController", function($scope){
		
	});