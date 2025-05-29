import { Badge, Box, Card, CardBody, Checkbox, HStack, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { DeleteIcon} from '@chakra-ui/icons'
import {addDoc, collection, deleteDoc, doc, getDoc, setDoc, updateDoc} from "firebase/firestore"
import { db } from '../config/firebase';

const Todo = ({todo, fetchTodos}) => {

  const [complete, setComplete] = useState(todo.completed);
  const deleteTodo = async (todoId)=> {
    try {
      await deleteDoc(doc(db, "todos", todoId))
      fetchTodos();
    } catch (error) {
      console.error(error)
    }
  }
  
  const editCompletion = async (todoId)=> {
    setComplete(!complete)
    try {
      await updateDoc(doc(db, "todos", todoId), {completd:!complete})
      fetchTodos();
    } catch (error) {
      console.error(error)
    }
  }

 


  return (
    <Card>
      <CardBody>
        <HStack spacing={"6"} >
          <Checkbox size='md' colorScheme='green' onChange={()=> editCompletion(todo.id)} isChecked={complete} ></Checkbox>
          <Box width={"80%"}>
          <Text fontSize={"xl"} textDecoration={complete && "line-through"}>{todo.title}</Text>
          <Text fontSize={"sm"}  textDecoration={complete && "line-through"}>{todo.notes}</Text>
          </Box>
          <Badge variant={"subtle"} colorScheme='red'>{todo.deadline}</Badge>
        <IconButton icon={<DeleteIcon />} colorScheme='teal' variant='solid' onClick={()=> deleteTodo(todo.id)}>
        </IconButton>

        </HStack>
      </CardBody>
    </Card>
  )
}

export default Todo