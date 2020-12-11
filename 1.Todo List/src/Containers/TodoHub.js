import React, { useState } from 'react';
import './TodoHub.css'
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Components/Todo/Todo';
import TodoInput from '../Components/TodoInput/TodoInput';

const TodoHub = () => {
    const [todos, setTodos] = useState([])

    const setTodo = (todoBody) => {
        let todoId = uuidv4();
        setTodos(oldState => [...oldState, { todoId, todoBody }])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.todoId !== id))
    }

    return (
        <section className="todo-hub">
            <h1>React Todo</h1>
            <TodoInput setTodo={setTodo} />
            <div className="todos">
                {todos.map(todo => <Todo
                    id={todo.todoId}
                    body={todo.todoBody}
                    removeTodo={deleteTodo}
                    key={todo.todoId} />)}
            </div>

        </section>
    );
}

export default TodoHub;
