import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import {addDoc, collection} from "firebase/firestore"
import { auth, db } from '../config/firebase';
import { AddIcon} from '@chakra-ui/icons'

const TodoInput = ({fetchTodos}) => {

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
                userId: auth?.currentUser?.uid
            })
            setTodoTitle("")
            setTodoNote("")
            setTodoDeadline("")
            fetchTodos(auth.currentUser.uid);
            
        } catch (error) {
            console.error(error)
        }
        }


  return (
    <div className='flex flex-col justify-center items-center gap-2'>
        <Input placeholder='TODO Title' onChange={(e)=> {setTodoTitle(e.target.value)}} value={todoTitle} />
        <Input placeholder='Note...' onChange={(e)=> {setTodoNote(e.target.value)}} value={todoNote} />
        <Input placeholder='Deadline' type='date' onChange={(e)=> {setTodoDeadline(e.target.value)}} value={todoDeadline} />
        <Button leftIcon={<AddIcon />} onClick={addTodo}>Add TODO</Button>
    </div>
  )
}

export default TodoInput