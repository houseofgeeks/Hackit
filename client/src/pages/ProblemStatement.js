import Design from "../components/Design"
import Navbar from "../components/Navbar"
import Stars from "../components/Stars"

const ProblemStatement = () => {
  return (
    <div className="problems w-full h-[100vh]">
      <Navbar />
      <Stars />
      <Design />
      <div className="text-slate-300">
        <h1 className="text-center text-3xl font-bold">
          The Problem Statments are
        </h1>
      </div>
    </div>
  )
}
export default ProblemStatement