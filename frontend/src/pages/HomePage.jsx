import Navbar from "../components/layout/Navbar";
import Hero from "../features/landing/Hero";
import Features from "../features/landing/Features";
import Courses from "../features/courses/Courses";
import Impact from "../features/landing/Impact";
import About from "../features/landing/About";
import Footer from "../components/layout/Footer";
import CourseModal from "../features/courses/CourseModal";

export default function HomePage({
  navItems,
  activeSection,
  courses,
  selectedCourse,
  onCourseSelect,
  onModalClose,
}) {
  return (
    <div className="font-sans bg-gradient-to-b from-gray-100 to-white">
      <Navbar navItems={navItems} active={activeSection} />

      <Hero />
      <Features />

      <Courses courses={courses} setSelectedCourse={onCourseSelect} />
      <Impact />
      <About />

      <Footer />

      <CourseModal course={selectedCourse} close={onModalClose} />
    </div>
  );
}
