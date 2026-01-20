import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { courses } from "../data/coursesData";

export default function CourseDetails() {
  const { courseSlug } = useParams();
  const course = courses.find(c => c.slug === courseSlug);

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) =>
        prev === course.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [course]);

  if (!course) {
    return (
      <div className="py-20 text-center text-xl font-semibold">
        Course not found
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative">
          {/* Floating profile images */}
          <div className="absolute -right-4 top-8 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
            <img 
              src="/path-to-profile-1.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -right-8 top-32 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
            <img 
              src="/path-to-profile-2.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -right-4 top-56 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
            <img 
              src="/path-to-profile-3.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -right-8 top-80 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
            <img 
              src="/path-to-profile-4.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top header badge */}
          <div className="mb-6 inline-block">
            <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-blue-900 rounded-2xl px-6 py-4 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="text-yellow-400 text-xs font-medium tracking-wide mb-1">
                INDIA'S MOST TRUSTED
              </div>
              <div className="text-white text-2xl font-bold mb-1">
                CPA INSTITUTE
              </div>
              <div className="text-gray-300 text-sm">
                80% of CPA's in India are Miles Alumni
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Be an AI-Ready CPA in 2026
          </h1>

          <h2 className="text-4xl font-bold mb-8">
            <span className="text-blue-500">Earn 50L+</span>{" "}
            <span className="text-yellow-500">per annum</span>
          </h2>

          {/* Bullet points */}
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span className="font-medium">CPA is the US equivalent of C.A.</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span className="font-medium">4 exams | 12 months</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span className="font-medium">Jobs at Big 4 & MNCs in India & U.S.</span>
            </li>
          </ul>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl p-8 border border-blue-100 sticky top-24">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>

          <h3 className="text-3xl font-bold text-center mb-2">
            <span className="text-blue-500">Want to be an</span>
            <br />
            <span className="text-blue-500">AI-Ready Accountant ?</span>
          </h3>

          <p className="text-center font-semibold text-gray-700 mb-6">
            Connect with an Expert
          </p>

          <form className="space-y-4">
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition"
              placeholder="Full Name*"
            />

            <div className="flex gap-2">
              <div className="flex items-center justify-center px-3 py-3 bg-white border-2 border-gray-200 rounded-lg">
                <img 
                  src="https://flagcdn.com/w40/in.png" 
                  alt="India" 
                  className="w-6 h-4"
                />
              </div>
              <input
                type="tel"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition"
                placeholder="Phone Number*"
              />
            </div>

            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-400 transition"
              placeholder="E-mail*"
            />

            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input 
                type="checkbox" 
                defaultChecked 
                className="mt-1 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>
                I agree to receive updates via{" "}
                <span className="text-green-600">WhatsApp</span>, Email & SMS.{" "}
                <a href="#" className="text-blue-500 underline">Privacy Policy</a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition shadow-lg hover:shadow-xl"
            >
              Request A Call Back
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}