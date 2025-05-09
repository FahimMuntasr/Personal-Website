import "./Projects.css";

export default function Projects() {
  return (
    <div id="Projects-container">
      <h2>Projects</h2>
      <div className="project-card glass">
        <img src="gamestack.png" alt="GameStack Screenshot" />
        <div className="project-info">
          <h3>GameStack</h3>
          <p>
            A platform to track and manage your video game backlog — featuring
            planned, completed, and dropped games with rating support.
          </p>
          <p>Tech Stack : React + Tailwind</p>
          <div className="project-links">
            <a
              href="https://fahimmuntasr.github.io/GameStack/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/FahimMuntasr/GameStack"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="project-card glass">
        <img src="cgpa.png" alt="GameStack Screenshot" />
        <div className="project-info">
          <h3>CGPA Calculator</h3>
          <p>
            A clean and efficient CGPA calculator app that helps students
            accurately compute their cumulative GPA based on course grades and
            credit hours.
          </p>
          <p>Tech Stack : React + Tailwind</p>
          <div className="project-links">
            <a
              href="https://fahimmuntasr.github.io/CGPA.Calculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/FahimMuntasr/CGPA.Calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
