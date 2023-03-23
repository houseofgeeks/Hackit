import LeftFooter from "./LeftFooter";
import MiddleFooter from "./MiddleFooter";
import RightFooter from "./RightFooter";
import SideMiddle from "./SideMiddle";

const Footer = () => {
  return (
    <div className="bg-[rgba(26,21,5,0.6)] flex lg:flex-row flex-col justify-between items-start md:px-24  sm:px-8 px-4 py-8 relative  w-[100%] lg:min-h-[40vh] md:min-h-[70vh] min-h-[70vh]">
      <LeftFooter />
      <MiddleFooter />
      <SideMiddle />
      <RightFooter />
    </div>
  );
};
export default Footer;
