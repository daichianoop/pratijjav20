/** @format */

import React from "react";
import "./styles/flipCards.css";
import Image from "next/image";


const FlipCard: React.FC = () => {
	return (
		<section
			className="cards-container px-4 sm:px-10 py-10"
			style={{ backgroundColor: "#EBCE89" }}>
			<div className="flex flex-col md:flex-row justify-center gap-8 items-start">
				{/* Card 1 */}
				<div className="custom-card w-full sm:w-[300px] h-[400px] relative">
					<div className="card-content p-4">
						<Image
							src="/poster-kiit.png"
							width={300}
							height={300}
							alt="KIIT & KISS Poster"
							className="card-image object-cover rounded-md"
						/>
					</div>
				</div>

				{/* Card 2 */}
				<div className="custom-card w-full sm:w-[300px] h-[400px] relative">
					<div className="card-content p-2">
						<Image
							src="/poster-pratijja.png"
							width={300}
							height={300}
							alt="Pratijja Poster"
							className="card-image object-cover rounded-md"
						/>
					</div>
				</div>  

				{/* Card 3 */}
				<div className="custom-card w-full sm:w-[300px] h-[400px] relative">
					<div className="card-content p-4">
						<Image
							src="/poster-founder.png"
							width={300}
							height={300}
							alt="Founder Poster"
							className="card-image object-cover rounded-md"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FlipCard;
