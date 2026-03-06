import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded"
        ></textarea>

        <button className="bg-black text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>

      <div className="flex gap-6 mt-6 text-2xl">
    <a href="https://github.com/Celestinmunyaneza22" className="hover:text-gray-500 transition">
    <FaGithub />
  </a>

  <a href="https://www.linkedin.com/in/munyaneza-celestin-7b34b5123/" className="hover:text-blue-600 transition">
    <FaLinkedin />
  </a>
      </div>
    </section>
  );
}