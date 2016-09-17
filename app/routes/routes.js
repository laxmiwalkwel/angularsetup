app
 .config(function($stateProvider, $urlRouterProvider) {

 	$urlRouterProvider.otherwise('/');

 	$stateProvider

 		.state('/', {

 			url : '/',
 			templateUrl : 'app/views/home.html'

 		})
 		.state('about', {

 			url : '/about',
 			templateUrl : 'app/views/about.html'
 		
 		});

 });