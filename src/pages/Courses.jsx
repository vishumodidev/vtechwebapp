import CoursesGrid from "../components/courses/CoursesGrid";

export default function Courses() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Courses</h1>
        <CoursesGrid />
      </div>
    </section>
  );
}
