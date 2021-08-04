import React, { Component } from "react";
import CardList from './CartList';
import './Cart.css';
import image1 from '../../Assests/Images/image1.svg';
import image2 from '../../Assests/Images/image2.svg';
import image3 from '../../Assests/Images/image3.svg';
import image4 from '../../Assests/Images/scooter 1.svg';

class Cart extends Component {
    state = {}
    render() {
        return (
            <div className="">
                <section>
                    <div className="breadcrumb-bar">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-12 col-12">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Cart</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <h3>Cart</h3>
                <section>
                    <CardList imageUrl={image1} name="KFC - King Bucket" />
                    <CardList imageUrl={image2} name="Refuel max" />
                    <CardList imageUrl={image3} name="Refuel max " />
                    <img scr={image4} alt="scooter" />


                </section>
            </div>
        );
    }
}

export default Cart;