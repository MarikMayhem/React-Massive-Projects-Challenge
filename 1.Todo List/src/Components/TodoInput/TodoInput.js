import React, { useState } from 'react';
import './TodoInput.css'

const TodoInput = ({ setTodo }) => {
    const initialState = {
        todo: '',
        todoError: ''
    }
    const [input, setInput] = useState(initialState)

    const handleInput = (name, value) => {
        setInput(oldState => ({ ...oldState, [name]: value }))
    }
    const submitTodo = (e) => {
        e.preventDefault();
        let todoError = ""

        if (input.todo.length < 3 || input.todo.length > 15) {
            todoError = "Invalid length: min 3, max 15"
        }

        if (todoError) {
            setInput({ ...initialState, todoError })
            return false
        } else {
            setTodo(input.todo)
            setInput({ ...initialState })
        }
        return true
    }

    return (
        <form action="submit" onSubmit={(e) => submitTodo(e)}>
            <input type="text"
                placeholder="todo"
                name="todo"
                value={input.todo}
                onChange={(e) => handleInput(e.target.name, e.target.value)} />

            <button className="submit-btn">Submit</button>
            <div>{input.todoError}</div>
        </form>
    );
}

export default TodoInput;
