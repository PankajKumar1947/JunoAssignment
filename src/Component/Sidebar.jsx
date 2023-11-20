import React from 'react'
import logo from '../Component/Assests/logo.png'
import profile from '../Component/Assests/profile.png'

const Sidebar = () => {
  return (
    <div className='max-w-[258px] px-[32px] py-[30px] relative h-[100vh]'>
        <div>
            <img src={logo} alt="" className='w-[194px] h-[77.6px]' />

        </div>
        <div className='text-[16px] mt-6 font-[500] text-[#777676] list-none gap-[2px] flex flex-col '>
            <li className='px-[16px] py-[7px] rounded-[7px] hover:text-[#4643EE] hover:bg-[#EAEAFE] cursor-pointer'>Overview</li>
            <li className='px-[16px] py-[7px] rounded-[7px] hover:text-[#4643EE] hover:bg-[#EAEAFE] cursor-pointer'>Onboarding</li>
            <li className='px-[16px] py-[7px] rounded-[7px] text-[#4643EE] bg-[#EAEAFE] cursor-pointer'>Monitoring</li>
            <li className='px-[16px] py-[7px] rounded-[7px] hover:text-[#4643EE] hover:bg-[#EAEAFE] cursor-pointer'>Flagging</li>
            <li className='px-[16px] py-[7px] rounded-[7px] hover:text-[#4643EE] hover:bg-[#EAEAFE] cursor-pointer'>Source of Income</li>
            <li className='px-[16px] py-[7px] rounded-[7px] hover:text-[#4643EE] hover:bg-[#EAEAFE] cursor-pointer'>UAR</li>
        </div>

        <div className='absolute bottom-8 flex items-center gap-[8px] '>
            <div>
                <img src={profile} alt="" />
            </div>
            <div className='font-[500] text-[14px]'>
                <h2 className='text-[#050505]'>Elon Musk</h2>
                <p className='text-[#777676]'>elon@twitter.com</p>
            </div>
        </div>

    </div>
  )
}

export default Sidebar