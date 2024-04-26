import React from "react";
import { persons } from './file2';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson({ person }) {
    return (
        <div>
            <h1>Welcome, {person.firstName} {person.lastName}</h1>
            <p>Email: {person.email}</p>
        </div>
    );
}

function MultiWelcome() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edith" />
            {persons.map((person, index) => (
                <WelcomePerson key={person.email} person={person} />
            ))}
        </div>
    );
}

export default MultiWelcome;
