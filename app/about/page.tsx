 import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiExpress,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiTensorflow,
  SiPandas,
  SiScikitlearn,
  SiSpringboot
} from "react-icons/si";
export default function About() {
const skills = {
  frontend: [
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiReact className="text-cyan-500" />, name: "React" },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  ],
  backend: [
    { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
    { icon: <SiPhp className="text-indigo-500" />, name: "PHP" },
    { icon: <SiSpringboot className="text-green-700" />, name: "Spring Boot" }
  ],
  databases: [
    { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
    { icon: <SiPostgresql className="text-blue-700" />, name: "PostgreSQL" },
    { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
  ],
  machineLearning: [
    { icon: <SiPython className="text-yellow-500" />, name: "Python" },
    { icon: <SiTensorflow className="text-orange-500" />, name: "TensorFlow" },
    { icon: <SiScikitlearn className="text-blue-500" />, name: "Scikit-learn" },
    { icon: <SiPandas className="text-indigo-600" />, name: "Pandas" },
  ]
};

  return (
    <section className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p>
        I am a passionate software developer with experience in building
        web applications using modern technologies.
      </p>
      <div>
        <ul className="list-disc ml-6">
        <h2 className="text-3xl font-bold mb-10 dark:text-white">Tech Stack/Skills</h2>

    <div className="flex flex-wrap justify-center gap-12 text-5xl">
{Object.entries(skills).map(([category, skills]) => (
    <div key={category} className="mb-14">
      <h3 className="text-xl font-semibold mb-6 capitalize dark:text-gray-300">
        {category}
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 text-5xl justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            {skill.icon}
            <p className="text-sm mt-2 dark:text-gray-400">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Learning Journey</h3>
        <p>
          I continuously learn new technologies and best practices to
          improve performance, security, and user experience.
        </p>
      </div>
    </section>
  );
}