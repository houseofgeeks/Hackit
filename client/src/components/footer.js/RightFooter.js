import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
const RightFooter = () => {
  return (
    <div>
      <h2 className="text-slate-200 font-bold text-2xl mt-2 font-[Varela]">
        STAY CONNECTED
      </h2>
      <div className="flex mt-3">
        <Link
          target={"_blank"}
          to={"https://instagram.com/house.of.hackers?igshid=ZDdkNTZiNTM="}
        >
          <BsInstagram className="mx-2 text-3xl insta text-[#C64A92] cursor-pointer" />
        </Link>
        <Link
          target={"_blank"}
          to={
            "https://twitter.com/_houseofhackers?t=HmP1Lo-xbLBiT8obO_9raQ&s=09"
          }
        >
          <BsTwitter className="mx-2 text-3xl text-[#1E9BEB] cursor-pointer" />
        </Link>
        <Link to={"https://discord.gg/nka7uTufy3"} target="_blank">
          <BsDiscord className="mx-2 text-3xl text-[#5562EA] cursor-pointer" />
        </Link>
<Link to={"http://nas.io/devs-dungeon"} target="_blank">
          <BsWhatsapp className="mx-2 text-3xl text-[#25D366] cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};
export default RightFooter;
