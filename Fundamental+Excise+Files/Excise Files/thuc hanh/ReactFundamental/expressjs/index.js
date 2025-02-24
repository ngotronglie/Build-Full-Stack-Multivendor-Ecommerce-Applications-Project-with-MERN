var express = require('express');  // Import thư viện Express.js
var app = express();  // Tạo một ứng dụng Express
var multer = require('multer');  // Import thư viện Multer để xử lý upload file

// Cấu hình nơi lưu trữ file khi upload
var storage = multer.diskStorage({
    destination: function (req, file, callBack) {  
        callBack(null, 'uploads/');  // Đặt thư mục lưu trữ file là 'uploads/'
    },
    filename: function (req, file, callBack) {  
        console.log(file);  // In thông tin file ra console để kiểm tra
        callBack(null, file.originalname);  // Đặt tên file giống như tên gốc khi upload
    }
});

// Khởi tạo Multer với bộ nhớ lưu trữ đã cấu hình
var upload = multer({ storage: storage }).single('myfile');  
// `.single('myfile')` nghĩa là chỉ nhận một file với input name="myfile"

app.post('/', function(req, res) {  // Định nghĩa route xử lý upload file qua phương thức POST
    upload(req, res, function(err) {  // Gọi middleware Multer để xử lý file upload
        if(err) {  
            return res.end('Error uploading file');  // Nếu có lỗi, trả về thông báo lỗi
        }
        res.end('File is uploaded');  // Nếu thành công, trả về thông báo thành công
    });
});

app.listen(8000, function () {  
    console.log('Example app listening at http://localhost:8000/');  
    // Khởi động server trên cổng 8000 và in URL để truy cập vào
});
