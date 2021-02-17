const mongoose = require("mongoose");
require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const configJson = require('./config');
const config = configJson[env];

const URI = `mongodb://localhost/${config.database}`;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true  })
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err));

module.exports = mongoose;
