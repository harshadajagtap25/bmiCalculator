const mongoose = require("mongoose");

const bmiSchema = mongoose.Schema({
  height: Number,
  weight: Number,
  userId: String,
});

const BMImodel = mongoose.model("BMI", bmiSchema);
module.exports = {
  BMImodel,
};
