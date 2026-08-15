import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "BIM Specialist Software", template: "%s | BIM Specialist Software" },
  description: "Official support and privacy resources for Toolbox Suite.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
