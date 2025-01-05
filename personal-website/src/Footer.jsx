import './Footer.css'
import DarkModeSwitch from './DarkModeSwitch' 
import ContactButtons from './ContactButtons'
export default function Footer(){
    return(
        <div className='Footer-container'>
            <small>© 2025 Fahim Muntasir - made using ReactJS</small>
            <div id='buttons-container'>
                <div id='contact'>
                    <ContactButtons/>
                </div>
                <div id='ui-buttons'>
                    <a href='#'>
                        <img id='top-image' src='up.png'/>
                    </a>
                    <DarkModeSwitch/>
                </div>
            </div>
        </div>
    )
}