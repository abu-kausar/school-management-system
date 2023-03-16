import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({role}) => {
    const {name, img, url} = role;
    return (
        <div className="card w-96 bg-base-100 shadow-xl bg-">
            <figure className="px-10 pt-10 h-[256px]">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="card-actions">
                    <Link to={url}><button className="btn btn-primary">{name} Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;