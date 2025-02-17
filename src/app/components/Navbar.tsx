import React from "react";
import './Styles/Navbar.css';


const Navbar: React.FC = () => {
    return (
        <div className="container">
            <div className="actualContainer">
                <div className="textDiv">
                    <p className="text">Home</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="textDiv">
                    <p className="text">About Us</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="textDiv">
                    <p className="text">Register</p>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;