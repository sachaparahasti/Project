import { Link } from 'react-router-dom'; // Correct import

export default function Home() {
  return (
   <div>
  {/* Header */}
  <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg sticky top-0 z-10">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <nav className="space-x-8 hidden md:flex">
        <Link to="/" className="hover:underline font-medium">Home</Link>
        <Link to="/aboutus" className="hover:underline">About Us</Link>
        <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/enquiries" className="hover:underline">Enquiries</Link>
      </nav>
    </div>
  </header>
  {/* Hero Section */}
  <section className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Hello, I'm Hasti Patel</h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
        Full-Stack Developer passionate about creating beautiful, responsive, and functional websites.
      </p>
      <Link to="/contact" className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition">
        Hire Me
      </Link>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-gray-900 text-white py-8 text-center">
    <p>© 2026 Hasti Patel. All rights reserved.</p>
  </footer>
</div>

  );
}