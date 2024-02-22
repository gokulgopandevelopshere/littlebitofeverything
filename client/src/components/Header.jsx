import { Avatar, Button, Dropdown, DropdownItem, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import { BsSearch } from "react-icons/bs";

import {useSelector ,useDispatch} from 'react-redux';

import {toggleTheme} from '../redux/theme/themeSlice';
import { CgDarkMode } from "react-icons/cg";
import { FaSun } from "react-icons/fa";


 

export default function Header() {
    const path = useLocation().pathname;
    const {theme} = useSelector((state) => state.theme)
    const dispatch = useDispatch() ;

    const {currentUser} = useSelector(state => state.user)
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white' >
            <span className='px-4 py-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 rounded-lg text-white'> A Little bit of </span>
            everything
        </Link>
        <form>
            <TextInput type="text" placeholder='Search....' rightIcon={BsSearch}
            className='hidden lg:inline'/>
        
        </form>
        <Button className='w-12 h-10 lg:hidden' color='grey' pill><BsSearch/></Button>

        <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 sm:inline' color='gray' pill onClick={() => dispatch
            (toggleTheme())}>
           
            {theme === 'light'? <FaSun/>:<CgDarkMode    />}
           
        </Button>
        {currentUser ? (
            <Dropdown arrowIcon={false} inline label={<Avatar alt='user' img={currentUser.profilePicture} rounded />}>
                <Dropdown.Header>
                    <span className='block text-sm'>@{currentUser.username}</span>
                    <span className='block text-sm font-medium truncate'>@{currentUser.email}</span>
                </Dropdown.Header>

                <Link to={'/dashboard?tab=profile'}>
                    <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />

                <Dropdown.Item>Sign out</Dropdown.Item>

            </Dropdown>


        ):(
            <Link to='/sign-in'>
        <Button gradientDuoTone='purpleToBlue'>
            Signin   
        </Button>       
        </Link>


        )
        }


        
        <Navbar.Toggle  />

        
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">HOME</Link>          
            </Navbar.Link>

            <Navbar.Link active={path === "/about"}  as={"div"}>
            <Link to="about">ABOUT</Link>            
            </Navbar.Link>

            <Navbar.Link active={path === "/projects"} as={"div"}>
            <Link to="projects">PROJECTS</Link>
            </Navbar.Link>


        
        </Navbar.Collapse>
    
    </Navbar>
  )
}
