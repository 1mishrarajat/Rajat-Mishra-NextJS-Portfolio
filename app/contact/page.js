
"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
  Workflow,
} from "lucide-react";

const emailAddress = "rajatmishra74150@gmail.com";

const inputClass =
  "w-full rounded-xl border border-[#E6D8CC] bg-[#FCFAF7] px-4 py-3.5 text-sm text-[#302821] outline-none transition duration-300 placeholder:text-[#B2A59A] hover:border-[#CDB5A3] focus:border-[#A95739] focus:bg-white focus:ring-4 focus:ring-[#A95739]/10";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  setIsSending(true);
  setEmailStatus("");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error("Request failed");

    setEmailStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    console.error("Email sending failed:", error);
    setEmailStatus("error");
  } finally {
    setIsSending(false);
  }
};

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#FCF8F3] text-[#25221F]">
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden border-b border-[#E9DED4] py-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D99A78]/15 blur-[100px]" />
            <div className="absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full bg-[#E8D4C1]/50 blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "radial-gradient(#655345 0.7px, transparent 0.7px)",
                backgroundSize: "18px 18px",
              }}
            />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 ">
            {/* Hero content */}
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#DCC9B9] bg-white/70 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A95739] opacity-40" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#A95739]" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#65564B] sm:text-xs">
                  Let&apos;s start a conversation
                </span>
              </div>
<h1 className="max-w-3xl text-[clamp(3rem,4.5vw,6.8rem)] font-medium leading-[0.98] tracking-[-0.075em] text-[#25221F]">
  Let&apos;s create something
  <span className="block font-serif font-normal italic tracking-[-0.065em] text-[#AE5D40]">
    extraordinary.
  </span>
</h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-[#766A60] sm:text-lg">
                Have an idea in mind? Let&apos;s turn it into a meaningful
                digital experience. Tell me what you&apos;re building, and
                we&apos;ll figure out the best way to bring it to life.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact-form"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#A95739] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(169,87,57,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#87432D] hover:shadow-[0_18px_40px_rgba(169,87,57,0.25)]"
                >
                  Tell me about your project
                  <ArrowDownRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-[#DCCABD] bg-white/60 px-7 py-4 text-sm font-semibold text-[#38302A] transition duration-300 hover:-translate-y-1 hover:border-[#A95739] hover:bg-white"
                >
                  <Mail
                    size={17}
                    className="text-[#A95739] transition-transform duration-300 group-hover:rotate-[-8deg]"
                  />
                  Email me directly
                </a>
              </div>
            </div>

            {/* Hero visual card */}
            <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
              <div className="absolute -right-4 -top-5 h-28 w-28 rounded-full border border-[#D7BBA8]/60 sm:-right-7 sm:-top-8 sm:h-36 sm:w-36" />
              <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[#D9B39B]/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[#F1E6DA] p-5 shadow-[0_35px_90px_rgba(75,51,35,0.12)] sm:rounded-[2.5rem] sm:p-8">
                <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#C8A38A]/30" />
                <div className="absolute -right-6 -top-10 h-48 w-48 rounded-full border border-[#C8A38A]/30" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6D5B]">
                        A little about my approach
                      </p>

                 <h2 className="mt-3 text-2xl font-medium uppercase tracking-[-0.05em] text-[#29231F] sm:text-3xl">
  IDEAS MEET{" "}
  <span className="inline font-serif italic text-[#A95739]">
    EXECUTION.
  </span>
</h2>
                    </div>

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D9C1B0] bg-[#FCF8F3] text-[#A95739] transition duration-300 hover:rotate-6 hover:scale-105 sm:h-16 sm:w-16">
                      <Sparkles size={27} strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-[#77685D]">
                    Every successful project starts with a good conversation,
                    a clear direction, and a shared understanding of what
                    success looks like.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {[
                      "Web Development",
                      "UI/UX Design",
                      "E-commerce",
                    ].map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-[#DCC8B8] bg-white/65 px-3.5 py-2 text-[11px] font-medium text-[#6D5547] transition duration-300 hover:border-[#A95739] hover:bg-white hover:text-[#A95739] sm:text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`mailto:${emailAddress}`}
                    className="group mt-8 flex items-center justify-between gap-4 rounded-2xl border border-[#DCCABD] bg-[#FCF8F3]/80 p-4 transition duration-300 hover:border-[#A95739]/50 hover:bg-white sm:p-5"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A95739] text-white">
                        <MessageCircle size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8D7B6E]">
                          Have a project?
                        </p>
                        <p className="mt-1 truncate text-sm font-semibold text-[#332A24]">
                          Let&apos;s talk about it.
                        </p>
                      </div>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DCCABD] transition duration-300 group-hover:border-[#A95739] group-hover:bg-[#A95739] group-hover:text-white">
                      <ArrowUpRight
                        size={19}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </div>
                  </a>
                </div>
              </div>


            </div>
          </div>


        </section>

        {/* CONTACT FORM AND DETAILS */}
        <section
          id="contact-form"
          className="relative scroll-mt-20  py-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              {/* Contact information */}
              <div>
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#A95739]">
                  <span className="h-px w-8 bg-[#A95739]" />
                  Get in touch
                </p>

                <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                  Let&apos;s make
                  <span className="mt-2 block font-serif italic text-[#A95739]">
                    it happen.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-base leading-8 text-[#766A60]">
                  Share your idea, challenge, or business goal. I&apos;ll help
                  you explore the right solution for your needs.
                </p>

                <a
                  href={`mailto:${emailAddress}`}
                  className="group mt-10 flex items-center gap-4 rounded-2xl border border-[#E8DCD1] bg-white/60 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#C99A7F] hover:bg-white hover:shadow-[0_15px_40px_rgba(73,49,34,0.06)] sm:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F3E5D9] text-[#A95739] transition duration-300 group-hover:bg-[#A95739] group-hover:text-white">
                    <Mail size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#938174]">
                      Email address
                    </p>
                    <p className="mt-1 break-all text-sm font-semibold text-[#332A24] sm:text-base">
                      {emailAddress}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[#A95739] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                <div className="mt-4 flex items-center gap-4 rounded-2xl border border-[#E8DCD1] p-4 sm:p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F3E5D9] text-[#A95739]">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#938174]">
                      Based in
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#332A24] sm:text-base">
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="mt-9 border-t border-[#E6D8CC] pt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#938174]">
                    Find me online
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/1mishrarajat"
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-[#E1D3C7] bg-white/60 px-5 py-3 text-sm font-medium transition duration-300 hover:border-[#A95739] hover:bg-[#A95739] hover:text-white"
                    >
                      GitHub
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rajat-mishra-6a0822255/"
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-[#E1D3C7] bg-white/60 px-5 py-3 text-sm font-medium transition duration-300 hover:border-[#A95739] hover:bg-[#A95739] hover:text-white"
                    >
                      LinkedIn
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-[#EBD9C9]/40 blur-2xl" />

                <div className="relative rounded-[1.75rem] border border-[#E7D9CD] bg-white p-5 shadow-[0_20px_70px_rgba(65,43,28,0.06)] sm:rounded-[2rem] sm:p-8 lg:p-10">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A95739]">
                        Project inquiry
                      </p>

                      <h3 className="mt-3 text-2xl font-medium tracking-[-0.045em] text-[#29231F] sm:text-3xl">
                        Tell me about your idea.
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#87776A]">
                        Fill in the details below to get started.
                      </p>
                    </div>

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F4E7DC] text-[#A95739] sm:flex">
                      <Workflow size={23} />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2.5 block text-xs font-semibold text-[#50443B]"
                        >
                          Your name <span className="text-[#A95739]">*</span>
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2.5 block text-xs font-semibold text-[#50443B]"
                        >
                          Email address{" "}
                          <span className="text-[#A95739]">*</span>
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2.5 block text-xs font-semibold text-[#50443B]"
                      >
                        Subject <span className="text-[#A95739">*</span>
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter your subject"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2.5 block text-xs font-semibold text-[#50443B]"
                      >
                        Tell me about your project{" "}
                        <span className="text-[#A95739]">*</span>
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What are you looking to build? Share your goals, ideas, and any details that might help..."
                        className={`${inputClass} resize-y leading-7`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSending}
                      className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#A95739] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(169,87,57,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#87432D] hover:shadow-[0_15px_35px_rgba(169,87,57,0.24)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSending ? "Sending..." : "Send project inquiry"}
                      {!isSending && (
                        <Send
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                        />
                      )}
                    </button>

                    {emailStatus === "success" && (
                      <p role="status" className="text-center text-sm font-medium text-green-700">
                        Your message has been sent successfully!
                      </p>
                    )}

                    {emailStatus === "error" && (
                      <p role="alert" className="text-center text-sm font-medium text-red-600">
                        Failed to send your message. Please try again.
                      </p>
                    )}

                    <p className="text-center text-xs leading-6 text-[#9A8B7F]">
                      Your message will be sent securely through the email service.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#2D2722] px-6 py-14 text-center sm:rounded-[2.5rem] sm:px-12 sm:py-20 lg:px-20">
            <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#A95739]/20 blur-3xl" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-[#E4AE91]">
                <Sparkles size={25} />
              </div>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D5A48A] sm:text-xs">
                Your next chapter starts here
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.06em] text-[#FCF8F3] sm:text-6xl lg:text-7xl">
                Good ideas deserve
                <span className="mt-2 block font-serif italic text-[#D9A183]">
                  to become real.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#C5B7AB] sm:text-base sm:leading-8">
                Have a project in mind or simply want to explore possibilities?
                My inbox is open. Let&apos;s start with a conversation.
              </p>

              <a
                href={`mailto:${emailAddress}`}
                className="group mx-auto mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#F8EDE3] px-7 py-4 text-sm font-semibold text-[#382A22] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]"
              >
                Start a conversation
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-[#BBAA9C]">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#D9A183]" />
                  Thoughtful development
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#D9A183]" />
                  Built around your goals
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

