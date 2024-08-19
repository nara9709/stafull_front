import React from "react";

const Profile = ({ src, alt, onClick, text }) => {
  return (
    <div className="inline">
      <div className="flex flex-col w-14 ">
        <img
          onClick={onClick}
          src={src}
          alt={alt}
          className="rounded-full w-14 h-14"
        />
        {text && <p>{text}</p>}
      </div>
    </div>
  );
};

export default Profile;
