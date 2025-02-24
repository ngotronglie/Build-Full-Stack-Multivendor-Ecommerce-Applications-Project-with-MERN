var express = require('express');  // Import thư viện Express.js
var multer = require('multer');  // Import thư viện Multer để xử lý upload file
var app = express();  // Tạo một ứng dụng Express


app.use(function(req,res,next){
    console.log("i'm from middleware validation")// khi load trang no se hien neen 1 dong o console nos duoc chay khi co 1 resquest 
    next()
})

app.get('/', function(req, res) {  

    res.send('this is home page')
})

app.get('/contact', function(req, res) {  

    res.send('this is contact page')
})
app.get('/about', function(req, res) {  

    res.send('this is about page')
})




app.listen(8000, function () {  
    console.log('Example app listening at http://localhost:8000/');  
    // Khởi động server trên cổng 8000 và in URL để truy cập vào
});
