const router=require("express").Router();
const {createTeam, joinTeam, leaveTeam ,getTeams,getParticularTeam}=require("../controllers/teamController");
const{protect}=require('../middlewares/authMiddleware')
router.route("/create").post(protect, createTeam);
router.route("/join").patch(protect, joinTeam);
router.route("/leave").patch(protect, leaveTeam);
router.route("/").get(protect, getTeams);
router.route("/:id").get(protect, getParticularTeam);
module.exports=router;