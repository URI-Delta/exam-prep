import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link ,Input ,Navigate } from "react-router-dom";
import { logIn } from "../store/AuthSlice";
import { Button ,Logo } from "./index";
import { useDispatch } from 'react-redux';
import authservice from '../appwrite/auth';

function Signup() {
    const navigate =Navigate()
    const [error,setError] = useState()
    const dispatch =useDispatch()
    const {register ,handleSubmit} = useForm()
    
    const create = async (data)=>{
        setError('')
        try {
            const userData = await authservice.createAccount(data)
            if (userData) {
                const userData = await authservice.getCurrentUser()
                if (userData) dispatch(logIn(userData));
                navigate('/')
            }
        } catch (error) {
            setError(error.setError)
        }
    }

  return (
    <div>
        <div>
             <div>
                <span><Logo width='100px'></Logo></span>
             </div>
             <h2>Sign-p To Create Account</h2>
             <p>Already Have An Account ? 
             <Link to='/login'>
             Sign In
             </Link>
             </p>
             {error && <p>{error}</p>}


             <form onSubmit={handleSubmit(create)}>
                <div>
                    <Input 
                    label ='Full Name'
                    placeholder='Enter Full Name'
                    {...register('name',{required:true})}
                    />
                               <Input 
                label ="Email"
                placeholder='Enter Your Email'
                type='email'
                {...register('email',{
                    required:true,
                    validate:{
                        matchPattern:(value)=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.
                        test(value) || 
                        "Enter Address Must Be A Valid"

                    }
                })}
                 />
                    <Input
                    type='password'
                    label = 'Password'
                    placeholder='Enter Your password'
                    {...register('password',{register:true})}
                    /> 
                    <Link 
                    to='/signin'
                     
                    >Sighn_in</Link>
                    <Button
                    type='submit'
                    className = 'w-full'
                    >
                        Sign up
                    </Button>

                </div>
             </form>

        </div>
    </div>
  )
}

export default Signup
