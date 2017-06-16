
var app = angular.module("myApp", ["ngRoute","home"]);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/home", {
    	templateUrl :"home/home.html",
    	controller : "myStatus"
    })
    .when("/project", {
        templateUrl : "project/project.html"
    })

    .when("/qualification", {
    	templateUrl : "qualification/qualification.html"
    })
    .when("/contactus",{
    	templateUrl : "contactus/contactus.html"
    })
    .when("/contactme",{
    	templateUrl :"contactme/contactme.html",
    	controller :"myCtrl"
    })
    .when("/hobbies",{
    	templateUrl : "hobbies/hobbies.html"
    })
    .when("/certification",{
    	templateUrl : "certification/certification.html"
    })
    .when("/Resume",{
    	templateUrl : "/index.html"
    })
    .otherwise({"redirectTo":'/'})
    $locationProvider.html5Mode(true);
    
});

app.controller("nav",function($scope, $http){

        $http.get("sample.json").then(function(response){
            $scope.navbar=response.data;
        });
 				

 				$scope.dropdown=[
  					{ 
 						address :'/hobbies',
 						name :'Hobbies'
 					},
 					{ 
 						address :'/certification',
 						name :'Certification'
 					}
  	]
 });

    
  
  
  	
 




     
