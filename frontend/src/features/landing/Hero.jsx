export default function Hero() {
  return (
    <section
      id="home"
      className="px-4 sm:px-6 md:px-16 py-16 md:py-24 bg-gradient-to-r from-green-100 via-blue-50 to-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* 🔹 Left Content */}
        <div className="max-w-xl text-center md:text-left">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 leading-tight">
            Learn Together <br /> Grow Together
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
            Join a community of learners where you can collaborate, share knowledge,
            and build real-world skills together. Learn faster, smarter, and better.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            <a
              href="#courses"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              Explore Courses
            </a>

            <a
              href="#about"
              className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-100 transition"
            >
              Learn More
            </a>

          </div>

        </div>

         
      </div>
    </section>
  );
}