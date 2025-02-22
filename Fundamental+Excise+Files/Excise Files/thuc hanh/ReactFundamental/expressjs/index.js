var express = require('express');
var app = express();


app.post('/', function(req, res) {
   let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.send('Hello '+ firstName +' ' + lastName);
});


app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
    // http://localhost:8000?firstName=Liem&lastName=Trong
});