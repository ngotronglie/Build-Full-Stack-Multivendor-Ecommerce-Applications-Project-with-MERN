const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Database MongoDB Connected...!!!'))
  .catch(err => console.log(err));


// schema (shape of the document)

// document , collection, database 
/*
const user = [
    { name: 'John', age: 25, email: 'BtB4e@example.com' },
    { name: 'Jane', age: 24, email: 'oldfjg@example.com' },
    { name: 'Jim', age: 26, email: 'BtB4e@example.com' }
]
*/

const userSchema = new mongoose.Schema({
 name: String,
 age:Number,
 isMarried: Boolean,
 salary: Number,
 gender: String,
});

const User = mongoose.model('User', userSchema);


async function storeInformation(){
    const user = new User({
        name: 'John',
        age: 25,
        isMarried: false,
        salary: 10000,
        gender: 'male'
    });
    
    await user.save(); 
    console.log(user)
}
// storeInformation();

async function fetchInformation() {
    try {
        const users = await User.find({
            $or: [
                { age: { $gt: 40 } }, 
                { isMarried: true }
            ]
        }).select('name age');
        
        // Lấy danh sách người dùng có tuổi lớn hơn 40 hoặc đã kết hôn (isMarried: true),
        // nhưng chỉ trả về trường name và age.
        console.log(users);
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
    }
}

// fetchInformation();

// update information 

async function updateInformation() {
    try {
        const userId = '67bd93d372bb52826950dc2b'; // ID của user cần cập nhật

        // Kiểm tra ID hợp lệ trước khi tiếp tục
        if (!userId) {
            console.error("ID không hợp lệ!");
            return;
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                name: 'Jane',
                age: 80,
                isMarried: false,
                salary: 20000,
            },
            { new: true, runValidators: true }
        ).lean(); // Chuyển đổi kết quả thành JSON đơn giản để tối ưu hiệu suất

        if (!updatedUser) {
            console.log("Không tìm thấy người dùng để cập nhật!");
            return;
        }

        console.log('Cập nhật thành công:', updatedUser);
    } catch (error) {
        console.error("Lỗi khi cập nhật thông tin:", error);
    }
}

// updateInformation();


// delete information

async function deleteInformation() {
    try {
        const userId = '67bd93d372bb52826950dc2b'; // ID của user cần xóa

        // Kiểm tra ID hợp lệ trước khi thực hiện xóa
        if (!userId) {
            console.error("ID không hợp lệ!");
            return;
        }

        const result = await User.deleteOne({ _id: userId });

        if (result.deletedCount === 0) {
            console.log("Không tìm thấy người dùng để xóa!");
            return;
        }

        console.log("Xóa thành công!");
    } catch (error) {
        console.error("Lỗi khi xóa người dùng:", error);
    }
}

// deleteInformation();

async function deleteManyInformation() {
    try {
        const result = await User.deleteMany({ isMarried: false });

        if (result.deletedCount === 0) {
            console.log("Không có người dùng nào chưa kết hôn để xóa!");
            return;
        }

        console.log(`Đã xóa ${result.deletedCount} người dùng chưa kết hôn!`);
    } catch (error) {
        console.error("Lỗi khi xóa người dùng:", error);
    }
}

deleteManyInformation();
