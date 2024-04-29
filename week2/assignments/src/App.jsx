import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import MemberDemo from '../ListDemo'
import ListDemo from '../ListDemo'

function App() {
  

  return (
    <><Counter initialValue={5} />
    <ListDemo />
    </>
  )
}

export default App
