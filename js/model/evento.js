function eventoController($scope, $window, $http) {

	eventos = function() {

		var hashes = window.location.href.slice(
				window.location.href.indexOf('?') + 1).split('&');
		var id =  hashes[0].split('=')[1];
		
		$http.get('http://ufc.rlino.cloudbees.net/confrontos/eventos/'+id).success(function(data) {
			if (data[0] != undefined){
				$scope.evento = data[0].evento;
			}
			
			$scope.confrontos = data;
		});

	}();

}