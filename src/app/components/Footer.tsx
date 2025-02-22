import React from "react";
import "./styles/footer.css";
import Image from "next/image";
import { GrMail } from "react-icons/gr"; // Mail icon
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons

const Footer: React.FC = () => {
    return (
        <div className="footer text-[#2e1413] font-built-titling font-bold">
            <div className={"footer-bottom"}>
                <hr/>
            </div>
            {/* Contact Us Image */}
            <div className={"flex items-center justify-center"}>
                <Image
                    src="/Contact Us.png"
                    width={400}
                    height={400}
                    alt="Contact Us"
                    className="footer-image mt-7"
                />
            </div>
            <br/>

            <div className="full-width-map">
                <iframe
                    title="KIIT University KSAC Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.636720756204!2d85.81635307341057!3d20.356620910528086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093cc3e1974b%3A0x85a345e1f4fcce86!2sKIIT%20Student%20Activity%20Center%20-%20KSAC!5e0!3m2!1sen!2sin!4v1733850961213!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{border: "0", borderRadius: "5px"}}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
                <br/> <br/>
            </div>

            <div className="footer-container px-20">
                <div className="footer-section text-center">
                    <h3 className={"uppercase"}>Phone Numbers</h3>
                    <p>John Doe: +91 98765 43210</p>
                    <p>Jane Smith: +91 87654 32109</p>
                    <p>Mike Johnson: +91 76543 21098</p>
                </div>

                <div className="footer-section text-center">
                    <h3 className={"uppercase"}>Address</h3>
                    <p>Campus 13, KSAC</p>
                    <p>KIIT UNIVERSITY</p>
                    <p>Bhubaneswar, Odisha</p>
                    <p>PINCODE - 751024</p>
                </div>

                <div className="footer-section text-center">
                    <h3 className={"uppercase"}>Social Media</h3>
                    <div className={"flex-row items-center justify-center"}>
                        <div className="contact-item mt-1 flex items-center justify-center">
                            <GrMail className="contact-icon mr-2" aria-label="Email"/>
                            <a href="mailto:kronicle@kiit.ac.in" target="_blank"
                               rel="noopener noreferrer">kronicle@kiit.ac.in</a>
                        </div>
                        <div className="contact-item mt-1 flex items-center justify-center">
                            <FaLinkedin className="contact-icon mr-2" aria-label="LinkedIn"/>
                            <a href="https://linkedin.com/in/kronicle_official" target="_blank"
                               rel="noopener noreferrer">/kronicle_official</a>
                        </div>
                        <div className="contact-item mt-1 flex items-center justify-center">
                            <FaFacebook className="contact-icon mr-2" aria-label="Facebook"/>
                            <a href="https://facebook.com/kroniclekiit" target="_blank"
                               rel="noopener noreferrer"> /kroniclekiit</a>
                        </div>
                        <div className="contact-item mt-1 flex items-center justify-center">
                            <FaInstagram className="contact-icon mr-2" aria-label="Instagram"/>
                            <a href="https://instagram.com/kroniclekiit" target="_blank"
                               rel="noopener noreferrer">/kroniclekiit</a>
                        </div>
                    </div>
                </div>

                <div className="footer-section text-center">
                    <h3 className={"uppercase"}>Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/register">Register</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <hr/>
                <p>© 2025 Pratijja V20. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;