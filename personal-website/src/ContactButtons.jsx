import './ContactButtons.css';
export default function ContactButtons(){
    return(
        <div className="Contact-Buttons-Container">
            <button id="LinkedIn-Button" className="Contact-Buttons-Item">
                <img src="LinkedIn.png" id="LinkedIn-Icon" className="Contact-Buttons-Image"/>
            </button>
            <button id="Github-Button" className="Contact-Buttons-Item">
                <img src="Github.png" id="Github-Icon" className="Contact-Buttons-Image"/>
            </button>
            <button id="Mail-Button" className="Contact-Buttons-Item">
                <img src="Mail.png" id="Mail-Icon" className="Contact-Buttons-Image"/>
            </button>
        </div>
    )
}