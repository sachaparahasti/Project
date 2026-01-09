import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contactus() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Form data collect કરો
    const formData = {
      clientName: e.target.name.value,
      projectName: e.target.project.value,
      phone: e.target.phone.value,
      description: e.target.description.value,
      budget: e.target.budget.value,
      links: e.target.links.value || ""
    };

    try {
      await axios.post("http://localhost:5000/api/enquiries", formData);
      toast.success("Enquiry submitted successfully! Check the Enquiries page.");
      e.target.reset(); // Form clear કરો
    } catch (error) {
      toast.error("Failed to submit enquiry. Is the backend running?");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <nav className="space-x-8 hidden md:flex">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/aboutus" className="hover:underline">About Us</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <Link to="/contact" className="hover:underline font-medium">Contact Us</Link>
            <Link to="/enquiries" className="hover:underline">Enquiries</Link>
          </nav>
        </div>
      </header>

      {/* Contact Form */}
      <main className="flex-grow py-20 container mx-auto px-6 max-w-3xl">
        <h2 className="text-5xl font-bold text-center mb-12">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              className="p-4 border rounded-lg focus:outline-none focus:border-purple-600"
            />
            <input
              type="text"
              name="project"
              placeholder="Project Name *"
              required
              className="p-4 border rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            className="w-full p-4 border mb-6 rounded-lg focus:outline-none focus:border-purple-600"
          />
          <textarea
            name="description"
            placeholder="Project Description *"
            rows={6}
            required
            className="w-full p-4 border mb-6 rounded-lg focus:outline-none focus:border-purple-600"
          />
          <input
            type="text"
            name="budget"
            placeholder="Budget (e.g. $5000)"
            required
            className="w-full p-4 border mb-6 rounded-lg focus:outline-none focus:border-purple-600"
          />
          <input
            type="url"
            name="links"
            placeholder="Links (GitHub, Figma - optional)"
            className="w-full p-4 border mb-8 rounded-lg focus:outline-none focus:border-purple-600"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-lg font-bold transition ${
              loading
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 Hasti Patel. All rights reserved.</p>
      </footer>
    </div>
  );
}