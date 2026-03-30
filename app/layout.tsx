import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Touchpointe Digital",
  description: "Touchpointe Digital website and admin panel",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
