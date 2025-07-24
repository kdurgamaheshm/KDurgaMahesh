import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section
            id="home"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20 px-4 sm:py-32 sm:px-6"
        >
            <div className="max-w-4xl mx-auto text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
                >
                    Kammampalli Durga Mahesh
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg sm:text-2xl font-medium mb-6 sm:mb-8"
                >
                    <TypeAnimation
                        sequence={[
                            "Java Full Stack Developer",
                            2000,
                            "MERN Stack Developer",
                            2000,
                            "Cloud Enthusiast",
                            2000,
                            "DevOps Practitioner",
                            2000,
                            "ServiceNow CSA & CAD",
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </motion.div>

                <motion.a
                    href="/resume.pdf"
                    download
                    className="inline-block px-6 sm:px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    Download Resume
                </motion.a>
            </div>
        </section>
    );
}

export default Hero;
