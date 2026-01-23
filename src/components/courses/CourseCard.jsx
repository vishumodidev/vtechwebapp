import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div className="group relative bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-1 font-serif group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            {course.category}
          </p>
        </div>

        <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-grow">
          {course.description}
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-6 mb-6">
          <div>
            <p className="text-sm font-bold text-slate-900">{course.rating} ⭐</p>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Rating
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">{course.students}+</p>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Students
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 truncate" title={course.level}>
              {course.level}
            </p>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Level
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-auto">
          {/* Heart Icon (Visual only) */}
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-red-500 hover:text-red-500 hover:bg-red-50 transition-colors">
            <Heart size={20} />
          </button>

          <button
            onClick={() => navigate(`/courses/${course.slug}`)}
            className="px-6 py-3 bg-[#0284c7] hover:bg-[#0369a1] text-white text-sm font-bold rounded-full transition-colors shadow-lg shadow-blue-500/20"
          >
            See more
          </button>
        </div>
      </div>
    </div>
  );
}
