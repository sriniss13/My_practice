
	app.controller("cert",function($scope, $http){
		$scope.hellow=function(){
        $http.get("http://localhost:8080").then(function(response){
        	console.log(response)
        })
       }
    }); 
