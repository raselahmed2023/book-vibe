import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    
    const singleBookDetails = data.find(book => book.bookId === bookId);
    const { bookName } = singleBookDetails;
    return (
        <div>

            <h2>{bookName}</h2>

        </div>
    );
};

export default BookDetails;