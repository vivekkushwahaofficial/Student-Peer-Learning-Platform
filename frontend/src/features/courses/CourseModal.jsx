export default function CourseModal({ course, close }) {
  if (!course) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={close} // 👉 click outside closes modal
    >
      <div
        className="bg-white p-6 rounded-xl w-[90%] sm:w-[400px] text-center shadow-lg"
        onClick={(e) => e.stopPropagation()} // 👉 prevent closing when clicking inside
      >
        <h2 className="text-xl font-bold">{course.title}</h2>

        <p className="mt-2 text-gray-600">{course.details}</p>

        <button
          onClick={close}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}