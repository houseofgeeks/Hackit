const express=require('express')
const dotenv=require('dotenv')
const {connectDB}=require('./database/db')
const userRoutes=require('./routes/userRoutes')
const solutionRoutes=require('./routes/solutionRoutes')
const teamRoutes=require('./routes/teamRoutes')
const problemRoutes=require('./routes/problemRoutes')
const app=express()
dotenv.config()
const PORT=3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
app.use(express.json())
connectDB()
app.use("/api/user", userRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/submission",solutionRoutes);
app.use("/api/problem",problemRoutes);