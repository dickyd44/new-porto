"use client";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/src/constants/portfolio";
import { motion } from "framer-motion";
import { appearsLeft, appearsRight } from "@/src/animation";
import { useState } from "react";
import { RoleText } from "../../atoms/role-text";
import { ButtonSeeMore } from "../../atoms/button-see-more";

export default function PortfolioSection() {
  const [showMore, setShowMore] = useState(false);

  const displayImages = showMore ? IMAGES : IMAGES.slice(0, 4);

  return (
    <section id="portfolio" className="min-h-screen flex items-center">
      <div className="container px-5 md:mx-auto lg:px-10 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={appearsLeft}
          viewport={{ amount: 0, once: true }}
        >
          <RoleText text="latest works" className="mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {displayImages.map((img, idx) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={idx % 2 === 0 ? appearsLeft : appearsRight}
              viewport={{ amount: 0, once: true }}
              key={idx}
              className="overflow-hidden relative group"
            >
              <div className="overflow-hidden p-0 border-0">
                <Link href={img.link} target="_blank">
                  <Image
                    priority
                    src={img.photo}
                    alt="portfolio"
                    width={1000}
                    height={1000}
                    className="h-[390px] 2xl:h-[380px] xl:h-[330px] lg:h-[280px] md:h-[350px] w-full object-cover rounded-sm group-hover:scale-105 transition-all duration-300 ease-in-out coursor-pointer"
                  />
                  <div className="z-0 absolute inset-0 bg-black rounded-sm bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <p className="capitalize text-xl font-semibold text-white mb-3">
                      {img.project}
                    </p>
                    <p className="text-white text-center mx-5 text-sm lg:text-base">
                      {img.description}
                    </p>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ButtonSeeMore */}
        <ButtonSeeMore showMore={showMore} setShowMore={setShowMore} />
      </div>
    </section>
  );
}
