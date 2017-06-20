		angular.module('contactme',[])
		.controller("contactmeCtrl",function($scope){
                $scope.myFunction= function(user){
    				console.log($scope.firstName)
    				alert("firstName:" + user.firstname +"\n "+"lastname:" +user.lastname+"\n "+"mobile:" +user.mobile+" \n"+"message:" +user.message);
                }

            });