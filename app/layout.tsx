import { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/global.scss";

export const metadata: Metadata = {
  title: "Paula & Andrew",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
