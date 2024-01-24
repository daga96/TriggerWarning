const mongoose = require("mongoose");

const triggerSchema = new mongoose.Schema({
  problem: {
    type: String,
  },
  emotions: {
    type: Array,
  },
  physical_state: {
    type: Array,
  },
  external_stimuli: {
    type: Array,
  },
  feeling: {
    type: Array,
  },
  response: {
    type: String,
  },
  consequences: {
    type: Array,
  },
  solutions: {
    type: Array,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Trigger = mongoose.model("Trigger", triggerSchema);

module.exports = Trigger;
