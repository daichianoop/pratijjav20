/** @format */

import FlipCard from "@/components/FlipCards";
import HeaderFirstPage from "@/components/HeaderFirst";
import { AnimatedTestimonialsDemo } from "@/components/animated-testimonials-demo";

export default function Home() {
	return (
		<>
			<div className={"bg-[#002027] font-built-titling"}>
				<div
					className={
						"hero-part bg-[#002027] bg-opacity-0 bg-cover bg-fixed pt-20"
					}>
					<HeaderFirstPage />
				</div>
				<div
					className={
						"bg-[#EBCE89] uppercase text-[2.6rem] text-[#2e1413] font-built-titling font-extrabold mt-5 text-center"
					}>
					Claim Prizes Worth &#8377; 77K! March 21-23, 2025
				</div>
				<AnimatedTestimonialsDemo />
				<FlipCard />
			</div>
		</>
	);
}
