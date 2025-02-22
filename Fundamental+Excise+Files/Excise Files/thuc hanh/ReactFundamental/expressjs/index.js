var express = require('express');
var app = express();

app.get('/usa', function (req, res) {
    res.redirect('http://localhost:8000/india');
});

app.get('/india', function (req, res) {
    res.send('this is india page! ');
});

app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});