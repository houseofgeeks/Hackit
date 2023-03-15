import trophy from '../../assets/trophy.json'
import PrizeCard from './PrizeCard'
const Prize = () => {

    const prizeData = [
        {
            type : '1st Prize',
            amount : 'To Be Released',
            img : trophy
        },
        {
            type : '1st Prize',
            amount : 'To Be Released',
            img : trophy
        },
        {
            type : '1st Prize',
            amount : 'To Be Released',
            img : trophy
        },
    ]
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-center gap-14'>
        {
            prizeData.map((data)=>{
                return(
                    <PrizeCard type={data.type} amount={data.amount} img={trophy.img} />
                )
            })
        }
    </div>
  )
}
export default Prize