
import React, { useState } from "react";

function ToDoItem({todo , deleteList , toggleDone , editList}){

    const [change , setChange] = useState(false);
    const [newText , setNewText] = useState(todo.text);

    function handleChange(){
        editList(todo.id , newText);
        setChange(false);
    };
    return(
        <>
        <li>
        <input type="checkbox"></input>
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
           {
            change ?(
                <input 
                type="text" 
                value={newText}
                onChange={(e) => setNewText(e.target.value)} 
                />
            ) :
             (
                todo.text
            )
           }

            </span>
            <button onClick={() => toggleDone(todo.id)}>
                {todo.completed ? 'Undo' : 'Complete'}
            </button>
            {change ? (
                <button onClick={handleChange}>Save</button>
            ) : (
                <button onClick={() => setChange(true)}>Edit</button>
            )}
            <button onClick={() => deleteList(todo.id)}>Delete</button>
        </li>
        </>
    );
};

export default ToDoItem;