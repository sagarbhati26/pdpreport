const express = require("express");
const user = express();
const userController = require('../controller/userController')

const multer = require('multer')
const path = require('path')
const bodyParser = require('body-parser')
 
user.use(bodyParser.urlencoded({ extended: true }))
user.use(express.static(path.resolve(__dirname, 'public')))

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, 'pdpNEWdata')
  }
})

var uploads = multer({ storage: storage })

user.post('/importUser',uploads.single('file'),userController.importUser)


user.get('/getUsers', userController.getUsers)

module.exports = user
