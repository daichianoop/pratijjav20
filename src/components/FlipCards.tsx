/** @format */
"use client";
import React, { useState } from "react";
import "./styles/flipCards.css";
import Image from "next/image";
import { Yeseva_One } from "next/font/google";

const yeseva = Yeseva_One({
	weight: ["400"],
	subsets: ["latin"],
});

const FlipCard: React.FC = () => {
	// State to track flipped status for each card
	const [flippedCards, setFlippedCards] = useState<boolean[]>([
		false,
		false,
		false,
	]);

	const handleFlip = (index: number) => {
		setFlippedCards((prev) => {
			const updatedFlippedCards = [...prev];
			updatedFlippedCards[index] = !updatedFlippedCards[index];
			return updatedFlippedCards;
		});
	};

	return (
		<section className="flipCards w-screen ">
			<div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 md:gap-8 sm:gap-20">
				{[
					{
						src: "/poster-21.png",
						title: "INCEPTION",
						description:
							"The stage is set, the podiums stand tall, and the halls of KIIT resonate with the murmurs of debaters sharpening their arguments. Like the first brushstrokes on a grand canvas, this marks the genesis of three days of relentless discourse and intellectual debates. Hold on tight for the Opening Ceremony, which ignites the flame, calls for minds eager to clash and converge in pursuit of truth, which will be followed by opening rounds.",
					},
					{
						src: "/poster-22.png",
						title: "DISCOURSE",
						description:
							"As Day Two dawns, the battle rages on. This is where the competition thickens—each argument sharper, each rebuttal fiercer. With each passing round, the motions push the limits of reason, demanding wit and unshakable conviction. Then the real twist unfolds—the Break Announcement. The tension is electric, hearts race as names are called, and with every cheer and sigh, the battlefield narrows - and for those who remain, the war is far from over.",
					},
					{
						src: "/poster-23.png",
						title: "EPILOGUE",
						description:
							"Every story must find its conclusion, and the final strokes are painted on this canvas of intellect and perseverance. The grand finale looms as the finest debaters stand on the brink of victory, their words shaping Pratijja’s legacy. With the final motion unveiled and the last arguments made, the verdict is cast, the winners crowned, and a journey of knowledge, resilience, and camaraderie reaches its rightful end.",
					},
				].map((card, index) => (
					<div
						key={index}
						className={`flip-card w-full sm:w-[340px] md:w-[360px] lg:w-[390px] ${
							flippedCards[index] ? "flipped" : ""
						}`}
						onClick={() => handleFlip(index)}>
						<div className="flip-card-inner ">
							<div className="flip-card-front bg-[url('/flipcardbg.png')] bg-cover bg-center m-2">
								<Image
									src={card.src}
									width={390}
									height={500}
									alt={card.title}
								/>
							</div>
							<div className="px-6 py-8 flip-card-back bg-[url('/flipcardbg.png')] bg-cover bg-center h-full">
								<p
									className={`title1234 mb-4 text-3xl md:text-2xl ${yeseva.className}`}>
									{card.title}
								</p>
								<p className={`text-base ${yeseva.className}`}>
									{card.description}
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
