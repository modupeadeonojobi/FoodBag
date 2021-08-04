import React from "react";
import './Cart.css';
import close from '../../Assests/Images/close.svg'
import minus from '../../Assests/Images/Minus.svg'
import plus from '../../Assests/Images/plus.svg'


const CartList = ({ name, imageUrl }) => {
    return (
        <div className="">
            <div className="delivery">
                <img className="Avatar pr-3"
                    src={close} alt="Icon"
                />
                <img className="Avatar"
                    src={imageUrl} alt="Icon"
                />
                <div className="item" >
                    <h5 className="text">{name}</h5>
                    <img src={plus} alt="icon" /> 2
                    <img src={minus} alt="icon" />
                    <p className="price">#10,000</p>


                </div>


            </div>
        </div>
    );
}

export default CartList;