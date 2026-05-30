"use client";

import { useState, FormEvent } from "react";
import { site } from "@/data/site";

const inquiryTypes = [
  "General Enquiry",
  "Apparel & Uniforms",
  "School / Education Partnership",
  "Teacher Programmes",
  "Youth Programmes",
  "Digital / AI Systems",
  "Partnership / Sponsorship",
  "Media & Press",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Placeholder submission. Wire NEXT_PUBLIC_CONTACT_ENDPOINT (or an /api/contact
    // route) to a real handler — e.g. Resend, Formspree, or a database — later.
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    const form = e.currentTarget;

    if (!endpoint) {
      // Graceful fallback: open the user's mail client to the official address.
      const data = new FormData(form);
      const subject = encodeURIComponent(
        `[${data.get("inquiryType") || "Enquiry"}] from ${data.get("name") || "website"}`
      );
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nOrganisation: ${data.get("organization")}\nInquiry type: ${data.get("inquiryType")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
      return;
    }

    // If an endpoint is configured, this is where the fetch() would go.
    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 600);
  }

  const field =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/55";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name *
          </label>
          <input id="name" name="name" required className={field} placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input id="phone" name="phone" className={field} placeholder="+675 …" />
        </div>
        <div>
          <label htmlFor="organization" className={label}>
            Organisation
          </label>
          <input
            id="organization"
            name="organization"
            className={field}
            placeholder="School, business, or group"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className={label}>
          Inquiry Type
        </label>
        <select id="inquiryType" name="inquiryType" className={field} defaultValue="">
          <option value="" disabled>
            Select a category
          </option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field}
          placeholder="Tell us how we can help…"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-gold disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
        {status === "success" && (
          <p className="text-sm font-medium text-blood">
            Thank you — your message has been prepared. We&apos;ll be in touch via {site.email}.
          </p>
        )}
      </div>
    </form>
  );
}
