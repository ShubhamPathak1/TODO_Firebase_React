import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'


const SignupPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUp = async()=> {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
      
    } catch (error) {
      console.error(error)
    }
  }
  
  const googleSignIn = async ()=> {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate("/");
    } catch (error) {
      console.error(error)
    }
  }



  return (
    <div className='flex justify-center items-center min-h-screen min-w-screen'>

    <div className='flex flex-col justify-center items-center gap-2'>
        <Input placeholder='Email' onChange={(e)=> {setEmail(e.target.value)}} type='email' />
        <Input placeholder='Password' type='password' onChange={(e)=> {setPassword(e.target.value)}} />
        <Button onClick={signUp} className='w-full'>Sign Up</Button>
      <p>or</p>
      <Button className='w-full rounded-full' variant={"outline"} onClick={googleSignIn} >Sign in with Google</Button>

      <Text>Already Have an Account? <span className='hover:underline text-blue-600'><Link to={"/login"} >Login</Link></span></Text>
    </div>
    </div>
  )
}

export default SignupPage