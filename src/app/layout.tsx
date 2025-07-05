import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CRUD Post",
  description: "CRUD Next.js + DaisyUI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="cyberpunk">
      <body>
        <Navbar />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}