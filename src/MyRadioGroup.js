import React from 'react'
import {TbEdit} from 'react-icons/tb'
import {MdDeleteOutline} from 'react-icons/md'


export default function MyRadioGroup() {
    

  return (
   
 


<div class="relative  shadow-md sm:rounded-lg">
    <table class="w-[960px] text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase border-b  border-grayu dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-2 py-3"><input type='checkbox'></input></th>
                <th scope="col" class="px-2 py-3">
                    Name
                </th>
                <th scope="col" class="px-2 py-3">
                    Phone Number
                </th>
                <th scope="col" class="px-2 py-3">
                    Location
                </th>
                <th scope="col" class="px-2 py-3">
                    Position
                </th>
                <th scope="col" class="px-2 py-3">
                    Salary
                </th>
                <th scope="col" class="px-2 py-3">
                    Created Date
                </th>
                <th scope="col" class="px-2 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class=" border-b  border-grayu">
            <td class="px-2 py-4" ><input type='checkbox'></input></td>
            <td class="px-2 py-4">
                    Mg Mg
                </td>
                <td class="px-2 py-4">
                    0998922332
                </td>
                <td class="px-2 py-4">
                    Yangon
                </td>
                <td class="px-2 py-4 ">
                    <p className='bg-junior w-10  rounded-lg'>Junior</p>
                </td>
                <td class="px-2 py-4">
                   5lakhs
                </td>
                <td class="px-2 py-4">
                   3/10/2023
                </td>
                <td class="px-2 py-4">
                <div className='flex justify-around'>
                <TbEdit className='text-edit bg-lgr w-6 h-5 border border-edit'/>
                 <MdDeleteOutline className='text-delete bg-dgr h-5 w-6 border border-delete'/>
                </div>
                </td>
            </tr>
            <tr class=" border-b border-grayu">
            <td class="px-2 py-4" ><input type='checkbox'></input></td>
            <td class="px-2 py-4">
                    Mg Mg
                </td>
                <td class="px-2 py-4">
                    0998922332
                </td>
                <td class="px-2 py-4">
                    Yangon
                </td>
                <td class="px-2 py-4">
                <p className='bg-junior w-10  rounded-lg'>Junior</p>
                </td>
                <td class="px-2 py-4">
                   5lakhs
                </td>
                <td class="px-2 py-4">
                   3/10/2023
                </td>
                <td class="px-2 py-4">
                <div className='flex justify-around'>
                <TbEdit className='text-edit bg-lgr w-6 h-5 border border-edit'/>
                 <MdDeleteOutline className='text-delete bg-dgr h-5 w-6 border border-delete'/>
                </div>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>


    
    
  )
}
