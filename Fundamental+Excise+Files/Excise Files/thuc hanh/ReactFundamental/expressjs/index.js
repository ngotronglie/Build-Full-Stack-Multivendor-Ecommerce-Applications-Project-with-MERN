var express = require('express');
var app = express();

app.get('/401', function (req, res) {
    res.status(401).end("you don't have permission to access this page");
});
app.get('/201', function (req, res) {
    res.status(201).end("you don't have permission to access this page");
});

app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});