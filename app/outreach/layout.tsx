import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outreach | OCIP Demo",
  robots: { index: false, follow: false },
};

export default function OutreachLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
