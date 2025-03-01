const jwt = require('jsonwebtoken');

// Hàm tạo JWT Token
module.exports.createToken = async (data) => {
    try {
        // Tạo token với payload (dữ liệu cần mã hóa), SECRET KEY và thời gian hết hạn
        const token = await jwt.sign(data, process.env.SECRET, {
            expiresIn: '7d' // Token có hiệu lực trong 7 ngày
        });

        return token; // Trả về token đã tạo
    } catch (error) {
        console.error('Lỗi khi tạo token:', error); // In lỗi ra console nếu có vấn đề
        throw new Error('Không thể tạo token'); // Ném lỗi để xử lý ở phần gọi hàm
    }
};
