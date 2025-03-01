const mongoose = require('mongoose');
require('dotenv').config();
module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error.message);
    }
}