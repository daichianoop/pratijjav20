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
		<div className="min-h-screen bg-[#002027]">
			{/* Hero Section with Gradient Overlay */}
			<div className="bg-[#002027]">
				<section className="relative bg-[#002027]">
					{/* Gradient Overlay */}
					<div
						className="absolute inset-0"
						style={{ backgroundColor: "#EBCE89" }}></div>

					<div className="relative container mx-auto py-16 px-4 text-center">
						<h1
							className="text-[10vw] font-bold text-teal-950 leading-none text-center"
							style={{ fontFamily: "Impact, sans-serif" }}>
							ABOUT US
						</h1>
						<p className="text-base sm:text-lg max-w-3xl mt-4 mx-auto text-teal-950">
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
								src="https://ik.imagekit.io/chaitanya/IMG_3085.png?updatedAt=1740067768461"
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
								Kiitdee.
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
								src="https://ik.imagekit.io/chaitanya/IMG_2477.png?updatedAt=1740070800225"
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
							<p className="gradient-text text-gray-300 mb-8 leading-relaxed text-base sm:text-[18px]">
								Kalinga Institute of Industrial Technology (KIIT) Deemed to be
								University has emerged as a leading institute for professional
								studies. It is admired all over for the quality of its academic
								courses, its community outreach work and as a university of
								compassion and humanitarianism. It has become a case study
								because no other educational institution in India has grown in
								its scope and scale as much as KIIT has in a short span of 25
								years. Its incredible transformation is truly a journey from
								Soil to Silver. Started in 1992-93 by Dr. Achyuta Samanta,
								founder of KIIT and KISS with an initial investment of Rs. 5000
								and operating from just two rented rooms, 12 students and 2
								faculty members as an Industrial Training Institute, KIIT gained
								acknowledgement in 1997 as an University for undergraduate and
								postgraduate courses in Engineering, Management and Computer
								Applications were added. In 2007, many new schools were added to
								its umbrella – School of Law, Biotechnology, Medical Sciences,
								Dental Sciences, Nursing, Mass Communication, Film and Media,
								Fashion and KIIT International School. Since then, there has
								been no looking back! Today, KIIT offers professional education
								to around 40,000 students from across India. This includes 2000
								international students from 65 countries. The alumni of KIIT,
								over a lakh of them, have made their mark in their respective
								careers in academics, corporate organizations, civil services
								and enterprise. The modest institution has now grown to
								incomprehensible propositions and is spread over a vast
								36-square-kilometre academic township. Its 25 lush green
								campuses employ over 3000 eminent faculty and researchers and
								15000 staff. KIIT and KISS together is a family of over a lakh
								people. The campus houses a 2600-bedded super speciality
								hospital, KIMS, a multi-storey central library, a central
								research facility, a 22-storey research and innovation wing,
								auditoriums – the largest one with 5000 seating capacity, 18
								sports complexes, many international standard stadiums covering
								all sports, 30 food courts, and a rose garden. The institution
								takes pride in being the greenest campus in India. It has
								received all accreditations and affiliations from prestigious
								national and international bodies such as the Accreditation
								Board for Engineering and Technology (ABET), USA and the
								Institution of Engineering and Technology, (IET), UK because of
								its quality research, innovation, and publications and
								citations. KIIT has had an excellent placement record since its
								inception owing to its quality teaching and learning process,
								and the brand value that it carries. KIIT is ranked in the
								cohort of 601-800 in the Times Higher Education &apos;World
								University Ranking 2024&apos;. Its Computer Science Engineering
								ranks in the cohort of 301-400 and its overall Engineering
								ranking is 401-500 in the world. KIIT has been accredited with
								an A++ grade by the National Assessment and Accreditation
								Council (NAAC) with an all-India 15th rank by the National
								Institution of Ranking Framework, NIRF, Ministry of Education.
								It has also been the top university for innovation among private
								institutions for two consecutive years (2020, 2021) according to
								AICTE, Government of India. It has been ranked 168 among
								universities in the world as per the Times Higher Education
								Young University Ranking 2024.
							</p>
						</div>

						{/* KISS Section */}
						<div>
							<div className="flex items-center gap-4 mb-6">
								<Image
									src="https://ik.imagekit.io/chaitanya/images%20(22).png"
									alt="KISS icon"
									style={{ width: "32px", height: "32px" }}
									width={32}
									height={32}
								/>
								<h3 className="text-amber-100 text-xl sm:text-3xl font-bold">
									KISS
								</h3>
							</div>
							<p className="gradient-text text-gray-300 mb-8 leading-relaxed text-base sm:text-[18px]">
								The Kalinga Institute of Social Sciences(KISS), established in
								1992 by Dr. Achyuta Samanta, offers free education from
								kindergarten through post-graduation to children coming from
								tribal backgrounds. This institution serves as a medium for
								providing a holistic educational environment where modernity
								means indigenousness. Due to this balanced approach, the
								institute has managed to achieve both cultural preservation
								while raising modern impactful individuals. KISS also provides
								essential services such as accommodation, meals, healthcare, and
								technological education, ensuring to surpass the socioeconomic
								barriers that restrict the students from participating and
								achieving, thereby, making these children ready to face the
								world. The institution acts as a medium of uplifting the
								sidelined sections of Odisha through education. With individuals
								stepping&nbsp; into public sectors, the alumni network of the
								institution grows stronger day by day. This alumni connection
								actively helps KISS to expand their reach and touch more lives
								through education. With continued efforts, KISS remains a
								testament to the success of institutional support in breaking
								intergenerational cycles of poverty and preserving cultural
								heritage. The institute, following its vision-&quot;A world
								where all children and youth can learn free of cost to learn,
								lead and grow without fear to reach their full
								potential&quot;-remains testimony to the possibility of
								comprehensive educational initiatives in achieving sustainable
								social development among tribal communities.
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
						className="text-[8vw] md:text-[50px] text-center w-full md:w-1/2 mx-auto font-bold mb-8 bg-gradient-to-r from-[#7F654A] via-[#EBCE89] to-[#7F654A] bg-clip-text text-transparent"
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
								Prof. Dr. Achyuta Samanta is an Indian philanthropist who has
								dedicated his life to ensuring quality education and healthcare
								for the less privileged communities.
							</p>
							<p className="gradient-text">
								His work and service in the fields of education, social welfare,
								and women empowerment have shaped his journey and have earned
								him many national and international awards and honors.
							</p>
							<p className="gradient-text">
								Motivated by his mission-&quot;zero poverty, zero hunger, and
								zero illiteracy&quot;-he has been selfless in his contributions
								for the upliftment of the rural and indigenous groups of the
								society.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutUs;
