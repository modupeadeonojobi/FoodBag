import React from 'react';
// import './Interest.css';

const Service = ({ text, imageUrl, info }) => {
    return (
        <div>
            <img className="Avatar"
                src={imageUrl} alt="Icon"
            />
            <h5 className="text">{text}</h5>
            <p className="info">{info}</p>
        </div>
    );
}

export default Service;