import React from 'react'
import Todo from './Todo';

const AllTodos = ({todosList}) => {

  return (
    <div>
        {todosList.map((todo, index)=>(
            <Todo key={index} todo={todo} />
        ))}
    </div>
  )
}

export default AllTodos