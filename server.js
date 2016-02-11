var express = require("express");
var BodyParser = require("body-parser");
var mysql = require('mysql');
//var expressHandlebars = require('');
// var GitHubApi = require('node-github');

var app = express();
var PORT = process.env.PORT || 8080;

app.use("/public/js", express.static("js"));
app.use("/public/css", express.static("css"));
app.use("/public/Images", express.static("Images"));

app.use(BodyParser.urlencoded({extended: false}));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");

});

app.get("/blog", function(req, res)  {
  res.sendFile(process,cwd() + "/views/blog.html");
});

app.get("/projects", function(req, res)  {
  res.sendFile(process,cwd() + "/views/projects.html");
});

app.get("/game", function(req, res) {
  res.sendFile(process.cwd() + "/views/game.html")
});

app.get("/rps", function(req, res) {
  res.sendFile(process.cwd() + "/views/rps.html")
});

app.get("/clickface", function(req, res) {
  res.sendFile(process.cwd() + "/views/clickface.html")
});

app.get("/register", function(req, res) {
  res.sendFile(process.cwd() + "/views/register.html")
});


// app.get('/dashboard/:githubname', function(req, res) {
//   var github = new GitHubApi({
//     version: "3.0.0"
//     });
//   console.log(req.params.githubname)
// github.user.getFrom({
//       user: req.params.githubname
//   }, function(err, gitResponse){
//     // console.log(gitResponse);
//       res.send(JSON.stringify(gitResponse))
//   });
// });

app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});