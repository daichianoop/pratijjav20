/** @format */

import AboutPageFlipCards from "@/app/components/AboutPageFlipCards";
import { Alegreya } from "next/font/google";

// Initialize the font
const alegreya = Alegreya({ subsets: ["latin"], weight: ["400", "700"] });

export default function AboutPage() {
	return (
		<>
			<div className="bg-secondary flex flex-col items-center justify-center min-h-screen">
				<h3 className="text-6xl md:text-7xl lg:text-8xl uppercase font-bold text-primary tracking-normal">
					About Us
				</h3>
				<div
					className={`antialiased uppercase px-10 md:px-12 lg:px-20 py-20 w-3/5 text-center ${alegreya.className}`}
					style={{ backgroundColor: "#EBCE89" }}>
					KRONICLE, KIIT's official debating society, brings its mission to
					reality once again, with its own APD competition—a monument to our
					founder's intellect, argumentation, and unwavering pursuit of
					discourse.
				</div>

				<div className="mt-12">
					<AboutPageFlipCards />
				</div>
			</div>
		</>
	);
}
