import React from "react";

const Profile = ({ src, alt }) => {
  return <img src={src} alt={alt} className="rounded-full inline w-16 h-16" />;
};

export default Profile;
