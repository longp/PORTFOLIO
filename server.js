var express = require("express");
var app = express();
var PORT =  process.env.PORT || 8080;
var session = require("express-session");

app.use(
  session(
  {
    secret: 'my secret',
    cookie: {maxAge: 100000},
    saveUninitialized: true
  }));

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/home.html")
});

// must ask why "/portfolio/:projectName does not load JS AND CSS files to it"
app.get("/:projectName", function (req ,res) {
  var stringPath = "/views/" + req.params.projectName;
  res.sendFile(process.cwd() + stringPath);
  console.log(stringPath);
});

app.listen(PORT, function () {
  console.log("Listen on port %s", PORT);
});