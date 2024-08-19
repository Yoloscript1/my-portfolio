export async function getServerSideProps() {
    // Fetch data here (e.g., from an API)
    const res = await fetch('https://api.example.com/projects');
    const projects = await res.json();
  
    return { props: { projects } };
  }
  
  export default function Projects({ projects }) {
    return (
      <div>
        <h1>My Projects</h1>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    );
  }
  