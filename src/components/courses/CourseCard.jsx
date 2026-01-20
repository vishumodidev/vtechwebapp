import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div id="courses" className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
      
      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-yellow-500 mb-1">
          ⭐ {course.rating} ({course.reviews})
        </p>

        <h3 className="font-bold text-lg mb-2 text-gray-900">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 flex items-center gap-2 mb-4">
          👤 {course.instructor}
        </p>

        <button
          onClick={() => navigate(`/courses/${course.slug}`)}
          className="text-orange-600 font-semibold hover:underline"
        >
          View Details →
        </button>
      </div>
    </div>
  );
}
