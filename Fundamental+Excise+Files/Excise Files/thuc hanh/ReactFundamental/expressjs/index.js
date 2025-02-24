var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());


app.post('/', function(req, res) {
  let JSONData = req.body;
  let JSONString = JSON.stringify(JSONData);
  res.send(JSONString);
});


app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});