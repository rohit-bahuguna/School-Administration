const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const studentRoute = require('./Router/Student')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

app.use('/api', studentRoute);

mongo_url = 'mongodb+srv://ROHITBAHUGU:Rohit123456@cluster0.m2pdodo.mongodb.net/school_administration?retryWrites=true&w=majority'
mongoose.connect(mongo_url, () => {
     console.log('connected to DB');
 })


app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))

module.exports = app;   