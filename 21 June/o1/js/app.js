var app=angular.module('myapp',[]);

app.constant('gmapkey','AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk');
app.value('getdata',function(x){return x*x});

app.factory('Mymath',function(){
	return {
		square:function(a){
			return {};
		},
		cube:function(a){
			return a*a*a;
		}
	}
});

app.service('MymathService',function(Mymath){
	this.square=function(a){
		return Mymath.square(a);
	}
	this.cube=function(a){
		return a*a*a;
	}
});


app.controller('Xctrl',function($scope,gmapkey,getdata,Mymath,MymathService){
	
	$scope.gmapkey=gmapkey;
	console.log(getdata(5));
	console.log(Mymath.square(10));
	console.log(MymathService.square(10));
});