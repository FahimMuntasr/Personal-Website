import "./AboutMe.css";
export default function AboutMe() {
  return (
    <div id="AboutMe-container">
      <h2 id="AboutMe-Header">ABOUT ME</h2>
      <div id="AboutMe-subcontainer" className="glass">
        <img src="Headshot.png" id="AboutMe-Image" />
        <div id="AboutMe-Facts">
          <div className="Fact">
            <p>👋🏼</p>
            <p>
              Hi I’m <span>Fahim</span>, a second-year{" "}
              <span>Computer Science</span> and <span>Engineering</span> student
              at <span>North South University</span>, graduating class of{" "}
              <span>2028</span>.
            </p>
          </div>
          <div className="Fact">
            <p>🧠</p>
            <p>
              I’m passionate about exploring all areas of technology, with an
              interest in embedded systems, ML/AI, and cybersecurity.
            </p>
          </div>
          <div className="Fact">
            <p>👨🏻‍💻</p>
            <p>
              I have experience in a range of programming languages including C,
              C++, Python, Java, JavaScript, and frameworks like ReactJS.
            </p>
          </div>
          <div className="Fact">
            <p>🎮</p>
            <p>
              In addition to coding, I like sketching and 3D design. I’ve been
              freelancing as a 3D designer since 2019, which has helped me
              develop a creative edge alongside my technical skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
