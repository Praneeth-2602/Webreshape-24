import React, { useState } from 'react';

const ReturnForm = () => {
    const [bookTitle, setBookTitle] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const handleBookTitleChange = (e) => {
        setBookTitle(e.target.value);
    };

    const handleReturnDateChange = (e) => {
        setReturnDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform the return book logic here
        // You can use the bookTitle and returnDate values to process the return

        // Reset the form fields
        setBookTitle('');
        setReturnDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="bookTitle">Book Title:</label>
            <input
                type="text"
                id="bookTitle"
                value={bookTitle}
                onChange={handleBookTitleChange}
            />

            <label htmlFor="returnDate">Return Date:</label>
            <input
                type="date"
                id="returnDate"
                value={returnDate}
                onChange={handleReturnDateChange}
            />

            <button type="submit">Return Book</button>
        </form>
    );
};

export default ReturnForm;