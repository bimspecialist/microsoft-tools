import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "BIM Specialist Software", template: "%s | BIM Specialist Software" },
  description: "Official product, support, and privacy resources for Toolbox Suite by BIM Specialist Software.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr" data-language="en"><body>{children}</body></html>;
}
