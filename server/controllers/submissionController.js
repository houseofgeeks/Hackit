const asyncHandler = require("express-async-handler");
const Team = require("../models/team_model");
const User = require("../models/user_model");
const Problem = require("../models/problem_model");
const Submission = require("../models/submission_model");
const submitSolution = asyncHandler(async (req, res) => {
  const { teamId, problemId, githubUrl, videoLink, pptLink } = req.body;
  const user = req.user._id;
  console.log(teamId, problemId, githubUrl, videoLink, pptLink);
  
    const submit = await new Submission({
      team: teamId,
      problem: problemId,
      githubUrl: githubUrl,
      videoLink: videoLink !== undefined ? videoLink : null,
      pptLink: pptLink !== undefined ? pptLink : null,
    });
    console.log(submit)
    const submission = await submit.save();
    console.log(submission);
    const team=await Team.findByIdAndUpdate(teamId,{submission:submission._id})
    if (submission) {
      const data=await Submission.findById(submission._id).populate('team').populate('problem').populate('team.teamLeader');
      res.status(201).json(data);
  } else {
    res.status(400).json({ error: "Failed to submit solution" });
  }
});
const getAllSubmission = asyncHandler(async (req, res) => {
    const submission = await Submission.find({});
    if (submission) {
        res.status(200).json(submission);
    } else {
        res.status(400).json({ error: "No submission found" });
    }
})
module.exports = { submitSolution ,getAllSubmission};