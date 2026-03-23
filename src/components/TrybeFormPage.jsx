import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Check, Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrybeFormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    gender: "",
    isAMember: "",
    skills: "",
    whatWouldYouLikeToDo: "",
    whyWouldYouLikeToJoin: "",
    targetTrybe: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const genderMap = {
      "Male": "MALE",
      "Female": "FEMALE"
    };
    
    const memberMap = {
      "Yes": "YES",
      "No": "NO",
      "New member": "NEW_MEMBER"
    };
    
    const actionMap = {
      "Join a Trybe": "JOIN",
      "Lead a Trybe": "LEAD",
      "Join first and lead later": "JOIN_FIRST"
    };

    const payload = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      gender: genderMap[formData.gender] || "",
      isAMember: memberMap[formData.isAMember] || "",
      skills: formData.skills,
      whatWouldYouLikeToDo: actionMap[formData.whatWouldYouLikeToDo] || "",
      whyWouldYouLikeToJoin: formData.whyWouldYouLikeToJoin,
      whichTrybeCategoryToJoin: formData.targetTrybe ? formData.targetTrybe.toUpperCase() : ""
    };

    try {
      setLoading(true);
      const response = await fetch(
        "https://faithcare-backend.vercel.app/api/v1/prime/trybe",
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
    } finally {
      setLoading(false);
    }

    console.log("Trybe Form submitted:", formData);

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

  const trybes = ["Tech", "Career", "Creative", "Entrepreneur"];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] shadow-2xl"
        >
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-accent/20">
            <Check size={40} className="text-navy" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Registration Received
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Thank you for joining the Trybe! We are excited to have you. You
            will receive more information soon.
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
          className="bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-2xl shadow-navy/5 relative overflow-hidden"
        >
          {/* Header */}
          <div className="relative z-10 mb-12">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-navy mb-6 tracking-tight">
              Trybe Registration
            </h1>
            <p className="text-text-muted/70 text-base md:text-lg leading-relaxed italic">
              Thank you for your interest in joining a Trybe. Trybes are small
              groups designed to help members grow, connect, and develop in
              different areas of life.
            </p>
            <div className="mt-6 p-4 bg-navy/5 rounded-2xl border-l-4 border-accent text-sm text-navy/60 font-medium leading-relaxed">
              Kindly fill out this form to indicate the Trybe you would like to
              join and your interest in participating or leading.
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                  What is your name? *
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-navy/5 border-none rounded-2xl p-5 text-navy focus:ring-2 focus:ring-accent transition-all outline-none"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                  Phone Number *
                </label>
                <input
                  required
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full bg-navy/5 border-none rounded-2xl p-5 text-navy focus:ring-2 focus:ring-accent transition-all outline-none"
                  placeholder="+234..."
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                Email Address *
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
                Gender *
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
                      required
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

            {/* Member of Prime Church */}
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                Are you a member of Prime Church? *
              </label>
              <div className="flex flex-wrap gap-6">
                {["Yes", "No", "New member"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-navy/10 flex items-center justify-center transition-all group-hover:border-accent ${formData.isAMember === option ? "border-accent bg-accent" : ""}`}
                    >
                      {formData.isAMember === option && (
                        <div className="w-2 h-2 bg-navy rounded-full" />
                      )}
                    </div>
                    <input
                      required
                      type="radio"
                      name="isAMember"
                      value={option}
                      className="hidden"
                      onChange={handleChange}
                    />
                    <span
                      className={`text-sm font-medium ${formData.isAMember === option ? "text-navy" : "text-navy/40"}`}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Skills/Interests */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                What skills, experience, or interests do you have related to the
                Trybe? *
              </label>
              <textarea
                required
                name="skills"
                rows="3"
                value={formData.skills}
                onChange={handleChange}
                className="w-full bg-navy/5 border-none rounded-3xl p-6 text-navy focus:ring-2 focus:ring-accent transition-all outline-none resize-none"
                placeholder="Tell us more..."
              />
            </div>

            {/* Role in Trybe */}
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                What would you like to do in a Trybe? *
              </label>
              <div className="flex flex-col gap-4">
                {[
                  "Join a Trybe",
                  "Lead a Trybe",
                  "Join first and lead later",
                ].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-navy/10 flex items-center justify-center transition-all group-hover:border-accent ${formData.whatWouldYouLikeToDo === option ? "border-accent bg-accent" : ""}`}
                    >
                      {formData.whatWouldYouLikeToDo === option && (
                        <div className="w-2 h-2 bg-navy rounded-full" />
                      )}
                    </div>
                    <input
                      required
                      type="radio"
                      name="whatWouldYouLikeToDo"
                      value={option}
                      className="hidden"
                      onChange={handleChange}
                    />
                    <span
                      className={`text-sm font-medium ${formData.whatWouldYouLikeToDo === option ? "text-navy" : "text-navy/40"}`}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Why Join */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                Why would you like to Join a Trybe? *
              </label>
              <textarea
                required
                name="whyWouldYouLikeToJoin"
                rows="3"
                value={formData.whyWouldYouLikeToJoin}
                onChange={handleChange}
                className="w-full bg-navy/5 border-none rounded-3xl p-6 text-navy focus:ring-2 focus:ring-accent transition-all outline-none resize-none"
                placeholder="Your motivation..."
              />
            </div>

            {/* Target Trybe */}
            <div className="space-y-6">
              <label className="text-xs uppercase tracking-widest font-bold text-navy/40">
                Which Trybe would you love to join? *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trybes.map((trybe) => (
                  <label
                    key={trybe}
                    className="flex flex-col items-center gap-3 cursor-pointer group bg-navy/5 p-6 rounded-2xl hover:bg-navy/10 transition-all border border-transparent hover:border-accent/20"
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 border-navy/10 flex items-center justify-center transition-all ${formData.targetTrybe === trybe ? "bg-accent border-accent" : ""}`}
                    >
                      {formData.targetTrybe === trybe && (
                        <div className="w-2 h-2 bg-navy rounded-full" />
                      )}
                    </div>
                    <input
                      required
                      type="radio"
                      name="targetTrybe"
                      value={trybe}
                      className="hidden"
                      onChange={handleChange}
                    />
                    <span
                      className={`text-sm font-bold uppercase tracking-wider ${formData.targetTrybe === trybe ? "text-navy" : "text-navy/40"}`}
                    >
                      {trybe}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="w-full bg-navy text-white rounded-2xl py-6 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 shadow-xl hover:bg-navy/90 transition-all"
            >
              {loading ? "Registering..." : "Register for Trybe"}{" "}
              <Send size={18} />
            </motion.button>
          </form>

          {/* Background Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
};

export default TrybeFormPage;
