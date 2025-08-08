import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Master's in Computer Science",
    subtitle: "University of North Texas",
    period: "2023 - 2025",
    details:
      "Focused on software engineering, data structures, and AI research.",
  },
  {
    title: "Bachelor's in Computer Science",
    subtitle: "Dr A.P.J. Abdul Kalam Technical University",
    period: "2014 - 2018",
    details:
      "Graduated with honors, specializing in software development and algorithms.",
  },
];

const workData = [
  {
    title: "Senior Software Developer",
    subtitle: "AIG",
    period: "Jan 2024 - Present",
  },
  {
    title: "Software Developer",
    subtitle: "General Electric",
    period: "Aug 2022 – Jul 2023",
  },
  {
    title: "Software Developer",
    subtitle: "J. C Penny",
    period: "Apr 2021 – Aug 2022",
  },
  {
    title: "Software Developer",
    subtitle: "Citigroup",
    period: "Jun 2019 – Mar 2021",
  },
  {
    title: "Software Engineer",
    subtitle: "Kinara Capital",
    period: "Apr 2017 – May 2019",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export default function Education() {
  return (
    <section className="w-full px-6 py-16 text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            📚 Education & 💼 Work Experience
          </h2>
          <p className="text-gray-800 text-lg">
            A journey of learning and professional growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-purple-800 border-b border-purple-500 pb-2">
              🎓 Education
            </h3>
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20 hover:scale-[1.02] transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-700">
                  {edu.title}
                </h4>
                <p className="italic text-gray-600">{edu.subtitle}</p>
                <p className="text-sm text-purple-600 mb-2">{edu.period}</p>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-600 rounded-full animate-ping"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Work Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-800 border-b border-blue-500 pb-2">
              💼 Work Experience
            </h3>
            {workData.map((work, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20 hover:scale-[1.02] transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-800">
                  {work.title}
                </h4>
                <p className="italic text-gray-600">{work.subtitle}</p>
                <p className="text-sm text-blue-600 mb-2">{work.period}</p>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-600 rounded-full animate-ping"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
