import React from 'react';

function Book(props) {
    const { key, id, title, author, edition_count, first_publish_year, cover_img } = props;

    const handleBorrow = async () => {
        const data = {
            name: 'name',
            title: props.title
        };
    
        try {
            const response = await fetch('http://localhost:5000/api/loginuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            // Handle the response
        } catch (error) {
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

            <button  onClick={handleBorrow}>Borrow</button>
        </div>
    );
}

export default Book;