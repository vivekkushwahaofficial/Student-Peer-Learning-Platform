import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import useScrollSpy from "./hooks/useScrollSpy";
import { navItems, sectionIds } from "./routes/routeConfig";
import { getCourses } from "./services/courseService";

export default function App() {
  // Auth routing - check current path
  const path = window.location.pathname;

  // If user is authenticated and tries to access login/register, redirect to dashboard
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  // Auth flow routes (PRIORITY)
  if (path === "/login") {
    return <LoginPage />;
  }
  if (path === "/register") {
    return <RegisterPage />;
  }
  if (path === "/dashboard") {
    return <Dashboard />;
  }

  // Default: Landing page with features (HomePage is our landing page now)
  const [activeSection, setActiveSection] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const courses = getCourses();

  useScrollSpy(setActiveSection, sectionIds);

  return (
    <HomePage
      navItems={navItems}
      activeSection={activeSection}
      courses={courses}
      selectedCourse={selectedCourse}
      onCourseSelect={setSelectedCourse}
      onModalClose={() => setSelectedCourse(null)}
    />
  );
}
