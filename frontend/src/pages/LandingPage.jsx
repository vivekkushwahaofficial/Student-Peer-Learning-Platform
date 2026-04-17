import React from 'react';
import { Users, ArrowRight, Zap, Globe, ShieldCheck } from "lucide-react";
const LandingPage = ({ onGetStarted }) => {

  // only navigation
  const handleStart = () => {
    window.location.href = "/login";
  };
  
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Users size={24} />
          </div>
          <h1 className="font-black text-2xl tracking-tight text-indigo-900">PeerNexus</h1>
        </div>
        <button
          onClick={handleStart}
          className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-indigo-700 transition-all flex items-center gap-2"
        >
          Join PeerNexus <ArrowRight size={18} />
        </button>
      </nav>

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-8 py-20 text-center relative">
        <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-md text-xs font-semibold inline-block mb-4">✨ The Future of Academic Collaboration</div>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mt-4 leading-[1.1] tracking-tight">
          Master Your Subjects with <br /> <span className="text-indigo-600">Student Peer Learning</span>
        </h2>
        <p className="mt-8 text-lg text-slate-500 max-w-2xl mx-auto">
          Connect with verified student experts from OIST, SATI, and LNCT to solve complex problems in real-time.
        </p>
        <button
          onClick={handleStart}
          className="mt-12 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
        >
          Get Started for Free
        </button>
      </header>
    </div>
  );
};

export default LandingPage;