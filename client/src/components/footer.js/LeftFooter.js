import hackers from "../../assets/Hackers.svg";
import devdungeon from "../../assets/devdungeon.png";
const LeftFooter = () => {
  return (
    <div>
      <img className="max-w-[150px]" src={hackers} alt="" />

      <div>
        <h2 className="text-slate-200 font-bold text-2xl mt-2 font-[Varela]">
          HOUSE OF HACKERS
        </h2>
      </div>
      <img className="max-w-[150px] mt-2" src={devdungeon} alt="" />

      <div>
        <h2 className="text-slate-200 font-bold text-2xl mt-2 font-[Varela]">
          Dev Dungeon
        </h2>
      </div>
    </div>
  );
};
export default LeftFooter;
