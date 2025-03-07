/** @format */

"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PratijjaDropdown from "./PratijjaDropdown";
import MobileNav from "./MobileNav";
import { IoClose, IoMenu } from "react-icons/io5"; // Icons for mobile menu

const Navbar = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	// Toggle Navbar visibility on mobile
	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{/* Fixed Navbar */}
			<MobileNav isOpen={isOpen} toggleNavbar={toggleNavbar} />
			<nav
				className={`z-100 w-screen h-[130px] md:h-[140px] flex items-center transition-all duration-300`}>
				<div className="flex  justify-between w-full px-5 lg:px-5 py-2 items-center text-white">
					{/* Left Side Logo */}
					<div className="hidden sm:flex space-x-4 w-72">
						<Image src="/kiitlogo.png" alt="kiit logo" height={55} width={70} />
						<Image src="/kslogo.png" alt="ksac logo" height={55} width={55} />
					</div>

					{/* Main Logo */}
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

					{/* Desktop Navigation */}
					<div className="hidden sm:flex items-center text-lg space-x-6 w-72 place-content-end pr-10">
						<Link
							href="/"
							className={`hover:text-[#ebce89] transition-all duration-200 ${pathname === "/" && "text-[#ebce89]"}`}>
							Home
						</Link>
						<Link
							href="/about"
							className={`hover:text-[#ebce89] transition-all duration-200 ${pathname === "/about" && "text-[#ebce89]"}`}>
							About
						</Link>
						<div className="relative group">
							<button className="cursor-pointer rounded-full py-1.5 px-7 hover:text-[#ebce89] bg-[#ebce89] hover:bg-opacity-10 text-black font-bold transition-all duration-200">
								Register
							</button>
							<PratijjaDropdown />
						</div>
					</div>

					{/* Mobile Navigation Button */}
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

			{/* Push Down Content to Prevent Overlap */}
		</>
	);
};

export default Navbar;
