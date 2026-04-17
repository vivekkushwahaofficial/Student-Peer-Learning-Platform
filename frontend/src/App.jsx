import { useState } from "react";
import HomePage from "./pages/HomePage";
import useScrollSpy from "./hooks/useScrollSpy";
import { navItems, sectionIds } from "./routes/routeConfig";
import { getCourses } from "./services/courseService";

export default function App() {
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
