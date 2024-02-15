import React from 'react'
import '../index.css';
import {Link} from "react-router-dom"
import { Button, Label, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5' >

        {/*left */}
        <div className='flex-1'>
        <Link to="/" className='  font-bold dark:text-white text-4xl' >
        <span className='px-4 py-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 rounded-lg text-white '> A Little bit of </span>
        everything
        </Link>
    
    <p className='text-sm mt-5 font-bold'> Articulate anything living in your head rent free</p>
    </div>
      	{/*right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div  >
              <Label value='Username' />
              <TextInput  
                  type='text'
                  placeholder='Enter Username'
                  id='username' />
            </div>
            <div  >
              <Label value='Email' />
              <TextInput  
                  type='text'
                  placeholder='Enter email'
                  id='email' />
            </div>
            <div  >
              <Label value='Password' />
              <TextInput  
                  type='password'
                  placeholder='Enter Password'
                  id='Password' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
          
          </form>
          <div className='flex gap-2 tex-sm mt-5'>
            <span>Already have an account? </span>
            <Link to='/sign-in' className='text-blue-500'> Sign in </Link>
          </div>
        
        
        </div>
      
      </div>
    
    </div>
   
  )
}
