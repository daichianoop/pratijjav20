/** @format */
import React from "react";
import Image from "next/image";
import { Barlow } from "next/font/google";
import FlipCard from "./AboutPageFlipCards";
import "@/app/globals.css"; // ensure this path matches your project structure

const barlow = Barlow({
	weight: "900", // specify desired weight
	subsets: ["latin"],
});
const barlow_light = Barlow({
	weight: "500", // specify desired weight
	subsets: ["latin"],
});
const AboutUs = () => {
	return (
		<div className="min-h-screen -z-20">
			{/* Hero Section with Gradient Overlay */}
			<div className="bg-[#002027]">
				<section className=" bg-[#EBCE89] ">
					{/* Gradient Overlay */}
					<div className="" style={{ backgroundColor: "#EBCE89" }}></div>

					<div className="relative container mx-auto py-16 px-4 text-center">
						<h1
							className="text-[10vw] font-bold text-teal-950 leading-none text-center"
							style={{ fontFamily: "Impact, sans-serif" }}>
							ABOUT US
						</h1>
						<p className="text-base   sm:text-lg max-w-3xl mt-4 mx-auto text-teal-950">
							KRONICLE, KIIT&apos;s official debating society, brings its
							mission to reality once again, with its own APD competition—a
							monument to our founder&apos;s intellect, argumentation, and
							unwavering pursuit of discourse.
						</p>
					</div>
					<FlipCard />
				</section>

				{/* Version Section with Background Text */}
				<section className="relative container mx-auto px-4 py-16 bg-[#002027]	">
					<h2
						className="text-3xl sm:text-6xl font-bold bg-gradient-to-r from-[#7F654A] via-[#EBCE89] to-[#7F654A] bg-clip-text text-transparent"
						style={{ fontFamily: "Impact, sans-serif" }}>
						PRATIJJA V20.0
					</h2>

					{/* First Row - Image Left, Text Right */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 mt-12">
						<div>
							<Image
								src="https://ik.imagekit.io/chaitanya/WhatsApp%20Image%202025-02-26%20at%2021.37.27_f61575a7.jpg?updatedAt=1740655232337"
								alt="Debate"
								className="rounded-lg p-2"
								width={400}
								height={300}
							/>
						</div>
						<div className="space-y-4 sm:space-y-6 text-gray-300 text-[20px]">
							<p className="gradient-text">
								Pratijja is the flagship Asian Parliamentary Debate of KIIT
								University hosted by its esteemed literary and debating society,
								Kronicle.
							</p>
							<p className="gradient-text">
								One of India&apos;s premier debating tournaments, Pratijja
								attracts debaters from across the country engaging in
								intellectual discourse and critical thinking.
							</p>
							<p className="gradient-text">
								The tournament follows the Asian Parliamentary format with
								sessions on various global, societal and cultural issues.
								Multiple teams participate in intense rounds with
								well-researched arguments and debates.
							</p>
						</div>
					</div>

					{/* "Since 2006" Section with Text Left and Image Right */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative mt-16 z-10 ">
						<div
							className="text-[15vw] md:text-[120px] text-amber-100 font-bold leading-none"
							style={{ fontFamily: "Impact, sans-serif" }}>
							SINCE
							<br />
							2006
						</div>
						<div className="flex justify-center">
							<Image
								src="https://ik.imagekit.io/chaitanya/3a6b8f45-aa99-476a-a72c-6c003a1cdd99.jpeg"
								alt="Debate"
								className="rounded-lg"
								width={800}
								height={600}
							/>
						</div>
					</div>
				</section>

				<div className="relative bg-[#002027]">
					<div className="w-full h-32 mt-40 bg-[url('/Component9.png')] bg-center bg-cover bg-no-repeat z-0"></div>
					<p
						className="absolute inset-0 flex items-center justify-center text-8xl text-[#7F654A] z-10"
						style={{ fontFamily: barlow_light.style.fontFamily }}>
						ABOUT
					</p>
				</div>

				{/* KIIT & KISS Section */}
				<section className="container mx-auto px-4 py-16 bg-[#002027]">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
						{/* KIIT Section */}
						<div>
							<div className="flex items-center gap-4 mb-6">
								<Image
									src="https://ik.imagekit.io/chaitanya/Kiit%20Logo%202.png"
									alt="KIIT icon"
									className="w-10 h-8"
									width={40}
									height={32}
								/>
								<h3 className="text-amber-100 text-xl sm:text-3xl font-bold">
									KIIT
								</h3>
							</div>
							<p className="gradient-text text-gray-300 mb-8 p-5 leading-relaxed text-[22px]">
								Kalinga Institute of Industrial Technology (KIIT) Deemed to be
								University is a globally recognized institution known for
								academic excellence, innovation, and humanitarian values.
								Founded in 1992-93 by Dr. Achyuta Samanta with just Rs. 5000,
								KIIT has grown from an Industrial Training Institute into a
								prestigious university within 25 years. Today, it offers a
								diverse range of programs across Engineering, Management, Law,
								Medical Sciences, Biotechnology, Mass Communication, and more,
								educating 40,000 students, including 2,000 international
								students from 65 countries. Spanning 36 sq. km with 25 green
								campuses, KIIT boasts world-class facilities, including a
								2,600-bed super-specialty hospital (KIMS), a 22-storey research
								and innovation center, international-standard sports complexes,
								a central research facility, and a multi-storey library. It has
								a strong placement record and an alumni network of over one lakh
								professionals. KIIT is accredited by ABET (USA) and IET (UK) and
								holds an A++ grade from NAAC. It ranks within the 601-800
								bracket in the Times Higher Education World University Ranking
								2024, with its Computer Science Engineering program in the
								global 301-400 range. Recognized as India&apos;s top private
								university for innovation by AICTE, KIIT continues to excel in
								research, academics, and industry engagement.
							</p>
						</div>

						{/* KISS Section */}
						<div>
							<div className="flex items-center gap-4 mb-6">
								<Image
									src="/kisslogo.png"
									alt="KISS icon"
									width={40}
									height={32}
									className="w-10 h-10 object-contain"
								/>

								<h3 className="text-amber-100 text-xl sm:text-3xl font-bold">
									KISS
								</h3>
							</div>
							<p className="gradient-text text-gray-300 mb-8 leading-relaxed text-base text-[19px] font-medium">
								The Kalinga Institute of Social Sciences(KISS), The Kalinga
								Institute of Social Sciences (KISS), founded in 1992 by Dr.
								Achyuta Samanta, provides free education from kindergarten to
								post-graduation for children from tribal backgrounds. Committed
								to holistic development, KISS blends modern education with
								cultural preservation, empowering students to become impactful
								individuals. Beyond academics, KISS offers accommodation, meals,
								healthcare, and technological education, breaking socioeconomic
								barriers and preparing students for the future. With a growing
								alumni network making strides in public sectors, the institute
								continues to uplift marginalized communities through education.
								Guided by its vision—&apos;A world where all children and youth
								can learn free of cost, lead, and grow without fear to reach
								their full potential&apos;—KISS stands as a model of sustainable
								social development, transforming lives and breaking
								intergenerational cycles of poverty.
							</p>

							<div className="flex flex-col gap-8">
								{/* First Row: Image on Left, "KISS" on Right */}
								<div className="flex flex-col md:flex-row items-center gap-4">
									<div className="md:w-1/2 flex justify-center">
										<Image
											src="https://ik.imagekit.io/chaitanya/Untitled%20designfff.png"
											alt="KISS Campus Image"
											className="rounded-lg"
											width={226}
											height={223}
										/>
									</div>
									<div className="text-center md:text-left w-full md:w-1/2">
										<div className="mb-2">
											<div className="h-1 bg-[#EBCE89] w-full mb-2"></div>
											<p
												className={`text-[10vw] md:text-[100px] font-bold ${barlow.className}`}
												style={{
													WebkitTextStroke: "1px #EBCE89",
													color: "transparent",
												}}>
												KISS
											</p>
											<div className="h-1 bg-[#EBCE89] w-full mt-2"></div>
										</div>
									</div>
								</div>

								{/* Second Row: "KIIT" on Left, Image on Right */}
								<div className="flex flex-col md:flex-row items-center gap-4">
									<div className="text-center md:text-left w-full md:w-1/2">
										<div className="mb-2">
											<div className="h-1 bg-[#EBCE89] w-full mb-2"></div>
											<p
												className={`text-[10vw] md:text-[100px] font-bold ${barlow.className}`}
												style={{
													WebkitTextStroke: "1px #EBCE89",
													color: "transparent",
												}}>
												KIIT
											</p>
											<div className="h-1 bg-[#EBCE89] w-full mt-2"></div>
										</div>
									</div>
									<div className="md:w-1/2 flex justify-center">
										<Image
											src="https://ik.imagekit.io/chaitanya/ups.png"
											alt="KIIT Campus Image"
											className="rounded-lg"
											width={294}
											height={263}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Founder Section */}
				<section className="container mx-auto px-4 py-16 bg-[#002027]">
					<h2
						className="text-5xl md:text-[50px] text-center w-full mx-auto font-bold mb-8 bg-gradient-to-r from-[#7F654A] via-[#EBCE89] to-[#7F654A] bg-clip-text text-transparent"
						style={{ fontFamily: "Impact, sans-serif" }}>
						ABOUT FOUNDER OF KIIT AND KISS
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div className="flex justify-center">
							<Image
								src="https://ik.imagekit.io/chaitanya/Achyuta-Samanta-Founder-of-KIIT-KISS.png?updatedAt=1740037879854"
								alt="Founder"
								className="rounded-lg"
								width={313}
								height={400}
							/>
						</div>
						<div className="text-gray-300 space-y-4 leading-relaxed text-base sm:text-[18px]">
							<p className="gradient-text">
								Dr. Achyuta Samanta is the esteemed founder of the Kalinga
								Institute of Industrial Technology (KIIT) and the Kalinga
								Institute of Social Sciences (KISS). Committed to excellence and
								equal opportunities, he has dedicated his life to transforming
								lives through education and social service.
							</p>
							<p className="gradient-text">
								Rising from poverty, Dr. Samanta has become a beacon of hope,
								uplifting underprivileged communities through initiatives in
								education, healthcare, rural development, sports, and tribal
								empowerment. His contributions extend to art, literature, media,
								and spiritualism, making a lasting impact on society.
							</p>
							<p className="gradient-text">
								Recognized globally, Dr. Samanta has received 64 honorary
								doctorates and numerous awards, including the ISA Award for
								Service to Humanity (Bahrain) and the &quot;Best Worker&quot;
								Award (Mongolia). He has also served as a Member of Parliament
								(2019-2024) and continues to inspire change, leaving an enduring
								legacy of empowerment and progress.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutUs;
