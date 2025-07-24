import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaPhoneAlt,
} from "react-icons/fa";
import { forwardRef } from "react";
import RateProfile from "./RateProfile";

const Contact = forwardRef(({ inputRef, formVisible, setFormVisible }, ref) => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [captchaValid, setCaptchaValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [ratingVisible, setRatingVisible] = useState(false);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaValid) {
            alert("Please complete the CAPTCHA.");
            return;
        }

        setIsLoading(true);
        try {
            await emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    form,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
);
            setSubmitted(true);
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 4000);
        } catch (error) {
            alert("Something went wrong!");
            console.error("EmailJS error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="bg-gradient-to-br from-green-100 to-white py-16 px-4 sm:px-6"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-green-700 text-center mb-10">
                    Let's Connect
                </h2>

                {/* Social Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    <div className="flex items-center gap-4 p-4 bg-white shadow rounded border border-green-100">
                        <FaLinkedin className="text-xl text-green-600" />
                        <a
                            href="https://linkedin.com/in/k-durga-mahesh-41b68a325"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white shadow rounded border border-green-100">
                        <FaGithub className="text-xl text-green-600" />
                        <a
                            href="https://github.com/kdurgamaheshm"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline"
                        >
                            GitHub
                        </a>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white shadow rounded border border-green-100">
                        <FaEnvelope className="text-xl text-green-600" />
                        <a
                            href="mailto:kdurgamahesh5@gmail.com"
                            className="hover:underline"
                        >
                            kdurgamahesh5@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white shadow rounded border border-green-100">
                        <FaPhoneAlt className="text-xl text-green-600" />
                        <span>+91 9100568714</span>
                    </div>
                </div>

                {/* Buttons */}
                {!formVisible ? (
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-4">
                        <button
                            onClick={() => setFormVisible(true)}
                            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 text-base font-medium shadow"
                        >
                            Hire Me
                        </button>
                        <button
                            onClick={() => setRatingVisible((prev) => !prev)}
                            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 text-base font-medium shadow"
                        >
                            {ratingVisible ? "Hide Rating Form" : "Rate My Profile"}
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setFormVisible(false)}
                            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 text-base font-medium shadow"
                        >
                            Hide Form
                        </button>
                    </div>
                )}

                {/* Contact Form */}
                {formVisible && (
                    <motion.form
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                        className="mt-10 bg-white shadow-lg rounded-lg p-6 sm:p-8 grid gap-5 border border-green-100"
                    >
                        {submitted && (
                            <div className="p-3 text-green-900 bg-green-300 rounded text-center shadow">
                                Message sent! I’ll get back to you soon.
                            </div>
                        )}
                        <input
                            ref={inputRef}
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Message or Hiring Note"
                            rows="5"
                            required
                            value={form.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                        ></textarea>

                       <ReCAPTCHA
                              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                              onChange={() => setCaptchaValid(true)}
                            />


                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`bg-green-600 text-white py-2 rounded transition duration-300 ${
                                isLoading
                                    ? "opacity-50 cursor-not-allowed"
                                    : "hover:bg-green-700"
                            }`}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></div>
                                    <span>Sending...</span>
                                </div>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </motion.form>
                )}

                {/* Rating Form */}
                {formVisible && (
                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={() => setRatingVisible((prev) => !prev)}
                            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 text-base font-medium shadow"
                        >
                            {ratingVisible ? "Hide Rating Form" : "Rate My Profile"}
                        </button>
                    </div>
                )}

                {ratingVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-10"
                    >
                        <RateProfile />
                    </motion.div>
                )}
            </div>
        </section>
    );
});

export default Contact;
