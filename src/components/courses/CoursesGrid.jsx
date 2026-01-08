import { courses } from "../../data/coursesData";
import CourseCard from "./CourseCard";

export default function CoursesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
