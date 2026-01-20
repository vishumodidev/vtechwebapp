import { useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/coursesData";
export default function CourseDetails() {
  const { courseSlug } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    agreeToUpdates: true
  });

  const course = courses.find((c) => c.slug === courseSlug);

  if (!course) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Course not found</h2>
        <p className="text-gray-600 mt-2">Please check the course link.</p>
      </div>
    );
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you soon.");
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes float-delay-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float-delay-1 4s ease-in-out infinite 0.5s;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 3.5s ease-in-out infinite 1s;
        }
        .animate-float-delay-3 {
          animation: float-delay-3 4.5s ease-in-out infinite 1.5s;
        }
      `}</style>

      <main className="max-w-7xl mx-auto px-4 py-12 relative">
        {/* Floating Circle Images */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
            alt=""
            className="absolute top-10 right-1/4 w-16 h-16 rounded-full border-4 border-white shadow-lg animate-float"
          />
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
            alt=""
            className="absolute top-32 right-1/3 w-20 h-20 rounded-full border-4 border-white shadow-lg animate-float-delay-1"
          />
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
            alt=""
            className="absolute top-24 right-1/2 w-24 h-24 rounded-full border-4 border-white shadow-lg animate-float-delay-2"
          />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
            alt=""
            className="absolute top-56 right-1/4 w-20 h-20 rounded-full border-4 border-white shadow-lg animate-float-delay-3"
          />
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
            alt=""
            className="absolute top-80 right-1/3 w-16 h-16 rounded-full border-4 border-white shadow-lg animate-float"
          />
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt=""
            className="absolute bottom-64 right-1/2 w-20 h-20 rounded-full border-4 border-white shadow-lg animate-float-delay-1"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
          
          {/* LEFT SIDE */}
          <div>
            {/* Image Slider */}
            <div className="relative mb-8">
              <img
                src={course.images[currentImage]}
                alt={course.title}
                className="w-full h-80 object-cover shadow-xl"
              />
              
              {/* Slider Controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {course.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      currentImage === idx ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentImage((currentImage - 1 + course.images.length) % course.images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-10 h-10 flex items-center justify-center shadow-lg transition"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentImage((currentImage + 1) % course.images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white w-10 h-10 flex items-center justify-center shadow-lg transition"
              >
                →
              </button>
            </div>

            {/* Course Title */}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
              {course.title}
            </h1>

            {/* Course Description */}
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              {course.description}
            </p>

            {/* Course Details */}
            <div className="space-y-3 text-gray-800">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <p className="text-lg"><strong>Category:</strong> {course.category}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <p className="text-lg"><strong>Level:</strong> {course.level}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <p className="text-lg"><strong>Instructor:</strong> {course.instructor}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl mt-1">•</span>
                <p className="text-lg"><strong>Students:</strong> {course.students}+</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-blue-600">
              <div className="text-center mb-6">
                <span className="text-4xl mb-3 block">⭐</span>
                <h2 className="text-2xl font-bold text-blue-600 mb-1">
                  Want to be an
                </h2>
                <h3 className="text-3xl font-extrabold text-blue-600 mb-3">
                  AI-Ready Accountant?
                </h3>
                <p className="text-gray-700 font-semibold">Connect with an Expert</p>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name*"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <div className="flex gap-2">
                  <div className="flex items-center border border-gray-300 px-3 rounded-xl">
                    <span className="text-2xl">🇮🇳</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="flex-1 border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <input
                  type="email"
                  placeholder="E-mail*"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />

                <label className="flex items-start gap-2 text-sm text-gray-600">
                  <input 
                    type="checkbox" 
                    className="mt-1" 
                    checked={formData.agreeToUpdates}
                    onChange={(e) => handleInputChange('agreeToUpdates', e.target.checked)}
                  />
                  <span>
                    I agree to receive updates via WhatsApp, Email & SMS.{' '}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                  </span>
                </label>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Request A Call Back
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

    </>
  );
}