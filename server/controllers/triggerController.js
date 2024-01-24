const triggerModel = require("../models/Trigger");
const asyncHandler = require("express-async-handler");
const result = require("../utils/result");

exports.createTrigger = asyncHandler(async (req, res) => {
  const {
    problem,
    emotions,
    physical_state,
    external_stimuli,
    feeling,
    response,
    consequences,
    solutions,
  } = req.body;

  const newTrigger = await triggerModel.create({
    problem,
    emotions,
    physical_state,
    external_stimuli,
    feeling,
    response,
    consequences,
    solutions,
  });

  if (newTrigger) {
    result.success(res, newTrigger, "Trigger Created Successfully");
  } else {
    result.error(res, 400, "Invalid Trigger: Creation Failed");
  }
});

exports.getAllTriggersByUser = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  const triggerList = await triggerModel.find({ userId });

  if (triggerList) {
    result.success(res, triggerList, "Trigger List Called Successfully");
  } else {
    result.error(res, 400, "Failed To Find Trigger List ");
  }
});
