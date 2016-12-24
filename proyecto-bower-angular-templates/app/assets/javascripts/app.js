angular.module('proyectoTest', ['ui.router', 'templates'])		//se incluye el modulo de ui-router
													//conceptos https://github.com/angular-ui/ui-router/wiki
.config(['$stateProvider', '$urlRouterProvider',    //se agrega a la configuracion los state
	function($stateProvider, $urlRouterProvider) {	//se utilizan para definir las rutas de cada state
		$stateProvider
	    .state('home', {							//asociando a una url una template y un controlador
	    	url: '/home',
	    	templateUrl: 'home/_home.html',
	    	controller: 'MainCtrl'
	    })
	    .state('posts', {
	    	url: '/posts/{id}',
	    	templateUrl: 'posts/_posts.html',
	    	controller: 'PostsCtrl'
	    });
	    

	  $urlRouterProvider.otherwise('home');			//en caso de no existir la url redirige a state home
}]);







