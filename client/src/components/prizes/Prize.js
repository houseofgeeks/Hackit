import trophy from "../../assets/trophy.png";
import PrizeCard from "./PrizeCard";
import prizeBanner from '../../assets/prizes_banner.jpeg'
const Prize = () => {
  const prizeData = [
    {
      type: "2nd Prize",
      amount: "To Be Released",
      img: trophy,
    },
    {
      type: "1st Prize",
      amount: "To Be Released",
      img: trophy,
    },
    {
      type: "3rd Prize",
      amount: "To Be Released",
      img: trophy,
    },
  ];
  return (
    <div className="bg-[rgba(26,21,5,0.6)] relative py-10 md:px-20 sm:px-8 px-4  w-[100%] min-h-[70vh]">
      <h1 className="text-center mb-8 font-[Varela] text-[#ee2a7b] font-bold text-5xl">
        Prizes
      </h1>
      <div className="w-full flex items-center justify-center">
        <img className="rounded-lg" src={prizeBanner} alt="" />
      </div>
    </div>
  );
};
export default Prize;
