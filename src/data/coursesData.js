// IMAGE IMPORTS
import img1 from "../assets/images/courses/1.jpg";
import img2 from "../assets/images/courses/2.jpg";
import img3 from "../assets/images/courses/3.jpg";
import img4 from "../assets/images/courses/4.jpg";
import img5 from "../assets/images/courses/5.png";
import img6 from "../assets/images/courses/6.jpg";
import img7 from "../assets/images/courses/7.jpg";
import img8 from "../assets/images/courses/8.jpg";
import img9 from "../assets/images/courses/9.jpg";
import img10 from "../assets/images/courses/10.jpg";

export const courses = [
  {
    id: 1,
    slug: "java-full-stack-development",
    title: "Java Full Stack Development",
    image: img1,
    images: [img1, img2, img3], // ✅ ADDED
    rating: 4.5,
    students: 1200,
    instructor: "Industry Expert",
    level: "Job Ready",
    category: "Core IT",
    description:
      "Covers Core Java, Advanced Java, Spring Boot, Hibernate, REST APIs, and front-end frameworks. Ideal for students aiming for developer roles.",
  },

  {
    id: 2,
    slug: "python-programming-data-science",
    title: "Python Programming & Data Science",
    image: img2,
    images: [img2, img5, img9], // ✅ ADDED
    rating: 4.6,
    students: 1400,
    instructor: "Industry Expert",
    level: "Job Ready",
    category: "Core IT",
    description:
      "Python fundamentals, NumPy, Pandas, Matplotlib, machine learning basics, and data visualization for analytics and AI careers.",
  },

  {
    id: 3,
    slug: "cloud-computing-aws-azure",
    title: "Cloud Computing (AWS & Azure)",
    image: img3,
    images: [img3, img7, img10], // ✅ ADDED
    rating: 4.5,
    students: 900,
    instructor: "Cloud Architect",
    level: "Job Ready",
    category: "Core IT",
    description:
      "Cloud architecture, deployment models, DevOps basics, and real-world use cases for cloud engineers.",
  },

  {
    id: 4,
    slug: "software-testing-manual-automation",
    title: "Software Testing (Manual & Automation)",
    image: img4,
    images: [img4, img8, img6], // ✅ ADDED
    rating: 4.4,
    students: 850,
    instructor: "QA Specialist",
    level: "Job Ready",
    category: "Core IT",
    description:
      "SDLC, STLC, Selenium, TestNG, and automation frameworks for QA careers.",
  },

  {
    id: 5,
    slug: "artificial-intelligence-machine-learning",
    title: "Artificial Intelligence & Machine Learning",
    image: img5,
    images: [img5, img2, img9], // ✅ ADDED
    rating: 4.7,
    students: 600,
    instructor: "AI Specialist",
    level: "Advanced",
    category: "Advanced Technology",
    description:
      "Algorithms, neural networks, deep learning, and real-world AI applications.",
  },

  {
    id: 6,
    slug: "cybersecurity-ethical-hacking",
    title: "Cybersecurity & Ethical Hacking",
    image: img6,
    images: [img6, img10, img7], // ✅ ADDED
    rating: 4.6,
    students: 500,
    instructor: "Security Analyst",
    level: "Advanced",
    category: "Advanced Technology",
    description:
      "Network security, penetration testing, ethical hacking tools, and risk management.",
  },

  {
    id: 7,
    slug: "devops-agile-practices",
    title: "DevOps & Agile Practices",
    image: img7,
    images: [img7, img3, img1], // ✅ ADDED
    rating: 4.5,
    students: 650,
    instructor: "DevOps Engineer",
    level: "Advanced",
    category: "Advanced Technology",
    description:
      "CI/CD pipelines, Docker, Kubernetes, Jenkins, and Agile/Scrum methodologies.",
  },

  {
    id: 8,
    slug: "soft-skills-interview-preparation",
    title: "Soft Skills & Interview Preparation",
    image: img8,
    images: [img8, img4, img9], // ✅ ADDED
    rating: 4.3,
    students: 2000,
    instructor: "Career Coach",
    level: "All Levels",
    category: "Career Programs",
    description:
      "Communication skills, resume building, aptitude training, and mock interviews.",
  },

  {
    id: 9,
    slug: "internship-live-projects",
    title: "Internship & Live Projects",
    image: img9,
    images: [img9, img1, img5], // ✅ ADDED
    rating: 4.4,
    students: 1500,
    instructor: "Industry Mentors",
    level: "Practical Exposure",
    category: "Career Programs",
    description:
      "Real-world exposure through live industry projects and internships.",
  },

  {
    id: 10,
    slug: "hire-train-deploy-placement-pathway",
    title: "Hire–Train–Deploy Placement Pathway",
    image: img10,
    images: [img10, img3, img7], // ✅ ADDED
    rating: 4.8,
    students: 12000,
    instructor: "Placement Team",
    level: "Guaranteed Placement",
    category: "Placement Pathway",
    description:
      "Training, skill assessment, and deployment in top IT companies across India.",
  },
];
