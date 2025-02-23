/** @format */

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MobileNavProps {
	isOpen: boolean;
	toggleNavbar: () => void;
}

const navItems = [
	{
		name: "Cross Team",
		link: "/forms/cross-team",
	},
	{
		name: "IA/SA Application",
		link: "/forms/IA-SA",
	},
	{
		name: "Institutional Team",
		link: "/forms/institutional-reg",
	},
	{
		name: "Independent Adjudicator",
		link: "/forms/independent-adj",
	},
];

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleNavbar }) => {
	const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);

	const handleRegisterClick = (e: React.MouseEvent) => {
		// Prevent link navigation if dropdown is toggled on first click
		e.preventDefault();
		setShowRegisterDropdown((prev) => !prev);
	};

	// Helper to close nav and dropdown when a link is clicked
	const handleLinkClick = () => {
		setShowRegisterDropdown(false);
		toggleNavbar();
	};

	return (
		<div
			className={`fixed w-full inset-0 bg-black bg-opacity-50 z-50 ${
				isOpen ? "" : "hidden"
			}`}
			onClick={toggleNavbar}>
			<div
				className={`fixed text-white flex flex-col text-xl font-light font-roboto justify-between h-full w-[55vw] p-4 shadow-md top-0 left-0 ${
					isOpen ? "" : "hidden"
				}`}
				onClick={(e) => e.stopPropagation()}
				style={{
					background: "#112b22",
				}}>
				<ul className="p-2 text-3xl flex flex-col items-start justify-center space-y-6">
					<li className="mb-6">
						<Link href="/" onClick={handleLinkClick}>
							<Image
								src={"/main.png"}
								alt="LOGO"
								width={100}
								height={50}
								placeholder="empty"
							/>
						</Link>
					</li>

					<li className="hover:pl-3 duration-200 hover:text-[#ebce89]">
						<Link href="/" onClick={handleLinkClick}>
							Home
						</Link>
					</li>

					<li className="hover:pl-2 duration-200 hover:text-[#ebce89]">
						<Link href="/about" onClick={handleLinkClick}>
							About
						</Link>
					</li>

					{/* Register link with dropdown */}
					<li className="hover:pl-2 duration-200 hover:text-[#ebce89]">
						{/* Instead of linking directly, toggle dropdown */}
						<a href="/register" onClick={handleRegisterClick} className="block">
							Register
						</a>
						{showRegisterDropdown && (
							<ul className="mt-2 ml-4 border-l border-white pl-4 text-lg space-y-2">
								{navItems.map((item, index) => (
									<li key={index} className="hover:text-[#ebce89]">
										<Link href={item.link} onClick={handleLinkClick}>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MobileNav;
