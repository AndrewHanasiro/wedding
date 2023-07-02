import { Metadata } from "next";

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
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
