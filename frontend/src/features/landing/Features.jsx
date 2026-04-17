export default function Features() {
  const features = [
    {
      title: "Collaborative Learning",
      desc: "Learn with peers and grow together",
      img: "https://static.vecteezy.com/system/resources/thumbnails/057/960/641/small/group-of-people-icon-brainstorming-and-team-collaboration-concept-vector.jpg"
    },
    {
      title: "Live Doubt Sessions",
      desc: "Clear doubts instantly with mentors",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
    },
    {
      title: "Project Based Learning",
      desc: "Build real-world projects",
      img: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
    },
    {
      title: "Expert Mentorship",
      desc: "Get guidance from experts",
      img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
    }
  ];

  return (
    <section id="features" className="text-center py-12 px-4 sm:px-6 md:px-12">
      
      <h2 className="text-lg md:text-xl font-semibold text-yellow-800 mb-10">
        Our Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <img
              src={f.img}
              alt={f.title}
              className="w-14 sm:w-16 mx-auto mb-4"
            />

            <h3 className="font-bold text-sm md:text-base">
              {f.title}
            </h3>

            <p className="text-gray-600 text-xs md:text-sm mt-2">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}