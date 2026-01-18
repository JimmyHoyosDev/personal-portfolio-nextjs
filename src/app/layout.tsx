// Styles
import "./scss/globals.scss";
import "primeicons/primeicons.css";

// Types
import type { Metadata } from "next";

// Imports
import { Stick_No_Bills } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import { Menubar } from "primereact/menubar";

const stickNoBills = Stick_No_Bills({
  variable: "--font-stick-no-bills",
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
      <body className={`${stickNoBills.variable}`}>
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
