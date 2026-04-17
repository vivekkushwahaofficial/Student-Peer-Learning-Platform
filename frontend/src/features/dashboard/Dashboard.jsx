import Header from "../../components/layout/Header";
import Hero from "../landing/Hero";
import Features from "../landing/Features";
import Impact from "../landing/Impact";
import About from "../landing/About";
import Footer from "../../components/layout/Footer";

function Dashboard({ user, onLogout }) {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="font-bold text-xl">
          Welcome, {user?.name}
        </h1>

        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Sections */}
      <Header />
      <Hero />
      <Features />
      <Impact />
      <About />
      <Footer />
    </div>
  );
}

export default Dashboard;