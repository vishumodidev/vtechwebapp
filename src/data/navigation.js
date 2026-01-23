// src/data/navigation.js
export const navItems = [
  { label: "Home", path: "/", sectionId: "top" },
  { label: "About Us", path: "/about", sectionId: "about" },
  { 
    label: "Courses", 
    path: "/courses", 
    sectionId: "courses",
    dropdown: [
      { label: "Java Full Stack Development", path: "/courses/java-full-stack" },
      { label: "Python Programming & Data Science", path: "/courses/python-data-science" },
      { label: "Cloud Computing (AWS & Azure)", path: "/courses/cloud-computing" },
      { label: "Software Testing (Manual & Automation)", path: "/courses/software-testing" },
      { label: "Artificial Intelligence & Machine Learning", path: "/courses/ai-ml" },
      { label: "Cybersecurity & Ethical Hacking", path: "/courses/cybersecurity" },
      { label: "DevOps & Agile Practices", path: "/courses/devops" },
      { label: "Soft Skills & Interview Preparation", path: "/courses/soft-skills" },
      { label: "Internship & Live Projects", path: "/courses/internship" },
      { label: "Hire-Train-Deploy Placement Pathway", path: "/courses/placement-pathway" },
    ]
  },
  { label: "Services", path: "/services", sectionId: "services" },
  { label: "Placements", path: "/placements", sectionId: "placements" },
  { label: "Alumni", path: "/alumni", sectionId: "alumni" },
  { label: "FAQ", path: "/faq", sectionId: "faq" },
  { label: "Contact Us", path: "/contact", sectionId: "contact" },
];
