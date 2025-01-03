import './NameAnim.css'
import ContactButtons from './ContactButtons'
export default function NameAnim(){
    return(
        <div id="NameAnim-container">
            <h1 id="NameAnim-name">FAHIM MUNTASIR</h1>
            <h3 id='NameAnim-degree'>COMPUTER SCIENCE & ENGINEERING @ NORTH SOUTH UNIVERSITY '28</h3>
            <ContactButtons/>
            <button id='Resume-button'>Resume ↗</button>
        </div>
    )
}