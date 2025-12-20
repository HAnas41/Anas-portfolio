import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// ✅ Load Poppins from Google Fonts
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  // display: "swap",
  // variable: "--font-poppins", // this connects to Tailwind
});

export const metadata: Metadata = {
  title: "Muhammad Anas Portfolio",
  description: "Portfolio built with Next.js + Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ✅ Combine Poppins variable + Tailwind font-sans */}
      <body
        className={`${poppins.className}  bg-[#001a33] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
