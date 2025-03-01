const mongoose = require('mongoose');
require('dotenv').config();

module.exports.dbConnect = async () => {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.DB_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};
