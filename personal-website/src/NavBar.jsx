import './NavBar.css'
import DarkModeSwitch from './DarkModeSwitch.jsx'
export default function NavBar(){
    return(
        <div id="NavBar-Container">
            <button id="NavBar-Name-button" className='navbar-buttons'>Fahim Muntasir</button>
            <div id="NavBar-Items-Container">
                <button className='navbar-buttons'>About Me</button>
                <button className='navbar-buttons'>Skills</button>
                <button className='navbar-buttons'>Education</button>
                <button className='navbar-buttons'>Projects</button>
                <button className='navbar-buttons'>Contact</button>
                <DarkModeSwitch/>
            </div>
        </div>
    )
}