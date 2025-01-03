import './ContactButtons.css';
export default function ContactButtons(){
    return(
        <div className="Contact-Buttons-Container">
            <a href="https:/www.linkedin.com/in/fahim-muntasir-profile" id="LinkedIn-Button" target="_blank"className="Contact-Buttons-Item">
                <img src="LinkedIn.png" id="LinkedIn-Icon" className="Contact-Buttons-Image"/>
            </a>
            <a href="https://github.com/FahimMuntasr" id="Github-Button" target="_blank" className="Contact-Buttons-Item">
                <img src="Github.png" id="Github-Icon" className="Contact-Buttons-Image"/>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=byefahimmuntasir@gmail.com&su=Subject%20Here&body=Message%20content%20here" id="Mail-Button" target="_blank" className="Contact-Buttons-Item">
                <img src="Mail.png" id="Mail-Icon" className="Contact-Buttons-Image"/>
            </a>
        </div>
    )
}