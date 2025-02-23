/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// Global Metadata
export const metadata: Metadata = {
	title: "Pratijja",
	description: `Pratijja V20 is the flagship Asian Parliamentary Debate of KIIT University hosted by its esteemed literary and debating society, Kronicle.

One of India's premier debating tournaments, Pratijja attracts debaters from across the country engaging in intellectual discourse and critical thinking.

The tournament follows the Asian Parliamentary format with motions on various global, societal and economic issues and is known for its competitive spirit, high adjudication standards and debates.

Pratijja provides an environment where debaters can refine their skills and engage in meaningful discussions. With each edition, it continues to set new benchmarks in the Debating circuit.`,
	openGraph: {
		title: "Pratijja",
		description: `Pratijja V20 is the flagship Asian Parliamentary Debate of KIIT University hosted by its esteemed literary and debating society, Kronicle.

One of India's premier debating tournaments, Pratijja attracts debaters from across the country engaging in intellectual discourse and critical thinking.`,
		url: "https://pratijja.org",
		siteName: "Pratijja V20",
		images: [
			{
				url: "https://ik.imagekit.io/chaitanya/Frame%201000003435.png",
				width: 1200,
				height: 630,
				alt: "Pratijja",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Pratijja",
		description: `Pratijja V20 is the flagship Asian Parliamentary Debate of KIIT University hosted by its esteemed literary and debating society, Kronicle.`,
		images: ["https://ik.imagekit.io/chaitanya/Frame%201000003435.png"],
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

// Destructure metadata with fallback values
const { openGraph } = metadata;

// Safe access for openGraph properties
const ogDescription = openGraph?.description ?? "Default OG Description";
const ogSiteName = openGraph?.siteName ?? "";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href={"/favicon.ico"} sizes="any" />

				{/* Basic Meta */}

				{/* Open Graph Meta Tags */}
				<meta property="og:description" content={ogDescription} />
				<meta property="og:site_name" content={ogSiteName} />

				<title>Pratijja V 20</title>
			</head>

			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />
				{children}
			</body>
			<Footer />
		</html>
	);
}
