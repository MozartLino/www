function homeController($scope, $window, $http) {

	lista = function() {
		$http.get('http://ufc.rlino.cloudbees.net/eventos/abertos').success(function(data) {
			$scope.abertos = data;
		});

		$http.get('http://ufc.rlino.cloudbees.net/eventos/fechados').success(function(data) {
			$scope.fechados = data;
		});
	}();
}