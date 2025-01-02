import './NavBar.css'
export default function NavBar(){
    return(
        <div id="NavBar-Container">
            <div id="NavBar-Name">
                <h1 id="NavBar-Name-h1">Fahim Muntasir</h1>
            </div>
            <div id="NavBar-Items-Container">
                <ul id="NavBar-Items-List">
                    <li class="NavBar-Items">About Me</li>
                    <li class="NavBar-Items">Skills</li>
                    <li class="NavBar-Items">Education</li>
                    <li class="NavBar-Items">Projects</li>
                    <li class="NavBar-Items">Contact</li>
                </ul>
                <button id="NavBar-DarkMode-Button">Dark Mode</button>
            </div>
        </div>
    )
}