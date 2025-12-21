"use client";

import * as React from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
      {/* Name */}
      <div>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="John"
          className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-primary placeholder:text-gray-500 outline-none transition focus:border-white/40"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="your@email.com"
          className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-primary placeholder:text-gray-500 outline-none transition focus:border-white/40"
        />
      </div>

      {/* Message */}
      <div className="md:col-span-2">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Your message here..."
          className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-primary placeholder:text-gray-500 outline-none transition focus:border-white/40"
        />
      </div>

      {/* Submit */}
      <div className="md:col-span-2 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl border border-brand-light/50 bg-zinc-950/40 py-3 text-brand-light transition-all duration-200 hover:bg-brand-light/15 hover:border-brand-light disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="inline-flex items-center justify-center gap-2">
            <Send className="h-4 w-4" />
            {status === "sending" ? "Sending..." : "Submit"}
          </span>
        </button>

        {status === "success" && (
          <p className="mt-3 text-center text-sm text-muted">
            Thanks! Your message has been sent.
          </p>
        )}

        {status === "error" && (
          <p className="mt-3 text-center text-sm text-muted">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
