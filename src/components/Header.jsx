import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent background scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    const navLinks = [
        { id: "bout", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "certifications", label: "Certifications" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-green-50 shadow-md backdrop-blur-lg"
                    : "bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-md"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
                {/* Logo + Name */}
                <a href="#home" className="flex items-center gap-3 group">
                    <img
                        src={logo}
                        alt="KDM Logo"
                        className="w-10 h-10 rounded-full object-cover shadow-md transition-transform group-hover:scale-105"
                    />
                    <span
                        className={`text-xl font-bold tracking-wide transition-colors duration-300 ${
                            scrolled ? "text-green-800" : "text-white"
                        } group-hover:text-green-500`}
                    >
                        K Durga Mahesh
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-sm font-semibold">
                    {navLinks.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`transition-colors duration-200 ${
                                scrolled ? "text-green-800" : "text-white"
                            } hover:text-green-900`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        className={`text-2xl transition-colors focus:outline-none ${
                            scrolled ? "text-green-800" : "text-white"
                        }`}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden bg-green-50 backdrop-blur-md shadow-lg ${
                    isMenuOpen ? "max-h-96 py-4 px-6 space-y-4" : "max-h-0 py-0 px-0"
                }`}
            >
                {navLinks.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-green-800 font-medium hover:text-green-600 transition-colors duration-200"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </header>
    );
}

export default Header;
