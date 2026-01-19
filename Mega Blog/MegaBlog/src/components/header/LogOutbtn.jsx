import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/config'
import {logOut} from '../../store/AuthSlice'

function LogOutbtn() {

    const  dispatch = useDispatch()
    const logOutHandler=()=>{
        authService.logOut()
        .then(()=>{
            dispatch(logOut)
        })
    }

  return (
    <button className='inline-block px-4 py-3 duration-200 hover:bg-blue-400 rounded-full' >Logout</button>
)
}

export default LogOutbtn