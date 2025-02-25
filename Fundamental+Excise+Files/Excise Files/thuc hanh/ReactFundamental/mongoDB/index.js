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

async function updateInformation() 
{
    const user = await User.findById('67bd93d372bb52826950dc2b')
    user.isMarried = true;
    await user.save();
    console.log('update success !!!');
}
updateInformation();