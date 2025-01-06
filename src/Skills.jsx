import './Skills.css'
export default function Skills(){
    return(
        <div id='Skill-container'>
            <h2 id='Skills'>Skills</h2>
            <div id='container' className='glass'>
                <div id='Languages' className='skills'>
                    <h4>Languages</h4>
                    <div className='lists'>
                        <div className='list-items'>
                            <img src='C.png' id='c'/>
                            <p>C</p>
                        </div>
                        <div className='list-items'>
                            <img src='CPP.png' id='cpp'/>
                            <p>C++</p>
                        </div>
                        <div className='list-items'>
                            <img src='JAVA.png' id='java'/>
                            <p>Java</p>
                        </div>
                        <div className='list-items'>
                            <img src='JavaScript.png' id='javascript'/>
                            <p>Javascript</p>
                        </div>
                        <div className='list-items'>
                            <img src='PYTHON.png' id='python'/>
                            <p>Python</p>
                        </div>
                        <div className='list-items'>
                            <img src='HTML.png' id='html'/>
                            <p>HTML/CSS</p>
                        </div>
                    </div>
                </div>
                <div id='Frameworks' className='skills'>
                    <h4>Frameworks</h4>
                    <div className='lists'>
                        <div className='list-items'>
                            <img src='react.png' id='react'/>
                            <p>ReactJS</p>
                        </div>
                        <div className='list-items'>
                            <img src='node.png' id='node'/>
                            <p>NodeJS</p>
                        </div>
                    </div>
                </div>
                <div id='Others' className='skills'>
                    <h4>Other tools</h4>
                    <div className='lists'>
                        <div className='list-items'>
                            <img src='git.png' id='git'/>
                            <p>Git</p>
                        </div>
                        <div className='list-items'>
                            <img src='latex.png' id='latex'/>
                            <p>LaTeX</p>
                        </div>
                        <div className='list-items'>
                            <img src='vim.png' id='vim'/>
                            <p>Vim</p>
                        </div>
                        <div className='list-items'>
                            <img src='blender.png' id='blender'/>
                            <p>Blender</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}