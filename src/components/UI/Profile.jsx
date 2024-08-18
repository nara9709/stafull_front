import React from "react";

const Profile = ({ src, alt, onClick, text }) => {
  return (
    <div className="flex flex-col w-16">
      <img
        onClick={onClick}
        src={src}
        alt={alt}
        className="rounded-full w-16 h-16 object-cover cursor-pointer"
      />
      {text && <p className="text-center text-sm mt-1">{text}</p>}
    </div>
  );
};

export default Profile;
