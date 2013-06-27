function lutadorController($scope, $window, $http) {

	lista = function() {

		$scope.pesado = [];
		$scope.meioPesado = [];
		$scope.medio = [];
		$scope.meioMedio = [];
		$scope.leve = [];
		$scope.pena = [];
		$scope.galo = [];
		$scope.mosca = [];

		$http.get('http://ufc.rlino.cloudbees.net/lutadores').success(
				function(lutadores) {

					var length = lutadores.length, lutador = null;
					for ( var i = 0; i < length; i++) {
						lutador = lutadores[i];
						if (lutador.peso > 110) {
							$scope.pesado.push(lutador);
						} else if (lutador.peso > 95 && lutador.peso <= 110) {
							$scope.meioPesado.push(lutador);
						} else if (lutador.peso > 80 && lutador.peso <= 95) {
							$scope.medio.push(lutador);
						} else if (lutador.peso > 70 && lutador.peso <= 80) {
							$scope.meioMedio.push(lutador);
						} else if (lutador.peso > 60 && lutador.peso <= 70) {
							$scope.leve.push(lutador);
						} else if (lutador.peso > 50 && lutador.peso <= 60) {
							$scope.pena.push(lutador);
						} else if (lutador.peso > 40 && lutador.peso <= 50) {
							$scope.galo.push(lutador);
						} else {
							$scope.mosca.push(lutador);
						}
					}
				});
	}();

	$scope.redirectPerfil = function() {
		window.location = "#perfilLutador";
	};
}

function lutadorPerfilController($scope, $window, $http) {
	var hashes = window.location.href.slice(
			window.location.href.indexOf('?') + 1).split('&');

	$http.get(
			'http://ufc.rlino.cloudbees.net/lutadores/'
					+ hashes[0].split('=')[1]).success(function(data) {
		$scope.lutador = data;
	});
}
