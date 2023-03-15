import { Link } from "react-router-dom";

const LeftFooterBar = () => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-white text-4xl font-bold font-['Roboto']">
        House of Hackers
      </h1>
      <div className="flex flex-col">
        <h2 className="text-2xl mt-2 font-semibold font-['Varela'] title">
          Resources
        </h2>
        <Link className=" text-sm text-slate-100">Sponsorship Brouchure</Link>
        <Link className=" text-sm text-slate-100">Code of Conduct</Link>
      </div>
    </div>
  );
};
export default LeftFooterBar;
