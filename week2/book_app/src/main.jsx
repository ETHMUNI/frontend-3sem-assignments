import React from 'react'
import ReactDOM from 'react-dom/client'
// import MyApp, {App1, App2, App3} from './App.jsx'
import BookApp from './components/BookApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MyApp />
    <App1 name="H1" />
    <App2 name="H2"/>
    <App3 name="H3" /> */}
    <BookApp />
  </React.StrictMode>,
)