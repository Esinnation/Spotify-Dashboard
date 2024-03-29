import Logo from '../assets/Logo.svg'
import Home from '../assets/Home.svg'
import Search from '../assets/Search.svg'
import Library from '../assets/Library.svg'
import Playlist from '../assets/Playlist.svg'
import Like from '../assets/Like.svg'
import Privacy from '../assets/privacy.svg'
import Globe from '../assets/globe.svg'
const Navbar = () => {
  return (
    <div className="w-[16%] flex flex-col h-full  py-[22px] justify-between bg-[#000000] ">
      <div className='w-full flex flex-col gap-9'>
        <img src={Logo} alt="logo" className='self-center cursor-pointer w-[161px] h-[47px]' />
        <div className='flex flex-col gap-[17px] px-[27px] '>
          {/* Home */}
          <div className='flex gap-4 items-center'>
            <img src={Home} alt="home" className='w-[20px] h-[20px]' />
            <span className='text-[#FAFAFA] text-[13px] font-semibold'>Home</span>
          </div>
          {/* Search */}
          <div className='flex gap-4 items-center'>
            <img src={Search} alt="Search" className='w-[20px] h-[20px]' />
            <span className='text-[#B8B8B8] hover:text-white cursor-pointer text-[13px] font-semibold'>Search</span>
          </div>
          {/* Library */}
          <div className='flex gap-4 items-center'>
            <img src={Library} alt="Library" className='w-[20px] h-[20px]' />
            <span className='text-[#B8B8B8] hover:text-white cursor-pointer text-[13px] font-semibold'>Library</span>
          </div>
        </div>
        <div className='flex flex-col gap-[17px] px-[27px]'>
          {/* Playlist */}
          <div className='flex gap-4 items-center'>
            <img src={Playlist} alt="Playlist" className='w-[20px] h-[20px]' />
            <span className='text-[#B8B8B8] hover:text-white cursor-pointer text-[13px] font-semibold'>Create Playlist</span>
          </div>
          {/* Like */}
          <div className='flex gap-4 items-center'>
            <img src={Like} alt="Like" className='w-[20px] h-[20px]' />
            <span className='text-[#B8B8B8] hover:text-white cursor-pointer text-[13px] font-semibold'>Liked Songs</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[15px] text-[10px] font-medium text-[#B8B8B8] pr-[14px] pl-[27px]'>
        <div className='flex pr-[55px] justify-between items-center'>
          <span className='cursor-pointer hover:text-white'>Legal</span>
          <span className='cursor-pointer hover:text-white'>Privacy Center</span>
        </div>
        <div className='flex pr-[33px] justify-between items-center'>
          <span className='cursor-pointer hover:text-white'>Privacy Policy</span>
          <span className='cursor-pointer hover:text-white'>Cookies</span>
        </div>
        <div className='flex pr-[33px] justify-between items-center'>
          <span className='cursor-pointer hover:text-white'>About Ads</span>
          <span className='cursor-pointer hover:text-white'>Accessibility</span>
        </div>
        <div className='flex pr-[14px] justify-between items-center'>
          <span className='cursor-pointer hover:text-white'>Your Privacy Choices</span>
          <img src={Privacy} alt="privacy" className='' />
        </div>
        {/* Language */}
        <div className='w-[83px] rounded-full flex gap-[5px] py-[5px] px-[14px] justify-center items-center border border-[#7E7E7E] '>
          <img src={Globe} alt="globe" className='w-[12px] h-[12px] ' />
          <span className='text-white text-[10px] font-bold'>English</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar