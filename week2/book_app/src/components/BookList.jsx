import React, {useState, useEffect} from 'react'

export default function BookList({updated, setUpdated}) {
    const [books, setBooks] = useState([{title: "test", author: "test", year_published: "test", rating: "test"}])
  

    useEffect(() => {
        fetch("http://localhost:3002/books")
        .then(response => response.json())
        .then(data => setBooks(data));
    }, [updated])


    const handleDelete = (event) => {
        console.log(event.target.id);
        fetch(`http://localhost:3002/books/${event.target.id}`, {
            method: 'DELETE',
        }).then(() => setUpdated(!updated));
    }


  return (
    <>
    <h1>Book List:</h1>
    <hr></hr>
        <table>
            <thead>
                <tr>
                {books && Object.keys(books[0]).filter((key) => key != "id").map((key) => {
                    return (
                        <th key={crypto.randomUUID()}>{key}</th>
                    );
                })}
                <th></th>
                </tr>
            </thead>

            <tbody>
                {books && books.map((book) => {
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.rating}</td>
                            <td>{book.year_published}</td>
                            <button id={book.id} onClick={handleDelete}>Delete</button>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <hr></hr>
    </>
  )
}