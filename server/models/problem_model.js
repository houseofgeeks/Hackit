const mongoose = require("mongoose");
const problemSchema = mongoose.Schema(
  {
    problemName: {
      type: String,
      required: true,
    },
    problemDescription: {
      type: String,
      required: true,
    },
    problemCategory: {
      type: String,
      required: true,
    },
    availableSlots: {
      type: Number,
      default: 2,
    },
  },
  { timestamps: true }
);
const Problem = mongoose.model("Problem", problemSchema);
module.exports = Problem;
