// About.jsx
import { motion } from "framer-motion";
import myImage from "../assets/profile.jpg";

function About({ onHireClick }) {
    return (
        <section
            id="about"
            className="bg-gradient-to-br from-green-100 to-white py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:w-1/3 flex justify-center"
                >
                    <img
                        src={myImage}
                        alt="K Durga Mahesh"
                        className="rounded-2xl shadow-2xl w-72 sm:w-80 md:w-full object-cover"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:w-2/3"
                >
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
                            About Me
                        </h2>

                        <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4">
                            {"    "}Hi, I'm{" "}
                            <span className="font-semibold text-blue-700">
                                Kammampalli Durga Mahesh
                            </span>
                            , a passionate and detail-oriented{" "}
                            <span className="font-medium">Full Stack Developer</span> with
                            hands-on experience in building scalable and responsive web
                            applications. My expertise spans across{" "}
                            <span className="font-medium">Java Spring Boot</span>, the{" "}
                            <span className="font-medium">MERN stack</span> (MongoDB,
                            Express.js, React, Node.js), and cloud platforms like{" "}
                            <span className="font-medium">ServiceNow</span> and{" "}
                            <span className="font-medium">Firebase</span>.
                        </p>

                        <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4">
                            I take pride in turning complex problems into elegant and
                            efficient solutions. Whether it’s designing intuitive UIs with{" "}
                            <span className="font-medium">React + Tailwind CSS</span> or
                            developing secure REST APIs with{" "}
                            <span className="font-medium">Spring Boot</span> and{" "}
                            <span className="font-medium">Node.js</span>, I focus on
                            delivering full-stack solutions that are reliable, scalable, and
                            user-focused.
                        </p>

                        <p className="text-green-700 font-medium text-md mb-6">
                            I’m actively looking for roles as a{" "}
                            <span className="font-semibold">
                                Full Stack Developer (Java/MERN)
                            </span>{" "}
                            or{" "}
                            <span className="font-semibold">Cloud Platform Engineer</span>.
                            Let’s build something impactful together.
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <button
                                onClick={onHireClick}
                                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                            >
                                Hire Me
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
