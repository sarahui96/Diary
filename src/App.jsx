import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App(){
 
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
    //es6 version of if else; if no value then empty array else the local value fetched
  })

  

  //useeffect is used to save data avoiding loss of data on reload.
  //it takes 2 args. 1st is the function to be performed and 2nd is when it should be performed.
  //here it is performed when it detects a change in todo array. It will execute the func above to store the new value. 
  //here we are just setting the value. above code is to get the value.
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])  

  function addTodo(title){
    setTodos(currentTodos => {
      return [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false},
    ]
  })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter( todo => todo.id !== id)
    })
  }

  return (
  <>
  <div className="diaryContent">
  <div>
    <h1 className="logoDiary">Diary</h1>
  </div>
  <NewTodoForm onSubmit = {addTodo}/>
  <h3 className="header">Your Activities</h3>
  <TodoList todos = {todos}
  toggleTodo = {toggleTodo}
  deleteTodo = {deleteTodo}></TodoList>
  </div>
  <div className="footerDiary">
    <p className="footerNote">Developed by Sarah Shaikh</p>
  </div>
 

</>
)
  
  
  
}