/** @format */

import FlipCard from "@/components/FlipCards";
import HeaderFirstPage from "@/components/HeaderFirst";
import { AnimatedTestimonialsDemo } from "@/components/animated-testimonials-demo";

export default function Home() {
	return (
		<>
			<div className={"font-built-titling"}>
				<div className="fakebody bg-[url('/formbg.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen text-[#ebce89] pt-20">
					<HeaderFirstPage />
				</div>
				<div
					className={
						"bg-[#EBCE89] uppercase text-[2.6rem] text-[#2e1413] font-built-titling font-extrabold  text-center mt-0"
					}>
					Claim Prizes Worth &#8377; 77K! March 21-23, 2025
				</div>
				<AnimatedTestimonialsDemo />
				<FlipCard />
			</div>
		</>
	);
}
