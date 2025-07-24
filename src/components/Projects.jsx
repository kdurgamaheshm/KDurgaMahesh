import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
    const projects = [
        {
            title: "DocSpot",
            description:
                "Full‑stack Doctor Appointment Booking System (MERN). Role‑based access, JWT auth, schedules, and admin dashboard.",
            github: "https://github.com/Kdurgamaheshm/DocSpot",
        },
        {
            title: "NestFinder",
            description:
                "Full‑stack rental platform using Spring Boot + React + Tailwind. Offers authentication, property listings, bookings, reviews, admin analytics.",
            github: "https://github.com/kdurgamaheshm/Nest_Finder",
        },
        {
            title: "EasyHomeFinder",
            description:
                "Java full‑stack property finder app with user/owner roles, property listing, booking management. Backend + frontend modules.",
            github: "https://github.com/kdurgamaheshm/easyhomefinder_fullstack",
        },
        {
            title: "Kdm All In One",
            description:
                "Modular Java backend using Spring Boot + Spring Security + JWT. REST API design, authentication, role‑based access, modular architecture.",
            github: "https://github.com/kdurgamaheshm/Kdm_All_in_One",
        },
        {
            title: "Leaderboard Points System",
            description:
                "Demo: 10 users select one, claim random points, real‑time leaderboard with history tracking.",
            github: "https://github.com/kdurgamaheshm/leaderboard_points",
        },
    ];

    return (
        <section
            id="projects"
            className="py-16 px-4 sm:px-6 bg-gradient-to-b from-green-100 to-white"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-12">
                    My Projects
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-white border border-green-200 shadow-md hover:shadow-xl rounded-xl p-5 flex flex-col justify-between transition-all duration-300"
                        >
                            <div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-2">
                                    {p.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                                    {p.description}
                                </p>
                            </div>
                            <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center gap-2 text-green-700 font-medium hover:underline"
                            >
                                <FaGithub /> View on GitHub
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
