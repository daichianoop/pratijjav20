/** @format */

import { AnimatedTestimonials } from "@/app/components/animated-testimonials";

export function AnimatedTestimonialsDemo() {
	const testimonials = [
		{
			quote:
				"Lorem ipsum dolor sit amet, consectetur adipiscing " +
				"elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
				" aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
				"laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
				" in reprehenderit in voluptate velit esse ",
			name: "Heated Debates",
			designation: "aaaa",
			src: "https://ik.imagekit.io/chaitanya/WhatsApp%20Image%202025-01-19%20at%2020.45.14_d9a48285.png",
		},
		{
			quote:
				"Lorem ipsum dolor sit amet, consectetur adipiscing " +
				"elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
				" aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
				"laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
				" in reprehenderit in voluptate velit esse ",
			name: "Crazy Contest",
			designation: "bbbb",
			src: "https://ik.imagekit.io/chaitanya/IMG_6980.png",
		},
		{
			quote:
				"Lorem ipsum dolor sit amet, consectetur adipiscing " +
				"elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
				" aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
				"laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
				" in reprehenderit in voluptate velit esse ",
			name: "Wide Exposure",
			designation: "cccc",
			src: "/3.avif",
		},
		{
			quote:
				"Lorem ipsum dolor sit amet, consectetur adipiscing " +
				"elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
				" aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
				"laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
				" in reprehenderit in voluptate velit esse ",
			name: "Crazy Quality",
			designation: "dddd",
			src: "/4.avif",
		},
		{
			quote:
				"Lorem ipsum dolor sit amet, consectetur adipiscing " +
				"elit, sed do eiusmod tempor incididunt ut labore et dolore magna" +
				" aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
				"laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
				" in reprehenderit in voluptate velit esse ",
			name: "Unlimited Fun",
			designation: "eeee",
			src: "/5.avif",
		},
	];
	return <AnimatedTestimonials testimonials={testimonials} />;
}
