import { Urbanist } from "next/font/google";

import "./globals.css";
import SideBar from "@/components/Sidebar";

const urban = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urban.className}>
      <body className="bg-[#e7edf1cc]">
        <main className="flex flex-row flex-1">
          <SideBar />
          <section className="overflow-x-hidden w-full">{children}</section>
        </main>
      </body>
    </html>
  );
}
