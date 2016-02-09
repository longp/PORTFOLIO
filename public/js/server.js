var express = require("express");

var app = express();
var PORT =  process.env.PORT || 8080;


app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/home.html")

});

app.get("/portfolio/:projectName", function (req ,res) {
  var stringPath = "/views/" + req.params.projectName;
  res.sendFile(process.cwd() + stringPath);
  console.log(req.params.projectName);
  console.log (stringPath);
  console.log (process.cwd() + stringPath);
})


app.listen(PORT, function () {
  console.log("Listen on port %s", PORT);
})