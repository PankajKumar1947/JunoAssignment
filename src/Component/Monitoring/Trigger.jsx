import React from 'react'

const Trigger = () => {
  return (
    <>  
      <ul className='w-[190px] rounded-[4px] p-[6px] flex flex-col text-start  border-[#E4E4E4] border-[1px] shadow-gray-200 shadow-md bg-white text-[#777676] font-[500]'>
        <li className='px-[12px] py-[6px] rounded-[4px] hover:bg-[#EAEAFE]'>Hard Flag</li>
        <li className='px-[12px] py-[6px] rounded-[4px] hover:bg-[#EAEAFE]'>Temp Flag</li>
        <li className='px-[12px] py-[6px] rounded-[4px] hover:bg-[#EAEAFE]'>Restricted unflag</li>
        <li className='px-[12px] py-[6px] rounded-[4px] hover:bg-[#EAEAFE]'>Un flag</li>
        <li className='px-[12px] py-[6px] rounded-[4px] hover:bg-[#EAEAFE]'>Reviewed</li>
      </ul>
    </>
  )
}

export default Trigger