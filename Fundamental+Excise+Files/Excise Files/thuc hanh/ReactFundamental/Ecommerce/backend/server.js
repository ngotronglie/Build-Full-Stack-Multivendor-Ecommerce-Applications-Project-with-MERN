const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

app.get('/' , (req , res) => {
    res.send('Hello World! welcome to backend!!!');
});



app.listen(port , () => console.log(`Server is running on port ${port}`)); ;