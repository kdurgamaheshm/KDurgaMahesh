import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certifications = [
    {
        title: "ServiceNow Certified System Administrator (CSA)",
        date: "July 2025",
        issuer: "ServiceNow",
        link: "https://drive.google.com/file/d/1OYPXnjz5PavCdUJHC31ZRRlg2NWSz0-v/view?usp=sharing",
    },
    {
        title: "Web Full Stack",
        date: "November 2024",
        issuer: "EduSkills",
        link: "https://drive.google.com/file/d/1ZUYfHQOEdr3vmgatjnnu20lFMLRXdJpb/view?usp=sharing",
    },
    {
        title: "Micro-Certification - Flow Designer",
        date: "April 2025",
        issuer: "ServiceNow",
        link: "https://drive.google.com/file/d/1UF_dlTxc3CZ2_uIvO9b2WddgrjrvxOEb/view?usp=sharing",
    },
    {
        title: "Data Structures and Algorithm",
        date: "March 2025",
        issuer: "Smart Interviews",
        link: "https://smartinterviews.in/certificate/23dcbf37",
    },
    {
        title: "Ai-Data Quality Analyst",
        date: "July 2025",
        issuer: "Rooman Technologies",
        link: "https://drive.google.com/file/d/1LzRetaXzALS9PoILZRM8bm6uhegEcCj0/view?usp=sharing",
    },
    {
        title: "Full Stack Development (MERN)",
        date: "July 2025",
        issuer: "SmartBridge Educational Services",
        link: "https://drive.google.com/file/d/1_PLROxGpDP54qg-IrbtmjG1UAQ45PeDR/view?usp=sharing",
    },
    {
        title: "Java Full Stack with React JS and AI",
        date: "Dec 2024",
        issuer: "Brain O Vision Solutions",
        link: "https://drive.google.com/file/d/1_tUoE5BDKbgt508FX4kgCqQmt7MBzcTv/view?usp=sharing",
    },
    {
        title: "Internet Of Things",
        date: "August 2024",
        issuer: "NPTEL",
        link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs115/Course/NPTEL24CS115S16190024104088486.pdf",
    },
    {
        title: "Ethical Hacking",
        date: "August 2024",
        issuer: "NPTEL",
        link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs94/Course/NPTEL24CS94S36190013804088486.pdf",
    },
];

function Certifications() {
    return (
        <section
            id="certifications"
            className="bg-gradient-to-b from-green-100 to-white py-16 px-4 sm:px-6"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-green-600 mb-12">Certifications</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-xl border border-green-100 shadow-sm hover:shadow-md p-5 sm:p-6 flex gap-4 items-start text-left"
                        >
                            <div className="text-green-600 text-2xl sm:text-3xl mt-1">
                                <FaCertificate />
                            </div>
                            <div className="flex-1 break-words">
                                <h3 className="text-lg sm:text-xl font-semibold text-green-800">{cert.title}</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    <strong>Issuer:</strong> {cert.issuer}
                                </p>
                                <p className="text-gray-500 text-sm">{cert.date}</p>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-2 text-green-600 hover:underline font-medium text-sm"
                                    >
                                        🔗 View Certificate
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;
