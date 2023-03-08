const router=require("express").Router();
const { chooseProblem, changeProblem,createProblem ,getAllProblems}=require("../controllers/problemController");
const {protect,adminCheck}=require('../middlewares/authMiddleware')
router.route("/").get(protect, getAllProblems);
router.route("/create").post(adminCheck, createProblem);
router.route("/choose").patch(protect, chooseProblem);
router.route("/change").patch(protect, changeProblem);
module.exports=router;