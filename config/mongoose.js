const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI1);

const db = mongoose.connection;

db.on('Error',console.error.bind(`Error in connecting to db ${Error}`));

db.once('open',()=>{
    console.log('Successfully connected to database:: MongoDB');
});

module.exports = db;