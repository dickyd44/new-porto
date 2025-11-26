"use client";
import React from "react";
import { HumbergerIcon } from "@/src/assets/icon/icon-navbar";
import ThemeToggle from "@/src/components/atoms/theme-toggle";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <section className="block lg:hidden">
      <div className="w-full fixed z-40 bg-white dark:bg-gray-800 flex justify-between items-center p-3 transition-colors duration-300 shadow-md">
        <p className="text-xl font-bold text-galaxy_core dark:text-galaxy">
          dicky.
        </p>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={toggleSidebar}
            className="bg-galaxy_core p-2 rounded-sm text-white"
          >
            <HumbergerIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
