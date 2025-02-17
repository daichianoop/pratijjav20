import React from "react";
import "./styles/headerSecondFile.css";

const HeaderSecondPage: React.FC = () => {
    return (
        <div className={"fakebody"}>
            <section className="aboutUsContainer">
                <div className="clouds">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <h1 className="heading">ABOUT US</h1>
                <p className="description">
                    KRONICLE, KIIT&apos;s official debating society, brings its mission to reality once again,
                    with its own APD competition—a monument to our founder’s intellect, argumentation,
                    and unwavering pursuit of discourse.
                </p>
            </section>
        </div>
    );
};

export default HeaderSecondPage;
