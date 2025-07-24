import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "G. Pullaiah College Of Engineering and Technology, Kurnool",
        duration: "2023 – 2026",
        grade: "8.4 CGPA (till now)",
    },
    {
        degree: "Diploma in Electronics and Communication Engineering",
        institution: "Brindavan Institute of Technology and Science, Kurnool",
        duration: "2020 – 2023",
        grade: "89.1%",
    },
    {
        degree: "SSC (10th Standard)",
        institution: "Z.P.H.S High School, Kurnool",
        duration: "2019 – 2020",
        grade: "9.0 GPA",
    },
];

function Education() {
    return (
        <section
            id="education"
            className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 to-white"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-green-700 text-center mb-12 flex items-center justify-center gap-3">
                    <FaGraduationCap className="text-green-600 text-2xl sm:text-3xl" />
                    Education
                </h2>

                <div className="relative border-l-4 border-green-200 ml-3 sm:ml-4">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-10 ml-6 relative"
                        >
                            <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-4 top-2"></div>
                            <div className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-lg border border-green-100 transition-all duration-300">
                                <h3 className="text-lg sm:text-xl font-semibold text-green-800">
                                    {edu.degree}
                                </h3>
                                <p className="text-gray-700 mt-1 text-sm sm:text-base">
                                    {edu.institution}
                                </p>
                                <p className="text-gray-500 text-sm">{edu.duration}</p>
                                <p className="mt-2 text-green-700 font-medium text-sm sm:text-base">
                                    Grade: {edu.grade}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
