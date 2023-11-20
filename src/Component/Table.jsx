import React, { useState } from 'react'

const Table = ({tableHead,data,status,search}) => {
    
  return (
    <>
        <div className="w-full lg:w-[1080px] mt-2 oveflow-x-auto ">
        <table className="min-w-full border border-gray-300 ">
            <thead className='bg-[#E4E4E4] text-[12px] h-[48px] '>
                <tr >
                    <th className="border-b w-[255px] px-[24px] py-[12px] text-start">{tableHead[0]}</th>
                    <th className="border-b  px-[24px] py-[12px] text-start flex items-center gap-[11px]">{tableHead[1]}
                        <div className='flex flex-col gap-[2px]'>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.28033 4.21967C9.57322 4.51256 9.57322 4.98744 9.28033 5.28033C8.98744 5.57322 8.51256 5.57322 8.21967 5.28033L5 2.06066L1.78033 5.28033C1.48744 5.57322 1.01256 5.57322 0.71967 5.28033C0.426777 4.98744 0.426777 4.51256 0.71967 4.21967L4.46967 0.46967Z" fill="#1A1A1A"/>
                            </svg>

                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L5 3.93934L8.21967 0.71967C8.51256 0.426777 8.98744 0.426777 9.28033 0.71967C9.57322 1.01256 9.57322 1.48744 9.28033 1.78033L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z" fill="#ADADAD"/>
                            </svg>

                        </div>

                    </th>
                    <th className="border-b  px-[24px] py-[12px] text-start">{tableHead[2]}</th>
                    
                    <th className="border-b  px-[24px] py-[12px] text-start flex items-center gap-[11px]">{tableHead[3]}
                        <div className='flex flex-col gap-[2px]'>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.28033 4.21967C9.57322 4.51256 9.57322 4.98744 9.28033 5.28033C8.98744 5.57322 8.51256 5.57322 8.21967 5.28033L5 2.06066L1.78033 5.28033C1.48744 5.57322 1.01256 5.57322 0.71967 5.28033C0.426777 4.98744 0.426777 4.51256 0.71967 4.21967L4.46967 0.46967Z" fill="#1A1A1A"/>
                            </svg>

                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L5 3.93934L8.21967 0.71967C8.51256 0.426777 8.98744 0.426777 9.28033 0.71967C9.57322 1.01256 9.57322 1.48744 9.28033 1.78033L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z" fill="#ADADAD"/>
                            </svg>

                        </div>

                    </th>
                    <th className="border-b  px-[24px] py-[12px] text-start">{tableHead[4]}</th>
                    <th className="border-b  px-[24px] py-[12px] text-start">{tableHead[5]}</th>
                    
                </tr>
            </thead>
            <tbody>
                {data
                    .filter((item)=>{
                        return search.toLowerCase()===''
                            ? item
                            : item.name.toLowerCase().includes(search);
                    })
                .map((item)=>{
                    return (
                        <tr key={item.id} className='font-[500]'>
                            <td className='h-[62px]  px-[24px] border-b flex justify-between gap-2 items-center'>
                                <div className=''>
                                    <h3 className='text-[14px] '>{item.name}</h3>
                                    <p className='text-[12px] text-[#777676]'>{item.email}</p>
                                </div>
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6V14.25C3 14.4489 3.07902 14.6397 3.21967 14.7803C3.36032 14.921 3.55109 15 3.75 15H12C12.1989 15 12.3897 14.921 12.5303 14.7803C12.671 14.6397 12.75 14.4489 12.75 14.25V9.75C12.75 9.33579 13.0858 9 13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V14.25C14.25 14.8467 14.0129 15.419 13.591 15.841C13.169 16.2629 12.5967 16.5 12 16.5H3.75C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75H8.25C8.66421 3.75 9 4.08579 9 4.5C9 4.91421 8.66421 5.25 8.25 5.25H3.75Z" fill="#4643EE"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 2.25C10.5 1.83579 10.8358 1.5 11.25 1.5H15.75C16.1642 1.5 16.5 1.83579 16.5 2.25V6.75C16.5 7.16421 16.1642 7.5 15.75 7.5C15.3358 7.5 15 7.16421 15 6.75V3H11.25C10.8358 3 10.5 2.66421 10.5 2.25Z" fill="#4643EE"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.2803 1.71967C16.5732 2.01256 16.5732 2.48744 16.2803 2.78033L8.03033 11.0303C7.73744 11.3232 7.26256 11.3232 6.96967 11.0303C6.67678 10.7374 6.67678 10.2626 6.96967 9.96967L15.2197 1.71967C15.5126 1.42678 15.9874 1.42678 16.2803 1.71967Z" fill="#4643EE"/>
                                    </svg>

                                </div>
                            </td>
                            <td className='text-[14px] px-[24px] border-b'>
                                <div className={`${item.riskLevel==="Medium" ? " text-[#88670F]":item.riskLevel==="High" ? "text-[#7D2424]":"text-[#006540]"}  flex items-center gap-2 `  }>
                                    <div className={`h-[10px] w-[10px] ${item.riskLevel==="Medium" ? " bg-[#88670F]":item.riskLevel==="High" ? "bg-[#7D2424]":"bg-[#006540]"} rounded-full`}></div>
                                    <p>{item.riskLevel}</p>
                                    
                                </div> 
                                
                            </td>
                            <td className="border-b px-[24px] text-[#050505] ">{status==="Pending" ? item.triggerReason : item.actionReason}</td>
                            <td className="border-b px-[24px] text-[#050505] ">{status==="Pending" ? item.inQueue:item.timeClose} days</td>
                            <td className="border-b px-[24px] text-[#777676] ">{item.dateAdded}</td>
                            <td className='h-[62px] px-[24px] border-b'>
                                <div className=''>
                                    <h3 className='text-[14px] '>{status==="Pending" ? item.prevReview :item.actionTaken}</h3>
                                    <p className='text-[12px] text-[#777676]'>{status==="Pending" ? item.prevReviewDate :item.actionTakenEmail}</p>
                                </div>
                            </td>
                            
                        </tr>
                    )
                })}
            
            
            

            
            </tbody>
        </table>
        </div>
    </>
  )
}

export default Table