import React, { Component } from "react";
import './Select.css';
class Select extends Component {
    state = {}
    render() {
        return (
            <div className="form-group">
                <label>Where are you?</label>
                <select className="form-select form-select-lg mb-3 form-control" >
                    <option selected>Bodija Market</option>
                    <option value="1">Olabale Market</option>
                </select>
            </div >
        );
    }
}

export default Select;