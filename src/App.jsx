import './App.css'
import Todo_input from '../components/Todo_input.jsx'
import Todo_task from '../components/Todo_task.jsx'
import { useState } from 'react'

function App() {
  const[text, setText]=useState("")
  const[todos,setTodo]=useState([])

  function writeFun(e){
    setText(e.target.value);
  }

  function addtodo(){
    if(text.trim()!== ""){
      setTodo((prevTodo) => [...prevTodo, {text}])
      setText("")
    }
  }

  function delTodo(todoIndex){
    setTodo((prevTodo) => prevTodo.filter((todo, index) => {
      return index !== todoIndex;
    }))
  }

  return (
    <>
      <main>
        <h1>To Do List</h1>
        <Todo_input text={text} writeFun={writeFun} addtodo={addtodo}/>
        <Todo_task todos={todos} delTodo={delTodo} /> 
      </main>
    </>
  )
}

export default App
