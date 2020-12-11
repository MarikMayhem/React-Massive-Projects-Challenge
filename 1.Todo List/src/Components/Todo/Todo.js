import React from 'react';
import './Todo.css'

const Todo = ({ id, body, removeTodo }) => {
    return (
        <div className="todo">
            <p>{body}</p>
            <button className="btn-delete" onClick={() => removeTodo(id)}>&#10006;</button>
        </div>
    );
}

export default Todo;
