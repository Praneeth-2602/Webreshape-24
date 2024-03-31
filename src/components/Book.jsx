import React from 'react';

function Book(props) {
    const { key, id, title, author, edition_count, first_publish_year, cover_img } = props;

    return (
        <div>
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Edition Count: {edition_count}</p>
            <p>First Publish Year: {first_publish_year}</p>
            <img src={cover_img} alt={title} />

            <button href="/borrow">Borrow</button>
        </div>
    );
}

export default Book;