
 		angular.module('home',[])
        .controller('myStatus',function($scope){
        $scope.show=false;
        $scope.showHide=function(){
          $scope.show=!$scope.show;
        }
 });
       