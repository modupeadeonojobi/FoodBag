import React from 'react';
import './Interest.css';

const Interest = ({ category, text, imageUrl, alt }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <img className="Avatar"
                    src={imageUrl}
                    alt={alt}
                />
                <h5 className="card-title">{category}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>



    );
    // }
}

export default Interest;