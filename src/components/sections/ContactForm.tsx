"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectPlace: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectPlace?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectPlace: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\s-()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.projectPlace.trim()) {
      newErrors.projectPlace = "Project place / location is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Please provide a brief message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) {
      setServerError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectPlace: "",
      message: "",
    });
    setErrors({});
    setServerError(null);
    setIsSubmitted(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-10 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/30 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="contact-form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6 text-left"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name Field */}
              <div>
                <label htmlFor="name" className="block text-white text-xs sm:text-sm font-medium uppercase tracking-wider mb-2">
                  Full Name <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Nimanthi Perera"
                    className={`w-full bg-white/10 text-white placeholder-white/40 pl-11 pr-4 py-3.5 rounded-lg border text-sm transition-all outline-none focus:bg-white/15 ${
                      errors.name
                        ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400"
                        : "border-white/20 focus:border-secondary focus:ring-1 focus:ring-secondary"
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1 font-light">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Address Field */}
              <div>
                <label htmlFor="email" className="block text-white text-xs sm:text-sm font-medium uppercase tracking-wider mb-2">
                  Email Address <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nimanthi@example.com"
                    className={`w-full bg-white/10 text-white placeholder-white/40 pl-11 pr-4 py-3.5 rounded-lg border text-sm transition-all outline-none focus:bg-white/15 ${
                      errors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400"
                        : "border-white/20 focus:border-secondary focus:ring-1 focus:ring-secondary"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1 font-light">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="phone" className="block text-white text-xs sm:text-sm font-medium uppercase tracking-wider mb-2">
                  Phone Number <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94 77 123 4567"
                    className={`w-full bg-white/10 text-white placeholder-white/40 pl-11 pr-4 py-3.5 rounded-lg border text-sm transition-all outline-none focus:bg-white/15 ${
                      errors.phone
                        ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400"
                        : "border-white/20 focus:border-secondary focus:ring-1 focus:ring-secondary"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1 font-light">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Project Place Field */}
              <div>
                <label htmlFor="projectPlace" className="block text-white text-xs sm:text-sm font-medium uppercase tracking-wider mb-2">
                  Project Place / Location <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/50">
                    <MapPin size={18} />
                  </div>
                  <input
                    type="text"
                    id="projectPlace"
                    name="projectPlace"
                    value={formData.projectPlace}
                    onChange={handleChange}
                    placeholder="e.g. Colombo 07, Kandy, Galle"
                    className={`w-full bg-white/10 text-white placeholder-white/40 pl-11 pr-4 py-3.5 rounded-lg border text-sm transition-all outline-none focus:bg-white/15 ${
                      errors.projectPlace
                        ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400"
                        : "border-white/20 focus:border-secondary focus:ring-1 focus:ring-secondary"
                    }`}
                  />
                </div>
                {errors.projectPlace && (
                  <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1 font-light">
                    {errors.projectPlace}
                  </p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-white text-xs sm:text-sm font-medium uppercase tracking-wider mb-2">
                Message / Project Details <span className="text-secondary">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none text-white/50">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, space dimensions, preferred style, or timeline..."
                  className={`w-full bg-white/10 text-white placeholder-white/40 pl-11 pr-4 py-3 rounded-lg border text-sm transition-all outline-none focus:bg-white/15 resize-none ${
                    errors.message
                      ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-400"
                      : "border-white/20 focus:border-secondary focus:ring-1 focus:ring-secondary"
                  }`}
                />
              </div>
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1 font-light">
                  {errors.message}
                </p>
              )}
            </div>

            {serverError && (
              <div className="bg-red-500/20 border border-red-400/40 text-red-200 text-xs sm:text-sm p-3.5 rounded-lg flex items-center gap-2">
                <span>⚠️ {serverError}</span>
              </div>
            )}

            {/* Form Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-white/60 flex items-center gap-1.5">
                <Sparkles size={14} className="text-secondary" />
                Free site measurement & 3D preview included.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-secondary/20 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 py-8 text-center space-y-6"
          >
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto text-secondary mb-4 border border-secondary/40">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              Thank You, {formData.name}!
            </h3>

            <p className="text-white/90 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Your inquiry for <span className="text-secondary font-medium">{formData.projectPlace}</span> has been received. Our team will contact you at <span className="text-secondary font-medium">{formData.phone}</span> / <span className="text-secondary font-medium">{formData.email}</span> within 24 hours.
            </p>

            {/* Summary preview */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2 text-white/80">
              <p><strong className="text-white">Location:</strong> {formData.projectPlace}</p>
              <p><strong className="text-white">Phone:</strong> {formData.phone}</p>
              <p><strong className="text-white">Message:</strong> {formData.message}</p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider px-6 py-3 rounded-lg border border-white/20 transition-all cursor-pointer"
              >
                <span>Submit Another Request</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
