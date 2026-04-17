const courses = [
  {
    title: "Java Programming",
    desc: "Core + Advanced Java with OOPs, JDBC, and projects.",
    details: "Includes Spring Boot, REST APIs, and real-world projects.",
    img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
  {
    title: "Data Structures",
    desc: "Arrays, LinkedList, Trees, Graphs for placements.",
    details: "Covers DSA, recursion, dynamic programming.",
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  },
  {
    title: "Web Development",
    desc: "HTML, CSS, React, Node full-stack development.",
    details: "Includes frontend + backend + MongoDB.",
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
];

export function getCourses() {
  return courses;
}
