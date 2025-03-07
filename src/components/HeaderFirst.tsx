import React from "react";
import CountdownTimer from "@/components/CountDownTimer";

const HeaderFirstPage: React.FC = () => {
	return (
		<div className="fakebody min-h-screen bg-no-repeat bg-fixed bg-contain pt-7">
			<div className="text-4xl lg:text-6xl text-center built-tilting mt-1 text-white" style={{ fontFamily: "Impact, sans-serif" }}>
				20<sup>th</sup> EDITION
			</div>
			<div className="text-4xl lg:text-6xl text-center built-tilting mt-5 text-white" style={{ fontFamily: "Impact, sans-serif" }}>
				OF THE LARGEST ASIAN PARLIAMENTARY DEBATE <br /> IN INDIA
			</div>
			<div className="flex justify-center mt-5">
				<CountdownTimer />
			</div>
			<div className="text-2xl lg:text-4xl text-center built-tilting mt-5 text-white">
                Think Fast, Speak Smart, Win Big – <br /> ₹77K Awaits!
            </div>


		</div>
	);
};

export default HeaderFirstPage;
