import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
const RightFooter = () => {
  return (
    <div>
      <h2 className="text-slate-200 font-bold text-2xl mt-2 font-[Varela]">
        STAY CONNECTED
      </h2>
      <div className="flex mt-3">
        <BsLinkedin className="mx-2 text-3xl text-[#326BC9] cursor-pointer" />
        <BsInstagram className="mx-2 text-3xl insta text-[#C64A92] cursor-pointer" />
        <BsTwitter className="mx-2 text-3xl text-[#1E9BEB] cursor-pointer" />
        <BsDiscord className="mx-2 text-3xl text-[#5562EA] cursor-pointer" />
      </div>
    </div>
  );
};
export default RightFooter;
