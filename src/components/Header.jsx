import Left from '../assets/arrow-left.svg'
import Right from '../assets/arrow-right.svg'

const Header = () => {
  return (
    <div className="w-full bg-[#101010] pl-[34px] pr-4 py-[7px] flex  items-center justify-between">
      <div className="flex gap-3 items-center">
        <img src={Left} alt="left" />
        <img src={Right} alt="right" />
      </div>
      <div className='flex items-center gap-[26px]'>
        <span className='text-[#ABABAB] text-sm font-semibold '>Premium Support Download</span>
        <div className='h-[23px] w-[2px] border border-[#FEFEFE]'/>
        <span className='text-[#ABABAB] text-sm font-semibold cursor-pointer'>Sign up</span>
        <button className='bg-white w-[101px] h-[46px] text-center rounded-full text-black text-sm font-semibold'>Log in</button>
      </div>
    </div>
  )
}

export default Header