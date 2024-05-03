import React , {useState} from 'react'
import BookList from './BookList'
import BookForm from './BookForm'
import '../App.css'

export default () => {
  const [updated, setUpdated] = useState(false);
  return (
    <>
    <BookForm updated={updated} setUpdated={setUpdated}/>
    <BookList updated={updated} setUpdated={setUpdated}/>
    </>
  )
}