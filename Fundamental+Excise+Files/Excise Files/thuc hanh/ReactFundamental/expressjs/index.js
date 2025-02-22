var express = require('express');
var app = express();

// request method 
/**
 * post()
 * get()
 * put()
 * delete()
 */

app.get('/', function(req, res) {
   let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.end('Hello ' + firstName + ' ' + lastName);
});


app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});