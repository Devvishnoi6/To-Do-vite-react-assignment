
import React from "react";


function Header({inputValue , setinputValue , addList}){

    return(
        <>
        <div className="header">
            <a href="https://github.com/Devvishnoi6/To-Do-vite-react-assignment" target= "_blank" >🔗 GITHUB</a>
            <h1>To-Do List</h1>
            <input
             type="text"
             value={inputValue}
             onChange={(e) => setinputValue(e.target.value)}
             placeholder="Add Something to your To-Do List 🙂" />
             <button onClick={addList}>Add</button>
        </div>
        </>
    );
};

export default Header;