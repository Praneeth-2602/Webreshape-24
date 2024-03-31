import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import BorrowedBook from './BorrowedBook'
import axios from 'axios';

function Profile() {
    const [borrowedBooks, setBorrowedBooks] = useState([]);

    useEffect(() => {
        // Fetch the borrowed books from the API
        axios.get('/api/borrowed-books')
            .then(response => {
                setBorrowedBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching borrowed books:', error);
            });
    }, []);

    return (
        <div>
            <NavBar />
            <h1>Profile</h1>
            <h2>Borrowed Books</h2>
            <ul>
                {borrowedBooks.map(book => (
                    <BorrowedBook book={book} key={book.id} />
                ))}
            </ul>
        </div>
    );
}

export default Profile;