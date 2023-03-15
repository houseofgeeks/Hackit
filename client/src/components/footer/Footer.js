import LeftFooterBar from "./LeftFooterBar"
import MiddleFooterBar from "./MiddleFooterBar"
import RightFooterBar from "./RightFooterBar"

const Footer = () => {
  return (
    <div className="flex justify-between">
      <LeftFooterBar />
      <MiddleFooterBar />
      <RightFooterBar />
    </div>
  )
}
export default Footer