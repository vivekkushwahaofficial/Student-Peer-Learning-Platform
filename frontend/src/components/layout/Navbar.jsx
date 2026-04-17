export default function Navbar({ navItems, active }) {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 bg-teal-100/90 backdrop-blur shadow">
      <h1 className="text-sm md:text-xl font-bold text-teal-700">
        Peer To Peer Learning Platform
      </h1>

      <div className="hidden md:flex space-x-8 text-red-500 text-base items-center">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`relative font-medium transition hover:text-blue-500 ${
              active === item.id ? "text-blue-500" : ""
            }`}
          >
            {item.name}
          </a>
        ))}
        <button className="bg-pink-200 px-4 py-1 rounded-full">Sign up</button>
      </div>
    </nav>
  );
}