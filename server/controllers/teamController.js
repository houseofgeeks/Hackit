const asyncHandler = require("express-async-handler");
const Team = require("../models/team_model");
const { id } = require("../config/genUniqueId");
const User = require("../models/user_model");
const getParticularTeam = asyncHandler(async (req, res) => {
  const team = await Team.findOne({ _id: req.params.id }).populate(
    "teamLeader"
  ).populate('teamMembers').populate("problemStatement").populate("submission");
  if (team) {
    res.status(200).json(team);
  } else {
    res.status(400).json({ error: "No team found" });
  }
})
const getTeams=asyncHandler(async(req,res)=>{
  const teams=await Team.find({}).populate('teamLeader').populate('teamMembers');
  if(teams){
    res.status(200).json(teams);
  }else{
    res.status(400).json({error:"No teams found"});
  }
})
const createTeam = asyncHandler(async (req, res) => {
  const { teamName } = req.body;
  const teamLeader = req.user._id;
  
  console.log(teamLeader)
  console.log(teamName)
  const teamNames = await Team.findOne({teamName });
  console.log(teamNames)
  if (!teamNames) {
    console.log(id);
    // const lead=await Team.find({_id:teamLeader._id});
    // console.log(lead)
    const team = await new Team({
      teamName: teamName,
      teamLeader: teamLeader,
      teamId: id,
      teamMembers: [teamLeader],
    });
    const user = await User.findByIdAndUpdate(teamLeader, { team: team._id });
    const result = await team.save();
    console.log(result)
    if (result) {
      res.status(201).json({
        _id: team.id,
        teamId: team.teamId,
        teamName: team.teamName,
        teamLeader: team.teamLeader,
        teamMembers: team.teamMembers,
      });
    }
  }else{
    res.status(400).json({ error: "Team with this name already exists" });
  }
});
const joinTeam = asyncHandler(async (req, res) => {
  const { teamId } = req.body;
  const teamMember = req.user._id;
  const team = await Team.findOne({ teamId: teamId });
  console.log(team)
  if (team ) {
    try {
      const team1 = await Team.findByIdAndUpdate(team._id, {
        $push: { teamMembers: teamMember },
      });
      const user = await User.findByIdAndUpdate(teamMember, { team: team._id });
      res.status(200).json({ message: "Team joined successfully" });
    } catch (err) {
      res.status(400).json({ error: "Failed to join the team" });
    }
  }
});
const leaveTeam = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const teamMember = req.user._id;
  const team =await Team.findOne({ _id: id });
  if (team && team.teamMembers.length > 2) {
    try {
      const team1 =await Team.findByIdAndUpdate(team._id, {
        $pull: { teamMembers: teamMember },
      });
      const user = await User.findByIdAndUpdate(teamMember, { team: null });
      res.status(200).json({ message: "Team left successfully" });
    } catch (err) {
      res.status(400).json({ error: "Failed to leave the team" });
    }
  }else{
      res.status(400).json({"error":"You are the only member in the team"});
  }
});

module.exports = { createTeam, joinTeam, leaveTeam,getTeams,getParticularTeam };
