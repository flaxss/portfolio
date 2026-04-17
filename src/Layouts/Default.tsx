import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
import Cursor from "../components/Cursor"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

function Default() {
    return(
        <>
            <Navbar />
            <Hero />
            <About />
            <Contact />
            <Cursor />
            <Experience />
            <Projects />
            <Skills />
        </>
    )
}

export default Default