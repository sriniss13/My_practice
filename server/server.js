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