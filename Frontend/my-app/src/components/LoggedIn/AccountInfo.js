import axios from 'axios';
import React, { useContext, useState } from 'react'
import UserInfoContext from '../../context/UserInfoContext'


const AccountInfo = ({ visible }) => {
    const { user } = useContext(UserInfoContext);
    const [accountInfo, setAccountInfo] = useState({
        userName: user.userName,
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.country,
    })
    const [accountInfoIfInstructor, setAccountInfoIfInstructor] = useState({
        userName: user.userName,
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        country: user.country,
        bio: user.bio === undefined ? '' : user.bio,
    })

    function handleUserNameChange(e) {
        setAccountInfo({
            ...accountInfo,
            userName: e.target.value
        });
        setAccountInfoIfInstructor({
            ...accountInfo,
            userName: e.target.value
        });
    }
    function handleEmailChange(e) {
        setAccountInfo({
            ...accountInfo,
            email: e.target.value
        });
        setAccountInfoIfInstructor({
            ...accountInfo,
            email: e.target.value
        });
    }
    function handlePasswordChange(e) {
        setAccountInfo({
            ...accountInfo,
            password: e.target.value
        });
        setAccountInfoIfInstructor({
            ...accountInfo,
            password: e.target.value
        });
    }
    function handleFirstNameChange(e) {
        setAccountInfo({
            ...accountInfo,
            firstName: e.target.value
        });
        setAccountInfoIfInstructor({
            ...accountInfo,
            firstName: e.target.value
        });
    }
    function handleLastNameChange(e) {
        setAccountInfo({
            ...accountInfo,
            lastName: e.target.value
        });
        setAccountInfoIfInstructor({
            ...accountInfo,
            lastName: e.target.value
        });
    }
    function handleCountryChange(e) {
        setAccountInfo({
            ...accountInfo,
            country: e.target.value
        });
        setAccountInfoIfInstructor({
            ...accountInfo,
            country: e.target.value
        });
    }
    function handleBioChange(e) {
        setAccountInfoIfInstructor({
            ...accountInfoIfInstructor,
            bio: e.target.value
        })
    }


    function handleSubmitIfTrainee() {
        axios.post('http://localhost:8000/api/guest/editInfo', accountInfo)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    function handleSubmitIfTrainee() {
        axios.post('http://localhost:8000/api/orgGuest/editInfo', accountInfo)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    function handleSubmitIfAdmin() {
        axios.post('http://localhost:8000/api/admin/editInfo', accountInfo)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    function handleSubmitIfInstructor() {
        axios.post('http://localhost:8000/api/instructor/editInfo', accountInfoIfInstructor)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    if (visible)
        return (
            <>
                <div className="  my-5 mx-auto">
                    <div className="container mx-auto">
                        <div className="inputs w-full max-w-2xl p-6 mx-auto">
                            <h2 className="text-2xl text-blue-500 font-bold">Account Setting</h2>
                            <div className="mt-6 border-t border-gray-400 pt-4">
                                <div className='flex flex-wrap -mx-3 mb-6'>
                                    <div className='w-full md:w-full px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-text-1'>email address</label>
                                        <input className='appearance-none block w-full bg-white text-gray-700 placeholder:text-gray-800 cursor-not-allowed border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.email} onChange={(e) => handleEmailChange(e)} />
                                    </div>
                                    <div className='w-full md:w-full px-3 mb-6 '>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Password</label>
                                        <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 placeholder:text-gray-500' type='text' placeholder='Enter New Password' onChange={e => handlePasswordChange(e)} />
                                        {/* <button className="mt-3 appearance-none bg-blue-500 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md hover:bg-white hover:text-blue-500">Change Your Password</button> */}
                                    </div>
                                    <div className='w-full md:w-full px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>country</label>
                                        <div className="flex-shrink w-full inline-block relative">
                                            <input className='appearance-none block w-full bg-white text-gray-700 placeholder:text-gray-800 cursor-not-allowed border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.country} onChange={e => handleCountryChange} />
                                        </div>
                                    </div>
                                    <div className="personal w-full border-t border-gray-400 pt-4">
                                        <h2 className="text-2xl text-blue-500 font-bold">Personal info</h2>
                                        <div className="flex items-center justify-between mt-4">
                                            <div className='w-full md:w-1/2 px-3 mb-6'>
                                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                                                <input className='appearance-none block w-full bg-white text-gray-700 placeholder:text-gray-800 cursor-not-allowed border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.firstName} onChange={e => handleFirstNameChange(e)} />
                                            </div>
                                            <div className='w-full md:w-1/2 px-3 mb-6'>
                                                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                                                <input className='appearance-none block w-full bg-white text-gray-700 placeholder:text-gray-800 cursor-not-allowed border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.lastName} onChange={e => handleLastNameChange(e)} />
                                            </div>
                                        </div>
                                        <div className='w-full md:w-full px-3 mb-6'>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>username</label>
                                            <input className='appearance-none block w-full bg-white text-gray-700 placeholder:text-gray-800 cursor-not-allowed border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.userName} onChange={e => handleUserNameChange(e)} />
                                        </div>
                                        {/* <div className='w-full md:w-full px-3 mb-6'>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Gender</label>
                                            <input className='appearance-none block w-full bg-white text-gray-700 placeholder:text-gray-800 cursor-not-allowed border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.gender} onChange={e => handleGenderChange(e)} />
                                        </div> */}
                                        {/* <div className='w-full md:w-full px-3 mb-6'>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                        <textarea className='bg-gray-100 rounded-md  leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' placeholder={user.bio}></textarea>
                                    </div>
                                    */}
                                        {
                                            (user.role === 'instructor')
                                                ?
                                                <div className='w-full md:w-full px-3 mb-6'>
                                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>username</label>
                                                    <textarea className='appearance-none block w-full bg-white text-gray-700 placeholder:text-gray-800 cursor-not-allowed border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' placeholder={user.bio} onChange={e => handleBioChange(e)} />
                                                </div>
                                                : ''
                                        }
                                        <div className="flex justify-end">
                                            <button className="mt-3 appearance-none bg-blue-500 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md hover:bg-white hover:text-blue-500">Change Password</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </>
        )
}

export default AccountInfo