angular.module('proyectoTest', ['ui.router'])		//se incluye el modulo de ui-router
													//conceptos https://github.com/angular-ui/ui-router/wiki
.config(['$stateProvider', '$urlRouterProvider',    //se agrega a la configuracion los state
	function($stateProvider, $urlRouterProvider) {	//se utilizan para definir las rutas de cada state
		$stateProvider
	    .state('home', {							//asociando a una url una template y un controlador
	    	url: '/home',
	    	templateUrl: '/home.html',
	    	controller: 'MainCtrl'
	    })
	    .state('posts', {
	    	url: '/posts/{id}',
	    	templateUrl: '/posts.html',
	    	controller: 'PostsCtrl'
	    });
	    

	  $urlRouterProvider.otherwise('home');			//en caso de no existir la url redirige a state home
}])

.factory('posts', [function(){  //agregamos una Factory
	var o = {
    	posts: []
  	};
  	return o;
}])

.controller('MainCtrl', ['$scope', 'posts',  //se inyecta el servicio de factory en el controlador

	function($scope, posts){	//se agrega como parametro de la funcion
		$scope.test = 'Hello world!';	
		$scope.posts = posts.posts;  //se asigna posts.posts que corresponde al factory al que scope

		$scope.addPost = function(){	
			if(!$scope.title || $scope.title === '') { return; }
			$scope.posts.push({				
				title: $scope.title,
				link: $scope.link,
				upvotes: 0,
				comments: [			//agregamos comentarios falsos para mostrar :3
					{author: 'Nico', body: 'Wena!', upvotes: 0},
					{author: 'Luis', body: 'Buena idea, pero esta todo mal!', upvotes: 0}
				]				
			});
			$scope.title = '';				
			$scope.link = '';
		};

		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;					
		};

	}
])


.controller('PostsCtrl', ['$scope', '$stateParams', 'posts',		//nuevo controlador para post
	function($scope, $stateParams, posts){							//stateparams hace referencia a parametros del state en la url
		$scope.post = posts.posts[$stateParams.id];					//Por ahora consideramos el index del post como su id

		$scope.addComment = function(){
			if ($scope.body === '') {return;}
			$scope.post.comments.push({
				body: $scope.body,
				author: 'user',
				upvotes: 0
			});
			$scope.body = '';
		};
	}
]);
