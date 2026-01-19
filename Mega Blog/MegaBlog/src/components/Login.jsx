import React, { useState } from 'react'
import { Link ,useNavigate } from "react-router-dom";
import { Button ,Input ,Logo } from "./index";
import { useDispatch } from "react-redux";
import {useForm} from 'react-hook-form'
import { Login as AuthLogin } from "../store/AuthSlice";
import authservice from '../appwrite/auth';

function Login() {
    const navigate = useNavigate()
    const dispatch =useDispatch()
    const [error ,setError]= useState('')
    const {register , handleSubmit} =useForm()

    const login = async (data)=>{
        setError('')
        try {
            const session =await authservice.login(data)
            if (session) {
                const userData =await authservice.getCurrentUser()
                if (userData) dispatch(AuthLogin(userData))
                    navigate('/')
            }
        } catch (error) {
            setError(error.setError)
        }
    }


  return (
   <div className='flex items-center w-full justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-200 rounded-xl p-10 border-black/10`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-{100px}'>
                    <Logo/>
                </span>
            </div>
            <h2>Sign-In to your Account</h2>
            <p>Don't have any Account ? 
            <Link to='/signup' >SignUp </Link>
            </p>
            {error && <p> {error}</p>}

            <form onSubmit={handleSubmit(login)}>
                <div>
                    <Input
                    label ='Email'
                    placeholder = 'Enter your Email'
                    type ='email'
                    />
                        {...register('email',{
                            required:true,
                            validate : {
                                  matchPattern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.
                        test(value) || 
                        "Enter Address Must Be A Valid"
                            }
                            
                        })}

                    <Input 
                    type='password'
                    label='Password'
                    />
                        {...register('password',{
                            required:true
                        })}
                        <Button 
                        type= 'submit'
                        className="w-full"
                        >
                            Sign In
                        </Button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Login
