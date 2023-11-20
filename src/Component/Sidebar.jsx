import React from 'react'
import logo from '../Component/Assests/logo.png'
import profile from '../Component/Assests/profile.png'

const Sidebar = () => {
  return (
    <div className='max-w-[258px] px-[32px] py-[30px] relative h-[100vh]'>
        <div>
            <img src={logo} alt="" className='w-[194px] h-[77.6px]' />

        </div>
        <div className='text-[16px] mt-6 font-[500] text-[#777676] list-none px-[16px] flex flex-col gap-[12px]'>
            <li className=''>Overview</li>
            <li className=''>Onboarding</li>
            <li className=''>Monitoring</li>
            <li className=''>Flagging</li>
            <li className=''>Source of Income</li>
            <li className=''>UAR</li>
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