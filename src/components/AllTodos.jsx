import React from 'react'
import Todo from './Todo';

const AllTodos = ({todosList, fetchTodos}) => {

  return (
    <div>
        {todosList.map((todo, index)=>(
            <Todo key={index} todo={todo} fetchTodos={fetchTodos} />
        ))}
    </div>
  )
}

export default AllTodos