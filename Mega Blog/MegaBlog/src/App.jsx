import { useState ,useEffect } from 'react'
import './App.css'
import authservice from './appwrite/auth'
import { Header , Footer } from "./components/index";
import { logIn,logOut } from "./store/AuthSlice";
import { useDispatch } from "react-redux";


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(logIn({userData}))
      } else {
        dispatch(logOut())
      }      
    })
    .finally(()=>setLoading(false))
  },
  [dispatch])

  return !loading ? (
    <div className='min-h-screen flex  bg-gray-500 content-between'>
      <div className=' block'>
        <Header/>
        <main>
          {/* <Outlet></Outlet> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null

}

export default App

