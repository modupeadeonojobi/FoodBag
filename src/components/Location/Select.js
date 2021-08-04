import React, { Component } from "react";

class Select extends Component {
    state = {}
    render() {
        return (
            <div className="form-group">
                <label>Where are you?</label>
                <select class="form-select form-select-lg mb-3 form-control" aria-label=".form-select-lg example">
                    <option selected>Bodija Market</option>
                    <option value="1">Olabale Market</option>
                </select>
            </div>
        );
    }
}

export default Select;