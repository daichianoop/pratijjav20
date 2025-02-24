/** @format */
import React from "react";
import Image from "next/image";
import "./styles/headerFirstPage.css";
import CountdownTimer from "@/app/components/CountDownTimer";

const HeaderFirstPage: React.FC = () => {
	return (
		<div className={"fakebody bg-no-repeat bg-fixed bg-contain"}>
			<div className="container">
				<div className="title">
					20<sup>TH</sup> EDITION OF
				</div>
				<div className="one-of">One Of</div>
				<div className="debate-text">
					THE LARGEST ASIAN PARLIAMENTARY DEBATE <br/> 2025
				</div>
				<div className="image">
					<Image
						src="/image.webp"
						alt="Event"
						width={500} // Set appropriate width
						height={300} // Set appropriate height
						priority 
					/>
				</div>
			</div>
			<div className={"relative -right-10 -bottom-20"}>
				<CountdownTimer/>
			</div>
		</div>
	);
};

export default HeaderFirstPage;
