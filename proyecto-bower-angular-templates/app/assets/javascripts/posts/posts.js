angular.module('proyectoTest')

.factory('posts', [function(){  //agregamos una Factory
	var o = {
    	posts: []
  	};
  	return o;
}]);