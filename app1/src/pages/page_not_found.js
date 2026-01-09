import {Link} from 'react-router-dom';
export default function PageNotFound(){
    return(<div>
  {/* Header (same) */}
  <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg sticky top-0 z-10">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <nav className="space-x-8 hidden md:flex">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/projects" className="hover:underline font-medium">Projects</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/enquiries" className="hover:underline">Enquiries</Link>
      </nav>
    </div>
  </header>
  {/* 404 Error Section */}
  <section className="flex-grow flex items-center justify-center py-20">
    <div className="text-center px-6 max-w-3xl">
      <h1 className="text-9xl font-bold text-purple-600 mb-8">404</h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Oops! Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        The page you're looking for doesn't exist. It might have been moved, deleted, or you may have typed the URL incorrectly.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a href="index.html" className="bg-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition shadow-lg">
          Go Back Home
        </a>
        <a href="contact.html" className="border-2 border-purple-600 text-purple-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-purple-600 hover:text-white transition">
          Contact Me
        </a>
      </div>
      <div className="mt-16">
        <img src="https://via.placeholder.com/400x300?text=Lost+in+Space" alt="404 Illustration" className="mx-auto rounded-xl shadow-lg" />
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="bg-gray-900 text-white py-8 text-center">
    <p>© 2026 Hasti Patel. All rights reserved.</p>
  </footer>
</div>
);
}