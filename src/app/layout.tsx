/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

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
const {
	title = "Default Title",
	description = "Default description",
	openGraph,
	twitter,
	icons,
} = metadata;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Set up safe access for openGraph properties
	const ogTitle = openGraph?.title ?? "Default OG Title";
	const ogDescription = openGraph?.description ?? "Default OG Description";
	const ogUrl = openGraph?.url ?? "";
	const ogSiteName = openGraph?.siteName ?? "";
	const ogType = openGraph?.type ?? "website";
	const ogImage =
		openGraph?.images && openGraph.images[0]?.url
			? openGraph.images[0].url
			: "";

	// Set up safe access for twitter properties
	const twitterCard = twitter?.card ?? "summary";
	const twitterTitle = twitter?.title ?? "Default Twitter Title";
	const twitterDescription =
		twitter?.description ?? "Default Twitter Description";
	const twitterImage =
		twitter?.images && twitter.images[0] ? twitter.images[0] : "";

	return (
		<html lang="en">
			<head>
				{/* Favicon */}
				<link rel="icon" href={icons?.icon ?? "/favicon.ico"} sizes="any" />
				<link rel="icon" href="/icon.svg" type="image/svg+xml" />
				<link
					rel="apple-touch-icon"
					href={icons?.apple ?? "/apple-touch-icon.png"}
				/>

				{/* Basic Meta */}
				<meta name="description" content={description} />

				{/* Open Graph / Facebook Meta Tags */}
				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:url" content={ogUrl} />
				<meta property="og:site_name" content={ogSiteName} />
				<meta property="og:type" content={ogType} />
				<meta property="og:image" content={ogImage} />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content={twitterCard} />
				<meta name="twitter:title" content={twitterTitle} />
				<meta name="twitter:description" content={twitterDescription} />
				<meta name="twitter:image" content={twitterImage} />

				<title>{title}</title>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
			<Footer />
		</html>
	);
}
