export default function CourseCard({ course }) {
    return (
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
        
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition"
          />
        </div>
  
        <div className="p-5">
          <div className="flex items-center text-sm text-yellow-500 mb-2">
            ⭐ {course.rating} ({course.students})
          </div>
  
          <h3 className="font-semibold text-gray-900 leading-snug">
            {course.title}
          </h3>
  
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
            👤 {course.instructor}
          </div>
  
          <div className="mt-4 flex justify-between items-center">
            <span className="text-teal-600 font-semibold">
              {course.price}
            </span>
            <button className="text-sm font-medium text-orange-600 hover:underline">
              View Details →
            </button>
          </div>
        </div>
      </div>
    );
  }
  