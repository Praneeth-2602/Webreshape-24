import React, { useState } from 'react';

const BorrowForm = () => {
    const [bookTitle, setBookTitle] = useState('');
    const [borrowerName, setBorrowerName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform any necessary validation or data processing here

        // Create a new document to be inserted into the MongoDB collection
        const newBorrow = {
            bookTitle,
            borrowerName
        };

        try {
            // Send a POST request to the server to insert the new document into the MongoDB collection
            const response = await fetch('/api/borrow', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBorrow)
            });

            if (response.ok) {
                // Reset form fields
                setBookTitle('');
                setBorrowerName('');
                console.log('Borrow record inserted successfully');
            } else {
                console.log('Failed to insert borrow record');
            }
        } catch (error) {
            console.error('Error inserting borrow record:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="bookTitle">Book Title:</label>
            <input
                type="text"
                id="bookTitle"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
            />

            <label htmlFor="borrowerName">Borrower Name:</label>
            <input
                type="text"
                id="borrowerName"
                value={borrowerName}
                onChange={(e) => setBorrowerName(e.target.value)}
            />

            <button type="submit">Borrow Book</button>
        </form>
    );
};

export default BorrowForm;