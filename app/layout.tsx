import type { Metadata } from "next";
import "./globals.css";
import SideNavbar from "@/components/navbar/SideNavbar";
import TopNavbar from "@/components/navbar/TopNavbar";
export const metadata: Metadata = {
  title: "Task Manager",
  description: "Kanban styled task manager create with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <SideNavbar />

        <div className="w-full">
          <TopNavbar />
          <div className="p-8 bg-[#000c0e]">{children}</div>
        </div>
      </body>
    </html>
  );
}
