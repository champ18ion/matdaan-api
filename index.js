const express = require('express');
const app = express();
const db = require('./config/mongoose')
require('dotenv').config();
const bodyParser = require('body-parser')

app.use(bodyParser.json());


// using routes
app.use('/',require('./routes'))

app.listen(5000,()=>console.log('server up and running'))