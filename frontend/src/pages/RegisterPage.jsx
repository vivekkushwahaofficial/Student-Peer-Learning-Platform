import React, { useState } from "react";

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
    <div
      style={{ textAlign: "center", marginTop: "100px" }}
      // Tailwind added: w-full (full width container), max-w-md (safe form width cap), mx-auto (center horizontally), px-4 (mobile side padding), text-slate-900 (readable text color), font-sans (consistent typography)
      className="w-full max-w-md mx-auto px-4 text-slate-900 font-sans"
    >

      {/* Tailwind added: text-2xl (larger heading), font-bold (strong title weight), mb-6 (spacing below heading) */}
      <h2 className="text-2xl font-bold mb-6">Register</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        // Tailwind added: w-full (input fills container), rounded-md (soft corners), border border-slate-300 (subtle input boundary), px-3 py-2 (comfortable input padding), focus:outline-none (remove default outline), focus:ring-2 focus:ring-indigo-200 (accessible focus state)
        className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        // Tailwind added: w-full (input fills container), rounded-md (soft corners), border border-slate-300 (subtle input boundary), px-3 py-2 (comfortable input padding), focus:outline-none (remove default outline), focus:ring-2 focus:ring-indigo-200 (accessible focus state)
        className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        // Tailwind added: w-full (input fills container), rounded-md (soft corners), border border-slate-300 (subtle input boundary), px-3 py-2 (comfortable input padding), focus:outline-none (remove default outline), focus:ring-2 focus:ring-indigo-200 (accessible focus state)
        className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter College"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        // Tailwind added: w-full (input fills container), rounded-md (soft corners), border border-slate-300 (subtle input boundary), px-3 py-2 (comfortable input padding), focus:outline-none (remove default outline), focus:ring-2 focus:ring-indigo-200 (accessible focus state)
        className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        // Tailwind added: w-full (input fills container), rounded-md (soft corners), border border-slate-300 (subtle input boundary), px-3 py-2 (comfortable input padding), focus:outline-none (remove default outline), focus:ring-2 focus:ring-indigo-200 (accessible focus state)
        className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
      />

      <br /><br />

      <button
        onClick={handleRegister}
        // Tailwind added: bg-indigo-600 (primary button color), text-white (contrast), px-5 py-2.5 (button size), rounded-md (shape), font-medium (legibility), hover:bg-indigo-700 (clear hover feedback), transition-colors (smooth color transition)
        className="bg-indigo-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-indigo-700 transition-colors"
      >
        Register
      </button>

    </div>

  );
};

export default RegisterPage;
