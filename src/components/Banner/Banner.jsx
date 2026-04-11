import React from 'react';
import hero from "../../assets/hero.png"

const Banner = () => {
    return (
        <div className='hidden'>

            <div>
                <h2>Books to freshen up your bookshelf</h2>
                <button className='btn'>View The List</button>
            </div>
            <div>
                <img src={hero} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;