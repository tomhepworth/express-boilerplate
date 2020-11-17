
const mongoose = require("mongoose");

const example = new mongoose.Schema({
  example: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Example", example);