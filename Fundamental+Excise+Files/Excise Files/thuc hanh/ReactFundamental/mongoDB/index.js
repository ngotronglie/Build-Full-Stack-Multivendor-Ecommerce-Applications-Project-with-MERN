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

// tìm người chưa kết hôn, có lương là 80000

async function findSingleUser(){
    const user = await User.find({ isMarried: false }).select('name salary').sort('salary').limit(2); // select name, salary user who is not married where sort salary and limit 2
    // const user = await User.find({ isMarried: false }).select('-name -salary').sort('-salary'); // select name, salary user who is not married where sort salary
    const countUser = await User.find({ isMarried: false }).countDocuments();
    console.log(user);
    console.log(countUser); // output = 3 (3 người chưa kết hôn) 
}
// findSingleUser();

/**
 * MongoDB Comparison Operators (Toán tử so sánh trong MongoDB)
 * 
 * Các toán tử này được sử dụng trong Mongoose khi truy vấn dữ liệu.
 * 
 * |-------------------------------------------------------------------------------------------|
 * | Toán tử  | Ý nghĩa                                     | Ví dụ                            |
 * |----------|---------------------------------------------|----------------------------------|
 * | $eq      | Bằng (Equal)                                | { age: { $eq: 25 } }             |
 * | $ne      | Không bằng (Not Equal)                      | { age: { $ne: 25 } }             |
 * | $gt      | Lớn hơn (Greater Than)                      | { age: { $gt: 25 } }             |
 * | $gte     | Lớn hơn hoặc bằng (Greater Than or Equal)   | { age: { $gte: 25 } }            |
 * | $lt      | Nhỏ hơn (Less Than)                         | { age: { $lt: 25 } }             |
 * | $lte     | Nhỏ hơn hoặc bằng (Less Than or Equal)      | { age: { $lte: 25 } }            |
 * | $in      | Thuộc danh sách (In Array)                  | { age: { $in: [25, 30, 35] } }   |
 * | $nin     | Không thuộc danh sách (Not In Array)        | { age: { $nin: [25, 30] } }      |
 * |-------------------------------------------------------------------------------------------|
 */

// example

async function gtAgeUser(){
    const user = await User.find({ age: { $gt: 25 } }); // find user who is greater than 25
    const gteUser = await User.find({ age: { $gte: 25 } }); // find user who is greater than or equal 25
    const ltUser = await User.find({ age: { $lt: 25 } }); // find user who is less than 25
    const lteUser = await User.find({ age: { $lte: 25 } }); // find user who is less than or equal 25
        // Tìm user có age trong danh sách [20, 25, 30]
    const inUser = await User.find({ age: { $in: [20, 25, 30] } });

    // Tìm user có age không thuộc danh sách [20, 25, 30]
    const ninUser = await User.find({ age: { $nin: [20, 25, 30] } });
    console.log(user, gteUser, ltUser, lteUser);
}
gtAgeUser();
