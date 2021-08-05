import React, { Component } from "react";
import './Cart.css';
import close from '../../Assests/Images/close.svg'
import minus from '../../Assests/Images/Minus.svg'
import plus from '../../Assests/Images/plus.svg'


class CartList extends Component {
    render() {
        const { counters } = this.props;

        return (
            <div className="">
                <div className="delivery">
                    <img className="img-fluid img-thumbnail pr-3"
                        src={close} alt="Icon" onClick={() => this.props.onDelete(counters.id)}
                    />
                    <img className="img-fluid"
                        src={this.props.imageUrl} alt="Icon"
                    />
                    <div className="" >
                        <h6 className="ml-5 c_font">{this.props.name}</h6>
                        <img className="ml-5" src={plus} alt="icon" onClick={() => this.props.onIncrement(counters)} /> {counters.value}
                        <img className="pr-5 mr-5 pl-2" src={minus} alt="icon" onClick={() => this.props.onDecrement(counters)} />
                        <span className="price">N{this.props.price}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartList;