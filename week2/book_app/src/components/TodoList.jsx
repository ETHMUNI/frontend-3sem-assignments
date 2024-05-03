import React, {useEffect, useState} from 'react'

export default ({todos, setTodos, checked}) => {
    const [unfilteredTodos, setUnfilteredTodos] = useState([]); 
    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/todos")
                .then((response) => response.json())
                .then((data) => {
                    setTodos(data);
                    setUnfilteredTodos(data);
                });
        }
    ,[]);
    useEffect( // filter todos based on checked value
        () => {
            checked? setTodos(todos.filter((todo) => !todo.completed)): setTodos([...unfilteredTodos]);
            console.log('checked: ', checked, todos);
        }, [checked]);
  return (
    <>
        <h3>Todo List</h3>
        <hr />
        <ol>
        

        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.id} {todo.title} {todo.completed ? <span style={{color: 'green'}}>Completed</span>: <span style={{color:'red'}}>Not Completed</span>}

            </li>
        ))}
        </ol>
    </>
  )
}
