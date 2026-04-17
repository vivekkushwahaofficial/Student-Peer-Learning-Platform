import React, { useState } from "react";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const readErrorMessage = async (response) => {
    const fallback = "Invalid credentials";
    try {
      const data = await response.json();
      return data.message || fallback;
    } catch {
      return fallback;
    }
  };

  const handleLogin = async () => {
    try {

      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      // 🔥 check response status
      if (!response.ok) {
        alert(await readErrorMessage(response));
        return;
      }

      const data = await response.json();

      console.log("Login Response:", data);

      // 🔥 store user in localStorage
      localStorage.setItem("user", JSON.stringify(data));

      alert("Login Successful");

      // redirect
      window.location.href = "/dashboard";

    } catch (error) {
      console.error("Error:", error);
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
      <h2 className="text-2xl font-bold mb-6">Login</h2>

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

      <button
        onClick={handleLogin}
        // Tailwind added: bg-indigo-600 (primary button color), text-white (contrast), px-5 py-2.5 (button size), rounded-md (shape), font-medium (legibility), hover:bg-indigo-700 (clear hover feedback), transition-colors (smooth color transition)
        className="bg-indigo-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-indigo-700 transition-colors"
      >
        Login
      </button>

    </div>

  );
};

export default LoginPage;
