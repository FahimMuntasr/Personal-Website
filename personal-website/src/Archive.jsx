import './Archive.css'
export default function Archive(){
    return(
        <div id="Archive-container">
            <h2>Archive</h2>
            <div id="Archive">
                <div className="course glass">
                    <a className="course-title">CSE115</a>
                </div>
                <div className="course glass">
                    <a className="course-title">CSE173</a>
                </div>
                <div className="course glass">
                    <a className="course-title">MAT125</a>
                </div>
                <div className="course glass">
                    <a className="course-title">MAT130</a>
                </div>
            </div>
        </div>
    )
}