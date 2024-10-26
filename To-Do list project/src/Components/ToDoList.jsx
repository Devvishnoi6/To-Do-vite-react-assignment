
import React from "react";
import ToDoItem from "./ToDoItem";


function ToDoList({todos , deleteList , toggleDone , editList}){
    return(
       <> <ul>
         {todos.map((todo) => (
                <ToDoItem
                key = {todo.id}
                todo = {todo}
                deleteList = {deleteList}
                toggleDone = {toggleDone}
                editList = {editList}
                />
            )) 
         }
        </ul>
        </>
       
    );
};

export default ToDoList;