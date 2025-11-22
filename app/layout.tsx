"use client";
import { useState } from "react";
import { AppFooter, AppNavbar, AppSidebar } from "@/src/layouts";
import RootLayout from "./root-layout";
import LoadingScreen from "@/src/components/atoms/loading-screen";
import { useLoadingScreen } from "@/src/store/loading-screen";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLoading } = useLoadingScreen();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <RootLayout>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="flex">
          <AppSidebar isOpen={isSidebarOpen} />
          <div className="flex-col w-full lg:ml-24 overflow-hidden">
            <AppNavbar toggleSidebar={toggleSidebar} />
            {children}
            <AppFooter />
          </div>
        </div>
      )}
    </RootLayout>
  );
}
