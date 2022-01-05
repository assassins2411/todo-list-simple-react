import React,{useState} from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

function ToDoList() {
    const [todos, settodos] = useState([])
    const addTodo=todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos=[todo, ...todos];
        settodos(newTodos)
        console.log(...todos);
    }
    const removeTodo=id=>{
        const removeArr=[...todos].filter(todo => todo.id!==id)
        settodos(removeArr)
    }
    const updateTodo=(todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        
        settodos(prev=>prev.map(item=>(item.id===todoId?newValue:item)))
    }
    const completeTodo=id=>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete
            }
            return todo;
        })
        settodos(updatedTodos)
    }
    return (
        <div>
            <h1>what the plan for today</h1>
            <ToDoForm onSubmit={addTodo}/>
            <ToDo todos={todos}
            completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}

export default ToDoList
