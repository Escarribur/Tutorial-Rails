angular.module('proyectoTest')

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