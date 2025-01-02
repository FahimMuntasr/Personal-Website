import './NameAnim.css'
export default function NameAnim(){
    return(
        <div id="NameAnim-container">
            <div >
                <h1 id="NameAnim-name">Fahim Muntasir</h1>
            </div>
            <div>
                <h3 id='NameAnim-degree'>Computer Science @ North South University '28</h3>
            </div>
            <div>
                <ul id='NameAnim-links'>
                    <li className='NameAnim-link-items'>LinkedIn</li>
                    <li className='NameAnim-link-items'>Github</li>
                    <li className='NameAnim-link-items'>Mail</li>
                </ul>
            </div>
            <div>
                <button id='Resume-button'>Resume</button>    
            </div>
        </div>
    )
}