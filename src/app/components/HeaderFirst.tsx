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

				<div className="image">
					<Image
						src="/image.webp"
						alt="Event"
						width={400} // Set appropriate width
						height={300} // Set appropriate height
						priority
					/>
				</div>
				<div className="debate-text ">
					<div>
						<span className="bigtext">THE LARGEST </span>
						ASIAN PARLIAMENTARY DEBATE IN INDIA
					</div>
				</div>
			</div>
			<div className={"relative -right-10 -bottom-20 count"}>
				<CountdownTimer />
			</div>
		</div>
	);
};

export default HeaderFirstPage;
