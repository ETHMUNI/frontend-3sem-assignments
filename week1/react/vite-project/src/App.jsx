import React from 'react'; // Ensure React is imported
import './App.css';
// import upper, { text1, text2, text3 } from "./file1"
import person, { males, females } from './file2'
import JokeComponent from './jokeComponent'
import MultiWelcome from './file3'

function App() {
  const { firstName, email } = person;

  const combinedNames1 = [...males, ...females];
  const combinedNames2 = [...males, "Kurt", "Helle", ...females, "Tina"];

  
  console.log(combinedNames1); // Outputs: ["Peter", "Jan", "Janne", "Sarah"]
  console.log(combinedNames2); // Outputs: ["Peter", "Jan", "Kurt", "Helle", "Janne", "Sarah", "Tina"]

  return (
   /* <div>
      <p>{upper("please uppercase me")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </div>

    <div>
      <h2>Ex2</h2>
      <p>{firstName}, {email}</p>
    </div>
    */
    <div>
      <h2>Ex3</h2> <MultiWelcome/>


      <h2>Ex4</h2>
      <JokeComponent />
    </div>

  );
}

export default App;
