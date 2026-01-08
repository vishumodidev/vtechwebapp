import { Helmet } from "react-helmet-async";
import CoursesSection from "../components/courses/CourseSection";

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses | VTech Integrated Solutions</title>
        <meta
          name="description"
          content="Explore industry-aligned IT courses with hands-on training and placement support."
        />
      </Helmet>

      <CoursesSection />
    </>
  );
}
