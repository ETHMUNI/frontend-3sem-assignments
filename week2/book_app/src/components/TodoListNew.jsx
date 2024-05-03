import React, { useEffect, useState } from "react";

export default () => {
  const [todos, setTodos] = useState([]);
  // filter on checkbox
  const [filter, setFilter] = useState(false);
  let filtered = [];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  },[]);

  return (
    <>
      <h3>Todo List</h3>
      Show Not completed todos
      <input type="checkbox" onChange={(e) => setFilter(!filter)} />

      <ol>
        {filtered = filter?todos.filter((todo) => !todo.completed):todos;
        filtered.map((todo) => (
          <li key={todo.id}>
            {todo.id} {todo.title}{" "}
            {todo.completed ? (
              <span style={{ color: "green" }}>Completed</span>
            ) : (
              <span style={{ color: "red" }}>Not Completed</span>
            )}
          </li>
        ))}
      </ol>
    </>
  );
};