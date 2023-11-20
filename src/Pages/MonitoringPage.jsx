import React, { useState } from 'react'
import Monitoring from '../Component/Monitoring/Monitoring'
import Sidebar from '../Component/Sidebar'
import Table from '../Component/Table'
import data from '../Component/Data.js'
import Close from '../Component/Close/Close'

const MonitoringPage = () => {
  const [status,setStatus]=useState("Pending");
  //search input value
  const [search,setSearch]=useState('');
  //close option
  const [close,setClose]=useState(false);

  const pendingHead=["User","Risk level", "Trigger reason","In queue for","Date added on","Previously reviewed"];
  const completedHead=["User","Risk level","Action reason","Time to close","Data added on", "Action taken by"];

  let tableHead;
  if(status==="Pending")
    tableHead=pendingHead;
  else
    tableHead=completedHead;

  return (
    <>
      <div className=' relative '>
        <div className='flex -z-10'>
          <Sidebar/>
          <div>
            <Monitoring setStatus={setStatus} status={status} setSearch={setSearch} setClose={setClose}/>
            <Table tableHead={tableHead} data={data[status]} status={status} search={search}/>
          </div>
        </div>
        
        

        {/* close */}
        <div className={`${close ? "block" :"hidden"} absolute top-0 z-10`}>
          <Close setClose={setClose}/>
        </div>
      </div>
      
    </>
    
  )
}

export default MonitoringPage