import {useEffect} from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';

import './CreateTodo.css'

const CreateTodo = (props) => {
    const {
        register,
        handleSubmit
    } = useForm();

    const createTodo = async (data) => {
        await axios.post('/todos', data)
        .then(response => {
            const data = response.data
            props.setSuccess(data.success)
        })
    }

    return ( 
        <form onSubmit={handleSubmit((data)=>{
            const todo = {
                title:data.title,
                body:data.body
            }
            createTodo(todo)
        })}>
        <div className="todo-form">
            <input 
                placeholder="Enter Title"
                type="text"
                {...register('title',{
                    required: 'title is required'
                })}
             ></input>
        <textarea
            placeholder="Write Todo Here"
            type="text"
            {...register('body',{
                required: 'todo is required'
            })}
        ></textarea>
        <button>Create Todo</button>
        </div>
        </form>
     );
}
 
export default CreateTodo;