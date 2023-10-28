
import React, { useState } from 'react'
import {BiChevronsLeft} from 'react-icons/bi';
import {PiUsersThree} from 'react-icons/pi';
import {FaSliders} from 'react-icons/fa6';
import {IoSearchOutline} from 'react-icons/io5'
import logo from './images/logo.png';
import MyRadioGroup from './MyRadioGroup';
import Modal from './Modal';












function App() {
 
const [modelOpen,setModelOpen] = useState(false)

const [rows, setRows] = useState([
  {name: "Mg Mg",  phoneNumber: "098922332" , location: "Yangon", position: "Junior", salary: "5lakhs", createdDate: "3/10/2023"},
  {name: "Mg Mg",  phoneNumber: "098922332" , location: "Yangon", position: "Junior", salary: "5lakhs", createdDate: "3/10/2023"},
])

const [rowToEdit, setRowToEdit] = useState(null)

const handleDeleteRows = (targetIndex) => {
  setRows(rows.filter((_, idx) => idx !== targetIndex))
}
const handleEditRows = (idx) => {
  setRowToEdit(idx);
  setModelOpen(true);
}
const handleSubmit =(newRow) => {
  setRows([...rows,newRow])
}
  
  return (
    <main className="w-screen h-screen overflow-hidden">
     <div className="w-[1865px] h-[1117px] flex">
        <div className='w-[291px] h-[1095px] border border-spacing-x-2 border-grayu bg-vanila'>
         <p className='flex justify-end mr-3'> <BiChevronsLeft /> </p>
         <div className='flex flex-col items-center h-48 border-b-4 border-grayu'>
         <img src={logo} alt='logo' width={100} height={100} />
         <h3 className='text-2xl font-black'>MYTC</h3>
         </div>
         <div className='h-16 flex justify-center items-center gap-5 border-b-4 border-grayu'>
          <p><PiUsersThree className='w-8 h-8 text-user'/></p>
          <p className='text-sm font-bold text-user'>Team Members</p>
         </div>
        </div>
         <div className="w-[1536px] h-[960px]">
          <div className='flex gap-4 ml-56 mt-4'>
            <button className='w-12 h-10 border border-user rounded-sm px-2 mt-2 '><FaSliders className='h-6 w-6'/></button>
            <input className='w-[360px] mt-2 h-10 border border-user  rounded-sm px-3 relative text-user' placeholder='Search ny name... '></input>
            <p className='absolute top-9 left-[850px] text-user'><IoSearchOutline/></p>
            <button className='w-44 mt-2 h-10 rounded-md bg-user text-white' onClick={() =>setModelOpen(true)}>+ New Member</button>
          </div>
          <div className='w-[1536px] bg-vanila h-[960px] mt-6 ml-5'>
        
           <MyRadioGroup rows={rows} deleteRow={handleDeleteRows} editRow={handleEditRows}/>
           {modelOpen && <Modal closeModal={()=>{
            setModelOpen(false);
           }}
           onSubmit={handleSubmit}
           defaultValue={rowToEdit !== null && rows[rowToEdit]}
           />}

        
         
          </div>
         </div>
        
     </div>
    </main>
  );
}

export default App;
