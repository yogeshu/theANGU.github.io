//var myApp = angular.module('blogApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'view/index-view.html',
        	// Which controller it should use
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'myBlog'
        })
        .when('/blog/:url1/:url2',{

        	templateUrl     : 'view/blog-view.html',
        	controller 		: 'viewController',
        	controllerAs 	: 'viewBlog'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);
