import { useState, useEffect } from "react";
import axios from 'axios';

import './Todos.css'

const Todos = (props) => {
    const remove = async () => {
        await axios.delete(`/todo/${props.todo.id}`)
        .then(response => {
            const data = response.data
        })
        props.setSuccess(true)
    }
    
    return ( 
        <div className="todo-container">
            <div className="todo-title"><h3>{props.todo.title}</h3> <input type="checkbox" value="done" onChange={() => remove()}></input></div>
            <textarea disabled defaultValue={props.todo.body}></textarea>
        </div>
     );
}
 
export default Todos;
<>
</>