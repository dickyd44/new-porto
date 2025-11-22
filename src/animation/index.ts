import { Variants } from "framer-motion";

export const appearsLeft: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.1 },
  },
  hidden: { opacity: 0, x: -100 },
};

export const appearsTop: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 },
  },
  hidden: { opacity: 0, y: -100 },
};

export const appearsBottom: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 },
  },
  hidden: { opacity: 0, y: 100 },
};

export const appearsBottomOneOnOne: Variants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y: 100 },
};

export const appearsRight: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.1 },
  },
  hidden: { opacity: 0, x: 100 },
};

export const appearsRightOneOnOne: Variants = {
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.3 },
  }),
  hidden: { opacity: 0, x: 100 },
};
