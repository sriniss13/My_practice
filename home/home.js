
 		var app=angular.module('home',[]);
        app.controller('myStatus',function($scope){
        $scope.show=false;
        $scope.showHide=function(){
          $scope.show=!$scope.show;
        }
 });
       