export default function Courses({ courses, setSelectedCourse }) {
  return (
    <section id="courses" className="text-center py-12 px-4">
      <h2 className="text-xl text-blue-500 mb-8">Our Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            <img src={course.img} className="w-14 mx-auto mb-3" />

            <h3 className="font-bold text-lg">{course.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{course.desc}</p>

            <button
              onClick={() => setSelectedCourse(course)}
              className="mt-4 bg-yellow-800 text-white px-4 py-2 rounded-full"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}