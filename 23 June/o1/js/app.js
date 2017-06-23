var app=angular.module('myapp',['ngRoute']);
// npm i -g http-server
// http-server
app.config(function($routeProvider){
	console.log('Hello config');
	// $routeProvider.when(string,object)
	// String->Path, Object -> Information(content,controller)
	$routeProvider.when('/',{
		templateUrl:'views/home.html',
		controller:'HomeController'
	});
	$routeProvider.when('/a',{
		templateUrl:'views/second.html',
		controller:'SecondController'
	});
	$routeProvider.when('/view',{
		templateUrl:'views/view.html',
		controller:'ViewController'
	});
	$routeProvider.when('/product/:product_id',{
		templateUrl:'views/product.html',
		controller:'ProductController'
	});
	$routeProvider.when('/test',{
		templateUrl:'views/link.html',
		controller:'LinkController'
	});
});

app.run(function(){
	console.log('Hello run');
});

app.controller('HomeController',function(){
	console.log('Hello home controller');
});
app.controller('SecondController',function($scope,$rootScope,$location){
	console.log('Hello second controller');
	$scope.submitForm=function(){
		$rootScope.user=$scope.user;
		$location.path('/view');
	}
});
app.controller('ViewController',function(){
	console.log('Hello home controller');
});

app.controller('ProductController',function($scope,$routeParams){
	console.log($routeParams.product_id);
	$scope.product={name:'Product '+$routeParams.product_id};
});
app.controller('LinkController',function($scope,$location){
	console.log($location.search().mid);
	$scope.obj={
		id:$location.search().id,
		mid:$location.search().mid
	}
	//$scope.product={name:'Product '+$routeParams.product_id};
});