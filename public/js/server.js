var express = require("express");

var app = express();
var PORT = PORT 8080 || process.env.PORT;


app.use("/js", expresss.static("public/js"));
app.use("/css", expresss.static("public/css"));