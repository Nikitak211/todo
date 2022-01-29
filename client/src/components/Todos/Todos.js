import { useRef,useEffect,useState } from "react";
import axios from 'axios';

import './Todos.css'

const Todos = (props) => {
    const [height,setHeight] = useState()
    const ref = useRef()

    const remove = async () => {
        await axios.delete(`/todos/${props.todo.id}`)
        props.setSuccess(true)
    }
       
    useEffect(() => {
        setHeight(ref.current.scrollHeight)
    },[])
    return ( 
        <div className="todo-container">
            <div className="todo-title"><h3>{props.todo.title}</h3> <input type="checkbox" value="done" onChange={() => remove()}></input></div>
            <textarea
                style={{height: Math.round(height) + "px" }}
                ref={ref}
                disabled
                value={props.todo.body}></textarea>
        </div>
     );
}
 
export default Todos;