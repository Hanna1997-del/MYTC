import React from 'react'
import {TbEdit} from 'react-icons/tb'
import {MdDeleteOutline} from 'react-icons/md'


export default function MyRadioGroup({rows,deleteRow,editRow}) {
    

  return (
   
 


<div className="relative  shadow-md sm:rounded-lg">
    <table className="w-[960px] text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase border-b  border-grayu dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-2 py-3"><input type='checkbox'></input></th>
                <th scope="col" className="px-2 py-3">
                    Name
                </th>
                <th scope="col" className="px-2 py-3">
                    Phone Number
                </th>
                <th scope="col" className="px-2 py-3">
                    Location
                </th>
                <th scope="col" className="px-2 py-3">
                    Position
                </th>
                <th scope="col" className="px-2 py-3">
                    Salary
                </th>
                <th scope="col" className="px-2 py-3">
                    Created Date
                </th>
                <th scope="col" className="px-2 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                rows.map((row, idx) =>{
                    return <tr key={idx} className=" border-b  border-grayu">
                        <td className="px-2 py-4" ><input type='checkbox'></input></td>
                        <td className="px-2 py-4">{row.name}</td>
                        <td className="px-2 py-4">{row.phoneNumber}</td>
                        <td className="px-2 py-4">{row.location}</td>
                        <td className="px-2 py-4 ">{row.position}</td>
                        <td className="px-2 py-4">{row.salary}</td>
                        <td className="px-2 py-4">{row.createdDate}</td>
                        <div className='flex justify-around mt-4'>
                <TbEdit className='text-edit bg-lgr w-6 h-5 border border-edit cursor-pointer 
                ' onClick={() => editRow(idx)}/>
                 <MdDeleteOutline className='text-delete bg-dgr h-5 w-6 border border-delete cursor-pointer '
                 onClick={() => deleteRow(idx)}/>
                </div>
                    </tr>
                          
                })
            }
           
            
        </tbody>
    </table>
</div>


    
    
  )
}
