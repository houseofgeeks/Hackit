import hackers from '../../assets/Hackers.svg'
const LeftFooter = () => {
  return (
    <div>
        <img className="max-w-[150px]" src={hackers} alt="" />
        <div>
            <h2 className='text-slate-200 font-bold text-2xl mt-2 font-[Varela]'>HOUSE OF HACKERS</h2>
        </div>
    </div>
  )
}
export default LeftFooter