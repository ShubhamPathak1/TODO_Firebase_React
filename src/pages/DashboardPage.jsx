import React, { useEffect, useState } from 'react'
import { auth} from '../config/firebase'
import { Button, Spinner } from '@chakra-ui/react';
import {onAuthStateChanged, signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import AllTodos from '../components/AllTodos';
import TodoInput from '../components/TodoInput';
import { db } from '../config/firebase'
import {getDocs, collection, query, where} from "firebase/firestore"




const DashboardPage = () => {

  const [todosList, setTodosList] = useState([]);

  const fetchTodos = async (uid)=> {
    try {
      const todoCollectionRef = collection(db, "todos");
      const usersTodo = query(todoCollectionRef, where("userId", "==", uid))
      const todoPromise = await getDocs(usersTodo);
      const todos = todoPromise.docs.map((doc)=> ({...doc.data(), id:doc.id}))
      setTodosList(todos)
    } catch (error) {
      console.error(error)
    }
  }

  // useEffect(() => {
  //   fetchTodos();
  // }, [])
  

  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const logout = async ()=> {
    try {
      await signOut(auth)
      navigate("/login")
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user)=> {
      if (user) {
        setUserEmail(user.email)
        fetchTodos(user.uid)
      } else {
        navigate("/login")
      }
      setLoading(false)
    })
  
    return () => {
      unsubscribe();
    }
  }, [navigate])
  

  return (
    <div className='justify-around flex min-h-screen min-w-screen flex-col' >
      {loading && 
      <div className='mx-auto'>
      <Spinner size="xl" thickness='4px' speed='0.65s' color='blue.500' />
      </div>
      }

        
      {userEmail &&  
      <>
      <div className='flex justify-around gap'>
      <p>{userEmail}</p>
      <Button onClick={logout}>Logout</Button>
      </div>
        <TodoInput fetchTodos={fetchTodos} />
        <AllTodos todosList={todosList} fetchTodos={fetchTodos} />

      </>


      }
      </div>
      
      
  )
}

export default DashboardPage