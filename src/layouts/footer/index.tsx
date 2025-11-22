import React from "react";

export default function Footer() {
  return (
    <section className="bg-galaxy_dark dark:bg-gray-900 text-white transition-colors duration-300">
      <div className="container py-10">
        <div className="text-zinc-400 dark:text-zinc-500 flex flex-col md:flex-row justify-around">
          <p>Designed by Dicky Darmawan</p>
          <p className="capitalize">
            © {new Date().getFullYear()} copyright all right reserved
          </p>
        </div>
      </div>
    </section>
  );
}
