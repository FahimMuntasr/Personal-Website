import './NavBar.css'
import DarkModeSwitch from './DarkModeSwitch.jsx'
export default function NavBar(){
    return(
        <div id="NavBar-Container">
            <button id="NavBar-Name-button" className='navbar-buttons'>FAHIM MUNTASIR</button>
            <div id="NavBar-Items-Container">
                <button className='navbar-buttons'>ABOUT ME</button>
                <button className='navbar-buttons'>SKILLS</button>
                <button className='navbar-buttons'>EDUCATION</button>
                <button className='navbar-buttons'>PROJECTS</button>
                <button className='navbar-buttons'>CONTACT</button>
                <DarkModeSwitch/>
            </div>
        </div>
    )
}