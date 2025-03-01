const adminModel = require('../models/adminModel'); // Import model admin từ database
const { responseReture } = require('../utiles/response'); // Import hàm phản hồi HTTP
const bcrypt = require('bcrypt'); // Import bcrypt để hash và kiểm tra mật khẩu
const { createToken } = require('../utiles/tokenCreate'); // Import hàm tạo JWT token

class AuthControllers {
    admin_login = async (req, res) => {
        // Lấy email và password từ request body
        const { email, password } = req.body;

        // Kiểm tra nếu không nhập email hoặc password
        if (!email || !password) {
            return responseReture(res, 400, { error: "Email and password are required!" });
        }

        try {
            // Tìm admin theo email trong database, lấy cả password
            const admin = await adminModel.findOne({ email }).select('+password');

            if (admin) {
                // So sánh mật khẩu nhập vào với mật khẩu đã mã hóa trong database
                const match = await bcrypt.compare(password, admin.password);

                if (match) {
                    // Tạo JWT token chứa id và role của admin
                    const token = await createToken({
                        id: admin.id,
                        role: admin.role
                    });

                    // Lưu token vào cookie để dùng cho lần sau
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Hết hạn sau 7 ngày
                        httpOnly: true, // Ngăn XSS, chỉ có thể truy cập qua HTTP, không thể lấy từ JS
                        secure: process.env.NODE_ENV === 'production' // Bật secure nếu chạy môi trường production
                    });

                    // Trả về phản hồi thành công với token
                    responseReture(res, 200, { token, message: 'Login successfully!' });
                } else {
                    // Nếu mật khẩu sai, trả về lỗi
                    responseReture(res, 401, { error: 'Password incorrect!' });
                }
            } else {
                // Nếu không tìm thấy email, trả về lỗi
                responseReture(res, 404, { error: 'Email not found!' });
            }
        } catch (error) {
            // Bắt lỗi hệ thống và trả về lỗi 500
            responseReture(res, 500, { error: error.message });
        }
    }
}

module.exports = new AuthControllers(); // Xuất controller để sử dụng trong routes
