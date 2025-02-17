import React from "react";
import Image from "next/image";
import "./styles/headerFirstPage.css";

const HeaderFirstPage: React.FC = () => {
    return (
        <div className={"fakebody"}>
            <div className="container">
                <div className="title">
                    20<sup>th</sup> Edition Of
                </div>
                <div className="one-of">One Of</div>
                <div className="debate-text">
                    The Largest Asian Parliamentary Debate <br/> 2025
                </div>
                <div className="image">
                    <Image
                        src="/image.webp"
                        alt="Event"
                        width={500} // Set appropriate width
                        height={300} // Set appropriate height
                        priority // Loads the image faster for better performance
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderFirstPage;
