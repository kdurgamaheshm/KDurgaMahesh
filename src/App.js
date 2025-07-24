// App.jsx
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const contactRef = useRef(null);
    const nameInputRef = useRef(null);
    const [formVisible, setFormVisible] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleHireMeClick = () => {
        setFormVisible(true);
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
            nameInputRef.current?.focus();
        }, 600);
    };

    return (
        <div className="font-sans">
            <Header />
            <Hero />
            <About onHireClick={handleHireMeClick} />
            <Skills />
            <Projects />
            <Certifications />
            <Education />
            <Contact
                ref={contactRef}
                inputRef={nameInputRef}
                formVisible={formVisible}
                setFormVisible={setFormVisible}
            />

            <Footer />

        </div>
    );
}

export default App;
