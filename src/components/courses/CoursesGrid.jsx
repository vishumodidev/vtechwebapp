import { courses } from "../../data/coursesData";
import CourseCard from "./CourseCard";
import useScrollAnimation from "../common/useScrollAnimation";

export default function CoursesGrid() {
  const [sectionRef, sectionVisible] = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-4 py-12 animate-scroll ${
        sectionVisible ? "show" : ""
      }`}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => {
          const [cardRef, cardVisible] = useScrollAnimation();

          return (
            <div
              key={course.id}
              ref={cardRef}
              className={`animate-scroll ${
                cardVisible ? "show" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CourseCard course={course} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
