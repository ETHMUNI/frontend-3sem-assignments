import React, { useState } from 'react';

const TodoForm = ({todo, setTodo, setTodos, todos}) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // console.log(todo);
        todo.id = Math.floor(Math.random() * 100000);
        setTodos([...todos, todo]);
    }

    const changeToDo = (evt) => {
        setTodo({
            ...todo,
            [evt.target.id]: evt.target.value
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
          Title <input id="title" type="text" value={todo.title} placeholder="Write a new todo title" onChange={changeToDo}/><br/>
          User ID <input id="userId" type="text" value={todo.userId} placeholder="Enter a user ID" onChange={changeToDo}/><br/>
          <input type="submit" value="Add Todo"/>
        </form>
        </>
    )
}
export default TodoForm;