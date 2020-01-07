const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});


//Connect DB
mongoose.connect(process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, () => console.log('connected to db!'));

//Listening
app.listen(3000);