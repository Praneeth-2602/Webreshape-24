import React from 'react';
import Book from './Book';
import { useState } from 'react';
import './SearchForm.css'

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch('https://openlibrary.org/search.json?q=${searchTerm}');
            const data = await response.json();
            console.log('Fetched data:', data); // Add this line to console log the data
            setSearchResults(data.docs);
        } catch (error) {
            console.error('Error searching books:', error);
        }
    };

    return (
        <div className='search-form'>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search books..."
            />
            <button onClick={() => {
                handleSearch();
                
            }}>Search</button>

            {searchResults.length > 0 && (
                <ul>
                    {searchResults.map((book) => (
                        <Book
                            key={book.key}
                            id={book.key}
                            title={book.title}
                            author={book.author}
                            edition_count={book.edition_count}
                            first_publish_year={book.first_publish_year}
                            cover_img={book.cover_img}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchForm;