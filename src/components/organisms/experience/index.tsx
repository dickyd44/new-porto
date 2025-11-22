"use client";
import { motion } from "framer-motion";
import { appearsTop, appearsBottomOneOnOne } from "@/src/animation";
import Image from "next/image";
import { EXPERIENCE } from "@/src/constants/experience";
import { useState } from "react";
import { RoleText } from "../../atoms/role-text";
import { ButtonSeeMore } from "../../atoms/button-see-more";

export default function ExperienceSection() {
  const [showMore, setShowMore] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(
    Array(EXPERIENCE.length).fill(false)
  );

  const toggleExpanded = (idx: number) => {
    setExpandedIndex((prev) => {
      const newExpanded = [...prev];
      newExpanded[idx] = !newExpanded[idx];
      return newExpanded;
    });
  };

  const displayExperience = showMore ? EXPERIENCE : EXPERIENCE.slice(0, 3);

  return (
    <section id="experience" className="flex items-center py-28">
      <div className="container px-5 lg:px-8 md:mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsTop}
          viewport={{ amount: 0, once: true }}
        >
          <RoleText text="experiences" className="mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {displayExperience.map((experience, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={appearsBottomOneOnOne}
              custom={idx}
              viewport={{ amount: 0, once: true }}
              key={idx}
            >
              <div className="relative border bg-slate-100 border-slate-400 rounded-md shadow-md h-full overflow-hidden">
                <div className="relative w-full overflow-hidden group">
                  <Image
                    priority
                    src={experience.photo}
                    alt="news-10"
                    width={1000}
                    height={1000}
                    className="object-cover object-top h-80 md:h-64 lg:h-80 xl:h-64 2xl:h-80 group-hover:scale-105 transition-all duration-300 ease-in-out coursor-pointer"
                  />
                  <div className="h-full absolute inset-0 bg-black bg-opacity-100 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                    <div className="flex flex-col items-center justify-around h-full">
                      <p className="text-xl capitalize font-semibold text-white mb-10">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <span className="absolute text-sm right-2 bottom-2 p-1.5 px-2.5 rounded-sm text-white bg-galaxy_core">
                    {experience.work
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join("-")}
                  </span>
                </div>

                <div className="p-5 pb-16">
                  <div className="capitalize text-gray-800 mb-3">
                    {experience.label}
                  </div>

                  <div className="text-lg capitalize font-semibold mb-2.5">
                    {experience.title}
                  </div>

                  <div className="text-sm font-extralight">
                    {expandedIndex[idx]
                      ? experience.subtitle
                      : `${experience.subtitle.substring(0, 50)}...`}
                  </div>

                  <div className="absolute bottom-5">
                    <button
                      onClick={() => toggleExpanded(idx)}
                      className="capitalize hover:border-b cursor-grab"
                    >
                      {expandedIndex[idx] ? "read less" : "read more"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <ButtonSeeMore showMore={showMore} setShowMore={setShowMore} />
      </div>
    </section>
  );
}
