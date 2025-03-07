/** @format */  

"use client";  
import { usePathname } from "next/navigation";  
import React, { useState } from "react";  
import Image from "next/image";  
import Link from "next/link";  
import PratijjaDropdown from "./PratijjaDropdown";  
import MobileNav from "./MobileNav";  
import { IoClose, IoMenu } from "react-icons/io5";  

const Navbar = () => {  
	const pathname = usePathname();  
	const [isOpen, setIsOpen] = useState(false);  

	const toggleNavbar = () => {  
		setIsOpen(!isOpen);  
	};  

	const navbarBgColor = pathname === "/about" ? "bg-[#ebce89]" : "";  

	const registerButtonBgColor =  
		pathname === "/about" ? "bg-[#002027]" : "bg-[#ebce89]";  
	const registerButtonTextColor =  
		pathname === "/about" ? "text-[#ebce89]" : "text-black";  
	const registerButtonHoverTextColor =  
		pathname === "/about" ? "hover:text-[#ebce89]" : "hover:text-[#ebce89]";  
	const registerButtonHoverBgColor =  
		pathname === "/about" ? "hover:bg-[#002027]" : "hover:bg-opacity-100";  

	const linkDefaultColor =  
		pathname === "/about" ? "text-[#002027]" : "text-white";  
	const linkHoverEffect =  
		pathname === "/about" ? "" : "hover:text-[#ebce89]";  

	return (  
		<>  
			<MobileNav isOpen={isOpen} toggleNavbar={toggleNavbar} />  
			<nav  
				className={`z-100 w-screen h-[130px] md:h-[140px] flex items-center transition-all duration-300 ${navbarBgColor}`}>  
				<div className="flex  justify-between w-full px-5 lg:px-5 py-2 items-center text-white">  
					<div className="hidden sm:flex space-x-4 w-72">  
						<Image src="/kiitlogo.png" alt="kiit logo" height={55} width={70} />  
						<Image src="/kslogo.png" alt="ksac logo" height={55} width={55} />  
					</div>  

					<div className="flex-shrink-0 w-72 place-content-center grid">  
						{!isOpen && (  
							<Link href="/">  
								<Image  
									src="/main.png"  
									alt="pratijja logo"  
									width={400}  
									height={100}  
									quality={50}  
								/>  
							</Link>  
						)}  
					</div>  

					<div className="hidden sm:flex items-center text-lg space-x-6 w-72 place-content-end pr-10">  
						<Link  
							href="/"  
							className={`${linkDefaultColor} ${linkHoverEffect} font-semibold transition-all duration-200 ${  
								pathname === "/" && "text-[#ebce89]"  
							}`}>  
							Home  
						</Link>  
						<Link  
							href="/about"  
							className={`${linkDefaultColor} ${linkHoverEffect} font-semibold transition-all duration-200 ${  
								pathname === "/about" && "text-[#ebce89]"  
							}`}>  
							About  
						</Link>  
						<div className="relative group">  
							<button  
								className={`cursor-pointer rounded-full py-1.5 px-7 font-bold transition-all duration-200 ${registerButtonBgColor} ${registerButtonTextColor} ${registerButtonHoverTextColor} ${registerButtonHoverBgColor}`}>  
								Register  
							</button>  
							<PratijjaDropdown />  
						</div>  
					</div>  

					<button  
						className="sm:hidden text-white p-2 focus:outline-none relative z-50"  
						onClick={toggleNavbar}>  
						{isOpen ? (  
							<IoClose size={30} className="text-white" />  
						) : (  
							<IoMenu size={30} className="text-white" />  
						)}  
					</button>  
				</div>  
			</nav>  
		</>  
	);  
};  

export default Navbar;  