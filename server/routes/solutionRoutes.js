const router=require("express").Router();
const {submitSolution,getAllSubmission}=require("../controllers/submissionController");
const{protect, adminCheck}=require('../middlewares/authMiddleware')
router.route("/").post(protect, submitSolution);
router.route("/all").get(adminCheck, getAllSubmission);
module.exports=router; 