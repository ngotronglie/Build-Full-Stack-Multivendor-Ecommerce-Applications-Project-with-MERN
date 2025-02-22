var express = require('express');
var app = express();

app.get('/', function (req, res) {
    let myJsonArray = [
        {
            name: 'foo',
            age: 25
        },
        {
            name: 'bar',
            age: 30
        },
        {
            name: 'baz',
            age: 35
        }
    ]
    res.json(myJsonArray);
});

app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});