import React, { Component } from "react";
import CardList from './CartList';
import './Cart.css';
import image1 from '../../Assests/Images/image1.svg';
import image2 from '../../Assests/Images/image2.svg';
import image3 from '../../Assests/Images/image3.svg';
import scooter from '../../Assests/Images/scooter 1.svg';

class Cart extends Component {
    state = {
        counters: [
            { id: 1, value: 1 },
        ]
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }

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
                    <CardList imageUrl={image1} name="KFC - King Bucket" onIncrement={this.handleIncrement} />
                    <CardList imageUrl={image2} name="Refuel max" onIncrement={this.handleIncrement} />
                    <CardList imageUrl={image3} name="Refuel max " onIncrement={this.handleIncrement} />
                    <img scr={scooter} alt="scooter" />


                </section>
            </div>
        );
    }
}

export default Cart;