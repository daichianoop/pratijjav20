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
				<div className="text-4xl bg-[#ebce89] font-bold text-center p-5 uppercase text-[#002027]">Think Fast, Speak Smart, Win Big – <span className="text-[#582E18]">₹77K Awaits!</span></div>

				<AnimatedTestimonialsDemo />
				<FlipCard />
			</div>
		</>
	);
}
