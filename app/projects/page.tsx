import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { FaProjectDiagram , FaGithub } from "react-icons/fa";
export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold flex items-center gap-3">
  <FaProjectDiagram /> Projects
</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <p>For more projects: <a href="https://github.com/Celestinmunyaneza22" className="hover:text-gray-500 transition text-3xl">
          <FaGithub />
        </a></p>
    </section>
  );
}