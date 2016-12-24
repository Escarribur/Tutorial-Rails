angular.module('proyectoTest')

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
]);