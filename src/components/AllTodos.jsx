import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import {getDocs, collection} from "firebase/firestore"
import Todo from './Todo';

const AllTodos = () => {
    const [todosList, setTodosList] = useState([]);

    
    
    useEffect(() => {
        const todoCollectionRef = collection(db, "todos");
        const getTodos = async ()=> {
            try {
                const todoPromise = await getDocs(todoCollectionRef);
                const todos = todoPromise.docs.map((doc)=> ({...doc.data(), id:doc.id}))
                setTodosList(todos)
            } catch (error) {
                console.error(error)
            }
        }
        getTodos();
      
    }, [])
    

  return (
    <div>
        {todosList.map((todo)=>(
            <Todo key={todo} todo={todo} />
        ))}
    </div>
  )
}

export default AllTodos