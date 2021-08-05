import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch, Link
} from "react-router-dom";
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import './Navbar.css';


const Navbar = () => {
    return (
        <Router>
            <div className="c_navbar">
                <nav className="navbar navbar-light">
                    <Link className="navbar-brand" to="/">Food<span className="bag">Bag</span></Link>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link c_btn" to="/sign-up" >Sign up</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/cart" component={Cart} />
                    <Route path="/login" />
                    <Route path="/sign-up" />
                    <Route path="/" exact component={Home} />

                </Switch>
            </div>
        </Router>
    )

}

export default Navbar;