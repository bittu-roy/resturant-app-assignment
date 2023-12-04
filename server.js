//REST API demo in Node.js
var express = require("express"); // requre the express framework
var app = express();
const cors = require("cors");
var fs = require("fs"); //require file system object

app.use(cors());

// Endpoint to Get a list of users
app.get("/getUsers", function (req, res) {
  fs.readFile(__dirname + "/" + "db.json", "utf8", function (err, data) {
    console.log(data);
    res.status(200).json(data); // you can also use res.send()
  });
});

// Create a server to listen at port 8080
app.listen(8080, function () {
  console.log("Listening on port 8080");
});
