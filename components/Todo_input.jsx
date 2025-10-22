import React from 'react'

const Todo_input = ({text,writeFun,addtodo}) => {
    return (
        <div className='container'>
            <input type='text' placeholder='Enter a task..' value={text} onChange={writeFun}/>
            <div>
                <button onClick={addtodo} className='add_but'>Add</button>
            </div>
        </div>
    )
}

export default Todo_input