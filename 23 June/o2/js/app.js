var app=angular.module('myapp',[]);
// npm i -g http-server
// http-server
app.controller('mymapcontroller',function($scope){
	$scope.addresses=[];
	$scope.addAddress=function(){
		$scope.addresses.push($scope.address);
		$scope.address='';
	}
});