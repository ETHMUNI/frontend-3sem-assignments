import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonViewer from './components/PersonViewer'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
// import TodoList from './components/TodoListNew'

function App() {
  const [todo, setTodo] = useState({title: '', userId: 1});
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <h1>Hello Vite + React!</h1>
      <TodoForm todo={todo} setTodo={setTodo} setTodos={setTodos} todos={todos}/>
      Show only the todos that are not completed: <input type="checkbox" value={checked} onChange={()=>setChecked(!checked)} />
      <TodoList todos={todos} setTodos={setTodos} checked={checked}/>
      <hr />
      <PersonViewer title="Person Viewer"/>

    </>
  )
}

const App1 = (props) => {return (<div>App1 {props.name}</div>)}
const App2 = (props) => <div>App2 {props.name}</div>
function App3(props) { return (<div>App3 {props.name}</div>) }
// App1 = App2;

export default App
export { App1, App2, App3 }