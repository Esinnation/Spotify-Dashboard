
const Section = ({name,data}) => {
  return (
    <div className="flex flex-col gap-[26px] w-full">
      <div className="flex w-full justify-between items-center">
        <h6 className="text-white text-xl font-bold ">{name}</h6>
        <span className="text-[#ABABAB] font-bold text-sm">Show all</span>
      </div>
      <div className="flex flex-wrap gap-[21px]">
        {
          data.map((datum)=>(
          <div key={datum.id} className="flex flex-col w-[188px] rounded-[10px] h-[277px]  bg-[#171717] px-[14px] pt-[13px] pb-[16px] ">
            <img src={datum.img} alt="" className='rounded-[10px] mb-[21px]' />
            <h5 className='text-[#FAFAFA] font-semibold text-sm mb-1'>{datum.name}</h5>
            <span className='text-[#B8B8B8] text-xs font-medium max-w-[160px]'>{datum.desc}</span>
          </div>

          ))
        }
      </div>
    </div>
  )
}

export default Section