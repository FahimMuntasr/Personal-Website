import './NavBar.css'
import DarkModeSwitch from './DarkModeSwitch.jsx'
export default function NavBar(){
    return(
        <div id="NavBar-Container">
            <a href="#" id="NavBar-Name-button" className='navbar-buttons'>FAHIM MUNTASIR</a>
            <div id="NavBar-Items-Container">
                <a href="#AboutMe-container"className='navbar-buttons'>ABOUT ME</a>
                <a href="#Skill-container"className='navbar-buttons'>SKILLS</a>
                <a href="#Education-Container"className='navbar-buttons'>EDUCATION</a>
                <a href="#Projects-container"className='navbar-buttons'>PROJECTS</a>
                <a href="#Archive-container"className='navbar-buttons'>ARCHIVE</a>
                <a href="#Contact-container"className='navbar-buttons'>CONTACT</a>
                <DarkModeSwitch/>
            </div>
        </div>
    )
}