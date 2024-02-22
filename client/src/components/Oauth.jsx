import {AiFillGoogleCircle} from 'react-icons/ai'
import {Button} from 'flowbite-react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import { app } from '../firebase';
import {  useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';


export default function Oauth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleClick = async () =>{
       
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({prompt : 'select_account'})

        try{
            const resultsFromGoogle = await signInWithPopup(auth,provider)
            const res = await fetch('/api/auth/google' ,{
                method: 'POST',
                headers:{'Content-Type' : 'application/json'},
                body:JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    GooglePhotoUrl:resultsFromGoogle.user.photoURL,
                }),
            })
        const data = await res.json()
        if(res.ok){
            dispatch(signInSuccess(data))
            navigate('/')
            
             

        }

            // console.log("Results From Google: ",resultsFromGoogle);
        }catch(error){
            console.log(error.json());
        } 
    }
    
  return (
    <Button type='button' gradientDuoTone='tealToLime' outline onClick={handleGoogleClick}> 
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google 
    </Button>
  )
}
