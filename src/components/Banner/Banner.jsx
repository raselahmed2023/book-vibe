import React from 'react';
import hero from "../../assets/hero.png"

const Banner = () => {
    return (
        <div className="hero bg-base-200 mt-7 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={hero}
                    className="h-70 rounded-lg"
                />
                <div>
                    <h1 className="text-3xl font-bold text-center">Books to freshen up <br /> your bookshelf</h1>
                
                    <button className="btn bg-green-700 mt-6">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;