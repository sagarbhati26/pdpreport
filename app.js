const express = require("express");
const mongoose = require('mongoose');
const app = express();

const userRoute = require('./route/userRoute')

app.use('/', userRoute);

const dotenv = require('dotenv');
dotenv.config();
require('./models/Connection');

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT,'192.168.1.46', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
