/** @format */

import React from "react";
import "./styles/flipCards.css";
import Image from "next/image";
import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({
	weight: ["400"],
	subsets: ["latin"],
});

const FlipCard: React.FC = () => {
	return (
		<section
			className="flipCards px-6 md:px-12 lg:px-20 py-10"
			style={{ backgroundColor: "#EBCE89" }}>
			<div className="flex flex-wrap justify-center gap-8">
				{[
					{ src: "/poster-21.png", title: "INCEPTION" },
					{ src: "/poster-22.png", title: "DISCLOSURE" },
					{ src: "/poster-23.png", title: "EPILOGUE" },
				].map((card, index) => (
					<div
						key={index}
						className="flip-card w-full sm:w-[340px] md:w-[360px] lg:w-[390px]">
						<div className="flip-card-inner">
							<div className="flip-card-front">
								<Image
									src={card.src}
									width={390}
									height={500}
									alt={card.title}
								/>
							</div>
							<div className="px-6 py-8 flip-card-back bg-[url('/flipcardbg.png')] bg-cover bg-center h-full">
								<p
									className={`title1234 mb-4 text-3xl md:text-4xl ${yeseva.className}`}>
									{card.title}
								</p>
								<p className={`text-base md:text-lg ${yeseva.className}`}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FlipCard;
