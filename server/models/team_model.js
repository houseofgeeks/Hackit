const mongoose = require("mongoose");
const teamSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    teamMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    teamLeader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    problemStatement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
    },
    teamId: {
      type: String,
    },
    submission: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Submission",
    },
  },
  { timestamps: true }
);
const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
