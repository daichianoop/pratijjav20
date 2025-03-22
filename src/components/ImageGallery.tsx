/** @format */
"use client"; // Ensures this runs as a client component

import { motion } from "framer-motion";

type Image = {
	id: number;
	src: string;
	size: "small" | "medium" | "large";
};

const placeholderImages: Image[] = [
	{
		id: 1,
		src: "https://ik.imagekit.io/chaitanya/_DSC0387.jpg",
		size: "small",
	},
	{
		id: 2,
		src: "https://ik.imagekit.io/chaitanya/_DSC0400.jpg",
		size: "large",
	},
	{
		id: 3,
		src: "https://ik.imagekit.io/chaitanya/_DSC0407.jpg",
		size: "medium",
	},
	{
		id: 4,
		src: "https://ik.imagekit.io/chaitanya/RYN_1277.JPG",
		size: "medium",
	},
	{
		id: 5,
		src: "https://ik.imagekit.io/chaitanya/RYN_1417.JPG?updatedAt=1742637580817",
		size: "medium",
	},
	{
		id: 6,
		src: "https://ik.imagekit.io/chaitanya/_DSC0404.jpg",
		size: "large",
	},
	{
		id: 7,
		src: "https://ik.imagekit.io/chaitanya/iii.jpg?updatedAt=1742635926665",
		size: "small",
	},
];

const ImageGallery = () => {
	return (
		<div className="p-4">
			<div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
				{placeholderImages.map((image) => (
					<motion.div
						key={image.id}
						className={`relative rounded-lg overflow-hidden
              ${image.size === "large" ? "col-span-2 row-span-1" : ""}
              ${image.size === "medium" ? "col-span-1 row-span-2" : ""}
              ${image.size === "small" ? "col-span-1 row-span-1" : ""}
            `}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						whileHover={{ scale: 1.05 }}>
						<img
							src={image.src}
							alt={`Gallery image ${image.id}`}
							className="w-full h-full object-cover"
						/>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default ImageGallery;
