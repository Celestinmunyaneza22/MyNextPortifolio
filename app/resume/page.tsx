import { FaDownload } from "react-icons/fa";
export default function Resume() {
  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Resume</h2>

      <a
        href="/CelestinCV.pdf"
        download
        className="hover:text-green-600 transition">
    <FaDownload />
        Download Resume (PDF)
      </a>

      <div>
        <h3 className="text-xl font-semibold">Experience</h3>
        <p>Software Developer – Projects & Training</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Education</h3>
        <p>Computer Science / IT</p>
      </div>
    </section>
  );
}