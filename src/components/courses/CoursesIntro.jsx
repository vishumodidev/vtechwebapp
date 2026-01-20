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
        <button
          className="
            inline-flex items-center justify-center
            px-8 py-3
            rounded-full
            bg-gradient-to-r from-teal-600 to-teal-500
            text-white font-semibold
            shadow-[0_10px_30px_rgba(13,148,136,0.35)]
            hover:shadow-[0_15px_40px_rgba(13,148,136,0.45)]
            transition-all duration-300 ease-out
          "
        >
          Our Courses
        </button>
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
