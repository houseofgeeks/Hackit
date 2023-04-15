import Lottie from "lottie-react";
import trophy from "../../assets/trophy.png";

const PrizeCard = ({ type, amount, img }) => {
  return (
    <div className="bg-[rgb(255,255,255,0.1)]  drop-shadow-lg h-[380px] relative rounded-xl pb-6 px-6">
      <div className="flex items-center flex-col justify-between  h-full">
        <img className="max-w-[280px]" src={img} />
        <h2 className="text-xl text-slate-200 font-semibold my-2">{type}</h2>
        <p className="text-lg text-slate-200">{amount}</p>
      </div>
    </div>
  );
};
export default PrizeCard;
