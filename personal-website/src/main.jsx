import {createRoot} from "react-dom/client"
import "./main.css"

import NavBar from "./NavBar"

import AboutMe from "./AboutMe"
import NameAnim from "./NameAnim"
import Skills from "./Skills"
import Education from "./Education"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"
import Archive from "./Archive"
const root = createRoot(document.getElementById("root"))

function Page(){
    return(
        <>
            <NavBar/>
            <div id="content">
                <NameAnim/>
                <AboutMe/>
                <Skills/>
                <Education/>
                <Projects/>
                <Archive/>
                <Contact/>
                <Footer/>
            </div>
        </>
    )
}
root.render(
    <Page/>
)
