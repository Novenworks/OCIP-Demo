"use client";

import { FormEvent, useState } from "react";
import {
  PROJECT_KINDS,
  SITE,
  type ProjectKind,
  projectKindLabel,
} from "@/lib/site";

function isProjectKind(value: string): value is ProjectKind {
  return PROJECT_KINDS.some((kind) => kind.value === value);
}

export function EstimateForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const city = String(form.get("city") ?? "").trim();
    const rawKind = String(form.get("kind") ?? "other");
    const kind = isProjectKind(rawKind) ? rawKind : "other";
    const message = String(form.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `City: ${city}`,
      `Project: ${projectKindLabel(kind)}`,
      "",
      message,
      "",
      "(Sent from a speculative Novenworks redesign of theocip.com — not an OCIP production form.)",
    ].join("\n");

    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Estimate request — ${name || "OCIP website"}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    window.location.href = href;
  }

  if (sent) {
    return (
      <p className="rounded-lg border border-line bg-cream p-4 text-sm leading-relaxed text-ink">
        Your email app should open with a message to {SITE.email}. If it
        doesn’t, call{" "}
        <a className="underline" href={`tel:${SITE.phoneTel}`}>
          {SITE.phoneDisplay}
        </a>{" "}
        or write {SITE.email} directly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <p className="text-xs leading-relaxed text-muted">
        This demo does not store leads. Submit opens a message to the first-party
        address {SITE.email}. You can also call{" "}
        <a className="underline" href={`tel:${SITE.phoneTel}`}>
          {SITE.phoneDisplay}
        </a>
        .
      </p>
      <label className="grid gap-1 text-sm">
        Name
        <input
          required
          name="name"
          autoComplete="name"
          className="min-h-11 rounded-md border border-line bg-cream px-3"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm">
          Phone
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="min-h-11 rounded-md border border-line bg-cream px-3"
          />
        </label>
        <label className="grid gap-1 text-sm">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="min-h-11 rounded-md border border-line bg-cream px-3"
          />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        City
        <input
          name="city"
          autoComplete="address-level2"
          className="min-h-11 rounded-md border border-line bg-cream px-3"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Project type
        <select
          name="kind"
          className="min-h-11 rounded-md border border-line bg-cream px-3"
          defaultValue="patio"
        >
          {PROJECT_KINDS.map((kind) => (
            <option key={kind.value} value={kind.value}>
              {kind.label}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        What do you want to change?
        <textarea
          name="message"
          rows={4}
          className="rounded-md border border-line bg-cream px-3 py-2"
        />
      </label>
      <button
        type="submit"
        className="min-h-11 rounded-md bg-clay px-5 text-sm font-semibold text-white hover:bg-clay-dark"
      >
        Request an estimate
      </button>
    </form>
  );
}
