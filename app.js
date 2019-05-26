const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todos = require('./routes/todos');
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT || 5500;


const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// router middleware
app.use('/todos', todos);

//connect to DB
mongoose.connect(process.env.DB_STRING,{ useNewUrlParser: true },()=>{
    console.log("Connected to DB");
});
 
app.listen(PORT, () => {
    console.log(`running at ${PORT}`);
});

