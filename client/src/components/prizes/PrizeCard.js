import Lottie from "lottie-react";
import trophy from "../../assets/trophy.json";

const PrizeCard = ({ type, amount, img }) => {
  return (
    <div className="bg-white bg-opacity-10  drop-shadow-lg h-[380px] relative rounded-xl p-6">
      <div className="flex items-center flex-col justify-between  h-full">
        <Lottie className="max-w-[300px]" animationData={trophy} />
        <h2 className="text-xl text-white font-semibold my-2">{type}</h2>
        <p className="text-lg text-white">{amount}</p>
      </div>
    </div>
  );
};
export default PrizeCard;
