"use client";
import { CARD_SERVICE } from "@/src/constants/service";
import { motion } from "framer-motion";
import {
  appearsLeft,
  appearsRight,
  appearsBottom,
  appearsTop,
} from "@/src/animation";
import { RoleText } from "../../atoms/role-text";
import { useState } from "react";
import React from "react";

export default function ServiceSection() {
  const [truncatedIndex, setTruncatedIndex] = useState(
    Array(CARD_SERVICE.length).fill(false)
  );

  const toggleTruncated = (idx: number) => {
    setTruncatedIndex((prev) => {
      const newTruncated = [...prev];
      newTruncated[idx] = !newTruncated[idx];
      return newTruncated;
    });
  };

  return (
    <section
      id="service"
      className="bg-slate-200 min-h-screen flex items-center transition-colors duration-300"
    >
      <div className="container px-5 lg:px-8 md:mx-auto py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsTop}
          viewport={{ amount: 0, once: true }}
        >
          <RoleText text="services" className="mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CARD_SERVICE.map((card, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              whileHover={{ rotate: -3, transition: { duration: 0.2 } }}
              variants={
                idx % 3 === 0
                  ? appearsLeft
                  : idx % 3 === 1
                  ? appearsBottom
                  : appearsRight
              }
              viewport={{ amount: 0, once: true }}
              key={idx}
            >
              <div className="bg-white shadow-md cursor-default border border-slate-400 hover:bg-galaxy_core hover:border-white hover:text-white group transition-all duration-300 h-full p-6 rounded-xl space-y-4">
                <div>
                  <div className="rounded-full p-4 mb-5 border-dotted border-2 border-galaxy_core text-galaxy_core w-[86px] group-hover:border-white group-hover:text-white transition duration-200 ease-in-out">
                    {React.createElement(card.icon)}
                  </div>
                  <div className="capitalize group-hover:text-white font-semibold">
                    {card.title}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500 text-sm group-hover:text-zinc-200 mb-4">
                    {truncatedIndex[idx]
                      ? card.subtitle
                      : `${card.subtitle.substring(0, 141)}...`}
                  </div>
                  <button
                    onClick={() => toggleTruncated(idx)}
                    className="cursor-pointer text-galaxy_core hover:text-white group-hover:text-white p-0 h-auto"
                  >
                    {truncatedIndex[idx] ? "Less" : "More"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
