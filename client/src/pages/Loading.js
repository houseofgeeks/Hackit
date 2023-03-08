import loader from "../assets/space_loader.json";
import Lottie from "lottie-react";
import Stars from '../components/Stars';

const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh]  loading">
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <Lottie className="max-w-[250px]" animationData={loader} />
      </div>
      <Stars />
    </div>
  );
};
export default Loading;
