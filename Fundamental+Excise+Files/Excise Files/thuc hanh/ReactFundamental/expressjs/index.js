var express = require('express');
var app = express();

app.get('/setCookieResponse', function (req, res) {
    res.cookie('name',"ngo trong liem");
    res.cookie('city',"Thai Binh");
    res.cookie('age',18);
    res.status(201).end("this is response cookie");
})
app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});