import React ,{useState ,useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'


export default function Protected({
    children,
    Authentication = true
}) {
    const navigate =useNavigate()
    const [loader ,setLoader] = useState(true)
    const AuthStatus = useSelector((state)=>state.auth.status)

    useEffect(()=>{
        if (Authentication && AuthStatus != Authentication) {
            navigate('/login')
        }else if (!Authentication && AuthStatus != Authentication){
            navigate('/')
        }
        setLoader(false)
    },
    [AuthStatus ,navigate,Authentication])

  return loader? <h1>Loading...</h1> : <>{children}</>
}
