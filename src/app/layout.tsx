import Toast from "@/components/Toast";
import QueryProvider from "@/providers/QueryProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "IMS",
  description: "Inventory management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <QueryProvider>
          {children}
          <Toast />
        </QueryProvider>
      </body>
    </html>
  );
}
