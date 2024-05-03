import React, {useState} from 'react'

const BookForm = ({setUpdated, updated}) => {
    const initialBook = {id: '', title: '', author: '', rating: '', year_published: ''};
    const [book, setBook] = useState(initialBook);
    const handleChange = (e) => {
        setBook({...book, [e.target.id]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(book);
        fetch("http://localhost:3002/books", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        }).then((res) => {
           res.json();
        }).then((data) => {
            console.log(data);
            setUpdated(!updated);
            // e.target.reset();
            setBook(initialBook);
    });
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" value={book.title} id="title" placeholder="Enter book title" onChange={handleChange}/>
        <input type="text" value={book.author} id="author" placeholder="Enter book author" onChange={handleChange}/>
        <input type="number" value={book.rating} id="rating" placeholder="Enter book rating" onChange={handleChange}/>
        <input type="number" value={book.year_published} id="year_published" placeholder="Enter year published" onChange={handleChange}/>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default BookForm;