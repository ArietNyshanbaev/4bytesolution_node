var morgan = require("morgan");
var path = require("path");
var ejs = require("ejs");
var express = require("express");

var app = express();
// loggin module morgan
app.use(morgan("short"));
// setting default view engine to ejs
app.set("view engine", "ejs");
// defining directories 
app.set("views", path.resolve(__dirname, "views"));
// defingin static directories
app.use(express.static(path.resolve(__dirname, "public")));

// routing
app.get("/", function(request, response){
   response.end("It is working"); 
});
// page not found handling
app.use(function(request, response, next){
    response.status(404).end("404 bitch");
    next();
});

// initialize a server
app.listen(4000);