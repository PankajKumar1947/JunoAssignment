import React, { useState } from 'react'

const Close = ({setClose}) => {

    const [email,setEmail]=useState('');
    const [uar,setUar]=useState(true);
    const [reason,setReason]=useState('');
    const [note,setNote]=useState('');
    const [closure,setClosure]=useState(false);
    const [closeBtn,setCloseBtn]=useState(false);
      
  return (
    <>
        <div className='w-[100vw] h-[100vh] mx-auto   bg-[#000000] bg-opacity-[80%]   flex justify-center items-center overflow-x-hidden'>
            <div className='w-[476px]  bg-white  p-[20px] rounded-[12px] flex flex-col gap-[24px]'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[24px] font-[500] text-[#000000]'>Close account</h1>
                    <div
                    className='cursor-pointer'
                    onClick={()=>setClose(false)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="#050505"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#050505"/>
                        </svg>
                    </div>
                </div>

                <div className='flex flex-col gap-[24px]'>
                    <div>
                        <h2 className='text-[14px] text-[#777676]'>Email</h2>
                        <input
                        onChange={(e)=>setEmail(e.target.value)}
                        type="text"  className='w-full border h-[36px] rounded-[1px] pl-1'/>
                    </div>
                    

                    <form className='flex  gap-[36px] items-center text-[14px] font-[400]'>
                        <h2 className='text-[14px] '>Want to file UAR</h2>

                        <label 
                         onClick={()=>setUar(true)}
                        htmlFor='yes'>
                            <input type="radio" name="uarOption" id="yes" value="yes" className='mr-[8px] pl-1' />
                            Yes
                        </label>

                        <label 
                        onClick={()=>setUar(false)}
                        htmlFor='no'>
                            <input type="radio" name="uarOption" id="no" value="no" className='mr-[8px] pl-1' />
                            No
                        </label>

                    </form>
                    
                    <div>
                        <h2 className='text-[14px] text-[#777676]'>Reason</h2>
                        <input 
                        onChange={(e)=>setReason(e.target.value)}
                        type="text"  className='w-full border h-[36px] rounded-[1px] pl-1'/>
                    </div>

                    <div>
                        <h2 className='text-[14px] text-[#777676]'>Note</h2>
                        <textarea 
                        onChange={(e)=>setNote(e.target.value)}
                        type="text"  className='w-full border min-h-[56px] rounded-[1px] border-[#E4E4E4] p-1'/>
                    </div>
                    

                    
                </div>

                <div className='flex justify-between items-center'>
                    <div>
                        <label 
                        onClick={()=>setClosure(true)}
                        htmlFor='closure' className='text-[#777676] text-[14px]'>
                            <input 
                            type="radio" name='uarOption' id='closure' className='mr-[8px] font-[400]'/>
                            Charge closure fee
                        </label>
                    </div>
                    <div 
                    onClick={()=>setClose(false)}
                    className={`${(!email.includes(' ') && email && reason && note && closure ) ? 'bg-[#4643EE]' : 'bg-[#E4E4E4]'} w-[211px] rounded-[8px]  p-[10px] text-center cursor-pointer`}>
                        <button className='text-[#ADADAD] text-[14px] font-[500]'>Close Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Close