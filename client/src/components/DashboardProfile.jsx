import { TextInput,Alert } from "flowbite-react"
import { useSelector } from "react-redux"
import { Button } from "flowbite-react" 
import {useEffect, useRef, useState} from 'react'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar} from 'react-circular-progressbar'
 

export default function DashboardProfile() {

    const {currentUser} = useSelector((state)=>state.user);
    const [imageFile,setImageFile] = useState(null);
    const [ImageFileUrl,setImageFileUrl] = useState(null);

    const [imageFileUploadingProgress , setImageFileUploadingProgress] = useState(null);
    const [imageFileUploadingProgressError , setImageFileUploadingProgressError] = useState(null)
    const filePickerRef = useRef();
    

    const handleImageChange = (e) =>{
        const file = e.target.files[0];

        if(file){
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
        
    };

     

    useEffect(() => {
        if (imageFile){
            uploadImage();
        }

    },[imageFile]);


    const uploadImage = async () => {
        setImageFileUploadingProgressError(null)
        const storage =getStorage(app)
        const fileName =new Date().getTime() + imageFile.name;
        const storageRef = ref(storage,fileName);
    
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
    
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setImageFileUploadingProgress(progress.toFixed(0) , snapshot)
    
            },
            (error) =>{
                 // A full list of error codes is available
    
                setImageFileUploadingProgressError("Could not upload image (File must be less than 2MB)"
                );
                setImageFileUploadingProgress(null)
                setImageFile(null)
                setImageFileUrl(null)


                
            },
            () =>{
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageFileUrl(downloadURL);
                });
            }
        )
    }
   
  return (
    <div className="max-w-lg mx-auto p-3 w-full ">    
        <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
        <form className="flex flex-col gap-4" >
            <input  type="file" accept="image/+" onChange={handleImageChange} ref={filePickerRef} hidden/> 
            <div className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full" onClick={() => filePickerRef.current.click()}>
            
            {imageFileUploadingProgress && (
                <CircularProgressbar value={imageFileUploadingProgress || 0} text ={`${imageFileUploadingProgress}%`}
                strokeWidth={5}
                styles={{
                    root:{
                        width:'100%',
                        height:'100%',
                        position: 'absolute',
                        top:0,
                        left:0,
                    },
                    path:{
                        stroke: `rgba(62,152,199, ${imageFileUploadingProgress / 100 })`,
                    },
                }}
                />
            )}
            <img src={ImageFileUrl || currentUser.profilePicture} alt='userprofilepicture'  
            className={`rounded-full w-full h-full border-8 object-cover border-{lighgray} ${imageFileUploadingProgress && imageFileUploadingProgress < 100 && `opacity-60 `}`} />
            
            </div>
            {imageFileUploadingProgressError  && <Alert color='failure'>{imageFileUploadingProgressError}</Alert> }
         

            <TextInput type='text' 
            id="username" placeholder="username" defaultValue={currentUser.username}  />

            <TextInput type='email' 
            id="email" placeholder="email" defaultValue={currentUser.email}  />

            <TextInput type='password' 
            id="password" placeholder="password"   />

            <Button type='submit' gradientDuoTone='purpleToBlue' outline>
                UPDATE
            </Button>        
           
        </form>

        <div className=" flex justify-between mt-5 ">
            <span className="cursor-pointer border px-5 py-2 rounded-full font-extralight bg-black border-red-700 text-red-500"  >Delete Account </span>
            <span className="cursor-pointer border px-5 py-2 rounded-full font-extralight bg-black border-blue-700 text-blue-500" >Sign out </span>
        </div>



    </div>
  )
}
