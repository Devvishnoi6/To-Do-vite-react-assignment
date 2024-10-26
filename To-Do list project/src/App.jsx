import { useState } from "react";
import React from "react";
import Header from "./Components/Header";
import TodoList from "./Components/ToDoList";

function App() {

  const [todos , setTodos] = useState([]);
  const [inputValue , setinputValue] = useState('');

  function addList(){
    if(inputValue){
      setTodos([...todos,{id:Date.now() , 
        text:inputValue ,
         completed:false}]);
         setinputValue('');
    }
  };
  function deleteList(id){
     setTodos(todos.filter(
      todo => todo.id !== id
     ));
  };
  function toggleDone(id){
    setTodos(todos.map(todo =>
       todo.id === id ?
      {...todo , completed:!todo.completed} 
      :todo ));
  };
  function editList(id , newText){
    setTodos(todos.map(
      todo => todo.id === id 
      ? {...todo , text : newText} : todo 
    ));
  };
  return (
    <>
    <div>
      <Header inputValue = {inputValue} setinputValue = {setinputValue} addList = {addList} />
      <TodoList todos = {todos} deleteList = {deleteList} toggleDone = {toggleDone} editList = {editList} />
     </div>
     
    </>
  )
}

export default App
