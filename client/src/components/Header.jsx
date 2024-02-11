import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import { BsSearch } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";

export default function Header() {
    const path = useLocation().pathname;
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
        <Button className='w-12 h-10 sm:inline' color='gray' pill>
        <CgDarkMode/>
        
        </Button>


        <Link to='/sign-in'>
        <Button gradientDuoTone='purpleToBlue'>    Signin   </Button>
        </Link>
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