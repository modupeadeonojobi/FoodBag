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
            { id: 1, value: 1, name: "KFC - king Bucket", image: image1, price: '5000' },
            { id: 2, value: 1, name: "Refuel Max", image: image2, price: '1200' },
            { id: 3, value: 1, name: "Refuel Max", image: image3, price: '1200' }
        ]
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    }

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }

    getTotalAmount() {
        const total = this.state.counters.reduce((sum, counter) => sum + (counter.price * counter.value), 0);
        return total + 1200;
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
                                            <li className="breadcrumb-item"><span>Home</span></li>
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
                    {this.state.counters.map(counter =>
                        <CardList key={counter.id} onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement} onDelete={this.handleDelete}
                            counters={counter} imageUrl={counter.image} name={counter.name}
                            price={parseInt(counter.price * counter.value)} value={counter.value}
                        />
                    )}
                    <img className="scooter" src={scooter} alt="icon" />
                    <div className="mb-4">
                        <p className="c_font  c_dilivery pt-1 pb-4 ml-5 float-left">Delivery Fee <span className="prices pt-1 ml-5">N{1200}</span></p>
                    </div>
                    <p className="font-weight-bold mb-2 pt-5">Total <span >{this.getTotalAmount()}</span></p>
                </section>
                <section className=" justify-content-center">
                    <button className="btn btn float-center btn-lg mt-5">Checkout</button>
                </section>
            </div>
        );
    }
}

export default Cart;