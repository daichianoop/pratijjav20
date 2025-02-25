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
				20<sup>TH</sup>&nbsp;EDITION OF
				</div>
				<div className="one-of">One Of</div>
				<br />
				<div className="debate-text">
					THE LARGEST ASIAN PARLIAMENTARY DEBATE IN INDIA
				</div>
				<div className="image">
					<Image 
					className="img"
						src="/image.webp"
						alt="Event"
						width={300} // Set appropriate width
						height={300} // Set appropriate height
						priority 
					/>
				</div>
			</div>
			<div className={"relative -right-10 -bottom-20 count"}>
				<CountdownTimer/>
			</div>
		</div>
	);
};

export default HeaderFirstPage;
