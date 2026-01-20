import useScrollAnimation from "../common/useScrollAnimation";

export default function Footer() {
  const [footerRef, footerVisible] = useScrollAnimation();

  return (
    <footer
      ref={footerRef}
      className={`
        bg-blue-900 pt-20 pb-8 text-white
        transition-all duration-1000 ease-out
        ${footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* ================= Top Grid ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">

          {/* ===== Brand + About ===== */}
          <FooterColumn delay={0} visible={footerVisible}>
            <h2 className="text-2xl font-extrabold mb-4">
              VTech <span className="font-semibold">Integrated Solutions</span>
            </h2>

            <p className="text-sm text-blue-100 mb-6 leading-relaxed">
              We empower learners and organizations through industry-aligned
              training, placement services, and workforce solutions.
            </p>

            <h4 className="font-semibold mb-4">Follow Us</h4>

            <div className="flex items-center gap-4">
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1877F2]">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full
                 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0A66C2]">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FF0000]">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </FooterColumn>

          {/* ===== Services ===== */}
          <FooterColumn delay={100} visible={footerVisible}>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>Career-Oriented Training Programs</li>
              <li>Hire–Train–Deploy Model</li>
              <li>Finishing School for Engineers</li>
              <li>Corporate Talent Solutions</li>
              <li>Pan-India Placement Services</li>
            </ul>
          </FooterColumn>

          {/* ===== Navigation ===== */}
          <FooterColumn delay={200} visible={footerVisible}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Courses</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Placements</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </FooterColumn>

          {/* ===== Contact ===== */}
          <FooterColumn delay={300} visible={footerVisible}>
            <h4 className="font-semibold mb-4">Contact Us</h4>

            <div className="space-y-4 text-sm text-blue-100">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-teal-400"></i>
                <span>
                  No. 45, 1st Floor, 100 Ft. Ring Road,<br />
                  Vysha Bank Colony, Mico Layout,<br />
                  BTM 2nd Stage, Bengaluru,<br />
                  Karnataka – 560029
                </span>
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-teal-400"></i>
                +91 88920 62682
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-teal-400"></i>
                +91 99456 98462
              </div>

              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-teal-400"></i>
                connect@vtechintegratedsolutions.com
              </div>
            </div>
          </FooterColumn>
        </div>

        {/* ================= Divider ================= */}
        <div
          className={`
            border-t border-white/20 pt-8 text-center text-sm text-blue-100
            transition-all duration-700 delay-500
            ${footerVisible ? "opacity-100" : "opacity-0"}
          `}
        >
          © 2026 <span className="font-semibold">VTech Integrated Solutions</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* 🔹 Helper for stagger animation */
function FooterColumn({ children, visible, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      {children}
    </div>
  );
}
