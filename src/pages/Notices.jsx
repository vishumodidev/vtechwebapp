import { Helmet } from "react-helmet-async";
import { FileText, AlertCircle } from "lucide-react";

export default function Notices() {
  const notices = [
    {
      id: 1,
      title: "Holiday Declaration",
      date: "Feb 10, 2026",
      content: "The institute will remain closed on Feb 14th on account of public holiday."
    },
    {
      id: 2,
      title: "Exam Schedule Update",
      date: "Feb 12, 2026",
      content: "The mid-term examination schedule has been revised. Please check the student portal for details."
    },
    {
      id: 3,
      title: "Fee Payment Deadline",
      date: "Feb 28, 2026",
      content: "Last date for semester fee payment is Feb 28th. Late fees will apply thereafter."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Notices | VTech</title>
        <meta name="description" content="Important notices and updates for students and staff." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-rose-500" />
            <h1 className="text-4xl font-bold text-slate-900">Official Notices</h1>
        </div>

        <div className="grid gap-6">
            {notices.map((notice) => (
                <div key={notice.id} className="bg-white border-l-4 border-rose-500 p-6 rounded-r-xl shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-1">{notice.title}</h2>
                            <p className="text-sm text-gray-400 mb-3">{notice.date}</p>
                            <p className="text-gray-600">{notice.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
