import trophy from "../../assets/trophy.png";
import PrizeCard from "./PrizeCard";
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-center gap-14">
        {prizeData.map((data) => {
          return (
            <PrizeCard type={data.type} amount={data.amount} img={data.img} />
          );
        })}
      </div>
    </div>
  );
};
export default Prize;
