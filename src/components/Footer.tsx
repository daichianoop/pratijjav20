import Link from "next/link";
import React from "react";
import "./styles/footer.css";
import { GrMail } from "react-icons/gr"; // Mail icon
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Social media icons

const Footer: React.FC = () => {
	return (
		<div id="contact" className="footer text-[#2e1413] font-built-titling font-bold">
			<div className="footer-bottom">
				<hr />
			</div>

			{/* Contact Us Header */}
			<div>
				<span className="text-7xl" style={{ color: "#112B22" }}>Contact</span>{"  "}
				<span className="text-7xl" style={{ color: "#2E1413" }}>Us</span>
			</div>
			<br />

			{/* Google Maps Embed */}
			<div className="full-width-map">
				<iframe
					title="KIIT University KSAC Location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.636720756204!2d85.81635307341057!3d20.356620910528086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093cc3e1974b%3A0x85a345e1f4fcce86!2sKIIT%20Student%20Activity%20Center%20-%20KSAC!5e0!3m2!1sen!2sin!4v1733850961213!5m2!1sen!2sin"
					width="100%"
					height="200"
					style={{ border: "0", borderRadius: "5px" }}
					allowFullScreen
					loading="lazy"></iframe>
				<br /> <br />
			</div>

			<div className="footer-container">
				{/* Phone Numbers Section */}
				<div className="footer-section text-center">
					<h3 className="uppercase">Phone Numbers</h3>
					<p>Parth Sachdeva: +91 98765 43210</p>
					<p>Aadit Baxi: +91 87654 32109</p>
				</div>

				{/* Address Section */}
				<div className="footer-section text-center">
					<h3 className="uppercase">Address</h3>
					<p>Campus 13, KSAC</p>
					<p>KIIT UNIVERSITY</p>
					<p>Bhubaneswar, Odisha</p>
					<p>PINCODE - 751024</p>
				</div>

				{/* ✅ Updated Social Media Section - Aligned Properly */}
				<div className="footer-section text-center">
					<h3 className="uppercase font-bold underline">SOCIAL MEDIA</h3>
					<div className="flex flex-col items-start justify-center space-y-3 mt-2">
						{/* Email 1 */}
						<div className="flex items-center space-x-2">
							<GrMail className="contact-icon" aria-label="Email" />
							<a href="mailto:kronicleofficial@gmail.com" target="_blank" rel="noopener noreferrer">
								kronicleofficial@gmail.com
							</a>
						</div>

						{/* Email 2 */}
						<div className="flex items-center space-x-2">
							<GrMail className="contact-icon" aria-label="Email" />
							<a href="mailto:pratijja.apd@kiit.ac.in" target="_blank" rel="noopener noreferrer">
								pratijja.apd@kiit.ac.in
							</a>
						</div>

						{/* Social Media Links */}
						<div className="flex flex-col items-start space-y-2">
							<div className="flex items-center space-x-2">
								<FaFacebook className="contact-icon" aria-label="Facebook" />
								<a href="https://facebook.com/kroniclekiit" target="_blank" rel="noopener noreferrer">
									/kroniclekiit
								</a>
							</div>
							<div className="flex items-center space-x-2">
								<FaInstagram className="contact-icon" aria-label="Instagram" />
								<a href="https://instagram.com/kronicle_official" target="_blank" rel="noopener noreferrer">
									/kronicle_official
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Quick Links Section */}
				<div className="footer-section text-center">
					<h3 className="uppercase">Quick Links</h3>
					<ul>
						<li><Link href="/about">About Us</Link></li>
						<li><Link href="/">Home</Link></li>
					</ul>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="footer-bottom">
				<hr />
				<p>© 2025 Pratijja V20. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
