export default function Footer() {
  return (
    <footer className="bg-[#FDF1EB] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Top Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">

          {/* Brand + About */}
          <div>
            <h2 className="text-2xl font-extrabold text-orange-600 mb-4">
              VTech <span className="text-gray-900">Integrated Solutions</span>
            </h2>

            <p className="text-gray-600 text-sm mb-6">
              We empower learners and organizations through industry-aligned
              training, placement services, and workforce solutions.
            </p>

            <h4 className="font-semibold text-gray-900 mb-3">
              Social Media
            </h4>

            <div className="flex gap-3">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-500 text-white cursor-pointer">
                X
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white border text-gray-600 cursor-pointer">
                f
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white border text-gray-600 cursor-pointer">
                ▶
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white border text-gray-600 cursor-pointer">
                ◎
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Career-Oriented Training Programs</li>
              <li>Hire-Train-Deploy Model</li>
              <li>Finishing School for Engineers</li>
              <li>Corporate Talent Solutions</li>
              <li>Pan-India Placement Services</li>
            </ul>
          </div>

          {/* Navbar Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Navbar Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Home</li>
              <li>About Us</li>
              <li>Courses</li>
              <li>Services</li>
              <li>Placements</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Contact Us
            </h4>

            <p className="text-sm text-gray-600 mb-4">
              Get in touch with us for training, placement, and corporate
              collaboration opportunities.
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                📍 <span>254 Lillian Blvd, Holbrook</span>
              </div>
              <div className="flex items-center gap-2">
                📞 <span>+880 1175 423 512</span>
              </div>
            </div>
          </div>

        </div>

        {/* ===== Payment Gateway ===== */}
        <div className="border-t pt-10">
         
         
        </div>

        {/* ===== Copyright ===== */}
        <div className="text-center text-sm text-gray-500 mt-10">
          © 2026 VTech Integrated Solutions. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
