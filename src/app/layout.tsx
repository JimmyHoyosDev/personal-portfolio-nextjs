// Styles
import "./scss/globals.scss";
import "primeicons/primeicons.css";

// Types
import type { Metadata } from "next";

// Imports
import { Geist, Geist_Mono } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import { Menubar } from "primereact/menubar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jimmy Hoyos",
  description: "Jimmy Hoyos projects portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      to: "/",
    },
    {
      label: "Projects",
      icon: "pi pi-fw pi-briefcase",
      to: "/projects",
    },
  ];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <Menubar model={menuItems} />
        </header>

        <PrimeReactProvider value={{ unstyled: true }}>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
