import React from "react";
import Image from "next/image";
import '../globals.css'

const AboutUs: React.FC = () => {
    return (
        <div className="w-screen h-[1150px] bg-[#002027] overflow-scroll">
            <div className="w-full h-[18%] flex items-center relative">
                <p className="text-8xl z-20 mt-10 font-[built-titling] bg-gradient-to-b from-[#7F654A] via-[#EBCE89] to-[#7F654A] text-transparent bg-clip-text absolute top-[4%] left-[38%] m-0">
                    ABOUT
                </p>
                <div className="w-full h-32 mt-40 bg-[url('/Component9.png')] bg-center bg-cover bg-no-repeat z-0"></div>
            </div>

            <div className="w-full h-[82%] flex justify-around bg-[#002027]">
                <div className="w-[45%] grid grid-rows-[10%_80%] justify-items-center">
                    <div className="w-[10%] grid grid-rows-[60%_40%] gap-2 justify-items-center">
                        <Image src="/kiitLogo.png" alt="KIIT Logo" width={100} height={100} className="relative top-[5%]" />
                        <p className="text-2xl font-[built-titling] text-[#EBCE89] m-0">KIIT</p>
                    </div>
                    <div className="w-[90%] text-justify text-[#BCB093] mt-2">
                        <p>
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
                            takes pride in being the greenest campus in India.  It has
                            received all accreditations and affiliations from prestigious
                            national and international bodies such as the Accreditation
                            Board for Engineering and Technology (ABET), USA and the
                            Institution of Engineering and Technology, (IET), UK because of
                            its quality research, innovation, and publications and
                            citations. KIIT has had an excellent placement record since its
                            inception owing to its quality teaching and learning process,
                            and the brand value that it carries. KIIT is ranked in the
                            cohort of 601-800 in the Times Higher Education ‘World
                            University Ranking 2024’. Its Computer Science Engineering ranks
                            in the cohort of 301-400 and its overall Engineering ranking is
                            401-500 in the world. KIIT has been accredited with an A++ grade
                            by the National Assessment and Accreditation Council (NAAC) with
                            an all-India 15th rank by the National Institution of Ranking
                            Framework, NIRF, Ministry of Education. It has also been the top
                            university for innovation among private institutions for two
                            consecutive years (2020, 2021) according to AICTE, Government of
                            India. It has been ranked 168 among universities in the world as
                            per the Times Higher Education Young University Ranking 2024.                        </p>
                    </div>
                </div>

                <div className="w-[45%] grid grid-rows-[10%_80%] justify-items-center">
                    <div className="w-[10%] grid grid-rows-[70%_30%] gap-2 justify-items-center text-[#EBCE89]">
                        <Image src="/kissLogo.png" alt="KISS Logo" width={100} height={100} className="relative" />
                        <p className="text-2xl font-[built-titling] text-center m-0">KISS</p>
                    </div>
                    <div className="w-[90%] text-justify text-[#BCB093] mt-2">
                        <p>
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
                            stepping  into public sectors, the alumni network of the
                            institution grows stronger day by day . This alumni connection
                            actively helps KISS to expand their reach and touch more lives
                            through education. With continued efforts, KISS remains a
                            testament to the success of institutional support in breaking
                            intergenerational cycles of poverty and preserving cultural
                            heritage. The institute, following its vision-&#34;A world where all
                            children and youth can learn free of cost to learn, lead and
                            grow without fear to reach their full potential&#34;-remains
                            testimony to the possibility of comprehensive educational
                            initiatives in achieving sustainable social development among
                            tribal communities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;