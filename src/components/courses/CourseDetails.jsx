import { useEffect, useState } from "react";

const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

export default function RequestCallbackScheduler() {
  /* ================= STEP CONTROL ================= */
  const [step, setStep] = useState(1);

  /* ================= STEP 1 FORM ================= */
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    consent: true,
  });

  /* ================= STEP 2 DATE & TIME ================= */
  const [now, setNow] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  /* ================= FORM VALIDATION ================= */
  const [errors, setErrors] = useState({});

  /* ================= LIVE CLOCK ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 60000); // every minute

    return () => clearInterval(timer);
  }, []);

  /* ================= FUTURE DATES ONLY ================= */
  function getFutureDates(days = 14) {
    const dates = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < days; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      dates.push(d);
    }

    return dates;
  }

  /* ================= DISABLE PAST TIMES ================= */
  function isPastTime(date, time) {
    if (!date) return false;

    const [h, m] = time.split(":").map(Number);
    const slot = new Date(date);
    slot.setHours(h, m, 0, 0);

    return slot <= now;
  }

  /* ================= VALIDATE FORM ================= */
  function validateForm() {
    const newErrors = {};
    
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!form.consent) newErrors.consent = "You must agree to receive updates";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  /* ================= STEP 1 SUBMIT ================= */
  function handleRequestCallback(e) {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to top to show errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // ✅ SMOOTH TRANSITION TO STEP 2
    setStep(2);
    
    // Auto-select tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    setSelectedDate(tomorrow);
    
    // Auto-select first available time slot
    const availableSlots = TIME_SLOTS.filter(time => !isPastTime(tomorrow, time));
    if (availableSlots.length > 0) {
      setSelectedTime(availableSlots[0]);
    } else {
      // If no slots available today, try next day
      const nextDay = new Date(tomorrow);
      nextDay.setDate(tomorrow.getDate() + 1);
      const nextDaySlots = TIME_SLOTS.filter(time => !isPastTime(nextDay, time));
      if (nextDaySlots.length > 0) {
        setSelectedDate(nextDay);
        setSelectedTime(nextDaySlots[0]);
      }
    }
  }

  /* ================= FINAL SUBMIT ================= */
  function handleSchedule() {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time");
      return;
    }

    const formattedDateStr = selectedDate.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric"
    });

    const whatsappData = {
      Name: form.name,
      Phone: form.phone,
      Email: form.email,
      "Requested Date": formattedDateStr,
      "Requested Time": selectedTime
    };

    import("../../utils/whatsapp").then(({ sendWhatsAppMessage }) => {
      sendWhatsAppMessage(whatsappData, "New Course Callback Request");
    });

    // Show success message with details
    const formattedDate = selectedDate.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    
    alert(`✅ Call Scheduled Successfully!\n\n📅 Date: ${formattedDate}\n⏰ Time: ${selectedTime}\n👤 Name: ${form.name}\n\nRedirecting to WhatsApp to confirm...`);
    
    // Optional: Reset form after successful booking
    // resetForm();
  }

  /* ================= RESET FORM ================= */
  function resetForm() {
    setStep(1);
    setForm({ name: "", phone: "", email: "", consent: true });
    setSelectedDate(null);
    setSelectedTime("");
    setErrors({});
  }

  /* ================= GO BACK ================= */
  function goBack() {
    setStep(1);
    setErrors({});
  }

  /* ================= FORMAT DATE FOR DISPLAY ================= */
  function formatDate(date) {
    if (!date) return "";
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 max-w-md mx-auto">

      {/* STAR ICON */}
      <div className="flex justify-center text-3xl mb-3">⭐</div>

      {/* ================= STEP 1 ================= */}
      {step === 1 && (
        <>
          <h3 className="text-3xl font-bold text-center text-blue-600 mb-2">
            Want to be an
            <br />
            AI-Ready Accountant?
          </h3>

          <p className="text-center text-gray-600 mb-6">
            Connect with an Expert
          </p>

          <form onSubmit={handleRequestCallback} className="space-y-4">
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Full Name*"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (errors.name) setErrors({...errors, name: ""});
                }}
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none ${
                  errors.name ? "border-red-400" : "border-gray-200 focus:border-blue-400"
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1 ml-1">{errors.name}</p>}
            </div>

            {/* Phone Input */}
            <div>
              <input
                type="tel"
                placeholder="Phone Number*"
                value={form.phone}
                onChange={(e) => {
                  setForm({ ...form, phone: e.target.value });
                  if (errors.phone) setErrors({...errors, phone: ""});
                }}
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none ${
                  errors.phone ? "border-red-400" : "border-gray-200 focus:border-blue-400"
                }`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1 ml-1">{errors.phone}</p>}
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="E-mail*"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                  if (errors.email) setErrors({...errors, email: ""});
                }}
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none ${
                  errors.email ? "border-red-400" : "border-gray-200 focus:border-blue-400"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1 ml-1">{errors.email}</p>}
            </div>

            {/* Consent Checkbox */}
            <div>
              <label className="flex items-start gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => {
                    setForm({ ...form, consent: e.target.checked });
                    if (errors.consent) setErrors({...errors, consent: ""});
                  }}
                  className="mt-1"
                />
                I agree to receive updates via WhatsApp, Email & SMS.
              </label>
              {errors.consent && <p className="text-red-500 text-sm mt-1 ml-1">{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#061A2F] hover:bg-[#061A2F] text-white font-bold py-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
            >
              Request A Call Back
            </button>
          </form>
        </>
      )}

      {/* ================= STEP 2 ================= */}
      {step === 2 && (
        <>
          {/* Back Button */}
          <button
            onClick={goBack}
            className="mb-4 text-blue-500 hover:text-blue-700 flex items-center gap-2 transition duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Form
          </button>

          <h3 className="text-3xl font-bold text-center text-blue-600 mb-2">
            Schedule Your Call
          </h3>

          <p className="text-center text-gray-600 mb-6">
            Select a Date & Time
          </p>

          <div className="space-y-6">
            {/* User Info Summary */}
            <div className="bg-blue-50 p-4 rounded-xl">
              <h4 className="font-semibold text-blue-700 mb-2">Your Details</h4>
              <p className="text-sm text-gray-700"><span className="font-medium">Name:</span> {form.name}</p>
              <p className="text-sm text-gray-700"><span className="font-medium">Phone:</span> {form.phone}</p>
              <p className="text-sm text-gray-700"><span className="font-medium">Email:</span> {form.email}</p>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date *
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition duration-300"
                value={selectedDate ? selectedDate.toISOString() : ""}
                onChange={(e) => {
                  const newDate = e.target.value ? new Date(e.target.value) : null;
                  setSelectedDate(newDate);
                  
                  // Reset time when date changes
                  setSelectedTime("");
                  
                  // Auto-select first available time for new date
                  if (newDate) {
                    const availableSlots = TIME_SLOTS.filter(time => !isPastTime(newDate, time));
                    if (availableSlots.length > 0) {
                      setSelectedTime(availableSlots[0]);
                    }
                  }
                }}
              >
                <option value="">Choose a date...</option>
                {getFutureDates().map((date) => (
                  <option key={date.toISOString()} value={date.toISOString()}>
                    {formatDate(date)}
                  </option>
                ))}
              </select>
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time *
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-400 focus:outline-none transition duration-300 disabled:bg-gray-100"
                disabled={!selectedDate}
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="">Choose a time...</option>
                {TIME_SLOTS.map((time) => {
                  const isPast = isPastTime(selectedDate, time);
                  return (
                    <option
                      key={time}
                      value={time}
                      disabled={isPast}
                      className={isPast ? "text-gray-400 italic" : "text-gray-800"}
                    >
                      {time} {isPast ? "(Unavailable)" : ""}
                    </option>
                  );
                })}
              </select>
              {!selectedDate && (
                <p className="text-sm text-gray-500 mt-1">Please select a date first</p>
              )}
            </div>

            {/* Selected Date & Time Display */}
            {selectedDate && selectedTime && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <h4 className="font-semibold text-green-700 mb-2">✅ Selected Time Slot</h4>
                <p className="text-green-800 font-medium">
                  {selectedDate.toLocaleDateString("en-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })} at {selectedTime}
                </p>
              </div>
            )}

            {/* Final Submit Button */}
            <button
              onClick={handleSchedule}
              className={`w-full py-4 rounded-xl font-bold transition duration-300 shadow-md ${
                selectedDate && selectedTime
                  ? "bg-green-500 hover:bg-green-600 text-white hover:shadow-lg transform hover:-translate-y-0.5"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!selectedDate || !selectedTime}
            >
              {selectedDate && selectedTime ? (
                <>📅 Book My 1-On-1 Counselling</>
              ) : (
                <>Select Date & Time to Continue</>
              )}
            </button>

            {/* Timezone Note */}
            <div className="text-xs text-gray-500 text-center pt-2">
              All times are in your local timezone
            </div>
          </div>
        </>
      )}
    </div>
  );
}