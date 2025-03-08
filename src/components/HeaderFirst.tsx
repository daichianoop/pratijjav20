/** @format */

import React from "react";
import CountdownTimer from "@/components/CountDownTimer";

const HeaderFirstPage: React.FC = () => {
	return (
		<div className="fakebody min-h-screen bg-no-repeat bg-fixed bg-contain pt-7">
			<div className="text-5xl text-center  mt-1 font-built-titling font-extrabold">
				20<sup>TH</sup> EDITION
			</div>
			<div className="text-3xl text-center font-built-tilting font-bold mt-5 p-2">
				OF ONE OF <br /> THE LARGEST <br />  ASIAN PARLIAMENTARY DEBATE <br />
				IN INDIA
			</div>
			<div className="flex justify-center">
				<CountdownTimer />
			</div>
<div className="text-4xl text-center font-built-tilting mt-5 font-semibold ">
                Battle for Glory & 77K in Prizes - March 21-23,2025 !
            </div>
		</div>
	);
};

export default HeaderFirstPage;
