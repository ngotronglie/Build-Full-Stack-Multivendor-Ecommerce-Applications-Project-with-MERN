var express = require('express');
var app = express();
var multer = require('multer');

var multer = multer();


app.use(multer.array());

app.use(express.static('public'));


app.post('/', function(req, res) {
    let JSONdata = req.body
    res.send(JSON.stringify(JSONdata));
});


app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});