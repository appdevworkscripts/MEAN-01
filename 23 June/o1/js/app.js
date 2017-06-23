var app=angular.module('myapp',['ngRoute','Mymodul']);
// npm i -g http-server
// http-server
app.config(function($routeProvider,$locationProvider){
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
	$routeProvider.otherwise({
		redirectTo:'/'
	});
	$locationProvider.html5Mode(true);
});

app.run(function(){
	console.log('Hello run');
});

app.controller('HomeController',function($scope){
	console.log('Hello home controller');
	$scope.x='heLlo';
	$scope.mydate=new Date(2015,2,10);
	$scope.test=99.567843;
	$scope.students=[
		{name:'Pqr',roll:4},
		{name:'Xyz',roll:1},
		{name:'Mno',roll:5},
		{name:'abc',roll:7},
		{name:'rst',roll:3},
		{name:'Efg',roll:2}
	]
	$scope.name='XYZ'
	var myfunction=function(a,b){
		if(b==0) throw('Cannot divide by 0');
		return a/b;
	}
	$scope.myf=function(){
		try{
			//$scope.students[7].roll=55;
			myfunction(12,0)
			
		}catch(e){
			console.log(e);
			console.log('Something went wrong');
		}
	}
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


app.directive('myDirective',function(){
	return {
		restrict:'E',
		replace:true,
		scope:{
			student:'='
		},
		controller:function($scope){
			$scope.myclick=function(){
				alert(JSON.stringify($scope.student))
			}
		},
		templateUrl:'directives/mydirective.htm'
	}
});


var mymodule=angular.module('Mymodule',[]);
mymodule.service('MyMath',function(){
	this.square=function(a){
		return a*a;
	}
});