/** @format */

"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Alegreya } from "next/font/google";
import "@/app/globals.css";

type Testimonial = {
	quote: string;
	name: string;
	designation: string;
	src: string;
};

const alegreya = Alegreya({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const AnimatedTestimonials = ({
	testimonials,
	autoplay = true,
}: {
	testimonials: Testimonial[];
	autoplay?: boolean;
}) => {
	const [active, setActive] = useState(0);
	const [randomRotations, setRandomRotations] = useState<number[]>([]);

	const handleNext = () => {
		setActive((prev) => (prev + 1) % testimonials.length);
	};

	const isActive = (index: number) => index === active;

	useEffect(() => {
		if (autoplay) {
			const interval = setInterval(handleNext, 3000);
			return () => clearInterval(interval);
		}
	}, [autoplay]);

	useEffect(() => {
		const rotations = testimonials.map(
			() => Math.floor(Math.random() * 21) - 10
		);
		setRandomRotations(rotations);
	}, [testimonials]);

	const updatedTestimonials: Testimonial[] = [
		{
			quote:
				"A test of intellect and strategy where only the sharpest minds can prevail. Engage in fierce discussions, challenge ideas, and prove your mental agility to claim victory in this ultimate battle of wits.",
			name: "War of Wits",
			designation: "",
			src: "https://ik.imagekit.io/chaitanya/WhatsApp%20Image%202025-02-26%20at%2002.24.11_9bb558dd.jpg?updatedAt=1740581185909",
		},
		{
			quote:
				"Your words hold power. Step up, speak confidently, and showcase your skills. Whether it's logic, persuasion, or eloquence, each argument is a step closer to triumph. Every debate brings you closer to claiming the crown.",
			name: "Speak and Triumph",
			designation: "",
			src: "https://ik.imagekit.io/chaitanya/WhatsApp%20Image%202025-02-26%20at%2002.24.12_78370e5a.jpg?updatedAt=1740581185803",
		},
		{
			quote:
				"This is more than just a competition—it's a pursuit of honor and recognition. Compete against the finest minds, debate with passion, and earn your place in history as the ultimate champion. Victory brings unparalleled glory.",
			name: "Debate for Glory",
			designation: "",
			src: "https://ik.imagekit.io/chaitanya/WhatsApp%20Image%202025-02-26%20at%2002.24.11_65a279b9.jpg?updatedAt=1740581185826",
		},
		{
			quote:
				"It's not just about winning; it's about the connections you make and the fun you have along the way. Pratijja v20 is the perfect platform for you to forge lasting friendships and experience the thrill of competition.",
			name: "Debate. Connect. Conquer",
			designation: "",
			src: "https://ik.imagekit.io/chaitanya/WhatsApp%20Image%202025-02-26%20at%2002.24.13_ab02eced.jpg?updatedAt=1740581185815",
		},
		{
			quote:
				"Caution: May cause excessive brain activity! To ace this marathon of minds, you'll have to push your argumentation and impromptu speaking skills to the limit. Are you prepared for this intellectual endurance test?",
			name: "The Mind’s Marathon",
			designation: "",
			src: "https://ik.imagekit.io/chaitanya/WhatsApp%20Image%202025-02-26%20at%2021.35.31_7b9c370b.jpg?updatedAt=1740655232332",
		},
	];

	return (
		<div
			className="antialiased font-sans px-10 md:px-12 lg:px-20 py-20"
			style={{ backgroundColor: "#EBCE89" }}>
			<div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
				<div className="flex flex-col justify-center items-center py-4">
					<motion.div
						key={active}
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -20, opacity: 0 }}
						transition={{ duration: 0.2, ease: "easeInOut" }}>
						<h3
							className="text-6xl uppercase font-bold"
							style={{ letterSpacing: "0px" }}>
							<span style={{ color: "#112B22" }}>
								{updatedTestimonials[active].name.split(" ")[0]}
							</span>{" "}
							<span style={{ color: "#2E1413" }}>
								{updatedTestimonials[active].name.split(" ").slice(1).join(" ")}
							</span>
						</h3>
						<motion.p
							className={`text-xl font-bold ${alegreya.className}`}
							style={{ color: "#582E18" }}>
							{updatedTestimonials[active].quote
								.split(" ")
								.map((word, index) => (
									<motion.span
										key={index}
										initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
										animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
										transition={{
											duration: 0.2,
											ease: "easeInOut",
											delay: 0.02 * index,
										}}
										className="inline-block">
										{word}&nbsp;
									</motion.span>
								))}
						</motion.p>
					</motion.div>
				</div>

				<div>
					<div className="relative h-80 w-full">
						<AnimatePresence>
							{updatedTestimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.src}
									initial={{
										opacity: 0,
										scale: 0.9,
										z: -100,
										rotate: randomRotations[index] ?? 0,
									}}
									animate={{
										opacity: isActive(index) ? 1 : 0.7,
										scale: isActive(index) ? 1 : 0.95,
										z: isActive(index) ? 0 : -100,
										rotate: isActive(index) ? 0 : randomRotations[index] ?? 0,
										zIndex: isActive(index)
											? 999
											: updatedTestimonials.length + 2 - index,
										y: isActive(index) ? [0, -80, 0] : 0,
									}}
									exit={{
										opacity: 0,
										scale: 0.9,
										z: 100,
										rotate: randomRotations[index] ?? 0,
									}}
									transition={{ duration: 0.4, ease: "easeInOut" }}
									className="absolute inset-0 origin-bottom">
									<Image
										src={testimonial.src}
										alt={testimonial.name}
										width={500}
										height={500}
										draggable={false}
										className="h-full w-full rounded-3xl object-cover object-center"
									/>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
};
