import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Personal Dashboard",
  description: "A customized dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-Roboto antialiased bg-custom-gray-100`}
      >
        <div className="flex flex-row min-h-screen">
          <Sidebar />
          <main className="flex-grow p-6 bg-white shadow-soft">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
