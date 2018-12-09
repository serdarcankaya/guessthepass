var express = require("express"),
  port = process.env.PORT,
  app = express();


app.use(express.static(__dirname + "/"));

app.get("/", function(req, res) {
  res.render("index.html");
});


app.listen(port, function() {
  console.log("APP IS RUNNING ON PORT " + port);
});
