import CourseCard from "./components/CourseCard";

function App() {
  const courses = [
    {
      id: 1,
      title: "React Mastery",
      instructor: "John Doe",
      duration: "6 Weeks",
      price: "₹4,999",
      categories: ["React", "Frontend", "JavaScript"],
    },
    {
      id: 2,
      title: "Full Stack Development",
      instructor: "Jane Smith",
      duration: "10 Weeks",
      price: "₹7,999",
      categories: ["MERN", "Backend", "MongoDB"],
    },
    {
      id: 3,
      title: "UI/UX Design Essentials",
      instructor: "Alex Johnson",
      duration: "4 Weeks",
      price: "₹3,499",
      categories: ["Design", "Figma", "Prototyping"],
    },
    {
      id: 4,
      title: "Cloud Computing with AWS",
      instructor: "Sarah Lee",
      duration: "8 Weeks",
      price: "₹6,499",
      categories: ["AWS", "Cloud", "DevOps"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-blue-800 drop-shadow-md">
        📚 Explore Our Courses
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
