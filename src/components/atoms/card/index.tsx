"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variants?: any;
  custom?: number;
}

export function Card({ 
  children, 
  className = "", 
  hover = true, 
  variants,
  custom 
}: CardProps) {
  const baseClasses = "bg-white dark:bg-gray-800 rounded-sm shadow-lg transition-all duration-300";
  const hoverClasses = hover ? "hover:shadow-xl hover:scale-[1.02]" : "";

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      custom={custom}
      viewport={{ amount: 0, once: true }}
    >
      {children}
    </motion.div>
  );
}