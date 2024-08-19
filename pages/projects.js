import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <h1>My Projects</h1>
      <ProjectCard 
        title="Project 1" 
        description="A web application built with React and Node.js." 
        imageUrl="/project1.png" 
        projectLink="https://github.com/username/project1" 
      />
      {/* Add more ProjectCard components for other projects */}
    </div>
  );
}
