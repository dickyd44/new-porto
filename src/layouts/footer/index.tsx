import React from "react";

export default function Footer() {
  return (
    <div className="bg-galaxy_core">
      <div className="container px-5 lg:px-8 md:mx-auto py-10">
        <div className="text-zinc-400 dark:text-zinc-500 flex flex-col md:flex-row justify-around">
          <p>Designed by Dicky Darmawan</p>
          <p className="capitalize">
            © {new Date().getFullYear()} copyright all right reserved
          </p>
        </div>
      </div>
    </div>
  );
}
