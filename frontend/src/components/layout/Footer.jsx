export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 md:px-16 py-10">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-lg font-bold text-teal-400">
            Peer Learning
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Learn together, grow together. A platform for collaborative learning
            and skill development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#courses" className="hover:text-white">Courses</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold mb-3">Courses</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Java Programming</li>
            <li>Data Structures</li>
            <li>Web Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">📧 support@p2p.com</p>
          <p className="text-gray-400 text-sm mt-1">📞 +91 9876543210</p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © 2026 Peer Learning Platform. All rights reserved.
      </div>
    </footer>
  );
}