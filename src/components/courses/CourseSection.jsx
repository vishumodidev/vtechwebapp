import CoursesIntro from "./CoursesIntro";
import CoursesGrid from "./CoursesGrid";
import CoursesFooter from "./CourseFooter";

export default function CoursesSection() {
  return (
    <section className="bg-gray-50 py-20" id="courses">
      <div className="max-w-7xl mx-auto px-4">

        <CoursesIntro />

        <CoursesGrid />

        <CoursesFooter />

      </div>
    </section>
  );
}
