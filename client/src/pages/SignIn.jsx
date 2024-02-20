import {React,useState} from 'react'
import '../index.css';
import {Link,useNavigate} from "react-router-dom"
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import {signInStart,signInSuccess,signInFailure} from "../redux/user/userSlice"
import {useDispatch , useSelector} from 'react-redux'
import Oauth from '../components/Oauth';

export default function SignIn() {
  const [formData ,setFormData] =useState({});
 

  const {loading, error: errorMessage} = useSelector(state=> state.user );
 

  const dispatch = useDispatch();
  const  navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]: e.target.value.trim()});
  };



  const handleSubmit = async (e) => {  
    e.preventDefault();
    if( !formData.email || !formData.password){
      return dispatch(signInFailure("Please fill out all fields"));
    }
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData),

      });
      const data = await res.json();
      if(data.sucess === false){
        console.log("this is an error ")
        dispatch(signInFailure(data.message));
      }
       
      if(res.ok){
        dispatch(signInSuccess(data))
        navigate('/');

      }

       

      // console.log(res);
    }catch{error}{
      dispatch(signInFailure(error.message));
    }


  };
     
 
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5' >

        {/*left */}
        <div className='flex-1'>
        <Link to="#" className='  font-bold dark:text-white text-4xl' >
        <span className='m-10 px-8 py-2  bg-gradient-to-r data-animation="glass-morph" from-pink-500 via-yellow-400 to-pink-500 rounded-lg text-white '> A Little bit of </span>
        everything
        </Link>
    
    <p className='text-sm mt-5 font-bold'> Welcome aboard, where every keystroke unlocks a world of captivating stories waiting to be shared. Let's embark on this enchanting journey together.</p>
    </div>
      	{/*right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
           
            <div  >
              <Label value='Email' />
              <TextInput  
                  type='text'
                  placeholder='Enter email'
                  id='email'  onChange={handleChange}/>
            </div>
            <div  >
              <Label value='Password' />
              <TextInput  
                  type='password'
                  placeholder='*****************'
                  id='password'  onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='pinkToOrange' type='submit' disabled={loading}>
            {
              loading ? ( 
                <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Loading...</span>

                </>
                ):('Sign In'
                )}
            </Button>

            <Oauth/>
          
          </form>
          <div className='flex gap-2 tex-sm mt-5'>
            <span>Dont have Account </span>
            <Link to='/sign-up' className='text-blue-500'> Sign Up </Link>
          </div>
          {
            errorMessage && ( 
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
              )
             
          }
        
        
        </div>
      
      </div>
    
    </div>
   
  )
}
