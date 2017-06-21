var express = require('express');   //Express framework included in the server.js file
var app = express();
 app.all('*',function(req,res,next){
    console.log("test print to check connection")
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
 
app.get('/', function (req, res) {
	var data = {"navbar":

               	[ 	{ 
 						"address" :"/home",
 						"name" :"Home"
 					},
 					{ 
 						"address" :"/project",
 						"name" :"Project"
 					},
 					{ 
 						"address" :"/qualification",
 						"name" :"Qualification"
 					},
 					{ 
 						"address" :"/contactus",
 						"name" :"Contactus"
 					},
 					{ 
 						"address" :"/contactme",
 						"name" :"contactme"
 					}

 				],

               "dropdown":[ 
  					{ 
 						"address" :"/hobbies",
 						"name" :"Hobbies"
 					},
 					{ 
 						"address" :"/certification",
 						"name" :"Certification"
 					}
  	]};
   res.send(data);
}); 
 
app.listen(8080); // server listening port





/*
<div ng-controller="nav">
  <ul class="nav navbar-nav">
      <li ng-repeat="x in navbar" ng-show="x.key=='n'"><a href="{{x.address}}">{{x.name}}</a></li>
      
    </ul>
    

    <ul class ="nav navbar-nav navbar-right">
       <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-user"> More
        <span class="caret"></span></a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuDivider">
          <li ng-repeat="x in navbar" ng-show="x.key=='d'"><a href="{{x.address}}">{{x.name}}</a></li>
        </ul>
  </ul>
*/