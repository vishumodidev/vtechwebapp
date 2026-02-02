import useScrollAnimation from "../common/useScrollAnimation";

export default function CoursesIntro() {
  const [ref, visible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`max-w-6xl mx-auto text-center mb-14 course-fade-up ${
        visible ? "show" : ""
      }`}
    >
      {/* Badge */}
      <div className="mt-14 mb-8">
        <span
          className="
            text-4xl md:text-5xl font-extrabold
            bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent
            pb-2
          "
        >
          Our Courses
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        Courses Offered at VTech Integrated Solutions
      </h2>

      <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
        Industry-aligned programs designed with a Hire–Train–Deploy model,
        hands-on projects, and guaranteed placement support.
      </p>
    </div>
  );
}
