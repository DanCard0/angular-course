var app = angular.module("MyFirstApp", []);

app.controller("FirstController", function($scope){
	$scope.nombre = "Daniel";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario: "Comentario 1",
			username: "Daniel"
		},
		{
			comentario: "Comentario 2",
			username: "Andrea"
		}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
});
