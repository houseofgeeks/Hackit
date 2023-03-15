import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Stars from "../Stars";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] home">
        {/* <Design /> */}
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  w-full text-center">
          <div className="title">
            <h1 className="text-white text-7xl font-bold">
              WELCOME TO IIIT RANCHI's
            </h1>
            {/* <h1 className="text-white text-7xl font-bold">
            DEV CHALLENGER
          </h1> */}
            <p className="text-gray-300 text-2xl text-center mt-2">
              first ever hackathon
            </p>
          </div>
          <Link to={"/problems"}>
            <button className="rounded-3xl bg-pink-700 hover:bg-red-600 py-3 px-5 mt-4 inline-flex items-center">
              <p className="text-white text-lg ">View Problem Statement</p>
              <BsArrowRight className="text-white ml-2 font-bold text-lg" />
            </button>
          </Link>
        </div>
        <Stars />
      </div>
  )
}
export default Hero