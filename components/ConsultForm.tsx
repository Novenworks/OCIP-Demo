"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/site";

export default function ConsultForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const city = String(data.get("city") || "");
    const project = String(data.get("project") || "");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nCity: ${city}\nProject: ${project}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      "Consultation request — OCIP"
    )}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
      <label className="block text-sm">
        <span className="mb-1 block text-mist">Name</span>
        <input
          required
          name="name"
          className="w-full rounded-md border border-white/15 bg-ink px-3 py-2.5 text-cream outline-none focus:border-sand"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-mist">Phone</span>
        <input
          required
          name="phone"
          type="tel"
          className="w-full rounded-md border border-white/15 bg-ink px-3 py-2.5 text-cream outline-none focus:border-sand"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-mist">City</span>
        <input
          name="city"
          className="w-full rounded-md border border-white/15 bg-ink px-3 py-2.5 text-cream outline-none focus:border-sand"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-mist">Project type</span>
        <select
          name="project"
          className="w-full rounded-md border border-white/15 bg-ink px-3 py-2.5 text-cream outline-none focus:border-sand"
        >
          <option>Paver driveway</option>
          <option>Patio / walkway</option>
          <option>Pool deck</option>
          <option>Outdoor living / fire feature</option>
          <option>Full backyard</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          className="rounded-full bg-clay px-6 py-3 text-sm font-medium text-white hover:bg-[#9a4a28]"
        >
          Email consultation request
        </button>
        <a href={`tel:${SITE.phoneTel}`} className="text-sm text-sand underline">
          Or call {SITE.phoneDisplay}
        </a>
      </div>
      {sent && (
        <p className="sm:col-span-2 text-sm text-mist">
          This opens your email app to {SITE.email}. Nothing is stored on this
          demo.
        </p>
      )}
    </form>
  );
}
