/** @format */

import FlipCard from "@/components/FlipCards";
import HeaderFirstPage from "@/components/HeaderFirst";
import { AnimatedTestimonialsDemo } from "@/components/animated-testimonials-demo";

export default function Home() {
	return (
		<>
			<div className={"font-built-titling"}>
				<div className="fakebody w-screen h-screen text-[#ebce89] px-1.5">
					<HeaderFirstPage />
				</div>
				<AnimatedTestimonialsDemo />
				<FlipCard />
			</div>
		</>
	);
}