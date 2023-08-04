const mongoose = require('mongoose');

const dotenv  = require('dotenv');

dotenv.config({'path':'./.env'});

const  MONGO_URI  = process.env.MONGO_URI;



    mongoose.connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{})
.catch((error)=>{console.log('error',error)});