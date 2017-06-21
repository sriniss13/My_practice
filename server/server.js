/**/

var express=require('express');
var mysql=require('mysql');
var bodyparser=require('body-parser');
var app= express();
app.use(bodyparser.json());
var connection= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "srini"
})
connection.connect(function(err){
  if(err){
      console.log(err);
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
})
app.all('*',function(req,res,next){
    console.log("test print to check connection")
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


app.get('/', function(req, res){
  connection.query('select * from navbar ', function(err, rows){
      console.log(rows);
      console.log("transmit data to front page")
        res.send(rows);
  });
       
});
app.listen(8080);  