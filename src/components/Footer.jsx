import React from "react";
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaFacebook,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {
    return (
        <footer className="bg-green-700 text-white py-10 px-4 sm:px-6 lg:px-8 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
                {/* Left Section with Logo and Info */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <img
                        src={logo}
                        alt="KDM Logo"
                        className="w-20 h-20 sm:w-20 sm:h-20 object-contain rounded-xl border-4 border-white shadow-lg"
                    />
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2">Kammampalli Durga Mahesh</h3>
                        <p className="text-sm mb-1 flex items-center gap-2">
                            <FaEnvelope className="text-green-200" />
                            kdurgamahesh5@gmail.com
                        </p>
                        <p className="text-sm flex items-center gap-2">
                            <FaMapMarkerAlt className="text-green-200" />
                            Kurnool, Andhra Pradesh, India - 518216
                        </p>
                    </div>
                </div>

                {/* Right Section - Social Links */}
                <div className="flex flex-col sm:items-start md:items-end mt-6 md:mt-0 w-full sm:w-auto">
                    <p className="text-sm font-semibold mb-3">Connect with me:</p>
                    <div className="flex gap-5 text-2xl justify-start md:justify-end">
                        <a
                            href="https://linkedin.com/in/k-durga-mahesh-41b68a325"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-green-300 transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/Kdurgamaheshm"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-green-300 transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.instagram.com/durga_mahesh_05/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-green-300 transition"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-green-300 transition"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Note */}
            <div className="text-center mt-10 text-sm text-green-100">
                © {new Date().getFullYear()} K Durga Mahesh. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
