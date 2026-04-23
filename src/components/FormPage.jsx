import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Check, Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
    servedBefore: "",
    previousDepartment: "",
    targetDepartments: [],
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedDepartments = checked
        ? [...formData.targetDepartments, value]
        : formData.targetDepartments.filter((dept) => dept !== value);
      setFormData({ ...formData, targetDepartments: updatedDepartments });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const deptMap = {
      Soundtrybe: "SOUND_TRYBE",
      "Ushering/greeters/protocol": "USHERING/GREETERS/PROTOCOL",
      "Prayer/bible study": "PRAYER/BIBLE_STUDY",
      "Publicity/ outreach": "PUBLICITY/OUTREACH",
      Programs: "PROGRAMS",
      "Media/ technical": "MEDIA/TECHNICAL",
      "Programs/venue management": "PROGRAMS/VENUE_MANAGEMENT",
      Membership: "MEMBERSHIP",
      "Welfare/hospitality": "WELFARE/HOSPITALITY",
    };

    const payload = {
      fullName: formData.fullName,
      phoneNumber: formData.phone,
      email: formData.email,
      gender: formData.gender ? formData.gender.toUpperCase() : "",
      address: formData.address,
      haveServedInADepartment: formData.servedBefore === "Yes",
      previousDepartmentServed: formData.previousDepartment || "",
      departmentToServeIn: formData.targetDepartments
        .map((d) => deptMap[d])
        .filter(Boolean),
    };

    try {
      setLoading(true);
      const response = await fetch(
        "https://faithcare-backend.vercel.app/api/v1/prime/workforce",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );
      const data = await response.json();
      console.log(data);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }

    console.log("Form submitted:", formData);

    // Simulate a network request
    setTimeout(() => {
      window.scrollTo(0, 0);
      setLoading(false);
      setIsSubmitted(true);

      // Navigate home after showing success message for 5 seconds
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }, 2000);
  };

  const departments = [
    "Soundtrybe",
    "Ushering/greeters/protocol",
    "Prayer/bible study",
    "Publicity/ outreach",
    "Programs",
    "Media/ technical",
    "Programs/venue management",
    "Membership",
    "Welfare/hospitality",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[1rem] md:rounded-[1.2rem] shadow-2xl"
        >
          <div className="w-20 h-20 bg-accent rounded-lg flex items-center justify-center mx-auto mb-8 shadow-lg shadow-accent/20">
            <Check size={40} className="text-navy" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Submission Received
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Thank you for your willingness to serve. Our team will review your
            application and get back to you shortly.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="text-accent font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto"
          >
            Return Home <ChevronRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg py-24 md:py-32 px-4 md:px-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-16 rounded-[1rem] md:rounded-[1.2rem] shadow-2xl shadow-navy/5 relative overflow-hidden"
        >
          {/* Header */}
          <div className="relative z-10 mb-12">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy mb-6 tracking-tight">
              Workforce Form
            </h1>
            <p className="text-text-muted/70 text-base md:text-lg leading-relaxed italic">
              Thank you for your interest in serving in the workforce of our
              church. Service in God’s house is a privilege and an opportunity
              to grow spiritually while contributing to the work of the
              ministry. We appreciate your willingness to be part of the
              workforce.
            </p>
            <div className="mt-6 p-4 bg-navy/5 rounded-[1rem] text-sm text-navy/60 font-medium">
              Kindly fill out this form carefully and honestly. Your responses
              will help us understand your availability and interests.
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                  Full Name
                </label>
                <input
                  required
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-navy/5 border-none rounded-2xl p-5 text-navy focus:ring-2 focus:ring-accent transition-all outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                  Phone Number
                </label>
                <input
                  required
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-navy/5 border-none rounded-2xl p-5 text-navy focus:ring-2 focus:ring-accent transition-all outline-none"
                  placeholder="+234..."
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                Email Address
              </label>
              <input
                required
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-navy/5 border-none rounded-2xl p-5 text-navy focus:ring-2 focus:ring-accent transition-all outline-none"
                placeholder="name@email.com"
              />
            </div>

            {/* Gender */}
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                Gender
              </label>
              <div className="flex gap-6">
                {["Male", "Female"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-navy/10 flex items-center justify-center transition-all group-hover:border-accent ${formData.gender === option ? "border-accent bg-accent" : ""}`}
                    >
                      {formData.gender === option && (
                        <div className="w-2 h-2 bg-navy rounded-full" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="gender"
                      value={option}
                      className="hidden"
                      onChange={handleChange}
                    />
                    <span
                      className={`text-sm font-medium ${formData.gender === option ? "text-navy" : "text-navy/40"}`}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                Home Address
              </label>
              <textarea
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-navy/5 border-none rounded-3xl p-6 text-navy focus:ring-2 focus:ring-accent transition-all outline-none resize-none"
                placeholder="Your residential address"
              />
            </div>

            {/* Served Before */}
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                Have you served in any department in any church before?
              </label>
              <div className="flex gap-6">
                {["Yes", "No"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-navy/10 flex items-center justify-center transition-all group-hover:border-accent ${formData.servedBefore === option ? "border-accent bg-accent" : ""}`}
                    >
                      {formData.servedBefore === option && (
                        <div className="w-2 h-2 bg-navy rounded-full" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="servedBefore"
                      value={option}
                      className="hidden"
                      onChange={handleChange}
                    />
                    <span
                      className={`text-sm font-medium ${formData.servedBefore === option ? "text-navy" : "text-navy/40"}`}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {formData.servedBefore === "Yes" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                  If yes, what department?
                </label>
                <input
                  name="previousDepartment"
                  type="text"
                  value={formData.previousDepartment}
                  onChange={handleChange}
                  className="w-full bg-navy/5 border-none rounded-2xl p-5 text-navy focus:ring-2 focus:ring-accent transition-all outline-none"
                  placeholder="Which department did you serve in?"
                />
              </motion.div>
            )}

            {/* Departments */}
            <div className="space-y-6">
              <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                Which department would you love to serve in?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departments.map((dept) => (
                  <label
                    key={dept}
                    className="flex items-center gap-4 cursor-pointer group bg-navy/5 p-4 rounded-2xl hover:bg-navy/10 transition-all border border-transparent hover:border-accent/20"
                  >
                    <div
                      className={`w-6 h-6 rounded-lg border-2 border-navy/10 flex items-center justify-center transition-all ${formData.targetDepartments.includes(dept) ? "bg-accent border-accent" : ""}`}
                    >
                      {formData.targetDepartments.includes(dept) && (
                        <Check size={14} className="text-navy" />
                      )}
                    </div>
                    <input
                      type="checkbox"
                      value={dept}
                      className="hidden"
                      onChange={handleChange}
                    />
                    <span
                      className={`text-sm font-medium ${formData.targetDepartments.includes(dept) ? "text-navy" : "text-navy/60"}`}
                    >
                      {dept}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-navy text-white rounded-2xl py-6 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 shadow-xl hover:bg-navy/90 transition-all"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Participation"}{" "}
              <Send size={18} />
            </motion.button>
          </form>

          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
};

export default FormPage;
