/** @format */

import FlipCard from "@/components/FlipCards";
import HeaderFirstPage from "@/components/HeaderFirst";
import { AnimatedTestimonialsDemo } from "@/components/animated-testimonials-demo";

export default function Home() {
	return (
		<>
			<div className={"font-built-titling"}>
				<div className="fakebody w-full h-screen text-[#ebce89]">
					<HeaderFirstPage />
				</div>
				<AnimatedTestimonialsDemo />
				<FlipCard />
			</div>
		</>
	);
}
