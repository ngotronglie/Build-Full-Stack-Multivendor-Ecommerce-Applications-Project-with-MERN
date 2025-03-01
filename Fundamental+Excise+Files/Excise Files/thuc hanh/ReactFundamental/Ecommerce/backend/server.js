const express = require('express'); 
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 5000;


app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/' , (req , res) => {
    res.send('Hello World! welcome to backend!!!');
});

app.use('/api', require('./routes/authRoutes'));

app.listen(port , () => console.log(`Server is running on port ${port}`));
