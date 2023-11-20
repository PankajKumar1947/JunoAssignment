import React,{useState} from 'react'
import search from '../Assests/search.png'
import Trigger from './Trigger';

const Monitoring = ({setStatus,status,setSearch,setClose}) => {
    const [trigger,setTrigger]=useState(false);
  return (
    <>
        <div className=' mt-3  '>
            <h1 className='text-[32px] font-[500]'>Monitoring</h1>
            <div className='flex justify-between mx-2 h-full'>
                <div className='text-[14px]  flex gap-[19px] font-[500]'>
                    <button 
                    onClick={()=>setStatus("Pending")}
                    className={`${status==="Pending" ?"text-[#4643EE]" :"text-[#ADADAD]"  } relative `}>Pending
                    <div className={`${status==="Pending" ?"block":"hidden"} w-[70px] bg-[#4643EE]   h-[2px]  absolute -bottom-[2px] -left-2`}></div>
                    </button>
                    <button 
                    onClick={()=>setStatus("Completed")}
                    className={`${status==="Completed" ?"text-[#4643EE]" :"text-[#ADADAD]" } relative `}>Completed
                    <div className={`${status==="Completed" ?"block":"hidden"} w-[120%] bg-[#4643EE]   h-[2px]  absolute -bottom-[2px] -left-2  `}></div>
                    </button>
                </div>
                <div className=''>

                    <button 
                    onClick={()=>setClose(true)}
                    className='flex items-center text-[#D13B3B] text-[14px] gap-[6px] bg-[#F6D8D8] hover:bg-[#a38282] px-[16px] h-[35px] rounded-[7px]'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_18_305)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9Z" fill="#D13B3B"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z" fill="#D13B3B"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z" fill="#D13B3B"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_18_305">
                        <rect width="18" height="18" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                        Close account</button>
                </div>
            </div>
            <div className='bg-[#E4E4E4] h-[2px] '>
                <div className={`w-[70px]  h-full `}></div>
            </div>

            {/* search bar */}
            <div className='mt-3 font-[500] flex gap-[10px] '>
                <div className='w-[370px] h-[40px] relative'>
                    <input
                        onChange={(e)=>setSearch(e.target.value)}
                        type="text"
                        placeholder='Search'
                        className='w-full h-full border-[1px] border-[#E4E4E4] rounded-[8px] placeholder:text-[14px] pl-[35px]'
                    />
                    <img src={search} alt="" className='absolute top-1/2 transform -translate-y-1/2 left-[8px]'/>
                </div>
                <button 
                onClick={()=>setTrigger((prev)=>!prev)}

                // here you have to change
                className='flex items-center gap-[6px] text-[14px] text-[#777676] bg-[#F5F5F5] px-[12px] py-[8px] hover:text-black rounded-[7px] relative '>Trigger reason
                    <div className='mt-1'>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.528514 0.528598C0.788864 0.268248 1.21097 0.268248 1.47132 0.528598L4.99992 4.05719L8.52851 0.528598C8.78886 0.268248 9.21097 0.268248 9.47132 0.528598C9.73167 0.788948 9.73167 1.21106 9.47132 1.47141L5.47132 5.47141C5.21097 5.73176 4.78886 5.73176 4.52851 5.47141L0.528514 1.47141C0.268165 1.21106 0.268165 0.788948 0.528514 0.528598Z" fill="#777676"/>
                    </svg>

                    </div>
                    <div className={`${trigger ? "block" :"hidden"} absolute top-10 right-0`}>
                        <Trigger/>
                    </div>
                </button>
                <button className='flex items-center gap-[6px] text-[14px] text-[#777676] bg-[#F5F5F5] px-[12px] py-[8px] hover:text-black rounded-[7px] '>Risk level
                    <div className='mt-1'>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.528514 0.528598C0.788864 0.268248 1.21097 0.268248 1.47132 0.528598L4.99992 4.05719L8.52851 0.528598C8.78886 0.268248 9.21097 0.268248 9.47132 0.528598C9.73167 0.788948 9.73167 1.21106 9.47132 1.47141L5.47132 5.47141C5.21097 5.73176 4.78886 5.73176 4.52851 5.47141L0.528514 1.47141C0.268165 1.21106 0.268165 0.788948 0.528514 0.528598Z" fill="#777676"/>
                    </svg>

                    </div>
                </button>
            </div>
        </div>

        {/* table section */}
    </>
  )
}

export default Monitoring