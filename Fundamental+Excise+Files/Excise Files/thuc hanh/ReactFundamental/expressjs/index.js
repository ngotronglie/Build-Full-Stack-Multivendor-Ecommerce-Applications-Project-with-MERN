var express = require('express');
var app = express();

//response set cookie response

app.get('/setCookieResponse', function (req, res) {
    res.cookie('name',"ngo trong liem");
    res.cookie('city',"Thai Binh");
    res.cookie('age',18);
    res.status(201).end("this is response cookie");
})

// response clear cookie response
app.get('/deleteCookieResponse', function (req, res) {
    res.clearCookie('name');
    res.clearCookie('city');
    res.clearCookie('age');
    res.status(201).end("clear cookie"); 
})

app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});