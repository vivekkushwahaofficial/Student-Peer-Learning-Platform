function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow">
      <div className="font-bold text-xl">
        Peer To Peer Learning
      </div>

      <nav className="space-x-6">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">About</a>
        <a href="#" className="hover:text-blue-500">Courses</a>
      </nav>
    </header>
  );
}

export default Header;