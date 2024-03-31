import React from "react";
import NavBar from "../components/NavBar";

const ReturnBooks = () => {
    // Assuming you have an array of borrowed books
    const [borrowedBooks, setBorrowedBooks] = React.useState([]);

    React.useEffect(() => {
        // Fetch borrowed books from the database
        // Replace the URL with the appropriate endpoint to fetch the data
        fetch("https://example.com/api/borrowed-books")
            .then((response) => response.json())
            .then((data) => setBorrowedBooks(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <NavBar />
            <h1>Books Borrowed</h1>
            <ul>
                {borrowedBooks.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReturnBooks;