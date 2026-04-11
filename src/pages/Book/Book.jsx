import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

    const { bookId, bookName, author, image, rating, category, tags } = singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-4 gap-4">
                <figure className="p-5  bg-gray-100 flex justify-center items-center h-56">
                    <img
                        src={image}
                        alt="Shoes"
                        className="h-full object-contain rounded-lg" />
                </figure>

                <div className="card-body ">

                    <div className="flex gap-2 flex-wrap">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full text-center">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="p-2">
                        <h2 className="card-title text-lg font-bold mt-1">{bookName}</h2>
                        <h3 className='text-gray-500 text-xl mb-4'> By: {author}</h3>


                        <div className=' border-t border-dashed border-gray-300 w-full pt-1'>
                            <div className='flex justify-between items-center gap-10 mt-2'>
                                <span className='text-xl'>{category}</span>
                                <div className='flex gap-1 justify-center items-center text-xl'>
                                    <p> {rating} </p>
                                    <CiStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Book;