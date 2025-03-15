import React, { useEffect } from 'react'
import { useState } from 'react'
import User from '../Github-Finder/User'
const Github = () => {
    const [userName,setUserName]=useState('')
    const[userData,setUserData]=useState(null)
    // const[loading,setLoading]=useState(true)
    function handleSubmit() {
        fetchGithubUserData();
    }

    async function fetchGithubUserData() {
        // setLoading(true)//1st render in queue
        const response=await fetch(`https://api.github.com/users/${userName}`)// asynchronous task so get the time to render the ui - first render done and loading.... is printed unless the data is fetched
        const data=await response.json()
        if(data)
        {
            setUserData(data)// 2nd render in queue
            // setLoading(false)// 3rd render in queue
        }
        console.log(data)
        // batch the 2nd and 3rd render in a single render and render the ui
    }
    // useEffect(()=>{
    //     fetchGithubUserData()
    // },[])

    // if(loading)// executes on first render
    // {
    //     return <h1>Loading........</h1>
    // }
  return (
    <div className='min-h-full bg-gray-800 flex flex-col justify-center items-center gap-3'> 
        <h1 className=' flex items-center justify-center  bg-black w-1/3 rounded-md text-white font-bold text-2xl'>Github Profile Finder</h1>
        <div className='flex justify-center items-center gap-3'>
            <input className='outline w-xl p-2 rounded-md' type="text" placeholder='Search Github Username' name='search-by-username' value={userName} onChange={(event)=>setUserName(event.target.value)} />
            <button className='bg-green-900 ' onClick={handleSubmit}>Search</button>
        </div>
        <div>
        {
            userData!==null ?<User user={userData}/>:null
        }
      </div>
    </div>
  )
}

export default Github
