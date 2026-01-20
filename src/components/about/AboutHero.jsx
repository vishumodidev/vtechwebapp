import useScrollAnimation from "../../common/useScrollAnimation";

export default function AboutHero() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="about" className="bg-[#FDF1EB] py-16 md:py-20" id="overview">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`animate-scroll ${visible ? "show" : ""}`}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-center mb-6">
            We are passionate about empowering learners
          </h1>

          <p className="max-w-3xl mx-auto text-center text-gray-600">
            Delivering high-quality, accessible, and engaging education
            to help learners become industry-ready professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
