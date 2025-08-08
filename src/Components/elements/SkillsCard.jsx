import React from "react";

const SkillsCard = ({ name, image }) => {
  return (
    <div class="w-40 h-40 rounded-xl shadow-lg flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/40 text-white">
      <div class="group overflow-hidden relative flex justify-center items-center w-40 h-40 bg-gradient-to-br from-blue-300/10 via-blue-500/10 to-blue-900/10 rounded-2xl outline outline-blue-300/20 -outline-offset-8 hover:rotate-12 transition-all duration-500 before:absolute before:w-20 before:h-20 before:bg-cyan-400/30 before:rounded-full before:blur-2xl before:top-20 before:right-10 after:absolute after:w-20 after:h-20 after:bg-blue-400/30 after:rounded-full after:blur-2xl after:bottom-20 after:left-10">
        <div class="z-10 flex flex-col items-center gap-1">
          <span class="text-white/70">
            <img src={image} class="w-16 h-16 object-contain" />
          </span>
          <p class="text-lg text-white text-center">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
