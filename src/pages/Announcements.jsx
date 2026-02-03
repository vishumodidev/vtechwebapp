import { Helmet } from "react-helmet-async";

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "New Batch Starting for Full Stack Development",
      date: "Feb 15, 2026",
      category: "Admissions",
      content: "Admissions are now open for the upcoming Full Stack Development cohort. Limited seats available."
    },
    {
      id: 2,
      title: "Campus Recruitment Drive - TechCorp",
      date: "Feb 20, 2026",
      category: "Placements",
      content: "TechCorp will be visiting our campus for a recruitment drive targeting final year students."
    },
    {
      id: 3,
      title: "Guest Lecture on AI Trends",
      date: "Feb 25, 2026",
      category: "Events",
      content: "Join us for an insightful session on the latest trends in Artificial Intelligence by industry experts."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Announcements | VTech</title>
        <meta name="description" content="Stay updated with the latest announcements from VTech." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Announcements</h1>
        <div className="space-y-6">
            {announcements.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-2 sm:mb-0">
                            {item.category}
                        </span>
                        <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
