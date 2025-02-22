var express = require('express');
var app = express();

app.get('/headerResponse', function (req, res) {
    res.append('name',"ngo trong liem");
    res.append('city',"Thai Binh");
    res.append('age',18);
    res.status(201).end("this is response hesader");
})
app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});