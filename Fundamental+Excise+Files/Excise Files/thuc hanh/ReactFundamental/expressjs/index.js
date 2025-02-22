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
   let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.end('Hello ' + firstName + ' ' + lastName);
});


app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
});