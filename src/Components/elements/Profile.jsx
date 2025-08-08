import React, { useRef } from "react";
import avatarImage from "../../assets/profile_avatar.png";

const Profile = () => {
  return (
    <div className="relative flex items-center justify-center w-72 h-72 md:w-80 md:h-80">
      {/* First oval */}
      <div
        className="absolute animate-oval-spin"
        style={{
          width: "130%",
          height: "60%",
          border: "3px solid rgba(59,130,246,0.7)",
          borderRadius: "50%",
          transform: "rotateX(60deg)",
          boxShadow: "0 0 20px rgba(59,130,246,0.5)",
        }}
      />

      {/* Second oval */}
      <div
        className="absolute animate-oval-spin-reverse"
        style={{
          width: "130%",
          height: "60%",
          border: "3px solid rgba(236,72,153,0.7)",
          borderRadius: "50%",
          transform: "rotateX(60deg) rotateZ(90deg)",
          boxShadow: "0 0 20px rgba(236,72,153,0.5)",
        }}
      />

      {/* Avatar */}
      <img
        src={avatarImage}
        alt="Avatar"
        className="relative z-10 w-80 h-80 object-contain drop-shadow-2xl"
      />
    </div>
  );
};

export default Profile;
