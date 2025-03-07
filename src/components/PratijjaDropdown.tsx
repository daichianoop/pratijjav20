/** @format */

"use client";
import Link from "next/link";

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

const PratijjaDropdown = () => {
	return (
		<div className="transition-all z-100 duration-400 absolute px-2 text-center bg-black rounded-lg left-1/2 translate-x-[-50%] py-1 mt-4 text-white hidden group-hover:block ease-in-out min-w-min">
			<div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#ebce89] absolute -translate-y-[100%] left-1/2 translate-x-[-50%] "></div>
			{navItems.map((item, index) => (
				<Link href={item.link} key={index}>
					<div
						className={`py-2 px-4 whitespace-nowrap 
              ${
								index === navItems.length - 1
									? "border-none"
									: "border-b border-white border-opacity-50"
							}
            `}>
						{item.name}
					</div>
				</Link>
			))}
		</div>
	);
};

export default PratijjaDropdown;
