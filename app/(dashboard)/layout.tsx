import "@/styles/global.css";
import { Inter } from "@next/font/google";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";
import { ReactElement } from "react";

type DashboardRootLayoutProps = {
    children: ReactElement
}

const inter = Inter({
  variable: "--font-inter",
});

export default function DashboardRootLayout({ children }: DashboardRootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center gap-2">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  );
}