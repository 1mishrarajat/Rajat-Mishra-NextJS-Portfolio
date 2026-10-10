"use client"
import {
  ArrowUpRight,
  Github,
  Mail,
  MapPin,
  Linkedin,
  Send,
} from "lucide-react";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const mailtoLink =
      `mailto:rajatmishra74150@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#171717] py-12 text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#b65c3a]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#b65c3a]/[0.07] blur-3xl" />

      <div className="container-page relative">
        {/* Section heading */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#b65c3a]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d98b6d]">
              07 / Let&apos;s connect
            </p>
            <span className="h-px w-10 bg-[#b65c3a]" />
          </div>

          <h2 className="display-font text-5xl leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Have an idea?
            <span className="mt-2 block font-serif font-medium italic text-[#d98b6d]">
              Let&apos;s build it.
            </span>
          </h2>
        </div>

        {/* Contact form and details */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Contact information */}
          <div className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d98b6d]">
              Contact information
            </p>

            <h3 className="display-font mt-4 text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
              Let&apos;s start a conversation.
            </h3>

            <p className="mt-4 capitalize text-sm leading-7 text-white/50">
              Whether it&apos;s a job opportunity, freelance project, or
              collaboration, I&apos;d be happy to hear from you.
            </p>

            {/* Email */}
            <a
              href="mailto:rajatmishra74150@gmail.com"
              className="group mt-8 flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-colors hover:border-[#b65c3a]/40 hover:bg-white/[0.05]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#b65c3a]/15 text-[#d98b6d]">
                <Mail size={19} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs text-white/40">Email me</span>
                <span className="mt-1 block break-all text-sm font-medium text-white/85">
                  rajatmishra74150@gmail.com
                </span>
              </span>

              <ArrowUpRight
                size={16}
                className="mt-1 shrink-0 text-white/35 transition-colors group-hover:text-[#d98b6d]"
              />
            </a>

            {/* Location */}
            <div className="mt-3 flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#b65c3a]/15 text-[#d98b6d]">
                <MapPin size={19} />
              </span>

              <div>
                <p className="text-xs text-white/40">Location</p>
                <p className="mt-1 text-sm font-medium text-white/85">
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>

              
            </div>



{/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/rajat-mishra-6a0822255/"
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-3 flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#b65c3a]/40 hover:bg-white/[0.05]"
>
  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#b65c3a]/15 text-[#d98b6d] transition-colors group-hover:bg-[#b65c3a]/25">
    <Linkedin size={19} />
  </span>

  <div className="min-w-0 flex-1">
    <p className="text-xs text-white/40">LinkedIn</p>
    <p className="mt-1 text-sm font-medium text-white/85">
      Connect with me
    </p>
  </div>

  <ArrowUpRight
    size={17}
    className="shrink-0 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d98b6d]"
  />
</a>

{/* GitHub */}
<a
  href="https://github.com/1mishrarajat"
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-3 flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#b65c3a]/40 hover:bg-white/[0.05]"
>
  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#b65c3a]/15 text-[#d98b6d] transition-colors group-hover:bg-[#b65c3a]/25">
    <Github size={19} />
  </span>

  <div className="min-w-0 flex-1">
    <p className="text-xs text-white/40">GitHub</p>
    <p className="mt-1 text-sm font-medium text-white/85">
      Explore my projects
    </p>
  </div>

  <ArrowUpRight
    size={17}
    className="shrink-0 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d98b6d]"
  />
</a>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-white/10 bg-[#202020] p-6 sm:p-8 lg:p-9">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d98b6d]">
                Send a message
              </p>
              <h3 className="display-font mt-3 text-2xl tracking-[-0.03em] sm:text-3xl">
                Tell me about your project.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-white/65"
                  >
                    Your name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#b65c3a] focus:ring-2 focus:ring-[#b65c3a]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium text-white/65"
                  >
                    Email address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#b65c3a] focus:ring-2 focus:ring-[#b65c3a]/15"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-medium text-white/65"
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity or project inquiry"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#b65c3a] focus:ring-2 focus:ring-[#b65c3a]/15"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-medium text-white/65"
                >
                  Your message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about your project or opportunity..."
                  rows={5}
                  required
                  className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-white/25 focus:border-[#b65c3a] focus:ring-2 focus:ring-[#b65c3a]/15"
                />
              </div>

              {/* Validation error */}
              {error && (
                <p role="alert" className="text-sm text-red-300">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#b65c3a] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c96d49] hover:shadow-[0_12px_35px_rgba(182,92,58,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d98b6d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#202020] sm:w-auto"
              >
                <Send size={16} />
                Send message
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
