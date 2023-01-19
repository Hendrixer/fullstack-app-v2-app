import "@/styles/global.css";
import { Inter } from "@next/font/google";
import GlassPane from "@/components/GlassPane";
import { ReactElement } from "react";

type AuthRootLayoutProps = {
    children: ReactElement
}

const inter = Inter({
  variable: "--font-inter",
});

export default function AuthRootLayout({ children }: AuthRootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}