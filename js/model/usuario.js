function usuarioController($scope, $window, $http) {

	lista = function() {

		var hashes = window.location.href.slice(
				window.location.href.indexOf('?') + 1).split('&');

		$http.get('http://ufc.rlino.cloudbees.net/usuarios/' + hashes[0].split('=')[1]).success(function(data) {
			$scope.usuario = data;
		});

		$http.get('http://ufc.rlino.cloudbees.net/ranking').success(function(data) {
			$scope.usuarios = data;
		});

	}();
}

function usuarioFormController($scope, $window, $http) {
			
	$scope.salva = function() {
		var url = "http://ufc.rlino.cloudbees.net/usuarios";

		$http({
			method : getMethod($scope.usuario.id),
			url : url,
			data : {
				"usuario" : $scope.usuario
			}
		}).success(function(data) {
			$window.location.href = "perfilUsuario.html";
		}).error(function(data) {
			alert(data);
		});		
	};
		
	function getMethod(value) {
		return value == null ? "POST" : "PUT";
	}
}
