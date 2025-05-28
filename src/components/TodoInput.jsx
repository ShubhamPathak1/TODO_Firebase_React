import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {addDoc, collection} from "firebase/firestore"
import { db } from '../config/firebase';

const TodoInput = () => {

    const [todoTitle, setTodoTitle] = useState();
    const [todoNote, setTodoNote] = useState();
    const [todoDeadline, setTodoDeadline] = useState();

    const todoCollectionRef = collection(db, "todos");

    const addTodo = async ()=> {
        try {
            await addDoc(todoCollectionRef, {
                title:todoTitle,
                notes:todoNote,
                deadline: todoDeadline,
                completed:false,
            })
            
        } catch (error) {
            console.error(error)
        }
        }


  return (
    <div className='flex flex-col justify-center items-center gap-2'>
        <Input placeholder='TODO Title' onChange={(e)=> {setTodoTitle(e.target.value)}} />
        <Input placeholder='Note...' onChange={(e)=> {setTodoNote(e.target.value)}} />
        <Input placeholder='Deadline' type='date' onChange={(e)=> {setTodoDeadline(e.target.value)}} />
        <Button onClick={addTodo}>Add TODO</Button>
    </div>
  )
}

export default TodoInput