import React, { useState } from 'react'

const modalBox = 'fixed z-1 left-0 top-0 w-full h-full flex items-center justify-center bg-modal'

export default function({closeModal, onSubmit , defaultValue}) {
    const [formState, setFormState] = useState( defaultValue || {
        name: "",
        phoneNumber: "",
        location: "",
        position: "",
        salary: "",
        createdDate: ""
    });

    const handleNameChange = (e) => {
        setFormState({
            ...formState,
            name: e.target.value
        })
    }
    const handlePhoneChange = (e) => {
        setFormState({
            ...formState,
            phoneNumber: e.target.value
        })
    }

    const handleLocationChange = (e) => {
        setFormState({
            ...formState,
            location: e.target.value
        })
    }
    const handlePositionChange = (e) => {
        setFormState({
            ...formState,
            position: e.target.value
        })
    }
    const handleSalaryChange = (e) => {
        setFormState({
            ...formState,
            salary: e.target.value
        })
    }
    const handleCreateChange = (e) => {
        setFormState({
            ...formState,
            createdDate: e.target.value
        })
    }

   const validateForm =() => {
    if(formState.name && formState.phoneNumber && formState.location && formState.position && formState.salary && formState.createdDate) {
        return true;
    } else {
        return false;
    }
    
   }




    const handleChange =(e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        if(!validateForm()) return;

        onSubmit(formState)

        closeModal();
    };

  return (
    <div className={modalBox} onClick={(e) =>{
       if (e.target.className === "modalBox")closeModal();
    }} >
        <div className='rounded-sm p-8 bg-white w-96 border'>
        <h3 className='m-5 text-2xl font-extrabold text-center'>Add Member</h3>
            <form className='grid grid-cols-2 gap-4' >
                
                <div className=' mb-4 flex flex-col '>
                    <label for='name' className='mb-2'>Name</label>
                    <input name='name' value={formState.name} 
                    className='border border-grayu rounded-md p-1 text-base'
                    onChange={handleChange}/>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label for='phoneNumber' className='mb-2'>Phone Number</label>
                    <input name='phoneNumber'  value={formState.phoneNumber} onChange={handleChange}
                    className='border border-grayu rounded-md p-1 text-base'/>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label for='location' className='mb-2'>Location</label>
                    <input name='location'   value={formState.location} onChange={handleChange}
                    className='border border-grayu rounded-md p-1 text-base'/>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label for='position' className='mb-2'>Position</label>
                    <input name='position'  value={formState.position} onChange={handleChange}
                    className='border border-grayu rounded-md p-1 text-base'/>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label for='salary' className='mb-2'>Salary</label>
                    <input name='salary' value={formState.salary}  onChange={handleChange}
                    className='border border-grayu  rounded-md p-1 text-base'/>
                </div>
                <div className='flex flex-col mb-4 '>
                    <label for='createdDate' className='mb-2'>Created Date</label>
                    <input name='createdDate' value={formState.createdDate} onChange={handleChange}
                    className='border border-grayu rounded-md p-1 text-base'/>
                </div>
               
            </form>
            <button type='submit' className='block mx-auto  mt-4 border-none bg-user
                text-white px-4 py-2 rounded-md cursor-pointer shadow-lg shadow-grayu'
                onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}
