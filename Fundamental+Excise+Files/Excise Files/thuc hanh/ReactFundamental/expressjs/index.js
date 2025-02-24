var express = require('express');
var app = express();


app.post('/', function(req, res) {
   let userName = req.header('userName');
    let passWord = req.header('passWord');

    res.send("userName: "+ userName + '/ password:' + passWord);
});


app.listen(8000, function () {
    console.log('Example app listening http://localhost:8000/');
    // http://localhost:8000?firstName=Liem&lastName=Trong
});