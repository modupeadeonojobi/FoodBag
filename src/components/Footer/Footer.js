import React from 'react';
import './Footer.css';
import twitter from '../../Assests/Images/twitter 2.svg';
import youtube from '../../Assests/Images/youtube 1.svg';
import facebook from '../../Assests/Images/facebook-f 1.svg';


const Footer = () => {
    return (
        <div>
            <div className="text-center pt-5 mt-4 footer">
                <h5>Contact us</h5>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <img className="Avatar"
                            src={twitter}
                            alt="twitter"
                        />
                    </li>
                    <li className="nav-item">
                        <img className="Avatar"
                            src={youtube}
                            alt="youtube"
                        />
                    </li>
                    <li className="nav-item">
                        <img className="Avatar"
                            src={facebook}
                            alt="facebook"
                        />
                    </li>
                </ul>
            </div>
            <div className="mb-5 pb-5">
                <p className="float-left">Terms and Condition. Privacy Policy</p>
                <p className="float-right"><span>&copy; </span> Copyright 2021 Foodbag is a registered trademark and Condition.</p>

            </div>
        </div>



    );
    // }
}

export default Footer;