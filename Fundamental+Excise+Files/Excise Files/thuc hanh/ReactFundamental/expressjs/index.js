var express = require('express');
var app = express();


app.post('/', function(req, res) {
   res.send('this is simple post request');
});


app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});