var morgan = require("morgan");
var path = require("path");
var ejs = require("ejs");
var express = require("express");

var app = express();
// loggin module morgan
app.use(morgan("short"));
// setting default view engine to ejs
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);
// defining directories 
app.set("views", path.resolve(__dirname, "views"));
// defingin static directories
app.use(express.static(path.resolve(__dirname, "public")));
app.set('port', process.env.PORT || 8080);
// routing
app.get("/", function(request, response){
    response.render('index.html', {link : "Home"} );
});
app.get("/work", function(request, response){
    response.render('work.html', {link : "Works"});
});
app.get("/works", function(request, response){
    response.render('works.html', {link : "Works"});
});
// page not found handling
app.use(function(request, response, next){
    response.status(404).end("404 bitch");
    next();
});

// initialize a server
app.listen(app.get('port'));