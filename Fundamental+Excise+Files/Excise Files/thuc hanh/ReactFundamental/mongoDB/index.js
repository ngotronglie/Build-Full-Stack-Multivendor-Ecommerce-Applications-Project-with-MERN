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

// Hàm fetchInformation() được viết ra để lấy danh sách tất cả người dùng (users) từ cơ sở dữ liệu MongoDB và in ra console.
async function fetchInformation(){
    const users = await User.find({});
    console.log(users);
}

// fetchInformation();


// tìm người chưa kết hôn, có lương là 80000

async function findSingleUser(){
    const user = await User.find({ isMarried: false }).select('name salary').sort('salary').limit(2); // select name, salary user who is not married where sort salary and limit 2
    // const user = await User.find({ isMarried: false }).select('-name -salary').sort('-salary'); // select name, salary user who is not married where sort salary
    const countUser = await User.find({ isMarried: false }).countDocuments();
    console.log(user);
    console.log(countUser); // output = 3 (3 người chưa kết hôn) 
}
findSingleUser();