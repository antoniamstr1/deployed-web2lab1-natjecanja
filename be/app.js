var express = require('express');
var indexRouter = require('./index.js');
const { auth } = require('express-openid-connect');
const cors = require('cors');
require('dotenv').config()

const corsOptions = {
    origin: 'http://localhost:3000',
    // Add any other CORS options as needed
};




var app = express();
app.use(cors(corsOptions));
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));






app.use('/', indexRouter);

app.listen(5000,()=> {
    console.log('Server is running on port 5000')
});