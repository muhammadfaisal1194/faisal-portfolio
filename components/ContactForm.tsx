"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/content/content";

type FormData = {
  name: string;
  email: string;
  businessType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const emptyForm: FormData = {
  name: "",
  email: "",
  businessType: "",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!data.businessType) errors.businessType = "Please pick the closest match.";
  if (data.message.trim().length < 10)
    errors.message = "Tell me a little about your calls (at least 10 characters).";
  return errors;
}

const inputClasses =
  "w-full rounded-xl border border-ink-700 bg-ink-900/60 px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20";

export function ContactForm() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (field: keyof FormData) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-accent-500/30 bg-accent-500/10 p-8 text-center">
        <p className="text-lg font-semibold text-white">Message sent ✓</p>
        <p className="mt-2 text-zinc-300">
          Thanks — I&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => set("name")(e.target.value)}
          className={inputClasses}
          placeholder="Your name"
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="mt-1.5 text-sm text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => set("email")(e.target.value)}
          className={inputClasses}
          placeholder="you@company.com"
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="businessType" className="mb-2 block text-sm font-medium text-zinc-300">
          Business type
        </label>
        <select
          id="businessType"
          name="businessType"
          value={form.businessType}
          onChange={(e) => set("businessType")(e.target.value)}
          className={`${inputClasses} ${form.businessType ? "" : "text-zinc-600"}`}
          aria-invalid={!!errors.businessType}
        >
          <option value="" disabled>
            Select your business type
          </option>
          {contact.businessTypes.map((type) => (
            <option key={type} value={type} className="text-white">
              {type}
            </option>
          ))}
        </select>
        {errors.businessType && (
          <p className="mt-1.5 text-sm text-red-400">{errors.businessType}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          className={inputClasses}
          placeholder="What happens when your phone rings today? What would you like to automate?"
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-400">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-accent-500 px-6 py-3.5 font-semibold text-ink-950 transition hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong sending your message. Please try again, or email me
          directly.
        </p>
      )}
    </form>
  );
}
