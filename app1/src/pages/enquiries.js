import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch enquiries from MySQL backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-pphu.onrender.com/api/enquiries"
        );
        setEnquiries(response.data.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
        alert("Failed to load enquiries. Is backend running?");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <nav className="space-x-8 hidden md:flex">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/aboutus" className="hover:underline">
              About Us
            </Link>
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
            <Link to="/enquiries" className="hover:underline font-medium">
              Enquiries
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content - Enquiries Table */}
      <main className="flex-grow py-20 container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">All Enquiries</h2>

        {loading ? (
          <div className="text-center">
            <p className="text-2xl text-gray-600">Loading enquiries...</p>
          </div>
        ) : enquiries.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <p className="text-xl text-gray-600">No enquiries submitted yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="p-6">Client Name</th>
                    <th className="p-6">Project Name</th>
                    <th className="p-6">Phone</th>
                    <th className="p-6">Budget</th>
                    <th className="p-6">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enq) => (
                    <tr
                      key={enq.id}
                      className="border-b hover:bg-gray-100 transition"
                    >
                      <td className="p-6">{enq.clientName}</td>
                      <td className="p-6">{enq.projectName}</td>
                      <td className="p-6">{enq.phone}</td>
                      <td className="p-6">{enq.budget}</td>
                      <td className="p-6">
                        {new Date(enq.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 Hasti Patel. All rights reserved.</p>
      </footer>
    </div>
  );
}
