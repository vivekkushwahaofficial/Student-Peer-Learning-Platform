import React, { useState } from "react";
import { ArrowRight, Mail, Lock } from "lucide-react";

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
    <div className="min-h-screen bg-[#eff3f8] px-4 py-10 sm:px-6">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.08)] sm:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Login</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to continue to PeerNexus</p>
        </div>

        <div className="mt-7 space-y-4">
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

        <div className="mt-3 text-right">
          <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">Forgot password?</a>
        </div>

        <button
          onClick={handleLogin}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700"
        >
          Sign In
          <ArrowRight className="h-4 w-4" />
        </button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account? <a href="/register" className="font-semibold text-blue-700 hover:text-blue-800">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
