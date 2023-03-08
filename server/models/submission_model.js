const mongoose = require("mongoose");
const submissionSchema = mongoose.Schema({
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
  problem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Problem",
  },
  githubUrl: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: false,
  },
  pptLink: {
    type: String,
    required: false,
  },
},{timestamps:true});
const Submission = mongoose.model("Submission", submissionSchema);
module.exports = Submission;
