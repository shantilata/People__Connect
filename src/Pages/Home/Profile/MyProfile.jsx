import React from "react";
import { useSelector } from "react-redux";
import ProfileView from "./ProfileView";

const MyProfile = () => {
  const user = useSelector((state) => state.auth);
  return <ProfileView user={user} self />;
};

export default MyProfile;
