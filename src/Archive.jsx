import './Archive.css'
export default function Archive(){
    return(
        <div id="Archive-container">
            <h2>Archive</h2>
            <div id="Archive">
                <div  className="course glass">
                    <a href="https://drive.google.com/file/d/11iiwKEPxLeY-QmJ4_EnOrYBoCjaW6GWK/view?usp=drive_link" target="_blank" className="course-title">CSE115</a>
                </div>
                <div  className="course glass">
                    <a href="https://drive.google.com/file/d/1w5-49wbdVTu6slA6Oj2QLsii3oKdkpUx/view?usp=drive_link" target="_blank" className="course-title">CSE173</a>
                </div>
                <div className="course glass">
                    <a href="https://drive.google.com/file/d/19SHrpt3rfzU_nrUgGsPzE_X83G5rFCv5/view?usp=drive_link" target="_blank" className="course-title">MAT125</a>
                </div>
                <div className="course glass">
                    <a href="https://drive.google.com/file/d/1bWTJKizKh8BrvQGR_YOkbvjR6izJVPjL/view?usp=drive_link" target="_blank" className="course-title">MAT130</a>
                </div>
            </div>
        </div>
    )
}