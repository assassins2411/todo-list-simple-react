import React,{useState,useEffect,useRef} from 'react'

function ToDoForm(props) {
    const [input, setinput] = useState(props.edit?props.edit.value:"")
    const inputRef=useRef(null)
    useEffect(() => {
        inputRef.current.focus()
        return () => {
            
        }
    }, [])

    const handleChange= e =>{
        setinput(e.target.value);
    }
    const handleSubmit= e =>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:input
        });
        setinput("");
    }
    return (
            <form className='todo-form' onSubmit={handleSubmit}>
                {props.edit?(<>
                    <input 
                        type="text" 
                        placeholder='Update yout item' 
                        value={input} 
                        name="text" 
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef}/>
                    <button className='todo-button'>Update</button>
                </>):(
                <>
                    <input 
                        type="text" 
                        placeholder='Add a todo' 
                        value={input} 
                        name="text" 
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}/>
                    <button className='todo-button'>Add todo</button>
                </>)

                }
                
            </form>
    )
}

export default ToDoForm
