var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  email: String,
  Rank:Number,
  Pd: Number,
  PDMax: Number,
  PDcorrect: Number,
  PDincorrect: Number,
  PdSkipped: Number,
  PDTimeTaken: String,
  PDTimeDuration: Number,
  TotalQuestions: Number,
  Totalpdquestion: Number,
  PDclasses: Number,
  PDTotalAttented: Number,
  Testshared:Number,
  Testattempted:Number,
  PD_Prec:Number,

});

module.exports = mongoose.model('User', userSchema);
