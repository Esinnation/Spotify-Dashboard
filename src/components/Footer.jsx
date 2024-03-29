import React from 'react'

const Footer = () => {
  return (
    <div className='h-[8%] w-full flex justify-between px-4 py-[10px] items-center purple-gradient'>
        <div className='flex flex-col gap-[6px]'>
          <h5 className='text-[#FFF7FF] text-xs font-medium'>PREVIEW OF SPORTIFY</h5>
          <p className='text-[#FFF7FF] text-xs font-medium'> Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <button className='text-[#000000] text-sm font-semibold bg-white rounded-full py-[12.5px] px-[29px]'>Sign up free</button>
    </div>
  )
}

export default Footer