import {Link} from 'react-router-dom';

export default function Projects(){
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
  {/* Projects Grid */}
  <section className="py-20 container mx-auto px-6">
  <h2 className="text-5xl font-bold text-center mb-12">My Projects</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* Old Project 1 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img src={require('../images/image.jpg')} alt="Old Website 1" className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">Blood Donation Management System</h3>
        <p className="text-gray-600">Built using ASP.NET with VB, this system manages donors, blood inventory, and donation requests efficiently.</p>
      </div>
    </div>

    {/* Old Project 2 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img src={require('../images/image1.jpg')} alt="Old Website 2" className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">Sitaram Paver Block Website</h3>
        <p className="text-gray-600">A static business website built with HTML, CSS, and JavaScript to showcase products, latest projects, and testimonials.</p>
      </div>
    </div>

    {/* Old Project 3 */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img src={require('../images/image2.png')} alt="Old Website 3" className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">Portfolio Website</h3>
        <p className="text-gray-600">My personal portfolio site built with React and Tailwind CSS to showcase all my previous projects and skills.</p>
      </div>
    </div>

  </div>
</section>

  {/* Footer */}
  <footer className="bg-gray-900 text-white py-8 text-center">
    <p>© 2026 Hasti Patel. All rights reserved.</p>
  </footer>
</div>
)
}