export default function Impact() {
  const stats = [
    "10K+ Users",
    "5+ Sessions",
    "4.8 Rating"
  ];

  return (
    <section className="text-center py-10 px-4">
      <h2 className="text-lg md:text-xl font-semibold text-blue-500 mb-6">
        Our Impact
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-orange-300 text-white px-6 py-3 rounded-full shadow-md w-full sm:w-auto text-sm md:text-base"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}