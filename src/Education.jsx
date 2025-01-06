import './Education.css';
export default function Education(){
    return(
        <div id="Education-Container">
            <h2>Education</h2>
            <div id='NSU' className='glass cards'>
                <h4>Bachelors of Computer Science and Engineering</h4>
                <div className='time'>
                    <p>Jan 2024 - Present</p>
                    <p>North South University</p>
                </div>
            </div>
            <div id='Alevel' className='glass cards'>
                <h4>GCE A'Levels</h4>
                <div className='time'>
                    <p>Sept 2021 - May 2023</p>
                    <p>Scholastica School</p>
                </div>
            </div>
            <div id='Olevel' className='glass cards'>
                <h4>GCE O'Levels</h4>
                <div className='time'>
                    <p>Sept 2019 - May 2021</p>
                    <p>Scholastica School</p>
                </div>
            </div>
            <div id='Awards' className='glass'>
                <h4>Awards</h4>
                <ul>
                    <li>Merit scholarship based on university entrance exam rank (Ranked 27th)</li>
                    <li>Second semester topper, Intra NSU Junior Programming contest (Ranked 8th)</li>
                    <li>The Daily Star Award</li>
                </ul>
            </div>
        </div>
    )
}