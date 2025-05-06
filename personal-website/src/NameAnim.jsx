import "./NameAnim.css";
import ContactButtons from "./ContactButtons";
export default function NameAnim() {
  return (
    <div id="NameAnim-container">
      <div className="container">
        <p className="text">FAHIM MUNTASIR.</p>
      </div>
      <h3 id="NameAnim-degree">
        COMPUTER SCIENCE & ENGINEERING @ NORTH SOUTH UNIVERSITY '28
      </h3>
      <ContactButtons />
      <button id="Resume-button" className="glass">
        Resume ↗
      </button>
      <div className="arrowText">
        <p id="arrow1" className="arrows">
          V
        </p>
        <p id="arrow2" className="arrows">
          V
        </p>
        <p id="arrow3" className="arrows">
          V
        </p>
      </div>
    </div>
  );
}
