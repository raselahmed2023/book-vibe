import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDb } from '../../utilities/addToDb';

const BookDetails = () => {

    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();

    const singleBookDetails = data.find(book => book.bookId === bookId);
    const { bookName,image } = singleBookDetails;

    const handleMarkAsRead= ()=>{

        addToStoreDb(bookId);

    }
    return (
        <div>

            <h2>{bookName}</h2>
            <img className='h-20' src={image} alt="" />
            <div>
                <button onClick={()=>handleMarkAsRead(id)}
                 className='btn'>Mark as Read</button>
                <button className='btn'>Add to wishlist</button>
            </div>

        </div>
    );
};

export default BookDetails;