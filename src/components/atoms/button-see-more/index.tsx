import { appearsBottom } from "@/src/animation";
import { motion } from "framer-motion";

interface ButtonSeeMoreProps {
  showMore: boolean;
  setShowMore: (value: boolean) => void;
}

export const ButtonSeeMore = ({
  showMore,
  setShowMore,
}: ButtonSeeMoreProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={appearsBottom}
      viewport={{ amount: 0, once: true }}
      className="mt-16 text-center"
    >
      <button
        className="bg-galaxy text-white py-3 px-6 rounded hover:bg-galaxy_core transition duration-300 cursor-grab"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "See Less" : "See More"}
      </button>
    </motion.div>
  );
};
