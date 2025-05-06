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
    </div>
  );
}
