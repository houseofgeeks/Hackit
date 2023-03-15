import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const RightFooterBar = () => {
  return (
    <div>
      <h2 className="title font-semibold text-2xl">STAY CONNECTED</h2>
      <div className="flex items-center">
        <BsInstagram className="text-3xl text-pink-500 mx-2 my-2" />
        <BsLinkedin className="text-3xl text-blue-700 mx-2 my-2" />
        <BsTwitter className="text-3xl text-blue-500 mx-2 my-2" />
      </div>
    </div>
  );
};
export default RightFooterBar;
