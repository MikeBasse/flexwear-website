"use client";

import { useState, FormEvent } from "react";
import { site } from "@/data/site";

const userTypes = [
  "Student",
  "Teacher",
  "Head Teacher",
  "School",
  "Youth Group",
  "Church Group",
  "Community Group",
  "SME",
  "Sponsor",
  "Partner",
  "Other",
];

const programInterests = [
  "Atomic Schools PNG",
  "Atomic Teacher PNG",
  "Atomic Youth PNG",
  "Atomic Communities PNG",
  "Atomic Governance PNG",
  "Atomic SME PNG",
  "Atomic Digital Systems",
  "Atomic PNG OS",
  "Atomic AI",
  "Books & Publishing",
  "Partnership",
];

export default function InterestForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // --- Client-side validation ---
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailOk) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // ============================================================
    // SUBMISSION
    // Today: mailto fallback (works on static Hostinger hosting).
    // LATER — to capture submissions automatically, set
    // NEXT_PUBLIC_INTEREST_ENDPOINT and replace the mailto block with a
    // fetch(endpoint, { method: "POST", body: JSON.stringify(...) }).
    // Options:
    //   • Formspree / Web3Forms — simplest, no server needed (paste form ID)
    //   • Google Sheets via Apps Script web app — free, stores rows
    //   • Supabase — `supabase.from("interest").insert(...)` (needs anon key)
    //   • Hostinger MySQL — via a small PHP endpoint or external API
    // ============================================================
    const endpoint = process.env.NEXT_PUBLIC_INTEREST_ENDPOINT;

    if (!endpoint) {
      const subject = encodeURIComponent(
        `[Atomic Journey] ${data.get("userType") || "Interest"} — ${name}`
      );
      const body = encodeURIComponent(
        `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${data.get("phone") || ""}\n` +
          `Organisation: ${data.get("organization") || ""}\n` +
          `User type: ${data.get("userType") || ""}\n` +
          `Program interest: ${data.get("program") || ""}\n` +
          `Big 3 goals: ${data.get("goals") || ""}\n\n` +
          `Message:\n${data.get("message") || ""}`
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      form.reset();
      return;
    }

    // If an endpoint IS configured, send it there.
    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(data.entries())),
    })
      .then((r) => {
        if (!r.ok) throw new Error("Request failed");
        setStatus("success");
        form.reset();
      })
      .catch(() => setStatus("error"));
  }

  const field =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";
  const label =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/55";

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center">
        <h3 className="font-display text-xl font-bold text-ink">Thank you.</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          Your interest has been received. Our team will contact you through{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-blood underline">
            {site.email}
          </a>
          .
        </p>
        <p className="mt-2 text-xs text-ink/45">
          If your email client did not open, please email us directly at {site.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Name *</label>
          <input id="name" name="name" required className={field} placeholder="Your full name" />
        </div>
        <div>
          <label className={label} htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required className={field} placeholder="you@example.com" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" className={field} placeholder="+675 ..." />
        </div>
        <div>
          <label className={label} htmlFor="organization">Organisation</label>
          <input id="organization" name="organization" className={field} placeholder="School, group, or company" />
        </div>
        <div>
          <label className={label} htmlFor="userType">I am a...</label>
          <select id="userType" name="userType" className={field} defaultValue="">
            <option value="" disabled>Select user type</option>
            {userTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="program">Program interest</label>
          <select id="program" name="program" className={field} defaultValue="">
            <option value="" disabled>Select a program</option>
            {programInterests.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={label} htmlFor="goals">Your Big 3 Goals</label>
        <input id="goals" name="goals" className={field} placeholder="e.g. improve attendance, build reading culture, develop youth leadership" />
      </div>
      <div>
        <label className={label} htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="Tell us a little about what you'd like to achieve." />
      </div>

      {status === "error" && (
        <p className="text-sm text-blood">
          Please enter at least your name and a valid email address.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-gold disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Start Building"}
        </button>
        <span className="text-xs text-ink/45">
          Or email us directly at {site.email}
        </span>
      </div>
    </form>
  );
}
