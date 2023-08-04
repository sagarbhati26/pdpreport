const csv = require('csvtojson');
const User = require('../models/User');

const importUser = async (req, res) => {
  try {
    var userData = [];
    csv()
      .fromFile(req.file.path)
      .then(async (response) => {
        for (var x = 0; x < response.length; x++) {
          userData.push({
            email: response[x].email,
            Pd: response[x].Pd,
            PDMax: response[x].PDMax,
            PDcorrect: response[x].PDcorrect,
            PDincorrect: response[x].PDincorrect,
            PdSkipped: response[x].PdSkipped,
            PDTimeTaken: response[x].PDTimeTaken,
            PDTimeDuration: response[x].PDTimeDuration,
            TotalQuestions: response[x].TotalQuestions,
            Totalpdquestions: response[x].Totalpdquestions,
            PDClasses: response[x].PDClasses,
            PDTotalAttented: response[x].PDTotalAttented,
            Rank: response[x].Rank,
            PD_Prec: response[x].PD_Prec,
            Testshared:response[x].Testshared,
            Testattempted:response[x].Testattempted,
          });
        }
        await User.insertMany(userData);

        res.send({ status: 200, success: true, msg: 'CSV IMPORTED' });
      })
      .catch((error) => {
        console.error(error);
        res.status(400).send({ success: false, msg: 'Error parsing CSV file.' });
      });
  } catch (error) {
    console.error(error);
    res.status(400).send({ success: false, msg: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send({ status: 200, success: true, data: users });
  } catch (error) {
    console.error(error);
    res.status(400).send({ success: false, msg: error.message });
  }
};

module.exports = {
  importUser,
  getUsers,
};
