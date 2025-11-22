"use client";
import { SIDEBAR_LINK } from "@/src/constants/layouts/sidebar";
import { useSidebarStore } from "@/src/store/layout/sidebar";
import Link from "next/link";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const { activeLink, React } = useSidebarStore();

  return (
    <aside
      className={`fixed z-50 transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:block`}
    >
      <div className="h-screen w-24 bg-white shadow-2xl transition-colors duration-300">
        <div className="flex flex-col">
          {/* icon */}
          <div className="h-11 bg-galaxy_core flex items-center justify-center">
            <h1 className="text-center text-white font-semibold">dicky.</h1>
          </div>

          {/* menu */}
          <div className="flex flex-col items-center text-black uppercase font-body w-full h-20">
            {SIDEBAR_LINK.map((link, idx) => (
              <Link
                key={idx}
                href={link.link}
                className={`nav-link border-b border-zinc-300 py-3 w-full text-center hover:text-galaxy transition-colors duration-200 ${
                  activeLink === link.link ? "text-galaxy" : ""
                }`}
              >
                <div className="flex justify-center items-center">
                  {React.createElement(link.icon)}
                </div>
                <span className="text-xs">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
