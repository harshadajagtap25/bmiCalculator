const { BMImodel } = require("../models/bmi.model");

const { Router } = require("express");
const bmiController = Router();

bmiController.get("/getCalculation", async (req, res) => {
  const bmi = await BMImodel.find({ userId: req.body.userId });
  res.send(bmi);
});

bmiController.post("/calculateBMI", async (req, res) => {
  const { height, weight, userId } = req.body;
  //   console.log(req.body);
  const heightMeter = height * 0.304;
  const BMI = new BMImodel({ height, weight, userId });
  try {
    await BMI.save();
    const calculate = weight / (heightMeter * heightMeter);
    // console.log(calculate);
    res.send({ bmi: calculate });
  } catch (e) {
    console.log("Something went wrong");
  }
});

module.exports = { bmiController };
