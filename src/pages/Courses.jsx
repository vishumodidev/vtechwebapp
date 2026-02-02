import CoursesGrid from "../components/courses/CoursesGrid";

export default function Courses() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent w-fit mx-auto">
          Our Courses
        </h1>
        <CoursesGrid />
      </div>
    </section>
  );
}
