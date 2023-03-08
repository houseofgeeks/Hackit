
const Team = require("../models/team_model");
const Problem = require("../models/problem_model");
const asyncHandler=require('express-async-handler')
const getAllProblems=asyncHandler(async(req,res)=>{
    const problems=await Problem.find({});
    if(problems){
        res.status(200).json(problems);
    }else{
        res.status(400).json({error:"No problems found"});
    }
})
const createProblem=asyncHandler(async(req,res)=>{
    const {problemName,problemDescription,problemCategory}=req.body
    
    try{
        if(!problemName||!problemDescription||!problemCategory){
            res.status(400).json({error:"Please fill all the fields"})
        }else{
            const problem=await new Problem({
                problemName:problemName,
                problemDescription:problemDescription,
                problemCategory:problemCategory,
                availibity:2
            })
            const result=await problem.save();
            if(result){
                res.status(201).json({message:"Problem created successfully"})
            }
        }
    }catch(err){
        console.log(err);
    }
});
const chooseProblem = asyncHandler(async (req, res) => {
    const { problemId, teamId } = req.body;
    const problem = await Problem.findOne({ _id: problemId });
    console.log(problem)
    console.log(problem.availableSlots)
    try {
      if (problem.availableSlots > 1) {
        const prob1 =await  Problem.findByIdAndUpdate(problemId, {
          availibity: problem.availableSlots - 1,
        });
        const team1 = await Team.findByIdAndUpdate(teamId, {
          $push: { problemStatement: problemId },
        });
        res.status(200).json({ message: "Problem chosen successfully" });
      }
    } catch (err) {
      res.status(400).json({ error: "Failed to choose the problem" });
    }
  });
  const changeProblem = asyncHandler(async (req, res) => {
    const { problemId, teamId } = req.body;
    const user = req.user._id;
    const team = findById(teamId);
    try {
      const probNew =await  Problem.findById(problemId);
      if (team.problem != null && probNew.availableSlots > 1) {
        const problem = await Problem.findById(team.problem);
        const prob1 = await Problem.findByIdAndUpdate(team.problem, {
          availibity: problem.availableSlots + 1,
        });
        const newProb = await Problem.findByIdAndUpdate(problemId, {
          availibity: problem.availableSlots - 1,
        });
        const team1 = await Team.findByIdAndUpdate(teamId, {
          $push: { problem: problemId },
        });
      }
    } catch (err) {
      res.status(400).json({ error: "Failed to change the problem" });
    }
  });

module.exports = { chooseProblem, changeProblem,createProblem ,getAllProblems};