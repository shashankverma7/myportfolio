import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM Coursera",
    date: "Febraury 15, 2025",
    logo: "https://img.icons8.com/ios/50/ibm.png",
    link: "https://coursera.org/share/d1febf91739bee953b0b79479133cf60",
  },
  {
    title: "Introduction to HTML, CSS, and JavaScript",
    issuer: "IBM Coursera",
    date: "Febraury 20, 2025",
    logo: "https://img.icons8.com/ios/50/ibm.png",
    link: "https://coursera.org/share/37959013f79570404a76c600454648c4",
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM Coursera",
    date: "April 13, 2025",
    logo: "https://img.icons8.com/ios/50/ibm.png",
    link: "https://coursera.org/share/03291d1ff65b56167274c65394fd277e",
  },
  {
    title: "Get Started with Cloud Native, DevOps, Agile, and NoSQL",
    issuer: "IBM Coursera",
    date: "May 29, 2025",
    logo: "https://img.icons8.com/ios/50/ibm.png",
    link: "https://coursera.org/share/befd93ac2da43c96d9cd4a78d744fbdb",
  },
  {
    title: "Java 17",
    issuer: "Linkedin",
    date: "April 10, 2024",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/300px-Java_programming_language_logo.svg.png",
    link: "https://www.linkedin.com/learning/certificates/ada6f5df7dbe982f5f276a5211ea8cdf8806004e4856bba801712e8cbe2e5d62?u=74650474",
  },
];

const Certification = () => {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl md:text-3xl font-bold text-center text-black mb-12">
        My Certifications
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-4 shadow-xl border border-white/20
                       hover:shadow-2xl transform-gpu w-52 h-52 flex flex-col items-center justify-between"
            whileHover={{
              rotateX: 10,
              rotateY: 10,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-1 flex items-center justify-center">
              <img
                src={cert.logo}
                alt={cert.title}
                className="max-h-20 object-contain"
              />
            </div>
            <div className="text-center">
              <h2 className="text-sm font-semibold text-white">{cert.title}</h2>
              <p className="text-gray-300 text-xs">{cert.issuer}</p>
              <p className="text-gray-400 text-[10px]">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
