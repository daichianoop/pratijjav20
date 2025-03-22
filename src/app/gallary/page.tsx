/** @format */
"use client"; // Ensure this file is a client component if needed

import ImageGallery from "@/components/ImageGallery";

const GalleryPage = () => {
	return (
		<>
			<h1 className="text-amber-100 text-7xl font-bold text-center m-10">
				Memory Lane
			</h1>
			<ImageGallery />
		</>
	);
};

export default GalleryPage;
