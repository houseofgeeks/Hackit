import Lottie from 'lottie-react'
import trophy from '../../assets/trophy.json'

const PrizeCard = ({ type, amount, img }) => {
  return <div className="bg-white opacity-50  h-[300px]">
    <Lottie className='max-w-[300px]' animationData={trophy} />
    <h2>{type}</h2>
    <p>{amount}</p>
  </div>;
};
export default PrizeCard;
