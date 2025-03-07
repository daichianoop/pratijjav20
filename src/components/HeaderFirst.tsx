import React from "react";
import CountdownTimer from "@/components/CountDownTimer";

const HeaderFirstPage: React.FC = () => {
	return (
		<div className={"fakebody bg-no-repeat bg-fixed bg-contain pt-7"}>  
    <div className="text-4xl lg:text-6xl text-center built-tilting mt-3" style={{ fontFamily: "Impact, sans-serif" }}>  
        20<sup>th</sup> EDITION  
    </div>  
    <div className="text-4xl lg:text-6xl text-center built-tilting mt-5" style={{ fontFamily: "Impact, sans-serif" }}>  
        OF THE LARGEST ASIAN PARLIAMENTARY DEBATE <br/> IN INDIA  
    </div>  
    <div><CountdownTimer/></div>  
    <div></div>  
</div>  
	);
};

export default HeaderFirstPage;
