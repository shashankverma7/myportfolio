import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({ name, image, reverse }) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-10 gap-6 transition-all hover:scale-[1.02]`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={image}
        alt={name}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl"
      />
      <div className="text-left">
        <h5 className="text-xl sm:text-xl font-bold text-slate-800 mb-2">
          {name}
        </h5>
      </div>
    </motion.div>
  );
};

export default GlassCard;
