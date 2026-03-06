import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">

      {/* Profile Image */}
      <div className="relative w-50 h-59">
        <Image
          src="/Celestin.PNG"
          alt="Celestin Munyaneza"
          fill
          className="rounded-full object-cover border-4 border-gray-300 dark:border-gray-700"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
          Hi, I am Celestin 
        </h1>

        <p className="text-xl mt-4 text-gray-600 dark:text-gray-300">
          Full-Stack Developer specializing in modern web applications
          using Next.js,React.js, Node.js, and TypeScript.
        </p>

        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="/projects"
            className="px-6 py-3 bg-black text-white rounded"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border rounded dark:text-white"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}