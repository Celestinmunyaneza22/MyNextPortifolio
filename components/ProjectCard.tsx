type Props = {
  project: any;
};
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
export default function ProjectCard({ project }: Props) {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        className="rounded mb-4"
      />
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>

      <p className="mt-2 text-sm">
        Tech: {project.tech.join(", ")}
      </p>

      <div className="mt-4 flex gap-4">
 <a href={project.github} className="flex items-center gap-2 hover:text-gray-500 transition">
    <FaGithub /> GitHub
  </a>

  <a href={project.demo} className="flex items-center gap-2 hover:text-blue-500 transition">
    <FaExternalLinkAlt /> Live Demo
  </a>
      </div>
    </div>
  );
}