import React, { useState } from "react";
import { ArrowRight, Building2, Mail, Lock, User, BookOpen } from "lucide-react";

const RegisterPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");

  const readErrorMessage = async (response) => {
    const fallback = "Registration failed";
    try {
      const data = await response.json();
      return data.message || fallback;
    } catch {
      const text = await response.text();
      return text || fallback;
    }
  };

  const handleRegister = async () => {

    // validation
    if (!name.trim() || !email.trim() || !password.trim() || !college.trim() || !course.trim()) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
          college,
          course
        })
      });

      if (!response.ok) {
        alert(await readErrorMessage(response));
        return;
      }

      const data = await response.json();

      console.log("Register Response:", data);

      alert("Registration Successful");

      // clear form
      setName("");
      setEmail("");
      setPassword("");
      setCollege("");
      setCourse("");

      // redirect
      window.location.href = "/login";

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };


  return (
    <div className="min-h-screen bg-[#eff3f8] px-4 py-10 sm:px-6">
      <div className="mx-auto w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Student Registration</h1>
          <p className="mt-2 text-sm text-slate-500">Join PeerNexus to start your learning journey</p>
        </div>

        <div className="mt-7 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
              <User className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">College</span>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
              <Building2 className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Enter College"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </label>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
                <Mail className="h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Course</span>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
                <BookOpen className="h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter Course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-700">Password</span>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
              <Lock className="h-4 w-4 text-slate-400" />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </label>
        </div>

        <button
          onClick={handleRegister}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700"
        >
          Registration
          <ArrowRight className="h-4 w-4" />
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account? <a href="/login" className="font-semibold text-blue-700 hover:text-blue-800">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
