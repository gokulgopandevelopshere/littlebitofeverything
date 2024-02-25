import { Sidebar } from 'flowbite-react'
import {Link, useLocation} from 'react-router-dom'
import {useState , useEffect} from 'react'
import React from 'react'
import {HiUser,HiArrowSmRight} from 'react-icons/hi'

export default function DashboardSidebar() {
    const location = useLocation()
  const [tab,setTab] = useState('')
 

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    console.log(tabFromUrl);

    if (tabFromUrl){
      setTab(tabFromUrl);

    }


  } , [location.search])
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
           
            <Sidebar.Item 
                active={tab === 'profile'} 
                icon={HiUser} 
                label={"User"} l
                abelcolor="dark"
                
                as='div'>

                <Link to="/dashboard?tab=profile">Profile </Link>

            </Sidebar.Item>
                 
           
                
            <Sidebar.Item   
                icon={HiArrowSmRight}  
                className="cursor-pointer"
                >
                    SignOut
            </Sidebar.Item>

            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
