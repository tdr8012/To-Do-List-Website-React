import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos,setTodos] = useState([])
  function savedData(newlist){ 
    localStorage.setItem('todos', JSON.stringify({todos: newlist}))
  }

  function addTodo(newTodo){
    const newTodoValue = [...todos, newTodo]
    setTodos(newTodoValue)
    savedData(newTodoValue)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    savedData(newTodoList);
    setTodos(newTodoList);
  }

  
  function handleEditTodo(index){
    const newTodoList = [...todos];
    const editedValue = prompt("Edit your todo:", todos[index]);
    if (editedValue !== null) { 
      newTodoList[index] = editedValue;
      savedData(newTodoList); 
      setTodos(newTodoList); 
    }
  }

  useEffect(() => {
   
    if(!localStorage){
      return 
    }
    let localTodos =  localStorage.getItem('todos')
    if(!localTodos){
      return 
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos) 
    
  }, []) 

  return (
    <>
      <TodoInput addTodo = {addTodo}/> 
      {}
      <TodoList handleEditTodo = {handleEditTodo} handleDeleteTodo = {handleDeleteTodo} todos = {todos}/>
      {}
    </> 
  )
}

export default App
