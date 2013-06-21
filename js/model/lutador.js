function lutadorController($scope, $window, $http) {

	lista = function() {

		var hashes = window.location.href.slice(
				window.location.href.indexOf('?') + 1).split('&');

		$http.get(
				'http://ufc.ricardolino.cloudbees.net/lutadores/'
						+ hashes[0].split('=')[1]).success(function(data) {

			$scope.lutador = data;
		});
		
		$http.get('http://ufc.ricardolino.cloudbees.net/lutadores').success(
				function(data) {

					$scope.lutadores = data;
				});


	}();
}


