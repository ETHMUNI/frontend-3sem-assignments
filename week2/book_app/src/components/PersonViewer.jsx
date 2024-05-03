import React, { useState, useEffect } from "react";

function PersonViewer({ title }) {
  const [nameState, setNameState] = useState(name); // initial value from props
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const myFirstPromise = fetch("https://jsonplaceholder.typicode.com/users");
    const mySecondPromise = myFirstPromise.then((response) => response.json());
    mySecondPromise.then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <>
    {console.log('Running render')}
      <h2 style={{color:'red'}}>{title}</h2>
      { users.map((user) => (
        <div key={user.id}>
          {user.name && <ShowName name={user.name} /> }
          <div>email: {user.email}</div>
        </div>
      ))}
    </>
  );
}

const ShowName = ({ name }) => <h3>{name}</h3>;

export default PersonViewer;