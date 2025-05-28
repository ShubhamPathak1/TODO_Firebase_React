import React from 'react'

const Todo = ({todo}) => {
    const deadline = new Date(todo.deadline.toDate())
  return (
    <div className='flex gap-2'>
        <h3>{todo.title}</h3>
        <h2>{todo.completed ? "completed":  "not completed"}</h2>
        <h2>{deadline.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Todo