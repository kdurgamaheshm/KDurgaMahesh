import { motion } from "framer-motion";

function Skills() {
    const skills = [
        { name: "Java", percent: 90 },
        { name: "HTML", percent: 95 },
        { name: "CSS", percent: 90 },
        { name: "JavaScript", percent: 88 },
        { name: "ReactJS", percent: 86 },
        { name: "Tailwind CSS", percent: 80 },
        { name: "Node.js", percent: 75 },
        { name: "Express.js", percent: 60 },
        { name: "Spring Boot", percent: 75 },
        { name: "REST APIs", percent: 85 },
        { name: "MongoDB", percent: 70 },
        { name: "MySQL", percent: 85 },
        { name: "JWT Auth", percent: 85 },
        { name: "ServiceNow CSA", percent: 80 },
    ];

    return (
        <section id="skills" className="bg-gradient-to-br from-green-100 to-white py-16 px-4 sm:px-6 lg:px-8 w-auto overflow-x-hidden">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-12">
                    Skills & Technologies
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.03 }}
                            viewport={{ once: true }}
                            className="bg-white border border-green-200 rounded-xl p-4 shadow-md w-full"
                        >
                            <div className="flex justify-between items-center text-sm font-semibold text-green-800 mb-2">
                                <span>{skill.name}</span>
                                <span>{skill.percent}%</span>
                            </div>
                            <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.percent}%` }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                    className="h-full bg-green-500 rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
