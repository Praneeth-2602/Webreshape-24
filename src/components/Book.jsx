import React, { useState } from 'react';

function Book(props) {
    const { key, id, title, author, edition_count, first_publish_year, cover_img } = props;
    const [isBorrowed, setIsBorrowed] = useState(false); // State to track if the book is borrowed

    const handleBorrow = async () => {
        const data = {
            name: 'name', // You may replace this with the username of the logged-in user
            title: title // Using the title from props
        };

        try {
            const response = await fetch('http://localhost:5000/api/borrow', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setIsBorrowed(true); // Update state to indicate the book is borrowed
                alert('Book borrowed successfully');
            } else {
                throw new Error('Failed to borrow book');
            }
        } catch (error) {
            console.error('Error borrowing book:', error);
            // Handle the error
        }
    };

    return (
        <div>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Edition Count: {edition_count}</p>
            <p>First Publish Year: {first_publish_year}</p>
            <img src={cover_img} alt={title} />

            {/* Render the button based on whether the book is borrowed or not */}
            {isBorrowed ? (
                <button disabled>Borrowed</button>
            ) : (
                <button onClick={handleBorrow}>Borrow</button>
            )}
        </div>
    );
}

export default Book;
