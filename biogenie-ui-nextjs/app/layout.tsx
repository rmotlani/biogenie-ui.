import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BioGenie",
  description: "AI-assisted biomedical research assistant",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-prolight dark:bg-prodark text-gray-900 dark:text-gray-100">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
