export default function About() {
  return (
    <section
      id="about"
      className="py-12 px-4 sm:px-6 md:px-16 text-center bg-gray-50"
    >
      {/* Title */}
      <h2 className="text-lg md:text-2xl font-semibold text-blue-500">
        About Us
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
        Our Peer-to-Peer Learning Platform is designed to bring learners together.
        We believe that the best way to learn is by sharing knowledge, collaborating,
        and helping each other grow in a supportive environment.
      </p>

      {/* Features / Highlights */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="font-bold text-base md:text-lg text-green-600">
            🌱 Our Mission
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            To create a collaborative space where students learn from each other
            and build real-world skills.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="font-bold text-base md:text-lg text-purple-600">
            🤝 Our Vision
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            To make learning accessible, interactive, and community-driven for
            everyone.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="font-bold text-base md:text-lg text-orange-500">
            🚀 What We Offer
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Courses, mentorship, real-world projects, and a strong peer network
            to boost your career.
          </p>
        </div>

      </div>

      {/* Contact Info */}
      <div className="mt-10 text-sm md:text-base text-gray-700">
        <p>Email: support@p2p.com</p>
        <p>Phone: +91 9876543210</p>
      </div>
    </section>
  );
}