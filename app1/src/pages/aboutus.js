import {Link} from 'react-router-dom';
import Image from '../images/pic5.png';
export default function Aboutus(){
    return(<div>
 {/* Header (same) */}
  <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg sticky top-0 z-10">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <nav className="space-x-8 hidden md:flex">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/aboutus" className="hover:underline">About Us</Link>
        <Link to="/projects" className="hover:underline font-medium">Projects</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/enquiries" className="hover:underline">Enquiries</Link>
      </nav>
    </div>
  </header>
  {/* About Section */}
  <section className="py-20 container mx-auto px-6 max-w-5xl">
    <h2 className="text-5xl font-bold text-center mb-12">About Me</h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img src={Image} alt="Hasti Patel" className="rounded-xl shadow-2xl" style={{ border: '2px solid #8B5CF6' }} />
      </div>
      <div>
        <p className="text-lg leading-relaxed mb-6">
          I'm a passionate Full-Stack Developer from Bhavnager, India. I love building modern web applications with clean code and beautiful design.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          My expertise includes HTML, CSS (Tailwind), JavaScript, React, Node.js, and databases like MySQL.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>HTML, CSS, Tailwind CSS</li>
          <li>JavaScript &amp; React</li>
          <li>Node.js &amp; Express</li>
          <li>MySQL &amp; MongoDB</li>
          <li>Git &amp; GitHub</li>
        </ul>
      </div>
    </div>
  </section>
  {/* Same Footer */}
  <footer className="bg-gray-900 text-white py-8 text-center">
    <p>© 2026 Hasti Patel. All rights reserved.</p>
  </footer>
</div>
);
}