import { useEffect, useState } from "react";
import { ArrowRight, LogOut, Menu, Scale, X } from "lucide-react";

export default function Navbar({ navItems, active }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const path = window.location.pathname;
  const isLoginPage = path === "/login";
  const isRegisterPage = path === "/register";

  useEffect(() => {
    const syncAuth = () => setIsAuthenticated(!!localStorage.getItem("user"));
    syncAuth();
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const navHref = (href) => {
    if (!href?.startsWith("#")) return href;
    return path === "/" ? href : `/${href}`;
  };

  const DesktopAuthActions = () => {
    if (isAuthenticated) {
      return (
        <div className="flex items-center gap-3">
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
          >
            Dashboard
          </a>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      );
    }

    if (isLoginPage) {
      return (
        <a
          href="/register"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
        >
          Register
          <ArrowRight className="h-4 w-4" />
        </a>
      );
    }

    if (isRegisterPage) {
      return (
        <a
          href="/login"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
        >
          <ArrowRight className="h-4 w-4" />
          Login
        </a>
      );
    }

    return (
      <div className="flex items-center gap-3">
        <a
          href="/login"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
        >
          <ArrowRight className="h-4 w-4" />
          Login
        </a>
      </div>
    );
  };

  const MobileAuthActions = () => {
    if (isAuthenticated) {
      return (
        <div className="mt-4 grid gap-2">
          <a
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800"
          >
            Dashboard
          </a>
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      );
    }

    if (isLoginPage) {
      return (
        <a
          href="/register"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
        >
          Register
          <ArrowRight className="h-4 w-4" />
        </a>
      );
    }

    if (isRegisterPage) {
      return (
        <a
          href="/login"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
        >
          <ArrowRight className="h-4 w-4" />
          Login
        </a>
      );
    }

    return (
      <div className="mt-4 grid gap-2">
        <a
          href="/register"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800"
        >
          Register
        </a>
        <a
          href="/login"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
        >
          <ArrowRight className="h-4 w-4" />
          Login
        </a>
      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1d4ed8,#2563eb,#0f172a)] text-white shadow-lg shadow-blue-200/50">
            <Scale className="h-5 w-5" />
          </span>
          <span className="max-w-[15rem] text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
            PeerNexus
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-8 text-[15px] font-medium text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={navHref(item.href)}
                className={`transition-colors hover:text-blue-700 ${active === item.id ? "text-blue-700" : ""}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <DesktopAuthActions />
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200/80 bg-white px-4 py-4 md:hidden sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={navHref(item.href)}
                  className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${active === item.id ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <MobileAuthActions />
          </div>
        </div>
      )}
    </nav>
  );
}