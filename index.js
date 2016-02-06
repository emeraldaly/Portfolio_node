var express = require("express");
var BodyParser = require("body-parser");
var app = express();
var PORT = 8080;

app.use(BodyParser.urlencoded({extended: false}));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");

});

app.get("/AboutMe", function(req, res) {
  res.sendFile(process.cwd() + "/views/AboutMe.html")
});

app.get("/blog", function(req, res)  {
  res.sendFile(process,cwd() + "/views/blog.html");
});

app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});