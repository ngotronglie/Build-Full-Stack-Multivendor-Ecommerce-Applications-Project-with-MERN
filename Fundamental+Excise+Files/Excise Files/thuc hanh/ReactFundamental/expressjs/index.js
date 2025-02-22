var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello express js!');
});
app.get('/about', function(req, res) {
    res.send('about page!');
});
app.post('/contact', function(req, res) {
    res.send('contact page!');
});
app.delete('/shop', function(req, res) {
    res.send('shop page!');
});
app.get('/one', function(req, res) {
    res.send('this is simple string response !');
});
app.post('/two', function(req, res) {
    res.send('this is post simple string response !');
});
app.get('/end', function(req, res) {
    res.end('this is simple end string response !');
});

app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});