import {createRoot} from "react-dom/client"
import NavBar from "./NavBar"
import AboutMe from "./AboutMe"
import NameAnim from "./NameAnim"
import Skills from "./Skills"
import Education from "./Education"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
const root = createRoot(document.getElementById("root"))

function Page(){
    return(
        <>
            <NavBar/>
            <NameAnim/>
            <AboutMe/>
            <Skills/>
            <Education/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}
root.render(
    <Page/>
)
