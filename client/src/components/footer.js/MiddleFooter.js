import { HashLink as Link } from "react-router-hash-link";

const MiddleFooter = () => {
  return (
    <div className="text-slate-200">
      <h2 className="text-slate-200 font-bold text-2xl mt-2 font-[Varela]">
        RESOURCES
      </h2>

      <li className="list-none">
        <Link
          smooth
          to="#about"
          className={`mx-6 hover:text-[#ee2a7b] transition-all text-lg font-[Urbanist]`}
        >
          About
        </Link>
      </li>
      <li className="list-none">
        <Link
          smooth
          to="#schedule"
          className={`mx-6 hover:text-[#ee2a7b] transition-all text-lg font-[Urbanist]`}
        >
          Schedule
        </Link>
      </li>
      <li className="list-none">
        <Link
          smooth
          to="#faq"
          className={`mx-6 hover:text-[#ee2a7b] transition-all text-lg font-[Urbanist]`}
        >
          FAQ's
        </Link>
      </li>
      <li className="list-none">
        <Link
          smooth
          to="#sponsor"
          className={` mx-6 hover:text-[#ee2a7b] transition-all text-lg font-[Urbanist]`}
        >
          Sponsors
        </Link>
      </li>
      <li className="list-none">
        <Link
          smooth
          target={"_blank"}
          to="https://drive.google.com/file/d/10QeDlV-XRIkiAAstKLLi1NQdTLksT-Gy/view"
          className={` mx-6 hover:text-[#ee2a7b] transition-all text-lg font-[Urbanist]`}
        >
          Rules
        </Link>
      </li>
    </div>
  );
};
export default MiddleFooter;
