import React from 'react'
import Todo from './Todo'

const Todo_task = ({todos, delTodo}) => {
    return (
        <div className='task_container'>
            {todos.map((todo,index) => (
                <Todo todo={todo} index={index} delTodo={delTodo}/>
            ))}
        </div>
    )
}

export default Todo_task